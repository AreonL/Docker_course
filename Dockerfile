FROM node:alpine

WORKDIR /filter

COPY ./filter/app.js ./


CMD node app.js
