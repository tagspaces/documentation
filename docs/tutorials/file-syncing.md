---
title: Syncing files between TagSpaces installations
tags: [tutorial]
---

One of the most common questions I receive about TagSpaces, is about the missing files synchronization feature. The concerns of the users are that they spend an hour tagging their files on the laptop, but now they want to get the same results also on their tablet or desktop computer and vice versa. Our opinion here is that TagSpaces does not need sync functionality, because all the tags are saved in the names of the files or in the so called sidecar files, which makes this meta-information extremely portable between devices. You have to just to sync files and this problem is already perfectly solved by some many online services. This is one of the main differences between TagSpaces and other applications offering tagging on files. Most of those applications are using some kind of database to store the tags, which makes the transfer of this information challenging. Besides that, your tagging information in this case is locked by the vendor and you cannot migrate to another application or service without significant effort. Saving the tags in the file names make the information stick to your files, and you can find files based on the tags even with simple search functionality supplied with your operating system.

For the synchronization of the tagged files with TagSpaces, you can use any "cloud" service like [Dropbox](https://dropbox.com) or projects like [Nextcloud](https://nextcloud.com), which provides sync clients. And since there are TagSpaces clients for Windows, macOS and Linux), your tagged files can be synced and used almost everywhere.

Here is a short list of services which can be used for syncing tagged files and folders:

- Dropbox
- Google Drive
- Microsoft One Drive

or other P2P projects like:

- [Syncthink](https://syncthing.net/) - a good tutorial explaining details about the TagSpaces/Synching setup can be found on [Medium](https://attilaorosz.medium.com/syncronise-your-offline-notes-across-all-devices-without-the-cloud-1e82fa53d1f1)
- Bittorentsync/Resilio

E2E Encryption can be achieved with [Cryptomator](https://cryptomator.org/). You can details about how to setup in this [tutorial](/tutorials/e2ee-with-tagspaces-and-cryptomator).

The following image shows my current utilization of Dropbox in connection to TagSpaces.

![Picture showing synching of tagged files with dropbox](/media/tagspaces-dropbox-sync.png)

If you are using TagSpaces with any other sync service, please post a comment bellow. I am always keen to know details on the way you are using TagSpaces.
