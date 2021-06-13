FROM ubuntu:20.04

WORKDIR /user/src/app

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y nodejs
RUN apt-get install -y npm curl wget

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install -g yarn
RUN npm cache clean -f
RUN npm install -g npm@latest
RUN npm install n -g && n latest

COPY . .

RUN yarn

EXPOSE 80

CMD ["yarn","start"]
