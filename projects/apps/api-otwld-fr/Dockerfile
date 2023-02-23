FROM node:16.15.0-alpine3.15

WORKDIR /usr/src/app

COPY ./dist/projects/apps/api-otwld-fr ./

COPY ./projects/apps/api-otwld-fr/docker ./docker

RUN apk add npm supervisor

RUN npm ci

ADD ./projects/apps/api-otwld-fr/docker/supervisord.conf /etc/supervisor/supervisord.conf

RUN chmod 755 docker/start.sh

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]

EXPOSE 80
