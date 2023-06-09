FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
#RUN apk update && apk add -y build-essential gcc autoconf automake zlib1g-dev libpng-dev nasm bash libvips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]