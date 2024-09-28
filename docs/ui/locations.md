---
title: Locations Overview
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Locations

A **location** is a folder on your local file system, serving as a root for listing subfolders, files, and documents. Typical locations could be folders where you collect your photos, store documents, ebooks, or music.

## Location Manager

The **Location Manager** can be opened by clicking the case button (1) from the vertical navigation, or by pressing the _CTRL+1_ key combination. Once opened, you will see a list of the currently configured locations. Here you can open any location by clicking its name. You can add new locations by clicking on the **Connect new location** button (2). This will open the _Connect a Location_ dialog, similar to the [_Edit Location_](#local-locations) dialog. The torch icon (3) indicates the **Startup Location**, which is loaded automatically when the application starts.

Clicking on a location name again will load the subdirectories within that location. These subdirectories will be displayed in the **folder navigation area** (5).

![Location manager](/media/location-manager.png)

Locations with a cloud icon (6) are in an AWS S3-compatible cloud storage. See [Object Storage Locations](#object-storage-locations) for more details.

The location with a light green background (4) is the **currently opened location**. The 3-dot button on the far-right side of each location in the Location Manager opens a **context menu** with the following options:

- **Edit Location**: Opens the [_Edit Location_](#local-locations) dialog to change properties like the location name or path.
- **Open in New Window**: Opens the location in a new window or tab in the web version.
- **Show in File Manager**: Opens the location's folder in your operating system's default file manager (hidden for S3 locations).
- **Duplicate Location**: Creates a copy of the location, useful for duplicating S3 locations with the same credentials.
- **Refresh Location Index**: Manually triggers the indexing process (available only for currently opened locations).
- **Move Up**: Moves the location up in the visual list.
- **Move Down**: Moves the location down in the visual list.
- **Remove Location**: Permanently removes the location from TagSpaces without affecting your files.
- **Close Location**: Closes the location, reverting to the welcome screen.

:::tip
Avoid selecting large directories, such as your _home folder_, as location roots. Large directories can cause performance issues during the creation of the search index. On modern computers with SSD hard drives having a location with 50000 files is usually not a problem. The current upper limit for indexed files in a location is 200000.
:::

### Open Subfolders

You can open a location's subfolders by clicking on the suitcase or cloud icon, depending on the location type.

<CenteredVideo
    caption="Open subfolders of a location"
    src="/media/videos/open-locations-subfolders.mp4"
    posterUrl="/media/videos/open-locations-subfolders.png"
    maxWidth="316px"
    autoPlay
    showCaption
/>

## Location Types

In TagSpaces, locations can be either **local** (on your computer or network) or **cloud-based** (e.g., AWS S3 Object Storage). The type of location is selected during creation.

### Local Locations

Local locations point to a folder on your computer. This could also be a folder synced from Dropbox or connected to a network drive.

![Properties of a location pointing to a local folder](/media/create-local-location.png)

Local locations include the following properties:

- **Location Name**: The display name in the Location Manager.
- **Location Path**: The file path on your computer.
- **Startup Location**: Enable this to load the location automatically at application startup. Only one location can be set as a startup location.
- **Enable full-text search for TXT, MD, and HTML files** <ProFeature />: Indexes the content of text, markdown, and HTML files.
- **Watch for external changes** <ProFeature />: Monitors the folder and its subfolders for external changes (e.g., file creation or deletion).

:::caution
Connecting network drives (e.g., NAS systems) is not recommended due to potential performance issues from network speed and large file counts.
:::

Clicking on `More Properties` reveals additional options:

<CenteredImage
    caption="More properties for local locations"
    src="/media/create-local-locations-extendet.png"
    maxWidth="500px"
/>

Additional options include:

- **Open in Read-Only Mode** <ProFeature />: Restricts the location to read-only access.

- **Disable Thumbnail Generation**: Disables thumbnail generation, useful for cloud locations where downloading content is undesirable. This is disabled by default.
- **Disable Indexing** <ProFeature />: Prevents automatic indexing. Instead, TagSpaces attempts to load a pre-existing index file (`tsi.json`) from the location’s `.ts` folder.
- **Index Validity Duration** <ProFeature />: Set how long the location's [index](/search/#indexing) remains valid.
- **File Tagging Method**: Customize the [file tagging method](/tagging#file-tagging) per location. This setting will overwrite the tagging method from the application [settings](/ui/settings#general).

- **File to be opened on navigation to a folder** - Here you specify a name of the file which will be opened automatically on navigation to any folder in this location. Example files are Readme.md or index.html. This is useful to create a wiki-like user experience for the current location.

- **Ignore Pattern** <ProFeature />: Filter out certain file types or folders from being indexed. This feature uses [ignore-patterns](#ignore-patterns) described bellow.

- **Location ID**: Modify or generate a new location ID. This is useful for [custom location IDs](#custom-location-ids).

### Object Storage Locations

TagSpaces supports object storage from cloud providers like AWS S3, Wasabi, and Minio. These locations allow you to manage files in the cloud without downloading or syncing them. By doing so you get a fully functional file organizer, browser and navigator for this bucket, directly in TagSpaces.

![Edit properties of a cloud location](/media/create-object-storage-location.png)

In addition to the properties of local locations, cloud locations include:

- **Location Name** - the name of the location, which will be visible in the location manager
- **Location Path** - the path in the bucket to which this location points
- **Access Key**: The user’s access key.
- **Secret Access Key**: The user’s secret access key.
- **Session Token**: Used for debugging.
- **Bucket Name**: The name of the cloud storage bucket.
- **Endpoint URL**: The URL of the S3 service.

Clicking `Advanced More` reveals additional settings:

- **Region**: Specifies the AWS region hosting the bucket.

:::caution
"Watch for external changes in this location" is not available for cloud-based locations.
:::

For a detailed guide on connecting AWS S3 locations to TagSpaces, read our [tutorial](/tutorials/s3-bucket-locations).
You can recognize object storage location by the cloud icon in front of their name, as seen in the next screenshot.

<CenteredImage
    caption="Configuration of a location hosted in the Cloud (Wasabi)"
    src="/media/tagspaces-s3-locations.png"
    showCaption
/>

In order to connect such location you will need to know the **bucket name**, the **access key**, the **secret access key** and the **data center location** for the particular bucket. If you have a location with a deep folder structure you can also specify the internal path to the files you want to manage in this location.

:::tip
For detailed instructions on how to connect an AWS S3 location to TagSpaces, read this [tutorial](/tutorials/s3-bucket-locations).
:::

<CenteredImage
    caption="Screenshot of a bucket in AWS S3"
    src="https://www.tagspaces.org/content/v3-x/aws-s3-bucket.png"
    showCaption
  />

TagSpaces provides several additional features over the default AWS UI:

- Direct file previews.
- Direct editing of text-based files (HTML, MD).
- Media streaming (audio/video).
- File thumbnails.
- Tagging and searching.

Using these features, you can create a Dropbox or Evernote replacement with full control over your data.

<CenteredImage
    caption="Software architecture for connecting cloud locations"
    src="https://www.tagspaces.org/content/v3-x/tagspaces-pro-cloud-architecture.png"
    showCaption
/>

### WebDav Locations

This feature is not supported anymore.

## Advanced Features

### Monitor for Changes

<ProFeature />

This feature is useful for network drives or folders synced with services like Dropbox, where changes (e.g.file/folder creations, renames or deletion) occur in the background while TagSpaces is running. When enabled, TagSpaces automatically reflects these changes in its interface.

:::caution
This feature is unavailable for cloud-based locations (e.g., AWS S3).
:::

### Manual Indexing

For locations with many files, manual indexing speeds up loading times by disabling automatic indexing. You can enable this option when creating or editing a location. Instead of indexing, TagSpaces will load a previously generated index file (`tsi.json`). You can create this file manually by selecting **Refresh Location Index** from the context menu.

<CenteredImage
    caption="Starting manual index generation"
    src="/media/tagspaces-manual-indexing.png"
    maxWidth="650px"
    showCaption
/>

### Tag Extraction from Location

The **Collect Tags From Current Location** menu item from the next screenshot, identifies unique tags from a location’s index and adds them to the current tag group.

<CenteredImage
    caption="Starting tag extraction"
    src="/media/tagspaces-tag-extraction.png"
    maxWidth="650px"
    showCaption
/>

:::tip
Make sure to update the location index before using tag extraction by performing a search.
:::

### Ignore Patterns

<ProFeature />

You can configure **ignore patterns** in the advanced area of location properties. This excludes specific files or folders from the search index. Ignored folders are displayed grayed-out in the interface.

<CenteredImage
    caption="Manage ignore patterns in location settings"
    src="/media/location-ignore-patterns.png"
    maxWidth="600px"
    showCaption
/>

<!-- Ignored folders will appear like this:

<CenteredImage
    caption="Ignored folders in the default perspective"
    src="/media/ignored-folders.png"
    showCaption
/> -->

### Set File Tagging Method Per Location

<ProFeature />

Choosing the tagging method for all locations at once is limiting and kind of inconvenient. Some locations contain files which do not have to be [renamed](/tagging/#file-tagging-based-on-filenames) for various reasons and here the [sidecar tagging](/tagging/#file-tagging-with-sidecar-file) was the recommended way. On the other hand, there are locations with files where the renaming of the file is not problematic and is even wanted since it sticks the tags to file more robustly. That's why we have introduced the ability to set the tagging method per location. This setting is available in the advanced area of the location's properties.

<CenteredImage
    caption="Set file tagging method per location"
    src="/media/file-tagging-method-per-location.png"
    maxWidth="600px"
    showCaption
/>

### Export and Import Location Configuration

<ProFeature />

You can export location configurations and share them with others, which is particularly useful for complex cloud configurations. The export can be encrypted to secure credentials.

This features allows you to share with you peers pre-configured locations. This is especially useful for [object storage locations](#object-storage-locations), where the configuration is more complex. Due to the fact the configuration can contains sensitive information like secret access keys for object storage buckets, the app support encryption of the exported file. A standard AES encryption algorithm is used for this feature.

The process of exporting and importing location configuration is demonstrated in the following video.

<VideoYT
youtubeId="LmjUM1BS-wQ"
title="Using file and folder linking functionality in TagSpaces"
posterUrl="/media/videoposters/import-export-locations.jpg"
height={550}
/>

The format of the location's export is described in this [section](/dev/external-config#configuring-custom-locations).

### Custom Location IDs

Locations in TagSpaces have internal identifiers. You can assign custom location IDs to locations in different environments (e.g., between computers) to keep paths consistent. This feature is particularly useful for cloud-based locations with shared folders.

If the locations have the same internal ID on all TagSpaces instances, you will be able to use the [internal sharing](/sharing#internal-sharing-for-files-and-folders) of files and folders with your peers.

:::info
If you create a new location to a folder (e.g. synced with Dropbox or from network share drive), which was already used as a location in TagSpaces, the application will try to find the [location ID](/dev/metafileformats#folder-meta-description-format) and it will use it in this installation .
:::
