from app import app
from db import mysql
from flask import request, jsonify
import jwt
import json

@app.route('/cart', methods=['GET','POST'])
def cart():
	if request.method == 'GET':
		token = request.headers.get('Authorization').replace("Bearer ","")
		print(token)
		payload = jwt.decode(token, app.config.get('JWT_SECRET_KEY'), algorithms=['HS256'])
		auth = payload['sub']

		cur = mysql.cursor(buffered=True)
		cur.execute("SELECT * FROM cart c, product p where c.uid = %s and p.pid = c.pid", (auth['uid'],))
		#cur.execute("SELECT * FROM cart where uid = %s", (auth['uid'],))
		row_headers= [x[0] for x in cur.description]
		rv = cur.fetchall()	
		json_data = []
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		res = json.loads(json.dumps(json_data))
		return jsonify(res)

	elif request.method == 'POST':
		data = request.get_json()
		cur = mysql.cursor(buffered=True)
		cur.execute("SELECT * FROM cart where uid = %s and pid = %s", (data['uid'],data['pid'],))
		if cur.rowcount == 1:
			rv = cur.fetchone()
			quantity = int(rv[2])+int(data['itemQuantity'])
			print(quantity)
			cur.execute("UPDATE cart SET total = %s where uid = %s and pid = %s", (quantity,data['uid'],data['pid'],))
			mysql.commit()
			return "Success"

		cur.execute("INSERT INTO cart (uid, pid, total) VALUES (%s, %s, %s)", (data['uid'], data['pid'], int(data['itemQuantity'])))
		mysql.commit()
		return 'Success'

	return 'Success'

@app.route("/cart-delete", methods=['POST'])
def cart_delete():
	if request.method == 'POST':
		data = request.get_json()
		cur = mysql.cursor(buffered=True)
		cur.execute("DELETE FROM cart where uid = %s and pid = %s", (data['uid'], data['pid'],))
		mysql.commit()
		cur.close()
		return "Success"

	return "Success"