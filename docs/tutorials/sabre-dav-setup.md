---
title: Setup SabreDAV version
---

:::caution
Deprecated functionality: The here described functionality is not supported actively anymore. For a self hosted web version please use [TagSpaces Enterprise](https://www.tagspaces.org/products/enterprise/)
:::

## Introduction

Since a long time, i search for good Option, to save my Notes, Documents and PDF Manuals on my own Server. So far, i used Evernote but as with many other such Services, it comes the day where you think about Security and Privacy. On the other side we get spoiled with the Pleasant for the Users and no one wants live without them. In this respect, the self-hosted Service should have similar features in one form or another.

I have seen various Services for Notes self-hosting, but i found nothing for me, what makes me really happy. With some of them the Installation was really difficult, with others some important features are missing and with the rest of them, the performance on my good old Raspberry Pi2 war horrible.

Then i have found TagSpaces. It looks quite interesting, as far as the feature set is concerned. What at first deterred me, was that there it seems to be no Server Backend. So I wanted to forget TagSpaces, until I noticed that there is probably a server part, even if in some unusual form. On GitHub there is a client that can directly access a WebDAV server, such as NextCloud.

## SabreDAV

I had already tested NextCloud but i wasn't happy with it. Its horrible slow and full with unnecessary functions, so that i moved to SabreDAV, since NextCloud is based on an older Version of SabreDAV.
SabreDAV runs very fast on my Raspberry Pi2, as opposed to NextCloud, as long as you use a MySQL database as the Backend. There are no performance differences when comparing WebDAV from Nginx and SabreDAV. For example, the transfer of a file with 300kb other NextCloud took 14 to 50 seconds. Using the WebDAV module from Nginx, the same file takes 3 - 5 seconds. With SabreDAV it takes also only 3 - 5 seconds.
SabreDAV is set on my Server that it does not use its own authentication, it relies on here with the possibilities of the Webserver. In my case, this is Nginx. The Main Reason for this is that I also use CalDAV and CardDAV over SabreDAV and Windows 10 Client's can only work with the HTTP Basic method. So you specify the following in the corresponding PHP file:

    $authBackend = new \Sabre\DAV\Auth\Backend\Apache();

This Backend is also chosen if you use a different Webserver than Apache. A little further up in the PHP file you define the path to the files, which should be shared via WebDAV. This path can be defined relatively easily for each different user:

    $publicDir = '/path_to/webdav_folder/'.$_SERVER['PHP_AUTH_USER'].'/files';

As shown in the example, the global variable contains \$\_SERVER['PHP_AUTH_USER'] username for the currently logged in User. This allows each user to use his own files. A tip: Sharing would be possible with Symlinks in this case as well.
The complete PHP File could look like the following:

    <?php
    date_default_timezone_set('Europe/Amsterdam');
    $publicDir = '/path_to/webdav/'.$_SERVER['PHP_AUTH_USER'].'/files';
    $tmpDir = '/tmp';

    $baseUri = '/dav/';

    $pdo = new PDO('mysql:dbname=sabredav;host=127.0.0.1', 'mysqlusername', 'secretpassword');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    require_once '../vendor/autoload.php';

    $authBackend = new \Sabre\DAV\Auth\Backend\Apache();

    $nodes = [
        new \Sabre\DAV\FS\Directory($publicDir),
    ];

    $server = new \Sabre\DAV\Server($nodes);
    if (isset($baseUri)) $server->setBaseUri($baseUri);

    $lockBackend = new \Sabre\DAV\Locks\Backend\File($tmpDir . '/locksdb');

    $server->addPlugin(new \Sabre\DAV\Auth\Plugin($authBackend));
    $server->addPlugin(new \Sabre\DAV\Browser\Plugin());
    $server->addPlugin(new \Sabre\DAV\Locks\Plugin($lockBackend));

    $server->exec();

In the same PHP file you can of course add other Backend’s for CalDAV and CardDAV, which I have omitted in this example, because this is all about WebDAV and TagSpaces.

## Nginx

Of course Nginx also needs a small adjustment. I would highly recommend to use WebDAV Sharing only via SSL (free certificates provides for example Let's Encrypt). Additionally we have to adapt the PHP handling for SabreDAV. In my case, I use a corresponding location container for my DAV services. You do not need much, my looks like this:

    location ~ ^/sabredav/ {
            auth_basic "Secured Area";
            auth_basic_user_file /path_to/.htpasswd;

            location ~ ^(.+\.php)(.*)$ {
                try_files $fastcgi_script_name =404;
                fastcgi_split_path_info  ^(.+\.php)(.*)$;
                fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
                fastcgi_param  PATH_INFO $fastcgi_path_info;
                fastcgi_param REMOTE_USER $remote_user;
            }
        }

With the both auth_basic directives I set the small on Notes which appears on the Login Box in the Browser and the path to the hidden file .htpasswd. We will generate this file later. This file contains the credentials for each individual user.
SabreDAV works a lot with path information, so the corresponding lines are enormously important, otherwise SabreDAV does not work as expected. Particularly important is the penultimate line fastcgi_param REMOTE_USER \$ remote_user; At least for me, this was a stumbling block. As you can see, I use PHP7 from the Jessie-Backports. If you still use PHP5, the location container has to be adapted accordingly.

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
