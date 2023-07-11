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

### Download the web version

For getting the free web version of TagSpaces, go to the download [page](https://www.tagspaces.org/downloads/) and click on the `package.zip`.

For the PRO web version, open the purchase confirmation email and download the web version from there.

### Build the image

Download the TagSpaces' `Dockerfile` from [GitHub](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/docker/Dockerfile).

Place the download ZIP of TagSpaces Lite or Pro in the same folder where your TagSpaces' `Dockerfile` is located and run:

    docker build -t tagspaces-lite-web:5.4.2 .

The name `tagspaces-lite-web` after the -t switch can be changed to anything else, for example, if you are building a docker container for the PRO version you can choose `tagspaces-pro-web`. The version number at end should correspond the version of TagSpaces in the ZIP file. It is optional but helps if you have many TagSpaces containers.

### Run the image

Once the container is build you can run it with this command:

    docker run -dp 127.0.0.1:5000:80 tagspaces-lite-web:5.4.2

Where 5000 is the port on your local machine which is forwarded to port 80 of the docker container.

### Add basic auth

    sudo docker cp ./default.conf tagspaces-lite-web:/etc/nginx/conf.d/

### Add TagSpaces custom configuration

    sudo docker cp ./extconfig.js tagspaces-lite-web:/usr/share/nginx/html/

### Installing SSL certificate from Let's encrypt

TBD

### Renew the SSL certificate

TBD
