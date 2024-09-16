---
title: Install TagSpaces Web with Docker
tags: [tutorial]
---

# Using TagSpaces with Docker

Here you will find information about using **TagSpaces Lite Web** and **TagSpaces Pro Web** as Docker containers. The docker container is based on the [Alpine Linux](https://www.alpinelinux.org/) and is using [nginx](https://nginx.org/en/docs/) as web server.

## Get Docker {#getdocker}

Install Docker for your operating system from https://docs.docker.com/get-docker/ .

## Using TagSpaces Lite Web with Docker {#tagspaces-lite-web-docker}

### Get TagSpaces Lite docker image {#tagspaces-image}

You can download the latest available TagSpaces docker image from the [hub.docker.com](https://hub.docker.com/r/tagspaces/tagspaces-lite-web) or from directly from the Docker Desktop app:

![Getting the tagspaces image from Docker Hub](tagspaces-web-docker/getting-tagspaces-image.png)

Here you have to click on the `Pull` button for downloading the image locally.

Alternatively you can use the following command in your terminal:

```
docker pull tagspaces/tagspaces-lite-web
```

### Run the image

Once you have the image locally you can run in Docker Desktop app:

![Run the tagspaces docker image for the first time](tagspaces-web-docker/running-tagspaces-image.png)

These steps will create a local TagSpaces container in your local Docker repository.

Alternatively you use the following command in your terminal:

```
docker run -dp 127.0.0.1:9000:80 tagspaces-lite-web:6.0.0
```

`9000` is the port on your local machine, where the TagSpaces Web app will be accessible.

### Testing in the browser

If everything went well, open your browser click http://localhost:9000 or http://127.0.0.1:9000 and you should see TagSpaces Web in your browser.

![](tagspaces-web-docker/tagspaces-web-first-start.png)

## Using TagSpaces Pro Web with Docker {#tagspaces-pro-web-docker}

### Download TagSpaces Pro Web package

Customer who have bought TagSpaces Pro Wev can download the web package from the links in the purchase confirmation email.

### Unzip the package

Use the program of your choice to unpack the zipped package. Alternatively on Mac and Linux you can use the following command in the terminal.

```
unzip tagspaces-web-pro.zip
```

This will create a folder called `web` in your current folder (e.g. /Users/username/Downloads).

### Creating the container

Get the _tagspaces-lite-web_ docker image as described [here](#tagspaces-image).

For the next step you have to use the Docker Desktop app and create a new container from the tagspaces-lite-web image by clicking run in the image area.

![Run the tagspaces docker image for the first time](tagspaces-web-docker/running-tagspaces-image.png)

### Configuring the container

In the "Run a new container" dialog, you have to open the optional settings and configure the following options:

- **Container name** - The name of the container, should be something like "tagspaces-pro-web".
- **Port** - a port on which the app will be accessible on your computer, should be different from the port selected for the lite version.
- **Volumes**
  - **Host path** - the complete path, where you have unzipped the pro web package (e.g. /Users/username/Downloads/web)
  - **Container path** - should be `/usr/share/nginx/html`

![](tagspaces-web-docker/configuring-pro-container.png)

### Testing in the browser

After running the container and opening [localhost:9100](http://localhost:9100) in your browser, the TagSpaces Pro Web should be loaded.
![](tagspaces-web-docker/tagspaces-pro-web-first-start.png)

## Enable location information to be stored in the browser

By default TagSpaces web do not save the location information in the browser. This is done in order to prevent accidentally leaving the sensitive data for accessing S3 object on an extraneous browsers.

![Adjusting extconfig.js to enable saving in browser's local storage](tagspaces-web-docker/adjust-extconfigjs.png)

Finally restart the container. Now the location configuration will be saved in the browser and will be available after reloading the page with the app.

## Connect various S3 object storages as locations

Both web versions of TagSpaces can connect currently only S3 object storage as location. Luckily there are countless provider for S3 compatible object storage. The following links are pointing to tutorials for connecting TagSpaces with some of these services and products:

- [AWS S3](/tutorials/s3-bucket-locations) - Cloud service
- [Wasabi](/tutorials/tagspaces-web-wasabi) - Cloud service
- [S3Proxy](/tutorials/folders-as-objectstorage-with-s3proxy) - for self hosting
- [Minio](/tutorials/setup-minio-bucket-nas) - for self hosting
- Cloudflace R2 - Cloud service

## Adding basic auth

If you do not want your TagSpaces installation to be accessible from everyone, you have to add an authentication for it. The easiest way is to do so is to configure a basic auth. The next steps will describe how to put the application including the extconfig.js file behind an authentication dialog.

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

![Basic auth dialog in the Chrome browser](tagspaces-web-docker/basic-auth-browser.png)

## Add TagSpaces custom configuration

TagSpaces can be partially configured with an external [configuration file](/dev/external-config). It should be called `extconfig.js` and placed in the root folder of the application.

The configuration file can include your locations or a custom tag library.

The easiest way to add the file to the container is by copying it directly on the right place, with the following command:

```
sudo docker cp ./extconfig.js tagspaces-lite:/usr/share/nginx/html/
```

## Further Options

### Installing self-signed SSL certificate

TBD

### Installing SSL certificate from Let's encrypt

TBD

SSL certificates are needed for your TagSpaces installation and for the object storage service (e.g. Minio, Zenko)

A good tutorial for Ubuntu and Apache is this one: [How to Set up Let's Encrypt on an Intranet Website](https://davidaugustat.com/web/set-up-lets-encrypt-on-intranet-website)

### Renew the SSL certificate

TBD
