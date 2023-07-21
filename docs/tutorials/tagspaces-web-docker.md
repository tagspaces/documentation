---
title: Install with Docker
tags: [tutorial]
---

# Install TagSpaces Web with Docker

Here you will find information about using **TagSpaces Lite Web** and **TagSpaces Pro Web** as Docker containers.

## Get Docker

Install Docker for your operating system: https://docs.docker.com/get-docker/

## Get the TagSpaces Lite Web Image

You can download the latest available TagSpaces Lite docker image from the [hub.docker.com](https://hub.docker.com/r/tagspaces/tagspaces-lite-web) or by the following command:

    docker pull tagspaces/tagspaces-lite-web

## Alternatively: Build Your Own Image

### Download TagSpaces Lite Web

For getting the free web version of TagSpaces, go to the download [page](https://www.tagspaces.org/downloads/) and click on the `package.zip`.

### Download TagSpaces Pro Web

For the PRO web version, open the purchase confirmation email and download the web version from there.

### Build the image

Download the TagSpaces' `Dockerfile` from [GitHub](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/docker/Dockerfile).

Place the download ZIP of TagSpaces Lite or Pro in the same folder where your TagSpaces' `Dockerfile` is located, rename it to `tagspaces-web.zip` and run:

    docker build -t tagspaces-lite-web:5.4.4 .

The name `tagspaces-lite-web` after the -t switch can be changed to anything else, for example, if you are building a docker container for the PRO version you can choose `tagspaces-pro-web`. The version number at the end should correspond the version of TagSpaces in the ZIP file. It is optional but helps if you have many TagSpaces containers.

## Run the Image

Once the container is build you can run it with this command:

    docker run -dp 127.0.0.1:5000:80 tagspaces-lite-web:5.4.4

Where `5000` is the port on your local machine which is forwarded to port `80` of the docker container.

## Test app in your browser

If everything went well, open your browser and enter localhost:5000 in the URL text field and you should see TagSpaces in your browser.

## Add basic auth

The easiest way to secure your TagSpaces installation is to add a basic auth in front of it.

    sudo docker cp ./default.conf tagspaces-lite-web:/etc/nginx/conf.d/

Details on how to prepare the `default.conf` file can be found in the [Nginx documentation](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/)

## Add TagSpaces custom configuration

TagSpaces can be partially configured with an external [configuration file](/dev/external-config). It should be called `extconfig.js` and placed in the root folder of the application.

    sudo docker cp ./extconfig.js tagspaces-lite-web:/usr/share/nginx/html/

## Installing SSL certificate from Let's encrypt

TBD

SSL certificates are needed for your TagSpaces installation and for the object storage service (e.g. Minio, Zenko)

A very good tutorial for Ubuntu and Apache is this one: [How to Set up Let's Encrypt on an Intranet Website](https://davidaugustat.com/web/set-up-lets-encrypt-on-intranet-website)

## Renew the SSL certificate

TBD
