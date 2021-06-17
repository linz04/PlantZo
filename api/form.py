from flask import jsonify, request, redirect, url_for, make_response, render_template
from app import app, bcrypt, jwt
from db import mysql
from flask_jwt_extended import (create_access_token)
import hashlib

@app.route('/api/signup', methods=['POST'])
def signup():
	data = request.get_json()['user']
	email = data['email']
	first_name = data['firstName']
	last_name = data['lastName']
	password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
	cur = mysql.cursor(buffered=True)

	#Memeriksan jika user sudah pernah
	cur.execute("SELECT 1 FROM users WHERE email=%s", (email,))
	if cur.rowcount == 1:
		return "User Already Exist!"
	#Create User
	cur.execute("INSERT INTO users (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)", (first_name, last_name, email, password))

	mysql.commit()
	cur.close()
	print("success")

	result = {
		'display_name' : first_name + " " + last_name,
		'email' : email,
	}
	return jsonify({'result' : result})

@app.route('/api/login', methods=['POST', 'GET'])
def login():
	if request.method == 'POST':
		cur = mysql.cursor(buffered=True)
		data = request.get_json()['user']
		email = data['email']
		password = data['password']
		result = ""
		
		cur.execute("SELECT * FROM users where email = %s", (email,))
		rv = cur.fetchone()
		print(rv)
		try:
			if bcrypt.check_password_hash(rv[4], password):
				access_token = create_access_token(identity = {'uid': rv[0],'email': rv[1],'first_name': rv[2],'last_name': rv[3], 'address': rv[5]})
				result = access_token
				return result
			else:
				result = jsonify({"error":"Invalid username and password"})

			return result


		except:
			result = jsonify({"error":"Invalid username and password"})
			return result