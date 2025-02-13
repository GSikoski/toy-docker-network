FROM node:21-alpine

RUN npm install -g @angular/cli@18.0.0
WORKDIR /code

COPY ui/package.json ui/package-lock.json ./
RUN npm install

COPY ui/ ./

CMD ["sh", "-c", " ng serve --host 0.0.0.0 --port 4200"]

