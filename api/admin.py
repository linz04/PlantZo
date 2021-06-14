from app import app, bcrypt
from db import mysql
from flask import request, redirect, jsonify, render_template
import json
import jwt

@app.route('/admin')
def admin():
	return redirect('/admin/page')

@app.route('/admin/page', methods=['GET'])
def page():
	cur = mysql.connection.cursor()
	cur.execute('''SELECT * FROM product''')
	row_headers=[x[0] for x in cur.description] #this will extract row headers
	rv = cur.fetchall()
	json_data=[]
	for result in rv:
		  json_data.append(dict(zip(row_headers,result)))
	#return json.dumps(json_data)
	return render_template('admin.html', data=json_data)

@app.route('/admin/update/<int:pid>', methods=['POST','GET'])
def update(pid):
	if request.method == 'GET':
		cur = mysql.connection.cursor()
		cur.execute("SELECT * FROM product where pid = %s", (pid,))
		row_headers=[x[0] for x in cur.description] #this will extract row headers
		rv = cur.fetchall()
		json_data=[]
		for result in rv:
			  json_data.append(dict(zip(row_headers,result)))
		#return json.dumps(json_data)
		return render_template('update.html', data=json_data)

	elif request.method == 'POST':
		code = request.form['code']
		name = request.form['name']
		image = request.form['image']
		category = request.form['category']
		price = request.form['price']
		discount = request.form['discount']
		cur = mysql.connection.cursor()
		cur.execute("UPDATE product SET code = %s, name = %s, image = %s, category = %s, price = %s, discount = %s where pid = %s", (code, name, image, category, price, discount, pid,))

		mysql.connection.commit()
		cur.close()
		return '''
		<h1>Success</h1>
		<a href="/admin/page"> Home </a>
		'''
	
@app.route('/admin/add', methods=['POST'])
def add():
	if request.method == 'POST':
		pid = request.form['pid']
		name = request.form['name']
		image = request.form['image']
		rating = request.form['rating']
		price = request.form['price']
		description = request.form['description']
		quantity = request.form['quantity']
		cur = mysql.connection.cursor()

		cur.execute("INSERT INTO product (pid, name, image, price, rating, description, quantity) VALUES (%s, %s, %s, %s, %s, %s, %s)", (pid, name, image, price, rating, description, quantity))

		mysql.connection.commit()
		cur.close()
		print("success")
		return redirect('/admin/page')

@app.route('/admin/delete/<int:pid>')
def delete(pid):
	cur = mysql.connection.cursor()
	cur.execute("SET FOREIGN_KEY_CHECKS = 0")
	cur.execute("DELETE FROM product where pid = %s", (pid,))
	cur.execute("SET FOREIGN_KEY_CHECKS = 1")
	mysql.connection.commit()
	cur.close()
	return '''
	<h1>Success</h1>
	<a href="/admin/page"> Home </a>
	'''