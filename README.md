# kt-docker

Codigo desenvolvido para o KT Docker

api: 
    build: docker build -t api ./api
    run: docker run -p8080:8080 api

db: 
    build: docker build -t db ./db
    run: docker run -p3307:3307 db

front:
    build: docker build -t front ./front
    run: docker run -p80:80 front

compose: docker-compose up