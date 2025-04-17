---
title: Files Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

## File Toolbar

![The toolbar for the files](/media/entrydetails/file-menu.svg)

The file preview toolbar offers several actions, some of which are described below:

- **(1) Properties** - Toggles the [file properties area](#file-properties).
- **(2) File revision** <ProFeature /> - Toggles the area where you can manage the **[revisions](editing-files#file-revisions)** of the current file. This button is shown only on editable files.
- **(3) Download** - If you are running the web version of TagSpaces, this button will start downloading the file. On the desktop versions, the button will open a file save dialog, allowing you to make a copy of it elsewhere on your file system (e.g., your Desktop).
- **(4) Full screen** - Opens the file preview in full screen. You can exit full-screen mode by clicking the `ESC` key on your keyboard or by clicking the round green X-button in the top-right corner of the screen.
- **(5) Full width** - Toggles the file preview to full width by hiding the file browsing areas in the left panel of the app.
- **(6) Navigate to parent folder** - Opens the parent folder of the file in the main area of the application.
- **(7) Open in new window** - Opens the file in a new TagSpaces window or tab in the web version.
- **(8) Open externally** - Opens the current file in the default application of your operating system.
- **(9) Reload** - Reloads the file in the file preview area.
- **(10) Delete** - Opens a dialog where you can confirm the deletion of the file.

## File Properties

Clicking the **( i )** icon button will open and close the file properties area. Here, you will find details about the currently opened file such as:

![Screenshot of the file properties area](/media/entrydetails/file-properties.svg)

- **(1) File Name** - Shows the complete name of the file, including its extension. Clicking the **RENAME** button or just on the file name will allow you to change it.
- **(2) Tags** - Displays the tags added to the file. Clicking on this area will open a dropdown where you can select additional tags to assign to the file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - If the file has an attached [geo-tag](/ui/taglibrary#geo-tagging), a map will be displayed, showing the exact location of the geo-tag. The map server used is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) [Description](#file-description)** <ProFeature /> - Shows the description assigned to the current file. Clicking **EDIT** will turn the description area into an editable box where you can adjust the description. Plain text and [Markdown](/markdown) are supported.
- **(5) Date Modified** - Shows the date and time when the file was last modified.
- **(6) Size** - Displays the size of the current file.
- **(7) Path** - Shows the complete path of the file. If the file is located on an object storage location, a cloud icon instead of a suitcase will appear in front of the path. Clicking the **MOVE** button will open a dialog allowing you to move or copy the file to another folder.
- **(8) Sharing link** - Displays a link for [internal sharing](/sharing#internal-sharing-for-files-and-folders). Clicking **COPY** will copy the link to the clipboard so that you can share the file with other users or TagSpaces installations.
- **(9) Link for downloading** <ProFeature /> - The **GENERATE LINK** button will open a dialog where you can generate a [link or QR-code](/sharing#sharing-download-link-to-a-file) for downloading the file. This section is visible only for files located on S3 storage.
- **(10) Thumbnail** <ProFeature /> - Displays the current thumbnail of the file. Clicking **CHANGE THUMBNAIL** will open a dialog where you can choose a new thumbnail. The application supports adding a custom thumbnail to any file type.

## File Description

<ProFeature />

TagSpaces PRO allows users to add descriptions to files using a sidecar file located in the hidden `.ts` folder within the current folder. This file is named the same as the original file but with `.json` at the end.

```
~ some-folder
├── .ts
│   ├── file5.png.json - contains tags and description for file.png
│   ├── file6.docx.json - contains tags and description for file6.docx
│   └── tsm.json
├── file5.png
└── file6.docx
```

## File Thumbnails

<ProFeature />

TagSpaces can automatically generate thumbnails for many file types, as described [here](/thumbnails). Additionally, the PRO version offers a dialog where you can set a custom thumbnail for any file type, even those unsupported by the automatic [thumbnail generation](/thumbnails).

<CenteredImage
    caption="Dialog for changing the folder thumbnail"
    src="/media/entrydetails/change-folder-thumbnail.avif"
    showCaption
    maxWidth={500}
  />
