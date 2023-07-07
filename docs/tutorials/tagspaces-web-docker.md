---
title: Install with Docker
tags: [tutorial]
---

# Install TagSpaces Web with Docker

:::info
This page is a work in progress
:::

### Get Docker

Install Docker for your operating system: https://docs.docker.com/get-docker/

### Build the image

    docker build -t tagspaces-lite-web .

### Run the image

    docker run -dp 127.0.0.1:5000:80 tagspaces-lite-web

Where 5000 is the port on your local machine which is forwarded to port 80 of the docker container.

### Add basic auth

    sudo docker cp ./default.conf tagspaces-lite-web:/etc/nginx/conf.d/

### Add TagSpaces custom configuration

    sudo docker cp ./extconfig.js tagspaces-lite-web:/usr/share/nginx/html/

### Installing SSL certificate from Let's encrypt

TBD

### Renew the SSL certificate

TBD
