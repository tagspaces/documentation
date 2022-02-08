---
title: Location's Overview
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

A **location** is a folder on your local file system, which will serve as a root for listing sub folders, files and documents. Typical locations are for example the folder where you collect your photos or folders where you store documents, ebooks or music.

The **location manager** is can be opened by clicking the case button (1) from the vertical navigation, or by pressing the _CTRL+1_ key combination. Once opened, you will see a list of the currently configured locations. Here you can open any location by clicking its name. You can add new locations, by clicking on the **Connect new location** button (2). This button will open the _Connect a Location_ dialog, which is very similar to the [_Edit Location_](#local-locations) dialog. The torch icon (3) indicates **Startup Location**, which is the location loaded automatically on the application start.

Clicking second time on a location name, will trigger the loading of the sub directories in this locations, once loaded this folder will be listed in the **folder navigation area** (5)

![Location manager](/media/location-manager.png)

The location with the cloud icon (6) in front of its name is located in the AWS S3 compatible cloud storage. See [object storage locations](#object-storage-locations) for more details.

The location with the light green background color (4) is the **currently opened location**. The 3-dot button located on the most right part of every location in the location manager will open the **context menu** for this location. This menu contains the following menu entries:

- _Edit Location_ - will open the [_Edit Location_](#local-locations) dialog where you can change the location properties such as name or path.
- _Refresh Location Index_ - will trigger the indexing process manually, this menu entry is visible only for the currently opened location
- _Move up_ - will move the location visually up in the location manager
- _Move down_ - will move the location visually down in the location manager
- _Remove location_ - will remove the location permanently from the app. This operation will not affect your files, it only removes its reference in TagSpaces.
- _Show in File Manager_ - will open the path in your file system to which this location point in the default file manager of your operating system
- _Close Location_ - will simply close this location if it is currently opened.

:::tip
Do not choose very large directories such as your _home folder_ as a location root folder, as this may lead to performance issues. The reason for this is that TagSpaces is indexing the whole location every time you open it and the indexing can just take time if the location contains many files. On modern computers with SSD hard drives having a location with up to 60000 files is usually not a problem. The current upper limit for files indexed in a locations is 200000.
:::

### Open sub-folders

You can open the sub-folders of a given location by clicking on the suitcase or the cloud icon depending on the location type.

<CenteredVideo
    caption="Open sub-folders of a location"
    src="/media/videos/open-locations-subfolders.mp4"
    posterUrl="/media/videos/open-locations-subfolders.png"
    maxWidth="316px"
    autoPlay
    showCaption
  />

**Location types**

In TagSpaces there are two type of locations, local and cloud based (e.g. on AWS S3 Object Storage). The type of the location can be selected during its creation.

<!-- You can also select here the default [**perspective**](browsing-files.md#perspectives), used with this location. For example if the  location contains mainly images and photos, you may want to open it with the  [**gallery-perspective**]() , offering a preview of the images and easy navigation through them. -->

## Local Locations

Regular locations are pointing to a folder located on your local computer. This could be also a folder where you sync locally your Dropbox files or a folder from a connected network drive.

![Properties of a location pointing to a local folder](/media/local-location-properties.png)

The regular locations have the following properties:

- _Location name_ - this is the name of location as displayed in the location manager
- _Location path_ - the path from your computer, to which this location points
- _Startup location_ - turning this switch on will make the location load automatically on application start. You can set only one location to be a startup one.
- _Enable full text search for TXT, MD and HTML files_ <ProFeature /> - activates the indexing of the content of text, markdown and HTML files.
- _Watch for external changes in this location_ <ProFeature /> - once switched on TagSpaces will watch the folder to which the location points and all its sub folders for changes and reflect them in the application.

:::caution
Connecting folders located on network drives (e.g. NAS systems) as locations is not recommended. Depending on the speed of your network and the amount of files, the search in such locations can perform poorly!
:::

Clicking on the `Advanced Mode` button will extend the dialog and it will look like this.

![Advanced properties of a location pointing to a local folder](/media/local-location-properties-advanced.png)

The extended dialog will have in addition the following properties:

- _Switch to manual index creation with persisted search index_ <ProFeature /> - disables the automatic indexing of a location on its opening. The application will try to open a previously created index located in a file _tsi.json_ from the _.ts_ folder of the location. This is useful on locations with many files, where the content does not change very often.
- _Open this location in read-only mode_ <ProFeature /> - switches the interface of TagSpaces to read-only mode
- _Index validity duration in minutes_ - validity of the location's [index](/search/#indexing)

## Object Storage Locations

<ProFeature />

With this feature TagSpaces Pro can support object storage offered by different Cloud providers as locations. So you can connect the so called buckets from [AWS S3](https://aws.amazon.com/s3/), [Wasabi](https://www.wasabi.com/) or [Minio](https://min.io/) infrastructure. By doing so you get a fully functional file organizer, browser and navigator for this bucket, directly in TagSpaces. You do not have to download or sync the files from there in order to preview, edit or annotate them.

![Edit properties of a cloud location](/media/edit-cloud-location-dialog.png)

In addition to the regular locations, the cloud locations have the following properties:

- _Location Path_ - the path in the bucket to which this location points
- _Access Key_ - the access key of a user, who has the rights to open this bucket
- _Secret Access Key_ - the secret access key of the user
- _Bucket Name_ - the name of the bucket to which this location points
- _Endpoint URL_ - the url of the S3 service

Clicking the advanced more button will reveal some more properties:

- _Region_ - the AWS region, where the bucket is hosted. The dropdown is located on the right from the bucket name.

:::caution
"Watch for external changes in this location" is disabled because it is not available for cloud locations.
:::

In our tutorial section you can find a [complete manual](/tutorials/s3-bucket-locations.md) on how to create a new AWS S3 bucket and connect it as location in TagSpaces.

You can recognize object storage location by the cloud icon in front of their name, as seen in the next screenshot.

<CenteredImage
    caption="Configuration of a location hosted in the Cloud (Wasabi)"
    src="/media/tagspaces-s3-locations.png"
    showCaption
  />

In order to connect such location you will need to know the **bucket name**, the **access key**, the **secret access key** and the **data center location** for the particular bucket. If you have a location with a deep folder structure you can also specify the internal path to the files you want to manage in this location.

> **Tutorial:** For detailed instructions on how to connect an AWS S3 location to TagSpaces, read this [tutorial](/tutorials/s3-bucket-locations) from the documentation.

<CenteredImage
    caption="Screenshot of a bucket in AWS S3"
    src="https://www.tagspaces.org/content/v3-x/aws-s3-bucket.png"
    showCaption
  />

Comparing to user interfaces provided by AWS visible on the previous screenshot, TagSpaces gives you the following features on top:

- Direct preview of the files
- Direct editing of HTML, MD and other text based files
- Direct streaming of the supported audio and video formats
- Showing thumbnails of the files
- Tagging and Search

Using this feature you are creating basically a Dropbox or an Evernote replacement, where you have the full control on your files and data.

<!-- :::tip
If your bucket contains many files and the initial opening with indexing takes a lot of time you can make use of the enabling the [manual indexing](#manualIndex) for this location.
::: -->

<CenteredImage
    caption="Software architecture for connecting cloud locations"
    src="https://www.tagspaces.org/content/v3-x/tagspaces-pro-cloud-architecture.png"
    showCaption
  />

## Advanced Features

## Monitor for changes

This features is useful, when you have locations placed on a network drive or pointing to a folder synced with for example Dropbox, where changes to these folders happens in background while TagSpaces is running. This can happen if you work collaboratively with someone on a network or your Dropbox syncs files from other devices. In such cases TagSpaces monitors the folder pointed by the location with all its sub-folders for changes, such as **file creations**, **deletions** or **renames** and reflects these changes in the user interface of the app.

<CenteredImage
    caption="Location with activated watcher and enabled manual indexing"
    src="https://www.tagspaces.org/content/v3-x/tagspaces-advanced-location-options.png"
    maxWidth="600px"
    showCaption
  />

This option can be activated manually for every location individually in the location properties dialog, as displayed in the screenshot.

:::caution
This feature is not available on locations pointing to an object storage (e.g. AWS S3, Wasabi, Minio).
:::

## Manual indexing

For locations containing many files, it may make sense to disable the automatic indexing taking place on the opening of this location. You can activate this options for every location individually on its creation or on its properties screen as seen in the previous screenshot. The properties dialog is accessible from the context menu of any location. Enabling this options will speed up the loading of the location, especially on network based locations (W/LAN or S3 object stores). Instead of the indexing, the application will try to load a previously generated index file `tsi.json` located in the root folder of the location.
If you do not have such persisted index file, you can create one manually with the command "Refresh Location Index" from the location context menu, as seen on the following screenshot.

<CenteredImage
    caption="Starting the manual index generation for given location"
    src="/media/tagspaces-manual-indexing.png"
    maxWidth="650px"
    showCaption
  />

## Tag extraction from location

In the content menu of every tag group, there is an entry called "Collect Tags From Current Location", which does exactly this. It analyses the index of the current location and identifies tags with unique names, which are then added to the tag group from which the operation was started.

<CenteredImage
    caption="Starting the tag extraction"
    src="/media/tagspaces-tag-extraction.png"
    maxWidth="650px"
    showCaption
  />

:::tip
Please update the index of the current location before using this feature. This can be done by performing a simple search.
:::

## Ignore patterns for locations

<ProFeature />

This feature is useful if your location has large folders containing many files with which you are not working and would like to be ignored by the application's search function. This is available in the advanced area of the location's properties. Here you have the ability to add and remove ignore patterns for folders.

<CenteredImage
    caption="Manage the ignore pattern in the location settings"
    src="/media/location-ignore-patterns.png"
    maxWidth="600px"
    showCaption
  />

Once a given pattern is added and the location is reloaded, all the matching folders will be displayed grayed-out as visible on the following screenshot.

<CenteredImage
    caption="Ignored folder in the default perspective"
    src="/media/ignored-folders.png"
    showCaption
  />

## Set file tagging method per location

<ProFeature />

Choosing the tagging method for all locations at once is limiting and kind of inconvenient. Some locations contain files which do not have to be [renamed](/tagging/#file-tagging-based-on-filenames) for various reasons and here the [sidecar tagging](/tagging/#file-tagging-with-sidecar-file) was the recommended way. On the other hand, there are locations with files where the renaming of the file is not problematic and is even wanted since it sticks the tags to file more robustly. That's why we have introduced the ability to set the tagging method per location. This setting is available in the advanced area of the location's properties.

<CenteredImage
    caption="Set the file tagging method per location"
    src="/media/file-tagging-method-per-location.png"
    maxWidth="600px"
    showCaption
  />

## Export and import location configuration

<ProFeature />

This features allows you to share with you peers pre-configured locations. This is especially useful for [object storage locations](#object-storage-locations) where the configuration is more complex. Due to the fact the configuration can contains sensitive information like secret access keys for object storage buckets, the app support encryption of the exported file. A standard AES encryption algorithm is used for this feature.

The process of exporting and importing location configuration is demonstrated in the following video.

<VideoYT
youtubeId="LmjUM1BS-wQ"
title="Using file and folder linking functionality in TagSpaces"
posterUrl="/media/videoposters/import-export-locations.jpg"
height={550}
/>

The format of the location's export is described in this [section](/dev/external-config#configuring-custom-locations).

## Custom location IDs

In the advanced settings of the locations you have the possibility to change the internal ID of any given location. This is useful if you are working with someone on a common synced folder (e.g. Dropbox, Syncthing). If the locations have the same internal ID on all TagSpaces instances, you will be able to use the [internal sharing](/sharing#internal-sharing-for-files-and-folders) of files and folders with your peers.
