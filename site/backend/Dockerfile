FROM node:18-alpine

WORKDIR /app/site/backend/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build