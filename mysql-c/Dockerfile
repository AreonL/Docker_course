FROM node:alpine

WORKDIR /filter

COPY ./app.js ./db.js ./

RUN npm i mysql2

ENTRYPOINT ["node"]

CMD ["app.js"]
