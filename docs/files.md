---
title: Files Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

## File Toolbar

![The toolbar for the files](/media/file-toolbar.svg)

The file preview toolbar offer some actions, some of them are described bellow:

- **(1) Properties** - Toggles the [file properties area](#file-properties).
- **(2) File revision** <ProFeature /> - Toggles the are where you can manage the **[revisions](editing-files#file-revisions)** of the current file. This button is shown only on editable files.
- **(3) Download** - If you are running the web version of TagSpaces, this button will start the downloading of the file, on the desktop versions the button will open file save dialog allowing you to make copy of it somewhere else on the file system (e.g. your Desktop)
- **(4) Full screen** - Opens the file preview in full screen. You can leave the full screen mode by clicking the `ESC` key of you keyboard or the by clicking the round green x-button which will appear in the top right corner of the screen.
- **(5) Full width** - Toggles the file preview in the full width of the application windows, by hiding the file browsing and areas in left panel of the app.
- **(6) Navigate to parent folder** - Opens the parent folder of the file the main area of the application.
- **(7) Open in new window** - Will open the file in new TagSpaces window or tab in the web version.
- **(8) Open externally** - Opens the current file in the default application of your operating system.
- **(9) Reload** - Will reload the file in the file preview area.
- **(10) Delete** - Will open a dialog, where you can confirm the deletion of the file.

## File Properties

Clicking the button with the **( i )** icon will open and respectively close the file properties area. Here you will find details about the currently opened files such as:

![Screenshot of the file properties area](/media/file-properties.svg)

- **(1) File Name** - Shows the complete name of the file together with its extension. Clicking the **RENAME** button or just on the file name will allow you to change the name of the file.
- **(2) Tags** - Show the tags added to the file. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - if the file has attached [geo-tag](/ui/taglibrary#geo-tagging), a map will displayed showing the exact location of the geo tag. The used map is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) [Description](#file-description)** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and [markdown](/markdown) are supported.
- **(5) Date Modified** - Shows the date and the time when the file was last modified.
- **(6) Size** - Shows the size of the current file.
- **(7) Path** - Shows the complete path of the file. If the file is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path. Clicking on the **MOVE** button, will open a dialog, where you can move or copy the existing file to another folder.
- **(8) Sharing link** - will show the link for [internal sharing](/sharing#internal-sharing-for-files-and-folders). The **COPY** button will copy the link to the clipboard so you share the file with other users or TagSpaces installations.
- **(9) Link for downloading** <ProFeature /> - The **GENERATE LINK** button will a open a dialog where you can generate a [link or QR-core](/sharing#sharing-download-link-to-a-file) for downloading the file. This section is visible only on files located on S3 locations.
- **(10) Thumbnail** <ProFeature /> - This area shows the current thumbnail of the file. Clicking on the **CHANGE THUMBNAIL** button will open a dialog, where you can choose a new thumbnail for the file. The application supports adding a custom thumbnail to every file type.

## File Description

<ProFeature />

For adding the description to a given file, TagSpaces PRO use the same sidecar file as the one used for the sidecar files. This file is called exactly like the original file but with `.json` at the end in the hidden `.ts` folder of current folder.

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

TagSpaces can generate automatically thumbnails for many file types as described [here](/thumbnails). In addition to that in the PRO version offers a dialog where you can set custom thumbnail for any file type, even for these unsupported by the automatic [thumbnail generation](/thumbnails).

![Dialog for changing the folder thumbnail](/media/change-folder-thumbnail.png)
