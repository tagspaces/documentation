# Syncing files between TagSpaces installations

Using cloudservices like:

* Dropbox (TM)
* Google Drive (TM)
* Microsoft One Drive (TM)


or other P2P projects like

* Syncthink (TM)
* Bittorentsync (TM)

Encrypted:

* Cryptomator

One of the most common questions I receive about TagSpaces, is about the missing files synchronization feature. The concerns of the users are that they spend an hour tagging their files on the laptop, but now they want to get the same results also on their tablet or desktop computer and vice versa. Ok, my opinion here is that TagSpaces does not need sync functionality, because all the tags are saved in the names of the files, which makes this meta-information extremely portable between devices. This is one of the main differences between TagSpaces and other applications offering tagging on files. Most of those applications are using some kind of database to store the tags, which makes the transfer of this information challenging. Besides that, your tagging information in this case is locked by the vendor and you cannot migrate to another application or service without significant effort. Saving the tags in the file names make the information stick to your files, and you can find files based on the tags even with simple search functionality supplied with your operating system.

For the synchronization of the tagged files with TagSpaces, you can use any "cloud" service like <a href="http://dropbox.com" target="_blank">Dropbox</a> or projects like <a href="http://owncloud.org" target="_blank">ownCloud</a>, which provides sync clients. At present, I personally use Dropbox with its native clients on my Ubuntu laptop and the <a href="https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&amp;hl=en">Dropsync</a> app on my Nexus 10 and Nexus 5 devices. This tool combination works perfectly with TagSpaces and the way it preserves tagged information. And since there are TagSpaces clients for many platforms (currently Windows, OS X, Linux, Firefox, Chrome and Android), your tagged files can be synced and used almost everywhere.

The following diagram shows my current utilization of Dropbox in connection to TagSpaces.

![Picture showing synching of tagged files with dropbox](/media/tagspaces-dropbox-sync.png)

If you are using TagSpaces with any other sync service, please post a comment bellow. I am always keen to know details on the way you are using TagSpaces.
