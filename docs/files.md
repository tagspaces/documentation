---
title: Files Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

## File Areas

The in top area of a file you can switch between the following sub-areas:

- **[Details](#file-properties)** - opens the file properties, see more bellow.
- **[Description](#file-description)** - opens the area where you can add description for this file (opened in the screenshot bellow).
- **[Revisions](/editing-files#file-revisions)** - visible only for editable files, display a list of all file changes.
- **[Links](/linking)** - a place where you can see all incoming and outgoing links for this file.

<CenteredImage
    caption="File areas"
    src="/media/entrydetails/file-tabs.png"
    showCaption
    maxWidth="500px"
  />

:::tip
Click on the tab of the currently opened area will close it, making more space for the file preview or file editing area respectively.
:::

## File Menu

<CenteredImage
    caption="File menu"
    src="/media/entrydetails/file-menu.avif"
    showCaption
    maxWidth="600px"
  />

The file preview toolbar offers several actions, some of which are described below:

- **(1) Reload** - Reloads the properties of the file in the file preview area.
- **(2) Download file** - If the file is on a s3 object storage, this button will start downloading process. On local files, the button will open a file save dialog, allowing you to make a copy of the file on your file system.
- **(3) Switch to fullscreen** - Opens the file preview in full screen. You can exit full-screen mode by clicking the `ESC` key on your keyboard or by clicking the round green X-button in the top-right corner of the screen.
- **(4) Toggle full width** - Toggles the file preview to full width by hiding the file browsing areas in the left panel of the app.
- **(5) Delete** - Opens a dialog where you can confirm the deletion of the file.
- **(6) Navigate to parent folder** - Opens the parent folder of the file in the main area of the application.
- **(7) Open in new window** - Opens the file in a new TagSpaces window or tab in the web version.
- **(8) Open file natively** - Opens the current file in the default application of your operating system.
- **(9) Close entry** - Will close the file properties area.

## File Properties

Clicking the **( i )** icon button will open and close the file properties area. Here, you will find details about the currently opened file such as:

<CenteredImage
    caption="File properties area"
    src="/media/entrydetails/file-properties.svg"
    showCaption
    maxWidth="600px"
  />

- **(1) File Name** - Shows the complete name of the file, including its extension. Clicking the `Rename` button or just on the file name will allow you to change it.
- **(2) Tags** - Displays the tags added to the file. Clicking on this area will open a dropdown where you can select additional tags to assign to the file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - If the file has an attached [geo-tag](/ui/taglibrary#geo-tagging), a map will be displayed, showing the exact location of the geo-tag. The map server used is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) Date Modified** - Shows the date and time when the file was last modified.
- **(5) Size** - Displays the size of the current file.
- **(6) Path** - Shows the complete path of the file. If the file is located on an object storage location, a cloud icon instead of a suitcase will appear in front of the path. Clicking the `Move` button will open a dialog allowing you to move or copy the file to another folder.
- **(7) Sharing link** - Displays a link for [internal sharing](/sharing#internal-sharing-for-files-and-folders). Clicking `Copy` will copy the link to the clipboard so that you can share the file with other users or TagSpaces installations.
- **(8) Link for downloading** <ProFeature /> - The `Generate link` button will open a dialog where you can generate a [link or QR-code](/sharing#sharing-download-link-to-a-file) for downloading the file. This section is visible only for files located on S3 storage.
- **(9) Thumbnail** <ProFeature /> - Displays the current thumbnail of the file. Clicking `Change` will open a dialog where you can choose a new thumbnail. The application supports adding a custom thumbnail to any file type.
- **(10) [Entry ID](/linking)** - the file identifier used for internal TagSpaces links.

## File Description

<ProFeature />
TagSpaces PRO allows users to add descriptions to any kind of files.

<CenteredImage
    caption="Description for files"
    src="/media/entrydetails/file-description.avif"
    showCaption
    maxWidth={600}
  />

:::tip
Typing the forward slash `/` will open the context menu visible in the previous screenshot, with which you can insert various text elements supported in the description editor. Pressing `cmd + s` on Mac or `command + s` Windows or Linux PCs will save the changes in the descirptions
:::

## File Thumbnails

<ProFeature />

TagSpaces can automatically generate thumbnails for many file types, as described [here](/thumbnails). Additionally, the PRO version offers a dialog where you can set a custom thumbnail for any file type, even those unsupported by the automatic [thumbnail generation](/thumbnails).

<CenteredImage
    caption="Dialog for changing the file thumbnail"
    src="/media/entrydetails/change-folder-thumbnail.avif"
    showCaption
    maxWidth={500}
  />

:::tip
An image in the clipboard can be used as thumbnail after pasting it in this dialog with `cmd/ctrl+v`
:::

:::info
If the file is on an S3 object storage, the thumbnail will be uploaded there.
:::

## Technical details

The description and tags are added in a [sidecar file](/dev/metafileformats#file-meta-description-format) located in the hidden `.ts` folder within the current folder. This file has the same name as the original file with additional `.json` at the end.

The `.ts` folder contains also the thumbnail images of the files. The thumbnail files have also the same name as original file but with `.jpg` at the end.

For some file format like PDF, the `.ts` folder can have a sidecar file containing the text content of the original file. This files has the same name as original file with additional `.txt` at the end. These files are used for speeding-up the search and for some AI functionalities.

```
~ some-folder
├── .ts
│   ├── file5.png.json - contains tags and description for file.png
│   ├── file5.png.jpg - is the thumbnail image for file5.png
│   ├── file6.pdf.json - contains tags and description for file6.pdf
│   ├── file6.pdf.txt - contains the extracted text content of file6.pdf
│   ├── file6.pdf.jpg - is the thumbnail image for file6.pdf
│   └── tsm.json
├── file5.png
└── file6.pdf
```
