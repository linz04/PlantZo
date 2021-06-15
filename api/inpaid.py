from app import app
from db import mysql
from flask import Flask, flash, request, redirect, url_for, jsonify
import time
import random

@app.route('/state/api/transaction', methods=['POST'])
def inpaid():
	if request.method == 'POST':
		cur = mysql.cursor(buffered=True)
		data = request.get_json()
		uid = data['uid']
		pids = data['pids']
		total = data['checkoutItemsTotal']
		date = (time.strftime('%Y-%m-%d %H:%M:%S'))
		ticket = random.randint(1000000,2000000000)
		for i in range(len(pids)):
			cur.execute("INSERT INTO history (`uid`, `pid`, `total_cost`, `date`, `ticket`) VALUES (%s, %s, %s, %s, %s)", (uid, pids[i], total, date, ticket))
			mysql.commit()

	return jsonify({"transaction_id":ticket, "date":(time.strftime('%Y-%m-%d %H:%M:%S'))})
