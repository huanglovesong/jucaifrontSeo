FROM nginx:1.7.9
WORKDIR /app
EXPOSE 80

COPY nginx.conf /etc/nginx/
COPY . .
RUN rm -rf nginx.conf \
&& rm -rf Dockerfile \
&& rm -rf .gitlab.ci.yml
ENTRYPOINT nginx -g "daemon off;"
