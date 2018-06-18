FROM node:7.6-alpine
RUN mkdir -p /src/appReviews
WORKDIR /src/appReviews
COPY . /src/appReviews
RUN yarn install
EXPOSE 3002
CMD ["npm", "start"]