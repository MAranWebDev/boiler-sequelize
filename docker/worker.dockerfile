## get image
ARG VER_NODE
FROM $VER_NODE

## install dependencies
WORKDIR /usr/src
COPY ./server/package*.json ./
RUN npm i

## env needed for: node path error prevention
ENV PATH=/usr/src/node_modules/.bin:$PATH

## bundle source
WORKDIR /usr/src/app
COPY ./server ./

## fix wsl node_modules and dist permission denied
RUN mkdir -m 775 -p /usr/src/app/node_modules
RUN chown node:node /usr/src/app/node_modules
USER node

## start app
CMD ["npm", "run", "queue:docker"]
