from app import app
import mysql.connector

def MysqlConnection():
	return (mysql.connector.connect(host="mysql", user="root", password="PlantZo@123", auth_plugin='mysql_native_password', database="plantzo"))

mysql = MysqlConnection()