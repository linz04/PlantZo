from flask import jsonify, request, redirect, url_for, make_response, render_template
from app import app, bcrypt, jwt
from db import mysql
from flask_jwt_extended import (create_access_token)

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

@app.route('/api/login', methods=['POST', 'GET'])
def login():
	if request.method == 'POST':
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
			resp = make_response(redirect('http://localhost:3000/shop', code=301))
			resp.set_cookie('auth', result)
			print(result)
			return resp
		else:
			result = jsonify({"error":"Invalid username and password"})
			return result
