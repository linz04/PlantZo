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
		cur.execute("SELECT * FROM cart where uid = %s", (auth['uid'],))
		row_headers= [x[0] for x in cur.description]
		rv = cur.fetchall()
		print(rv)
		json_data = []
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		res = json.loads(json.dumps(json_data))
		return jsonify(res)

	elif request.method == 'POST':
		data = request.get_json()
		cur = mysql.cursor(buffered=True)
		cur.execute("INSERT INTO cart (uid, pid, total) VALUES (%s, %s, %s)", (data['uid'], data['pid'], data['itemQuantity']))
		mysql.commit()
		return 'Success'

	return 'Success'