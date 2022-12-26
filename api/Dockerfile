FROM node:19-alpine as base

WORKDIR /var/www/api

COPY package*.json .

RUN npm install

COPY . .

FROM base as build-dev

CMD [ "npm", "run", "dev" ]

FROM base as build-prod

ENV NODE_PATH=./build

CMD [ "npm", "run", "build" ]
