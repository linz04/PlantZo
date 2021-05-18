from app import app
from db import mysql
from flask import request, redirect, jsonify, render_template
import json
import jwt

@app.route('/admin')
def admin():
	token = request.cookies.get('auth')
	print(token,app.config.get('JWT_SECRET_KEY'))
	payload = jwt.decode(token, app.config.get('JWT_SECRET_KEY'), algorithms=['HS256'])
	auth = payload['sub']
	if auth.get('email') == 'linuzcoba@gmail.com':
		return redirect('/admin/page')
	else:
		return 'Anda bukan admin'


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
		code = request.form['code']
		name = request.form['name']
		image = request.form['image']
		category = request.form['category']
		price = request.form['price']
		discount = request.form['discount']
		cur = mysql.connection.cursor()

		cur.execute("INSERT INTO product (code, name, image, category, price, discount) VALUES (%s, %s, %s, %s, %s, %s)", (code, name, image, category, price, discount))

		mysql.connection.commit()
		cur.close()
		print("success")
		return '''
		<h1>Success</h1>
		<a href="/admin/page"> Home </a>
		'''

@app.route('/admin/delete/<int:pid>')
def delete(pid):
	cur = mysql.connection.cursor()
	cur.execute("DELETE FROM product where pid = %s", (pid,))
	return '''
	<h1>Success</h1>
	<a href="/admin/page"> Home </a>
	'''