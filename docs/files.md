---
title: Files Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

## File Toolbar

The file preview toolbar offer some actions, some of them are described bellow:

- **(3) Properties** - Toggles the [file properties area](/folders#file-properties). This can be achieved also by clicking on the file name or the file extension located on the left of **(1)**
- **(4) Full screen** - Opens the file preview in full screen. You can leave the full screen mode by clicking the ESC key of you keyboard or the by clicking the round green x-button which will appear in the top right corner of the screen.
- **(5) Full width** - Toggles the file preview in the full width of the application windows, by hiding the file browsing and areas in left panel of the app.
- **(6) Open externally** - Opens the current file in the default application of your operating system.
- **(7) Download** - If you are running the web version of TagSpaces, this button will start the downloading of the file, on the desktop versions the button will open file save dialog allowing you to make copy of it somewhere else on the file system (e.g. your Desktop)
- **(8) Reload** - Will reload the file in the file preview area
- **(9) Delete** - Will open a dialog, where you can confirm the deletion of the file.
- **(10) Previous/Next** - With the arrow button located above **(10)** you can open the previous or the next file from the current folder (or search results) in the preview area.

## File Properties

Clicking the button with the **( i )** icon will open and respectively close the file properties area. Here you will find details about the currently opened files such as:

<CenteredImage
    caption="Screenshot of the file properties area"
    src="/media/file-properties-area.png"
    maxWidth="650px"
    showCaption
  />

- **(1) File Name** - Shows the complete name of the file together with its extension. Clicking the **RENAME** button or just on the file name (1) will allow you to change the name of the file.
- **(2) Tags** - Show the tags added to the file. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - if the file has attached geo-tag, a map will displayed showing the exact location of the geo tag. The used map is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) Description** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and Markdown formats are supported.
- **(5) Date Modified** - Shows the date and the time when the file was last modified.
- **(6) Size** - Shows the size of the current file.
- **(7) Path** - Shows the complete path of the file. If the file is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path. Clicking on the **MOVE** button, will open a dialog, where you can move or copy the existing file to a new path.
- **(8) Links for sharing** - will show one or two fields representing links which you can [share](/sharing) files with other users.
- **(9) Thumbnail** <ProFeature /> - This area shows the current thumbnail of the file. Clicking on the **CHANGE THUMBNAIL** button will open a dialog, where can choose a new thumbnail for the file. The application supports adding a custom thumbnail to every file type.

:::tip
The description field of files and folders supports basic [**markdown syntax**](https://en.wikipedia.org/wiki/Markdown).
:::

### File Description

<ProFeature />

For adding the description to a given file, TagSpaces PRO use the same sidecar file as the one used for the sidecar files. This file is called exactly like the original file but with `.json` at the end in the hidden `.ts` folder of current folder.

    ~ some-folder
    ├── .ts
    │   ├── file5.png.json - contains tags and description for file.png
    │   ├── file6.docx.json - contains tags and description for file6.docx
    │   └── tsm.json
    ├── file5.png
    └── file6.docx

### File Thumbnails

TagSpaces can generate automatically thumbnails for many file types as described [here](/thumbnails). In addition to that in the PRO version you can set custom thumbnail for any file type, even for these unsupported by the automatic generation.
