---
title: Folders Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

The folders play an essential role in TagSpaces which goes beyond the typical grouping and organizing files. We have enhanced their functionality by adding tagging, description, custom background, thumbnail, wallpaper and a default perspective. This allow you to turn every folder into so called **file based app**, depending on the files which are stored in it.

## Folder Toolbar

The toolbar for folder can be see in the next screenshot.
![Folder toolbar](/media/folder-toolbar.svg)

The following actions can be accessed from the toolbar:

- **(1) Open in main area** - this will open the folder in the main area of the application, this is useful if you have meanwhile navigated away from the folder opened in the preview area.
- **(2) Open in new window** - opens the folder in a new window or tab on the web version.
- **(3) Open folder externally** - opens the folder in the default file manager of your operating system.
- **(4) Reload folder** - reload the content of the current folder.
- **(5) Open in full width** - opens the folder properties in full width.
- **(6) Delete folder** - opens the folder deletion dialog, where you can delete the current folder with all the files and sub folders there.

## Folder Properties

The folder properties is very similar to the file properties area.

![Folder properties area](/media/folder-properties.svg)

- **(1) Folder Name** - Shows the complete name of the folder. Clicking the **RENAME** button will make the folder name editable so you can change it.
- **(2) [Tags](/tagging#folder-tagging)** - Show the tags added to the folder. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - if the folder was geo-tagged, a map will be displayed, a droppin will show the exact location of the [geo tag](/ui/taglibrary/#geo-tagging). The used map tile server is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) [Description](#folder-description)** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and [Markdown](/markdown) are supported.
- **(5) Date modified** - Show the date and the time when this folder was last modified.
- **(6) Size** - Calculated size of the current folder with the current subfolder. This feature is not available on object storage locations.
- **(7) Path** - Shows the complete path of the folder. If the folder is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path. The **MOVE** button will open a dialog where you can move or copy this folder.
- **(8) Sharing link** - will show the link for [internal sharing](/sharing#internal-sharing-for-files-and-folders). The **COPY** button will copy the link to the clipboard so you share the folder with other users or TagSpaces installations.
- **(9) [Default folder perspective](#default-folder-perspective)** <ProFeature /> - Click on this field will open a dropdown where you can specify the default perspective for this folder.
- **(10) [Folder Background](#folder-background)** <ProFeature /> - Shows the color which is assigned to this folder. Clicking in the color area will open a dialog for changing the color of the folder.
- **(11) [Thumbnail](#folder-thumbnail)** <ProFeature /> - This area shows the current thumbnail of the folder. Clicking on the **CHANGE** button will open a dialog, where can choose a new thumbnail for it.
- **(12) [Wallpaper](#folder-wallpaper)** <ProFeature /> - Here you will a preview of the image which is set a wallpaper for the current folder. Clicking on the **CHANGE** button will open a dialog, where can choose a new wallpaper.

## Folder Description

<ProFeature />

In addition to the tagging you have the ability to annotate every folder with a description. This is useful in particular if you want to add some more textual content to given a file or folder. This description information is managed in the properties area of every entry, and can be opened by clicking on the i-button.

For adding the description to a given folder, the application creates a sidecar file called `tsm.json` in the hidden `.ts` folder of current folder. This is file contains also the tags, the default perspective and other meta information for this folder.

    ~ some-folder
    ├── sub-folder1
    │   ├── .ts
    │   │   └── tsm.json <- contains tags and description for sub-folder1
    │   ├── file1.jpg
    │   └── file2.pdf
    ├── .ts
    │   └── tsm.json <- contains tags and description some-folder
    ├── file3.png
    └── file4.docx

The folder descriptions can be edited by clicking the **EDIT** button or just by double click directly in the description area. The descriptions text can contain [Markdown](https://en.wikipedia.org/wiki/Markdown) allowing you to add basic formatting, [links](/linking) and lists to the content.

The descriptions is indexed by the search algorithm and considered in the search results. If a given file or folder has a descriptions, the first few words from it a displayed in the grid perspective.

## Default Folder Perspective

<ProFeature />

Every folder can have its own default perspective, which can be selected in the folder properties area.

![Selecting default folder perspective](/media/folder-properties-select-perspective.png)

Once you choose a perspective here, every time you open this folder, it will be opened with selected perspective.

## Folder Background

<ProFeature />

With this feature every folder in TagSpaces can have its own background color or gradient. In addition to tagging you can use colors to mark folders utilized for particular use case or area of work. For example you can differentiate your personal folders from your work folders with color or you can mark folders containing sensitive or important information.

![Folder background](/media/folder-background.svg)

On the previous screenshot you can see a preview **(1)** of the background color. Clicking on the preview will open the dialog shown in the screenshot. **(2)** is switch between editor for a color or color gradient. **(3)** show a set of 4 predefined backgrounds and with the button **(4)** the background can be cleared.

The folder background is visible in grid, list and kanban perspective even when folder is shown as subfolder there.

<CenteredImage
    caption="Short video showing how to set color to a folder"
    src="/media/tagspaces-folder-colors.gif"
    showCaption
  />

## Folder Thumbnail

<ProFeature />

In TagSpaces Pro the user can set manually a thumbnail for any file and folder. This can be achieved in a dedicated dialog, where you can choose an image from you hard drive or from the thumbnails embedded in the application. The image we have used there are based on [illlustrations.co](https://illlustrations.co) kit. In this dialog you can also clear the thumbnail for the folder.

:::info
If the folder is on a S3 bucket, then the thumbnail file will be uploaded there.
:::

![Dialog for changing the folder thumbnail](/media/change-folder-thumbnail.png)

<!--iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ZgnRRO1zdGc?rel=0" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe-->

:::tip
Adding a custom thumbnail to any file type, can be achieved in a similar manner from the properties section of the file.
:::

<CenteredImage
    caption="Folder with thumbnail and wallpaper containing sub folders with thumbnails"
    src="/media/folder-with-thumbnail-and-wallpaper.png"
    showCaption
  />

## Folder Wallpaper

<ProFeature />

In the folder properties you can also set a background wallpaper for every folder. This can be done with the help of the dialog visible on the next screenshot.

![Dialog for changing the folder wallpaper](/media/change-folder-wallpaper.png)

Some wallpaper are bundled with the application but can you choose you an image from your hard drive. In this dialog you have also the ability to clear the wallpaper.

:::info
If the folder is on a S3 bucket, then the wallpaper file will be uploaded there.
:::
