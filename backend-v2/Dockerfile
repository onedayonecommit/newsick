FROM node:16 AS builder
RUN mkdir -p /ßvar/app
WORKDIR /var/app
COPY . .
RUN yarn
RUN yarn build
ENV DATABASE_URL="mysql://root:rudghks110@mysql:3306/newsicv2?schema=public"
EXPOSE 3000
CMD ["yarn","start:dev"]