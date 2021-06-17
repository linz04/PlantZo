FROM python:3.8.5

WORKDIR /app

ENV FLASK_APP=api.py

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD ["python","api.py"]
