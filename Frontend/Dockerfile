# pull base image
FROM node:14.16.0
# define working directory
WORKDIR /frontend
# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH
# run update on the image
RUN apt-get update
#updata npm
RUN npm install -g npm
# copy dependencies
COPY package.json package-lock.json /frontend/
# install dependencies from package.json
RUN npm install
# add ap
COPY . /frontend

EXPOSE 3000
