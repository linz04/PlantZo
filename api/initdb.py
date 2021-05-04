import re
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="PlantZo@123",
  auth_plugin='mysql_native_password',
  database="plantzo"
)

def exec_sql_file(sql_file):
	cursor = mydb.cursor()
	print("\n[INFO] Executing SQL script file: '%s'" % (sql_file))
	statement = ""
	for line in open(sql_file):
		if re.match(r'--', line):
			continue
		if not re.search(r';$', line):
			statement = statement + line
		else:
			statement = statement + line
			#print ("[DEBUG] Executing SQL statement:\n%s" % (statement))
			try:
				cursor.execute(statement)
			except (mysql.connector.Error) as e:
				print ("\n[WARN] MySQLError during execute statement \n\tArgs: '%s'" % (str(e.args)))
			statement = ""


if __name__ == '__main__':
	exec_sql_file('plantzo.sql')