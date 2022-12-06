FROM node:14.20.0-alpine3.15

WORKDIR /usr/src/app

COPY ./dist/projects/apps/otwld-fr ./

COPY ./projects/apps/otwld-fr/docker ./docker

RUN apk add npm supervisor

ADD ./projects/apps/otwld-fr/docker/supervisord.conf /etc/supervisor/supervisord.conf

RUN chmod 755 docker/start.sh

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]

EXPOSE 80
