from app import app
from db import mysql
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
import os


UPLOAD_FOLDER = 'upload/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
	return '.' in filename and \
			filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/settings/profile", methods=['POST'])
def edit_profile():
	if request.method == 'POST':
		profile = request.files['profile_image']
		bg = request.files['background_image']
		bg_temp = bg.filename.split(".")
		profile_temp = profile.filename.split(".")
		data = dict(request.form)
		#set profile name as uid.png
		cur = mysql.cursor(buffered=True)
		#cur.execute("SELECT  FROM users WHERE email=%s", (email,))
		print(bg_temp,profile_temp,bg.filename,profile.filename)
		print(data)
		if profile.filename == '' and bg.filename == '':
			return "No Selected File"
		if profile and allowed_file(profile.filename) and bg and allowed_file(bg.filename):
			profilename = secure_filename(profile.filename)
			bgname = secure_filename(bg.filename)
			profile.save(os.path.join(app.config['UPLOAD_FOLDER'], profilename))
			bg.save(os.path.join(app.config['UPLOAD_FOLDER'], bgname))
			print("Success")
			return 'Success'