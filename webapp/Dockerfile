FROM nginx:1.19

ENV NGINX_HTML=/usr/share/nginx/html NGINX_PORT=80

WORKDIR ${NGINX_HTML}

ADD frontend .

EXPOSE ${NGINX_PORT}
