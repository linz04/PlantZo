import json
from app import app
from db import mysql
from flask import jsonify, request
import jwt

@app.route('/shop', methods=['GET'])
def index():
	if request.method == 'GET':
		cur = mysql.cursor(buffered=True)
		cur.execute("SELECT * FROM product")
		row_headers= [x[0] for x in cur.description]
		rv = cur.fetchall()
		json_data = []
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		res = json.loads(json.dumps(json_data))
		return jsonify(res)


@app.route('/shop/<int:pid>', methods=['GET','POST'])
def shop(pid):
	if request.method == 'GET':
		cur = mysql.cursor(buffered=True)
		cur.execute("SELECT * FROM product comment where pid = %s", (pid,))
		row_headers = [x[0] for x in cur.description]
		rv = cur.fetchall()
		json_data = []
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		res = json.loads(json.dumps(json_data))[0]

		cur.execute("SELECT * FROM comment c, users u WHERE c.pid = %s and c.uid = u.uid;", (pid,))
		if cur.rowcount >= 1:
			print("Masuk")
			com_headers = [x[0] for x in cur.description]
			rv = cur.fetchall()
			json_data = []
			for result in rv:
				json_data.append(dict(zip(com_headers,result)))
			com = json.loads(json.dumps(json_data))[0]
			final = ({"Item":res, "Comment":com})
			print(final)
			return jsonify(final)
		else:
			final = ({"Item":res, "Comment":None})
			return jsonify(final)

	elif request.method == 'POST':
		data = request.get_json()['data']
		token = request.cookies.get('auth')
		payload = jwt.decode(token, app.config.get('JWT_SECRET_KEY'), algorithms=['HS256'])
		auth = payload['sub']
		cur = mysql.connection.cursor(buffered=True)
		cur.execute("INSERT INTO cart (uid, pid) VALUES (%s, %s)", (auth['uid'], data['pid']))
		mysql.connection.commit()
		cur.close()
		print("Success Add to Cart")
		return 'Success Add to Cart'