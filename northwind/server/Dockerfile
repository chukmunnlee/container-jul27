# use the node image
FROM node:14

## BUILD
# env variables
# for application
ENV APP_DIR=/app APP_PORT=3000

# for database
ENV DB_USER=root DB_PASSWORD=changeit

# change directory to $APP_DIR
WORKDIR ${APP_DIR}

ADD main.js .
ADD package.json .
ADD package-lock.json .

ADD config config
ADD public public
ADD views views

# install the dependencies
RUN npm install

## RUN
# healthcheck
HEALTHCHECK  --interval=30s --timeout=5s --start-period=10s --retries=3 \
	CMD curl -f -s http://localhost:${APP_PORT}/health || exit 1

# expose
EXPOSE ${APP_PORT}

# run the app
ENTRYPOINT [ "node", "main.js" ]
