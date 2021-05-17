from app import app
from db import mysql
from flask import request
import jwt

@app.route('/admin')
def admin():
	token = request.cookies.get('auth')
	print(token,app.config.get('JWT_SECRET_KEY'))
	payload = jwt.decode(token, app.config.get('JWT_SECRET_KEY'), algorithms=['HS256'])
	auth = payload['sub']
	if auth.get('email') == 'linuzcoba@gmail.com':
		return 'Anda admin'
	else:
		return 'Anda bukan admin'
