FROM node:alpine
WORKDIR /home/node

COPY package*.json /home/node/
RUN yarn install --production

COPY config/ /home/node/config/
COPY src/ /home/node/src/
COPY test/ /home/node/test/

WORKDIR /home/node/src
CMD ["node", "app.js"]
