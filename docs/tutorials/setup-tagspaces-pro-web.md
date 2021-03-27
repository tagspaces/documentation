---
title: Setup TagSpaces Pro Web
---

## Introduction

## Download and unzip

The package can be download from the link available in the email you will receive from our payment provider after purchasing the product.

In a command line mode you can use **wget** utility for example.

Unpack the archive with this command:

```
unzip tagspaces-enterprise-3.x.x.zip
```

The files will be located in `./web` folder.
Change the ownership of all files in the web folder to your www user.

```
chown -R www-user:www-user ./web
```

## Prepare your web server

TagSpaces Pro Web can be installed any modern web server offering static hosting of files like Apache or nginx.

Copy the content of `./web` to a folder which is hosted by your web server e.g. `./www`. So listing this folder should look somerthing like this:

```
~/www $ ls -all
total 1476
    4096 Sep 17 10:29 .
    4096 Jan 15 20:42 ..
    4096 Sep 17 10:29 assets
    4096 Mär  6  2020 dist
   10349 Sep 17 10:29 extconfig.js
    3462 Sep 17 10:29 ibm.html
     582 Sep 17 10:29 ibm.js
    3483 Sep 17 10:29 imp.html
     666 Sep 17 10:29 imp.js
    6038 Sep 17 10:29 index.html
    3462 Sep 17 10:29 int.html
     580 Sep 17 10:29 int.js
    3484 Sep 17 10:29 ipg.html
     624 Sep 17 10:29 ipg.js
    3462 Sep 17 10:29 ipk.html
     585 Sep 17 10:29 ipk.js
   34520 Sep 17 10:29 LICENSE.txt
   51519 Sep 17 10:29 logo.svg
    1004 Sep 17 10:29 manifest.json
    6384 Sep 17 10:29 mobile.html
     695 Sep 17 10:29 mobile.js
    4096 Sep 24  2019 node_modules
    3859 Sep 17 10:29 offline.html
     452 Sep 17 10:29 pwa.js
    2066 Sep 17 10:29 sw-config.js
    1129 Sep 17 10:29 sw.js
 1305364 Sep 16  2019 third-party.txt
```

## Securing the hosted folder with basic auth

.htaccess
.htpasswd

## Configuring the extconfig.js

See more details for the extconfig [here](../dev/ext-)
