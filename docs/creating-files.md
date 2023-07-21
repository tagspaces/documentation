---
title: Create Files
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Create and Importing Files

Besides opening and previewing various file types, TagSpaces can also create new files of some text-based formats. File creation is a functionality that allows TagSpaces to become an effective note-taking application.

## Content creation dialog

To create a new file in TagSpaces you have many options. The easiest one is from the button with plus icon, which almost always visible in the application.

![create new file with the plus button](/media/create-new-plusbutton.svg)

On the desktop version of the app you can click `ÀLT` for showing the **Main Menu** and then choose **New File** from the **File menu**.

![create new file from main menu](/media/create-new-file-menu.png)

This will open the dialog for creation of new content, here you can choose one of the following actions:

- **Create Note** - will create a HTML which can contain rich text content, with _.html_ file extension.
- **Create MarkDown File** - will create a [markdown](https://en.wikipedia.org/wiki/Markdown), with _.md_ file extension.
- **Create Text File** - will create a plain text file, with _.txt_ file extension.

:::info
Pressing `ENTER` in this dialog will create a markdown files, since this is the default action.
:::

![screenshot showing the create new content dialog](/media/tagspaces-create-content-dialog.png)

Expanding the **More Operations** section, will give you access to the following options:

- **New Location** - opens the dialog where you can create new location.
- **New Subfolder** - opens the dialog for creating new folders.
- **Add Files** - will give you the possibility to import a files in the app. See more in the [importing files](#importing-files) section.
- **URL input field and start downloading button** - if you paste a URL in the text field and click the **Start the download** button, the app will try to download the file and save in the current folder.

:::info
Downloading files from URLs mostly works for files shared from object stores, but often fails due to CORS restriction implemented on web sites. As a work around you can use the our **[browser extension](/web-clipper)**.
:::

The field on the top of the file creation dialog, shows the automatically generated file name. The text is preselected, so you can easy change it, to what ever you need. This is especially useful for the Kanban perspective where you create this way new cards. Bellow of this text field you will see the path where this file will be created. The path defaults in most of the cases to the current folder, but when there is no opened location, the dialog will create the file in the root folder of the first location in your location manager.

The file name has the following format _note[20191113~164613].md_ (or .html or .txt). It contains a timestamp tag which format is explained in the next section.

### Timestamp as default tag

When you create a new file in TagSpaces, a time-stamp in the format of `YYYMMDDThhmmss` will be automatically added as a tag, where

- `YYYY` means the current year
- `MM` - the current month
- `DD` - the day
- `T` - is just a delimiter between the date and the time
- `hh` - the hour
- `mm` - the minute
- `ss` - the second

when the file was created. For example a file created on the 17th of January in 2017, at 10:30 (and 32 seconds) would be tagged with timestamp like `20170117T133032`.

Using these timestamp-tags ensures the uniqueness of the automatically generated file name of the file created by the app.

<!-- Such timestamps make it possible to easily group files from different locations based on the time of creation. Of course this would be possible by reading the same information from the file system, but tagging with the timestamp allows for greater flexibility. For example you can change the timestamp to anything you like, while keeping the original creation modification date of the file, and tagging the file will allow you to use TagSpaces's powerful grouping and organizing features in the same place you manage other tags. -->

## Importing files

In TagSpaces files can be imported in many ways. After a successful import the imported file will be copied in the currently opened folder.

### Import from the folder menu

The importing of a file can be initiated also from the folder menu, located in the top right corner of the application.

![screenshot showing how to open the folder menu](/media/tagspaces-open-folder-context-menu.png)

Choose the **Add files** to open the file chooser of your operating system. There you can select which files you want to import.

#### Importing files on mobile devices

On mobile devices, tapping on the **Add files** menu will show a dialog from which can choose various source for files. On the following screenshot from an **Android** operating system, you see the following options:

- Camera - this will open the _Camera app_, where you can take a picture, which can be imported in the current location.
- Camcoder - here you can taka directly a video, which can be imported in the app.
- Voice Recorder - this will start the _Voice Recorded app_, where you can record an audio note to import.
- Files - this will open the _Files app_, where you can select files to import.

Depending on your Android devices and the installed apps, this dialog can look differently and show more or less options.

<CenteredImage
    caption="Importing files on mobile devices"
    src="/media/tagspaces-mobile-import.jpg"
    showCaption
    maxWidth="300px"
  />

On **iOS** you have the options to take a picture with the _Camera app_ or select one or more files from the _Files app_

:::info
If the current folder is located on an object storage like AWS S3, the import functionality will trigger the upload of the selected file to the S3 bucket.
:::

### Import from the create content dialog

In the dialog for creating files on the last place is the _Add files_ action button. The functionality of this button is the same described in the previous section.

### Import with drag and drop from the desktop

Files can be imported also by simple dragging one or more files from your desktop or your default file manager and drop it over the app.

<CenteredVideo
    caption="Importing files with drag and drop from the desktop"
    src="/media/import-files-with-dnd.mp4"
    posterUrl="/media/import-files-with-dnd.jpg"
    maxWidth="100%"
    autoPlay
    showCaption
  />

:::note
If the current folder is located on an object storage like AWS S3, the dropping of the file will trigger its upload to the S3 bucket.
:::
