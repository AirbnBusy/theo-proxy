FROM node:8.9.1

RUN mkdir -p /src/similar-listings

WORKDIR /src/similar-listings

COPY . /src/similar-listings

RUN npm install

EXPOSE 3004

CMD [ "npm", "start" ]
