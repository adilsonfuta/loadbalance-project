FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY ./package.json .

COPY ./server.js .

RUN npm install

CMD ["npm", "start"]