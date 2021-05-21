from app import app
from db import mysql
from flask import request, jsonify
import jwt
import json

@app.route('/cart', methods=['GET','POST'])
def cart():
	if request.method == 'GET':
		token = request.cookies.get('auth')
		payload = jwt.decode(token, app.config.get('JWT_SECRET_KEY'), algorithms=['HS256'])
		auth = payload['sub']

		cur = mysql.connection.cursor()
		cur.execute("SELECT * FROM cart c, product p where c.uid = %s and p.pid = c.pid", (auth['uid'],))
		row_headers= [x[0] for x in cur.description]
		rv = cur.fetchall()
		print(rv)
		json_data = []
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		res = json.loads(json.dumps(json_data))
		return jsonify(res)