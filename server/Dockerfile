FROM node:8.10.0
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

COPY . .

RUN npm install

EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait

CMD /wait && npm start