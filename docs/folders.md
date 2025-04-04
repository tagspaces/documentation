---
title: Folders Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

Folders play an essential role in TagSpaces that goes beyond typical file grouping and organization. We have enhanced their functionality by adding tagging, description, custom background, thumbnail, wallpaper, and a default perspective. This allows you to turn every folder into a so-called **file-based app**, depending on the files stored within it.

## Folder Toolbar

The toolbar for folders can be seen in the following screenshot:
![Folder toolbar](/media/folder-toolbar.svg)

The following actions can be accessed from the toolbar:

- **(1) Open in main area** - Opens the folder in the main area of the application. This is useful if you have navigated away from the folder opened in the preview area.
- **(2) Open in new window** - Opens the folder in a new window or tab in the web version.
- **(3) Open folder externally** - Opens the folder in the default file manager of your operating system.
- **(4) Reload folder** - Reloads the content of the current folder.
- **(5) Open in full width** - Opens the folder properties in full width.
- **(6) Delete folder** - Opens the folder deletion dialog, allowing you to delete the current folder along with its files and subfolders.

## Folder Properties

The folder properties section is similar to the file properties area.

![Folder properties area](/media/folder-properties.svg)

- **(1) Folder Name** - Displays the complete folder name. Clicking the **RENAME** button will make the name editable.
- **(2) [Tags](/tagging#folder-tagging)** - Displays the folder's tags. Clicking on this area opens a dropdown to assign additional tags, or you can drag and drop tags from the tag library or other files and folders.
- **(3) Map with geo-tag** - If geo-tagged, a map with a droppin shows the exact [geo tag](/ui/taglibrary/#geo-tagging). The map tile server is configurable in the [settings](/ui/settings/#advanced).
- **(4) [Description](#folder-description)** <ProFeature /> - Displays the folder description. Clicking **EDIT** allows you to adjust the description using plain text or [Markdown](/markdown).
- **(5) Date modified** - Shows the last modified date and time of the folder.
- **(6) Size** - Displays the calculated size of the folder, including subfolders. This feature is unavailable on object storage locations.
- **(7) Path** - Shows the complete folder path. For object storage locations, a cloud icon is shown instead of a suitcase. Clicking **MOVE** opens a dialog to move or copy the folder.
- **(8) Sharing link** - Shows the internal sharing [link](/sharing#internal-sharing-for-files-and-folders). Clicking **COPY** copies the link to your clipboard for sharing with others or other TagSpaces installations.
- **(9) [Default folder perspective](#default-folder-perspective)** <ProFeature /> - Lets you specify the default perspective for this folder.
- **(10) [Folder Background](#folder-background)** <ProFeature /> - Displays the folder's background color. Clicking the color area opens a dialog to change the folder's color.
- **(11) [Thumbnail](#folder-thumbnail)** <ProFeature /> - Displays the folder's current thumbnail. Clicking **CHANGE** opens a dialog to select a new thumbnail.
- **(12) [Wallpaper](#folder-wallpaper)** <ProFeature /> - Shows a preview of the folder's wallpaper. Clicking **CHANGE** allows you to choose a new wallpaper.

## Folder Description

<ProFeature />

Folders can be annotated with descriptions, useful for adding additional information to files or folders. Descriptions are managed in the a separate tab in the folder' properties area.

The folder descriptions can be edited by clicking the **EDIT** button or by double-clicking directly in the description area. The description text can contain [Markdown](https://en.wikipedia.org/wiki/Markdown), allowing you to add basic formatting, [links](/linking), and lists to the content.

<CenteredImage
    caption="Folder description"
    src="/media/folder-description.avif"
    showCaption
  />

The descriptions are indexed by the search algorithm and considered in search results. If a given file or folder has a description, the first few words from it are displayed in the grid perspective.

Descriptions are saved in a sidecar file called `tsm.json` within the hidden `.ts` folder of the current folder. This file also contains tags, the default perspective, and other metadata.

```bash
  ~ some-folder
  ├── sub-folder1
  │   ├── .ts
  │   │   └── tsm.json - contains tags and description for sub-folder1
  │   ├── file1.jpg
  │   └── file2.pdf
  ├── .ts
  │   └── tsm.json - contains tags and description for some-folder
  ├── file3.png
  └── file4.docx
```

## Default Folder Perspective

<ProFeature />

Every folder can have its own default perspective, which can be selected in the folder properties area.

<CenteredImage
    caption="Folder description"
    src="/media/entrydetails/folder-default-perspective.avif"
    showCaption
  />

Once you choose a perspective, every time you open this folder, it will open with the selected perspective.

## Folder Background

<ProFeature />

With this feature, every folder in TagSpaces can have its own background color or gradient. In addition to tagging, you can use colors to mark folders for particular use cases or areas of work. For example, you can differentiate your personal folders from your work folders using color or mark folders containing sensitive or important information.

![Folder background](/media/folder-background.svg)

In the previous screenshot, you can see a preview **(1)** of the background color. Clicking the preview will open the dialog shown in the screenshot. **(2)** switches between editing a color or a color gradient. **(3)** shows a set of 4 predefined backgrounds, and with button **(4)**, the background can be cleared.

The folder background is visible in grid, list, gallery, and kanban perspectives, even when the folder is shown as a subfolder.

<CenteredImage
    caption="Short video showing how to set color to a folder"
    src="/media/entrydetails/tagspaces-folder-colors.gif"
    showCaption
  />

## Folder Thumbnail

<ProFeature />

In TagSpaces Pro, users can manually set a thumbnail for any file or folder. This can be achieved in a dedicated dialog, where you can choose an image from your hard drive or from thumbnails embedded in the application. The images used here are based on the [illlustrations.co](https://illlustrations.co) kit. In this dialog, you can also clear the folder's thumbnail.

:::info
If the folder is on an S3 bucket, the selected thumbnail file will be uploaded there.
:::

<CenteredImage
    caption="Dialog for changing the folder thumbnail"
    src="/media/entrydetails/change-folder-thumbnail.avif"
    showCaption
    maxWidth={500}
  />

:::tip
An image in the clipboard can be used as thumbnail after pasting it in this dialog with `cmd/ctrl+v`
:::

Adding a custom thumbnail to any file type can be achieved similarly from the file's properties section.

## Folder Background Imagee

<ProFeature />
Folders can have background images (wallpapers) in TagSpaces Pro. The background images are supported in the Grid, List, Gallery and Kanban [perspectives](/browsing-files).

<CenteredImage
    caption="Folder with thumbnail and wallpaper in grid perspective"
    src="/media/grid/folder-with-background-image.jpg"
    showCaption
  />

The background image can be changed in the folder properties, where you can open the dialog for changing the wallpapers.

<CenteredImage
    caption="Dialog for changing the folder wallpaper"
    src="/media/entrydetails/change-folder-background.avif"
    showCaption
  />

:::tip
An image in the clipboard can be used as background for a folder after pasting it in this dialog with `cmd/ctrl+v`
:::

Some wallpapers are bundled with the application, but you can also choose an image from your hard drive. In the dialog, you also can also clear any previously selected wallpapers.

:::info
If the folder is on an S3 bucket, the wallpaper file will be uploaded there.
:::
