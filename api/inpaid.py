from app import app
import string
import random

@app.route('/inpaid')
def inpaid():
	def generate(size=12, chars=string.ascii_letters + string.digits):
		return ''.join(random.choice(chars) for _ in range(size))

	code = generate()
	return code
