FROM node:lts-alpine3.9 as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:1.19.1-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html