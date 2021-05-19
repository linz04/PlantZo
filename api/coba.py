import json
from app import app
from db import mysql
from flask import jsonify

@app.route('/test')
def test():
	return '123'