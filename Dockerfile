FROM node:18 AS build

WORKDIR /usr/src/build

COPY . .

RUN npm install

RUN npm rebuild node-sass

RUN npm run build


FROM node:18 AS app

WORKDIR /usr/src/app

RUN npm install -g http-server

COPY --from=build /usr/src/build/dist .
COPY --from=build /usr/src/build/fonts ./fonts

CMD [ "http-server", "-p80" ]