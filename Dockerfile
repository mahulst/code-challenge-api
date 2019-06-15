FROM node:alpine


RUN mkdir -p /home/app
RUN chown node:node /home/app

USER node

WORKDIR /home/app

COPY . /home/app

RUN npm install

ENTRYPOINT npm run start
