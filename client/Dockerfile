FROM node:lts-alpine

ENV TZ="America/Caracas"

COPY package*.json ./
RUN npm i

WORKDIR '/var/www/app'


COPY . .

EXPOSE 4200
