---
title: Create Files
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

Besides opening and previewing various file types, TagSpaces can also create new files of some text-based formats. File creation is a functionality that allows TagSpaces to become an effective note-taking application.

To create a new file in TagSpaces you have many options. The easiest one is from the button with plus icon, which almost always visible in the application.

![create new file with the plus button](/media/create-new-plusbutton.png)

On the desktop version of the app you can also use the _File menu_ from the _Main menu_. If the main menu is not visible you can open it by pressing the ALT keyboard key.

![create new file from main menu](/media/create-new-file-menu.png)

The triggering of the file creation action will open a _Create new content_ dialog, where you can choose one of the following actions:

<!-- where you can adjust the file name of the file, which will be create in area (1). In are (2) you can enter the text context of the file, you can copy and paste plain text, markdown or even HTML content here. This area could be left also empty allowing you enter content later. In a area (3) you should specify the type of the text content. Currently the following file formats are supported:

In the last section (4), you can specify where the file should be create. The initial path here is taken automatically from the currently opened folder.
-->

- **Create Note** - will create a HTML which can contain rich text content, with _.html_ file extension.
- **Create MarkDown File** - will create a [markdown](https://en.wikipedia.org/wiki/Markdown), with _.md_ file extension.
- **Create Text File** - will create a plain text file, with _.txt_ file extension.
- **Add File** - will give you the possibility to import a single file in the app. See more in the [importing files](#importing-files) section.

![screenshot showing the create new content dialog](/media/tagspaces-create-content-dialog.png)

The name of the create files will be _note[20191113~164613].md_ (or .html or .txt). Learn more for the timestamp tag in next section.

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

:::note
<ProFeature /> If the current folder is located on an object storage like AWS S3, the import functionality will trigger the upload of the selected file to the S3 bucket.
:::

### Import from the create content dialog

In the [dialog](#) for creating files on the last place is the _Add files_ action button. The functionality of this button is the same described in the previous section.

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
<ProFeature /> If the current folder is located on an object storage like AWS S3, the dropping of the file will trigger its upload to the S3 bucket.
:::
