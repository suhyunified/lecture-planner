# Build react application
FROM node:16-alpine AS builder
WORKDIR /usr/src/app

COPY ./ /usr/src/app/
RUN yarn install && yarn build

# Serve react application with nginx
FROM nginx:1.23.1 AS runner

RUN rm -rf /etc/nginx/conf.d
COPY .infra/nginx/conf /etc/nginx

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
