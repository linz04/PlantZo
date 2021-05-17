from app import app
from flask_mysqldb import MySQL

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'PlantZo@123'
app.config['MYSQL_DB'] = 'plantzo'


mysql = MySQL(app)