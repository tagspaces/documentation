---
title: Install TagSpaces Web with Docker
tags: [tutorial]
---

# Using TagSpaces with Docker

Here you will find information about using **TagSpaces Lite Web** and **TagSpaces Pro Web** as Docker containers. The docker container is based on the [Alpine Linux](https://www.alpinelinux.org/) and is using [nginx](https://nginx.org/en/docs/) as web server.

## Get Docker {#getdocker}

Install Docker for your operating system from https://docs.docker.com/get-docker/ .

## Get TagSpaces Lite docker image {#tagspacesimage}

You can download the latest available TagSpaces docker image from the [hub.docker.com](https://hub.docker.com/r/tagspaces/tagspaces-lite-web) or from directly from the Docker Desktop app:

![Getting the tagspaces image from Docker Hub](tagspaces-web-docker/getting-tagspaces-image.png)

Here you have to click on the `Pull` button for downloading the image locally.

Alternatively you can use the following command in your terminal:

```
docker pull tagspaces/tagspaces-lite-web
```

## Run the image

Once you have the image locally you can run in Docker Desktop app:

![Run the tagspaces docker image for the first time](tagspaces-web-docker/running-tagspaces-image.png)

These steps will create a local TagSpaces container in your local Docker repository.

Alternatively you use the following command in your terminal:

```
docker run -dp 127.0.0.1:9000:80 tagspaces-lite-web:6.0.0
```

`9000` is the port on your local machine, where the TagSpaces Web app will be accessible.

## Testing in the browser

If everything went well, open your browser click http://localhost:9000 or http://127.0.0.1:9000 and you should see TagSpaces Web in your browser.

![](tagspaces-web-docker/tagspaces-web-first-start.png)

## Enable location information to be stored in the browser

By default TagSpaces web do not save the location information in the browser. This is done in order to prevent accidentally leaving the sensitive data for accessing S3 object on an extraneous browser.

![Adjusting extconfig.js to enable saving in browser's local storage](tagspaces-web-docker/adjust-extconfigjs.png)

Finally restart the container. Now the location configuration will be saved in the browser and will be available after reloading the page with the app.

## Adding basic auth

If you do not want your TagSpaces installation to be accessible from everyone, you have to secure it. The easiest way is to add a basic auth in front of it. The next steps will put the application including the extconfig.js file behind an authentication dialog.

:::warning
Making the [configuration file (extconfig.js)](/dev/external-config) inaccessible for unauthorized access is crucial, if it is used for storing access keys for connecting to location on S3 object storage.
:::

The following steps are based on the official [Nginx documentation](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/). There you can also learn how restrict the access be IP address.

### Create a password file

Verify that apache2-utils (Debian, Ubuntu) or httpd-tools (RHEL/CentOS/Oracle Linux) is installed.

Create a password file and a first user:

```
sudo htpasswd -c .htpasswd user1
```

Create additional user-password pairs. Omit the -c flag because the file already exists.

```
sudo htpasswd .htpasswd user2
```

### Copy the password file to container

```
sudo docker cp .htpasswd tagspaces-lite:/etc/nginx/
```

### Modify the nginx configuration file

Add the following lines to the section server in the nginx configuration file in the Docker container.

```
auth_basic   "TagSpaces Web";
auth_basic_user_file    .htpasswd;
```

The file is located here: /etc/nginx/conf.d/default.conf

![Adding basic auth to nginx](tagspaces-web-docker/adding-auth-nginx.png)

### Restart the container

After saving the changes, restarting the container and reloading the application in the browser an authentication dialog will be displayed. Here you can log-in with the credentials created in the previous steps.

![Basic auth dialog in the Chrome browser](tagspaces-web-docker//basic-auth-browser.png)

## Using TagSpaces Pro with Docker {#tagspacesProWebDocker}

### Add TagSpaces custom configuration

TagSpaces can be partially configured with an external [configuration file](/dev/external-config). It should be called `extconfig.js` and placed in the root folder of the application.

```
sudo docker cp ./extconfig.js tagspaces-lite:/usr/share/nginx/html/
```

## Further Options

### Connecting various S3 object storages as locations

- [AWS S3](/tutorials/s3-bucket-locations)
- [Wasabi](/tutorials/tagspaces-web-wasabi)
- [S3Proxy](/tutorials/folders-as-objectstorage-with-s3proxy)
- [Minio](/tutorials/setup-minio-bucket-nas)

### Installing self-signed SSL certificate

TBD

### Installing SSL certificate from Let's encrypt

TBD

SSL certificates are needed for your TagSpaces installation and for the object storage service (e.g. Minio, Zenko)

A good tutorial for Ubuntu and Apache is this one: [How to Set up Let's Encrypt on an Intranet Website](https://davidaugustat.com/web/set-up-lets-encrypt-on-intranet-website)

### Renew the SSL certificate

TBD

<!--
## Alternatively: Build Your Own Image

### Download TagSpaces Lite Web

For getting the free web version of TagSpaces, go to the download [page](https://www.tagspaces.org/downloads/) and click on the `package.zip`.

### Download TagSpaces Pro Web

For the PRO web version, open the purchase confirmation email and download the web version from there.

### Build the image

Download the TagSpaces' `Dockerfile` from [GitHub](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/docker/Dockerfile).

Place the download ZIP of TagSpaces Lite or Pro in the same folder where your TagSpaces' `Dockerfile` is located, rename it to `tagspaces-web.zip` and run:

```
docker build -t tagspaces-lite-web:5.4.4 .
```

The name `tagspaces-lite-web` after the -t switch can be changed to anything else, for example, if you are building a docker container for the PRO version you can choose `tagspaces-pro-web`. The version number at the end should correspond the version of TagSpaces in the ZIP file. It is optional but helps if you have many TagSpaces containers.
-->
