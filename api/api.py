import time
import json

from flask import Flask, render_template, request, jsonify, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)
app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'linz'
app.config['MYSQL_PASSWORD'] = 'Password'
app.config['MYSQL_DB'] = 'plantzo'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()['user']
    email = data['email']
    first_name = data['firstName']
    last_name = data['lastName']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    cur = mysql.connection.cursor()

    cur.execute("SELECT 1 FROM users WHERE email=%s", (email,))
    if cur.rowcount == 1:
        return "User Already Exist!"

    cur.execute("INSERT INTO users (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)", (first_name, last_name, email, password))

    mysql.connection.commit()
    cur.close()
    print("success")

    result = {
        'first_name' : first_name,
        'last_name' : last_name,
        'email' : email,
        'password' : password,
    }
    return jsonify({'result' : result})

@app.route('/api/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    data = request.get_json()['user']
    email = data['email']
    password = data['password']
    result = ""
    
    cur.execute("SELECT * FROM users where email = %s", (email,))
    rv = cur.fetchone()
    
    if bcrypt.check_password_hash(rv[3], password):
        access_token = create_access_token(identity = {'first_name': rv[0],'last_name': rv[1],'email': rv[2]})
        result = access_token
        print("Success Login! , Token", result)
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result

@app.route('/shop/<int:pid>')
def shop(pid):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM product where pid = %s", (pid,))
    row_headers= [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    res = json.loads(json.dumps(json_data))[0]
    return res

if __name__ == '__main__':
    app.run(debug=True)