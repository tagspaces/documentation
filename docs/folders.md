---
title: Folders Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

## Folder Toolbar

## Folder Properties

The folder properties is very similar to the file properties area.

<CenteredImage
    caption="Folder properties area"
    src="/media/folder-properties.svg"
    maxWidth="650px"
    showCaption
  />

- **(1) Folder Name** - Shows the complete name of the folder. Clicking the **RENAME** button will switch the area to edit box, where you can change the name of the folder.
- **(2) Tags** - Show the tags added to the folder. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - (not on the screnshot) if the file has attached geo-tag, a map will displayed showing the exact location of the geo tag (see [file properties](/ui/userinterface#file-properties-area)). The used map is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) Description** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and Markdown formats are supported.
- **(5) Date modified** - Show the date and the time when this folder was last modified.
- **(6) Size** - Calculated size of the current folder with the current subfolder. This feature is not available on object storage locations.
- **(7) Path** - Shows the complete path of the folder. If the folder is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path.
- **(8) Sharing link** - will show one or two fields representing links which you can [share](/sharing) files with other users.
- **(9) Default perspective for this folder** <ProFeature /> - Click on this field will open a dropdown where you can specify the default perspective for this folder.
- **(10) Folder Background** <ProFeature /> - Shows the color which is assigned to this folder. Clicking in the color area will open a dialog for changing the color of the folder. Click [here](/annotations/#custom-folder-color) for a short video demonstration the functionality.
- **(11) Thumbnail** <ProFeature /> - This area shows the current thumbnail of the folder. Clicking on the **CHANGE** button will open a dialog, where can choose a new thumbnail for it.
- **(12) Wallpaper** <ProFeature /> -

## Folder Description

In addition to the tagging, in the TagSpaces PRO you have the ability to annotate every folder with a description. This is useful in particular if you want to add some more textual content to given a file or folder. This description information is managed in the properties area of every entry, and can be opened by clicking on the i-button.

For adding the description to a given folder, TagSpaces PRO creates a sidecar file called `tsm.json` in the hidden `.ts` folder of current folder. This is file contains also the tags for this specific folder.

    ~ some-folder
    ├── sub-folder1
    │   ├── .ts
    │   │   └── tsm.json - contains tags and description for sub-folder1
    │   ├── file1.jpg
    │   └── file2.pdf
    ├── .ts
    │   └── tsm.json - contains tags and description some-folder
    ├── file3.png
    └── file4.docx

The file and folder descriptions which is marked with **(2)** on the previous screenshot, can be edited by clicking the edit button or just clicking directly on the description area. The descriptions text can contain [Markdown](https://en.wikipedia.org/wiki/Markdown) allowing you to add basic formatting, links and lists to the content.

The descriptions is indexed by the search algorithm and considered in the search results. If a given file or folder has a descriptions, the first few words from it a displayed in the grid perspective, as marked with **(3)** on the previous screenshot.

## Folder Default Perspective

Every folder can have its own default perspective, which can be selected in the folder properties area.

![Selecting default folder perspective](/media/folder-properties-select-perspective.png)

Once you choose a perspective here, every time you open this folder, it will be opened with selected perspective.

## Folder Thumbnail

<ProFeature />

In TagSpaces Pro the user can manually set and change the thumbnail of **any file type and folder**. The following video show how to set a custom image as a thumbnail of a folder.

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ZgnRRO1zdGc?rel=0" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>

Adding a custom thumbnail to any file type, can be achieved in a similar manner from the properties section of the file.

## Folder Background Color

<ProFeature />

With this feature every folder opened in TagSpaces can have its own background color. In addition to tagging you can use colors to mark folders used for particular use case or area of work. For example you can differentiate your personal folders from your work folders with color or you can mark folders containing sensitive or important information.

<CenteredImage
    caption="Short video showing how to set color to a folder"
    src="/media/tagspaces-folder-colors.gif"
    showCaption
  />

## Folder Wallpaper

<ProFeature />

TBD
