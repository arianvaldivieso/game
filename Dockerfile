FROM node:lts-alpine
 
COPY package*.json ./
RUN npm i
   
WORKDIR '/var/www/app'
 
 
COPY . .
 
EXPOSE 3000