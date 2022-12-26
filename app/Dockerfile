FROM node:19-alpine as base

WORKDIR /var/www/app

COPY package*.json .

RUN npm install

COPY . .

FROM base as build-dev

EXPOSE 80

CMD [ "npm", "run", "start" ]

FROM base as builder

RUN npm run build

FROM nginx:alpine as build-prod

WORKDIR /usr/share/nginx/html

RUN rm -rf *

# TODO : create nginx.conf file
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /var/www/app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
