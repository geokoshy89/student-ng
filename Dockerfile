FROM alpine
WORKDIR /usr/src/student-ng
COPY . .
RUN apk add nodejs
RUN apk add nodejs-npm
RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT ["npm","start"]
