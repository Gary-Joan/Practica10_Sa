FROM node:12
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install
EXPOSE 3010
CMD [ "npm", "start" ]