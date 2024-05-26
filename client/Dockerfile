FROM node:lts-buster-slim AS development


WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

CMD ["npm", "run", "dev"]

