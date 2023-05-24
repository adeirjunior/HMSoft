FROM node:16
RUN npm install -g yarn --force

WORKDIR /usr/src/hms

COPY . .
COPY ./.env.production ./.env

RUN yarn
RUN yarn build

EXPOSE 3001

CMD [ "yarn", "start:prod" ]