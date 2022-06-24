FROM node:17-slim

RUN apt-get update \
  && apt-get install -y build-essential graphicsmagick imagemagick vim sudo

WORKDIR /meme-generator/

COPY package.json package-lock.json /meme-generator/

RUN npm ci --silent

COPY . .

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

USER docker

CMD npm run live-reload