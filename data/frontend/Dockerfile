FROM node:18-alpine

WORKDIR /app/data/frontend/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

