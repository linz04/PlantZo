import json
from app import app
from db import mysql
from flask import jsonify

@app.route('/shop/<int:pid>')
def shop(pid):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM product where pid = %s", (pid,))
    row_headers= [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    res = json.loads(json.dumps(json_data))[0]
    return jsonify(res)