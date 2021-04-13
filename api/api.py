import time

from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'linz'
app.config['MYSQL_PASSWORD'] = 'Password'
app.config['MYSQL_DB'] = 'plantzo'

mysql = MySQL(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()['user']
    email = data['email']
    first_name = data['firstName']
    last_name = data['lastName']
    password = data['password']
    cur = mysql.connection.cursor()
    print("INSERT INTO users (first_name, last_name, email, password) VALUES ('" + 
    str(first_name) + "', '" + 
    str(last_name) + "', '" + 
    str(email) + "', '" + 
    str(password) + "')")

    cur.execute("INSERT INTO users (first_name, last_name, email, password) VALUES ('" + 
        str(first_name) + "', '" + 
        str(last_name) + "', '" + 
        str(email) + "', '" + 
        str(password) + "')")

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

    