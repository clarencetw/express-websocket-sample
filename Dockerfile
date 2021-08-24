FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
