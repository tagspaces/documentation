---
title: Setup TagSpaces Web (deprecated)
---

## User Management

Now we have to create the htpasswd file or add Credentials to it if if the file already exists. I use apache-utils from Raspbian (Debian), but there are other ways to generate the credentials. Since it is a pure text file, the editing is not too difficult. With the apache-utils you create a new file with the first user as follows:

    htpasswd -c /path_to/.htpasswd username

The program then asks twice for the password to be used and then stores the record in the file. If you want to change an already existing users or add a new user, leave the parameter -c simply away. If you want to delete a user, use the -d switch.

Now its time to Reload the Webserver: systemctl reload nginx

You should now be able to log in to the WebDAV URL with a browser. If this works, you have access to your shared Files. Make sure that all files belong to the Webserver-User. On Debian / Ubuntu this should be www-data. Otherwise, you may not be able to access your files for reading or writing.

## TagSpaces

Let's go to TagSpaces. The installation is extremely simple. Change your path to the root directory of your Webserver. Now simply download the archive:

    wget  https://github.com/tagspaces/tagspaces/releases/download/v2.7.0/tagspaces-2.7.0-web.zip

Now its time to extract the Archive:

    unzip tagspaces-2.7.0-web.zip

This creates a subdirectory "tagspaces" with all the necessary files. With the Browser, you can now access the TagSpaces directory. There will be no password query, because the server knows nothing about it yet.

## Nginx again

You have to take care that not everyone can access your notes. We must now protect this directory with a password. Reopen your Nginx configuration file and add a location container for the TagSpaces directory. For me, this looks something like this:

    location /tagspaces {
            auth_basic "Secured Area";
            auth_basic_user_file /path_to/.htpasswd;
        }

As you can see, I use the same auth_basic variables as with the SabreDAV location. I use the same Credential File. Since these Credentials are already entered, its enough to save the changes to the Nginx Config and reload the Server: systemctl reload nginx

Now please close the browser Window so that the session ends locally. If you reopen the Browser with the URL of TagSpaces, the browser asks for the WebDAV Credentials. Enter the Credentials for WebDAV. Now you can access TagSpaces and add a new Location. In my case this is a subdirectory of the WebDAV Share. In my case sabredav/files/Notes. If you enter this Location, TagSpaces will nit ask again for Credentials since you have already established a corresponding session. From now on, you can manage your notes online via TagSpaces.

If you want, there are TagSpaces Clients for the Desktop or your Mobile Devices. Thanks to WebDAV Protocol, the files can be synchronized with any program. On Android, I use FolderSync, at Windows you can have the WebDAV share directly connected as a drive (there also exist special sync clients) and with Linux, a WebDAV Share can be seamlessly integrated into your directory structure.
