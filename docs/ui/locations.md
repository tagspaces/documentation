---
title: Locations
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

A **location** is a folder on your local file system, which will serve as a root for listing sub folders, files and documents. Typical locations are for example the folder where you collect your photos or folders where you store documents, ebooks or music.

:::tip
Do not choose very large directories such as your _home folder_ as a location root folder, as this may lead to performance issues. The reason for this is that TagSpaces is indexing the whole location every time you open it and the indexing can just take time if the location contains many files. On modern computers with SSD hard drives having a location with up to 60000 files is usually not a problem. The current upper limit for files indexed in a locations is 200000.
:::

The **location manager** is can be opened by clicking the case button (1) from the vertical navigation, or by pressing the _CTRL+1_ key combination. Once opened, you will see a list of the currently configured locations. Here you can open any location by clicking its name. You can add new locations, by clicking on the **Connect new location** button (2). This button will open the _Connect a Location_ dialog, which is very similar to the [_Edit Location_](#regular-locations) dialog. The torch icon (3) indicates **Startup Location**, which is the location loaded automatically on the application start.

Clicking second time on a location name, will trigger the loading of the sub directories in this locations, once loaded this folder will be listed in the **folder navigation area** (5)

![Location manager](/media/location-manager.png)

The location with the cloud icon (6) in front of its name is located in the AWS S3 compatible cloud storage. See [cloud locations](#cloud-locations) for more details.

The location with the light green background color (4) is the **currently opened location**. The 3-dot button located on the most right part of every location in the location manager will open the **context menu** for this location. This menu contains the following menu entries:

- _Edit Location_ - will open the [_Edit Location_](#regular-locations) dialog where you can change the location properties such as name or path.
- _Refresh Location Index_ - will trigger the indexing process manually, this menu entry is visible only for the currently opened location
- _Move up_ - will move the location visually up in the location manager
- _Move down_ - will move the location visually down in the location manager
- _Remove location_ - will remove the location permanently from the app. This operation will not affect your files, it only removes its reference in TagSpaces.
- _Show in File Manager_ - will open the path in your file system to which this location point in the default file manager of your operating system
- _Close Location_ - will simply close this location if it is currently opened.

## Location types

In TagSpaces there two type of locations, regular (local) and cloud based (AWS S3 Object Storage). The type can be selected in the create and edit location dialogs.

<!-- You can also select here the default [**perspective**](browsing-files.md#perspectives), used with this location. For example if the  location contains mainly images and photos, you may want to open it with the  [**gallery-perspective**]() , offering a preview of the images and easy navigation through them. -->

## Regular Locations

Regular locations are pointing to a folder located on your local computer. This could be also a folder where you sync locally your Dropbox files or a folder from a connected network drive.

:::caution
Be careful with connected huge folder located on network drive, depending on the speed of the network, this could lead to performance issues.
:::

![Properties of a location pointing to a local folder](/media/local-location-properties.png)

The regular locations have the following properties:

- _Location name_ - this is the name of location as displayed in the location manager
- _Location path_ - the path from your computer, to which this location points
- _Startup location_ - turning this switch on will make the location load automatically on application start. You can set only one location to be a startup one.
- _Enable full text search for TXT, MD and HTML files_ <ProFeature /> - activates the indexing of the content of text, markdown and HTML files.
- _Watch for external changes in this location_ <ProFeature /> - once switched on TagSpaces will watch the folder to which the location points and all its sub folders for changes and reflect them in the application.

Clicking on the `Advanced Mode` button will extend the dialog and it will look like this.

![Advanced properties of a location pointing to a local folder](/media/local-location-properties-advanced.png)

The extended dialog will have in addition the following properties:

- _Switch to manual index creation with persisted search index_ <ProFeature /> - disables the automatic indexing of a location on its opening. The application will try to open a previously created index located in a file _tsi.json_ from the _.ts_ folder of the location. This is useful on locations with many files, where the content does not change very often.
- _Open this location in read-only mode_ <ProFeature /> - switches the interface of TagSpaces to read-only mode

## Cloud Locations

<ProFeature />

These location are pointing to AWS S3 compatible stores (also known as buckets) located in the Internet.

![Edit properties of a cloud location](/media/edit-cloud-location-dialog.png)

In addition to the regular locations, the cloud locations have the following properties:

- _Location Path_ - the path in the bucket to which this location points
- _Access Key_ - the access key of a user, who has the rights to open this bucket
- _Secret Access Key_ - the secret access key of the user
- _Bucket Name_ - the name of the bucket to which this location points
- _Region_ - the AWS region, where the bucket is hosted. The dropdown is located on the right from the bucket name.

:::caution
"Watch for external changes in this location" is disabled because it is not available for cloud locations.
:::

In our tutorial section you can find a [complete manual](/tutorials/s3-bucket-locations.md) on how to create a new AWS S3 bucket and connect it as location in TagSpaces.

## Object storages as locations

With this feature TagSpaces PRO is going into direction of supporting the Cloud as file storage. In general it enables you to creating a location pointing to a remote object storages or buckets on [AWS S3](https://aws.amazon.com/s3/), [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/) or [Minio](https://min.io/) infrastructure. By doing this you get a fully functional file organizer, browser and navigator for this bucket, directly in TagSpaces. You don't have to download separately and eventually to upload them back in order to preview, edit or annotate them.

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

### Monitor for changes in locations

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

### Manual indexing

For locations containing many files, it may make sense to disable the automatic indexing taking place on the opening of this location. You can activate this options for every location individually on its creation or on its properties screen as seen in the previous screenshot. The properties dialog is accessible from the context menu of any location. Enabling this options will speed up the loading of the location, especially on network based locations (W/LAN or S3 object stores). Instead of the indexing, the application will try to load a previously generated index file `tsi.json` located in the root folder of the location.
If you do not have such persisted index file, you can create one manually with the command "Refresh Location Index" from the location context menu, as seen on the following screenshot.

<CenteredImage
    caption="Starting the manual index generation for given location"
    src="/media/tagspaces-manual-indexing.png"
    maxWidth="650px"
    showCaption
  />

### Tag extraction from location

<ProFeature />

In the content menu of every tag group in the PRO version, there is an entry called "Collect Tags From Current Location", which does exactly this. It analyses the index of the current location and identifies tags with unique names, which are then added to the tag group from which the operation was started.

<CenteredImage
    caption="Starting the tag extraction"
    src="/media/tagspaces-tag-extraction.png"
    maxWidth="650px"
    showCaption
  />

### Custom location IDs

Work in progress

### Export and Import location's configuration

<ProFeature />

<VideoYT
youtubeId="LmjUM1BS-wQ"
title="Using file and folder linking functionality in TagSpaces"
posterUrl="/media/videoposters/import-export-locations.jpg"
height={550}
/>
