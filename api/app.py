from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
<<<<<<< HEAD
=======

>>>>>>> 0626cb75eb4ed6df61be3cb55387677701626a0c


app = Flask(__name__)
bcrypt = Bcrypt(app)

app.config['JWT_SECRET_KEY'] = 'secret'
<<<<<<< HEAD
jwt = JWTManager(app)
=======
jwt = JWTManager(app)
>>>>>>> 0626cb75eb4ed6df61be3cb55387677701626a0c
