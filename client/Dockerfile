FROM node:14-slim

WORKDIR /user/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install -g npm@7.16.0
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm","start"]