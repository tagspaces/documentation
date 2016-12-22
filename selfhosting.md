# Selfhosting TagSpaces

## Motivation
Almost since the very first releases of TagSpaces back in the 2013, many users did requested a server based version of TagSpaces. They wanted to use the convinient tagging workflow of TagSpaces on their self hosted ownCloud or in general WebDAV instances. So starting from today this is possible, TagSpaces can now run on servers and once installed you can access your files from anywhere.

## Installation
In order to test the hosted version you need a working WebDAV server. The current release was tested with success on [ownCloud](http://owncloud.org) which is based itself on the [sabre/dav](http://sabre.io) WebDAV server. On Ubuntu my installation steps are the following:

- Install Apache
- [Install ownCloud](http://owncloud.org/install) or any other WebDAV server
- Unzip the hosted version of TagSpaces somewhere in the www root folder of Apache. Currently the TagSpaces should be on the same host/ip and using the same port as the WebDAV server. This is so because of the XSS prevention build in the modern internet browsers.
- Assuming ownCloud is installed in `/var/www/owncloud` and TagSpaces in `/var/www/tagspaces` you have to type something like this in your terminal:

```
cd /var/www
sudo chmod -R 755 tagspaces
sudo chown -R your_www_group:your_www_user tagspaces
```
- Open your browser and enter: `127.0.0.1/tagspaces`. The TagSpaces UI should be loaded.
- Create a new location with the following path: `/owncloud/remote.php/webdav`
- Give a name to your location and save.
- A dialog for credentials entering will appear. Enter here your ownCloud username and password.
- That's all, you can now browse your ownCloud files in TagSpaces.

<img src="https://www.tagspaces.org/content/v1.8/tagspaces-webdav-edition.png" alt="screenshot of tagspaces showing the hosted edition" class="img-thumbnail img-responsive" />

- It is interesting to mention that you can open also your ownCloud contacts by creating a location with a path like `/owncloud/remote.php/carddav/addressbooks/ilian/contacts`. This does not make currently much sense, because you only see a list with VCF files, but who knows perhaps somebody will write a contacts perspective and VCF viewer for TagSpaces some day.

## Download
The current version can of the WebDAV version can be downloaded from [here](https://www.tagspaces.org/downloads/tagspaces-web.zip). Please note, that current status of the implementation is a technology preview, which is not suitable for production site on the Internet

## Sharing links to files from the webdav version
tbd