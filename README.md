# kt-docker

Codigo desenvolvido para o KT Docker

api: 
    build: docker build -t api ./api
    run: docker run -p8080:8080 api
    upload: 
        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $REPOSITORY_URL
        docker tag api $REPOSITORY_URL/kt-docker-api
        docker push $REPOSITORY_URL/kt-docker-api

db: 
    build: docker build -t db ./db
    run: docker run -p3307:3306 db
    upload: 
        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $REPOSITORY_URL
        docker tag db $REPOSITORY_URL/kt-docker-db
        docker push $REPOSITORY_URL/kt-docker-db

front:
    build: docker build -t front ./front
    run: docker run -p80:80 front
    upload: 
        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $REPOSITORY_URL
        docker tag front $REPOSITORY_URL/kt-docker-front
        docker push $REPOSITORY_URL/kt-docker-front

compose: docker-compose up