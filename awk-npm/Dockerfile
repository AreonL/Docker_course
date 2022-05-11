FROM node:alpine

WORKDIR /filter

COPY ./app.js ./

RUN npm install awkjs

ENTRYPOINT ["node"]

CMD ["app.js"]