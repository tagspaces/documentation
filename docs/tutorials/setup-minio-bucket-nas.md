---
title: Minio buckets hosted NAS ⚒
---

This article will guide through the setting up of a self hosted object storage based on MinIO for Synalogy and QNAP based NAS systems. Then we will show you how to setup the TagSpaces PRO Web on a web server and connect it to the MinIO server.

## Setup Minio on QNAP NAS

> Work in progress

The easies way to run it is with the container app, which run Docker in background.

Make sure Minio docker is started automatically after restarting of your NAS system

## Setup Minio on Synology NAS

> Work in progress, should be similar to setting up the QNAP NAS

### Check if Minio is installed correctly

Open a web browser and navigate to the URL where the MinIO is hosted.

![MinIO's login screen](tagspaces-web-nas/minio-login-screen.png)

And after login it should like this:

![Listing folders in MinIO](tagspaces-web-nas/minio-listing-folders.png)

## Configure TagSpaces Pro

Create new cloud location by clicking the **Connect a location** button. In the dialog select **Object Storage** radio box and click **advanced mode** button on the bottom of this dialog. Here you will need to enter the following information:

- Location name - free text allowing you later to recognize the location in the location manager
- Location path - should be left empty, it is currently not supported by TagSpaces for MinIO connections
- Access key - here you should enter the access key MinIO user
- Secret access key - here is the place for the secret access key of the user
- Bucket name - here you should name of one of the subfolder in main folder hosted by MinIO (see the previous screenshot)
- Endpoint URL - the url with with the port where you MinIO instance is running
- Location ID - is automatically generated but can be changed to another unique id if needed, you should not leave it empty.

![Setup minio location in TagSpaces](tagspaces-web-nas/create-minio-locations.png)

Once you have configured the location and saved the changes, TagSpaces should connect to it list the files in it.

![Listing minio location in TagSpaces](tagspaces-web-nas/tagspaces-listing-minio-bucket.png)
