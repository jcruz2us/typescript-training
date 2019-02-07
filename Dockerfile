FROM node:10.14.1-alpine

WORKDIR /app


COPY . /app
RUN npm install

CMD npm run-script start
