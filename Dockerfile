FROM node:lts-alpine

ENV TZ="America/Caracas" 

COPY package*.json ./
RUN npm i
RUN npm install -g sequelize-cli
   
WORKDIR '/var/www/app'
 
 
COPY . .
 
EXPOSE 3000