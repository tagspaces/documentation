---
title: Grid Perspective
sidebar_label: Grid Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

This perspective is optimized for general browsing through file and folder structures while supporting common file management operations such as tagging, renaming, deleting, copying, and moving files and folders.

The default view in TagSpaces presents content in a grid, making it the most common way of displaying folders.

![screenshot of the default perspective of the app](/media/grid/grid-perspective-toolbar.svg)

:::info
The colored rectangle shows the area in TagSpaces typically occupied by **[perspectives](/browsing-files)**.
:::

### File Tile

Each tile in the grid represents the following information:

- **(1)**: Displays tags added to the file.
- **(2)**: Shows file description, if available.
- **(3)**: Displays the file title (filename without extension or tags).
- **(4)**: Shows the file extension, color-coded based on settings in the [File types tab](/ui/settings#file-types).
- **(5)**: Indicates the last modified date of the file.
- **(6)**: Shows the file size, hovering over it reveals the size in bytes.
- **(7)**: Indicates file selection (with a green border).
- **(8)**: Displays a file thumbnail, if available.
- **(9)**: Highlights a [geo-tag](/ui/taglibrary/#geo-tagging) with a special icon.

![A tile of a file](/media/grid/file-tile.svg)

:::info
<ProFeature /> Adding descriptions and geo-tags to a file is a feature available in the Pro versions of the app.
:::

### Folder Tile

Similar to file tiles, folder tiles display the following:

- **(1)**: Shows tags added to the folder.
- **(2)**: Displays the folder description, if available.
- **(3)**: Shows the folder name and, if set, the [custom color](/ui/userinterface#folder-properties-area).
- **(4)**: Displays a folder icon (instead of a file extension).
- **(5)**: Displays a folder thumbnail, if available.
- **(6)**: Shows selection status for the folder.

![A tile representing a folder](/media/grid/folder-tile.svg)

:::info
<ProFeature /> Adding descriptions and thumbnails for folders is a feature available in the Pro versions of the app.
:::

### Selecting Files

Files can be selected by holding the `CTRL` / `CMD` key and clicking on them. To select a range, hold `SHIFT`, click on the first file (_file 1_), then click on the second file (_file 2_). This selects all files between _file 1_ and _file 2_.

To select or deselect all files, use the first button in the perspective's toolbar or press `CTRL+A` / `CMD+A`.

![Folder with selected files and subfolders](/media/grid/folder-with-selected-entries.png)

## Perspective Toolbar

The toolbar at the top of the perspective contains the following buttons and sub-menus:

- **(1) Open parent folder** - Navigates to the parent folder of the current folder, if within the current location. This action can also be achieved by pressing the **BACKSPACE** key.
- **(2) Toggle File Selection** - Selects or deselects all files and folders in the perspective.
- **(3) Open Folder Properties** - Opens the folder properties.
- **(4) Add/Remove Tags** - Manages tags on selected files, applicable to multiple files simultaneously. Learn more in the [Tagging -> Tagging using context menus](/tagging#tag-operations-on-many-entries) section.
- **(5) Copy/Move Entries** - Opens the **Move or Copy Entries** dialog to specify the target directory for moving or copying files.

<CenteredImage
    caption="The dialog for moving or copying files and folders"
    src="/media/copy-move-files-dialog.png"
    showCaption
    maxWidth={598}
/>

- **(6) Delete Files** - Opens a dialog to confirm the deletion of selected files.
- **(7) Sort Files** - Opens a menu to sort files by the following options:

  - **Title** - Sorts alphabetically by name.
  - **Size** - Sorts by file size.
  - **Date Modified** - Sorts by last modified date.
  - **First Tag** - Sorts alphabetically by the first tag.
  - **File Ext.** - Sorts alphabetically by file extension.
  - **Random** - Sorts files randomly, useful when using TagSpaces as a music player for random audio track playback.

  :::tip
  Clicking a sorting option twice reverses the sort order. For random sorting, this regenerates a new random order.
  :::

  :::info
  Sort order is preserved when navigating to a new folder.
  :::

- **(8) Export as CSV** - Feature is described [below](#export-files-as-csv).
- **(9) Open Perspective Settings** - Opens the perspective settings dialog, described [below](#perspective-settings).

## File Context Menu

Right-clicking a file opens the context menu with options for file management.

![The context menu of a file](/media/grid/file-context-menu.png)

- **Open File** - Splits the main area of TagSpaces, opening the file in the right pane. Learn more in the [Viewing Files](/viewing-files) section.
- **Open Parent Folder** - Useful in search results to open the parent folder of a selected file.
- **Open File Natively** - Opens the file in the default external application.
- **Show in File Manager** - Opens the file in your operating system’s default file manager.
- **Add/Remove Tags** - Opens a dialog to manage tags for the file.
- **Rename File** - Opens a file renaming dialog.
- **Duplicate File** - Creates a copy of the file, with tags for "copy" and timestamp (e.g., "20210831T1230").
- **Move/Copy File** - Opens the move/copy dialog.
- **Use as Thumbnail for the Current Folder** - Sets the file’s thumbnail as the folder thumbnail.
- **Delete File** - Opens a deletion confirmation dialog.
- **Copy Sharing Link** - Copies an internal sharing link for the file to your clipboard.

## Folder Context Menu

Right-clicking a folder opens its context menu for folder management.

![The context menu of a folder](/media/grid/folder-context-menu.png)

- **Open Folder** - Navigates to the selected directory.
- **Open in New Window** - Opens the folder in a new TagSpaces window or tab (web version).
- **Rename Folder** - Opens the folder renaming dialog.
- **Move/Copy Folder** - Opens the dialog to move or copy the folder.
- **Delete Folder** - Opens a deletion confirmation dialog.
- **Show in File Manager** - Opens the directory in the default file manager.
- **Use as Thumbnail for Parent Folder** - Sets the folder’s thumbnail as the parent folder thumbnail.
- **Copy Sharing Link** - Copies a link for internal sharing or linking.
- **Add/Remove Tags** - Opens the dialog to manage folder tags.
- **Folder Properties** - Opens the folder properties in the preview area.

## Perspective Settings

Adjust the grid perspective settings in the dialog below.

<CenteredImage
    caption="Settings of the Grid Perspective"
    src="/media/grid/grid-perspective-settings.png"
    showCaption
    maxWidth={407}
/>

### Settings Options

- **Show Folders** - Toggles folder visibility.
- **Show Tags on Files and Folders** - Shows/hides tags as small colored circles.
- **Show Descriptions for Files and Folders** - Shows/hides descriptions.
- **Show Folder Details** - Shows/hides folder details.
- **Toggle Thumbnail Modes** - Switches between "cover" and "contain" modes for thumbnails. "Cover" may crop thumbnails, while "contain" shows the entire image with possible transparent bars.
- **Sort** - Choose default sorting for the perspective.
- **Compact Mode** - Condenses display mode with reduced space for file/folder representation.
- **Default Mode** - Standard display mode.
- **Large Mode** - Enlarges file/folder representation.
- **Single Click Opens File Internally** - Opens files in the application with a single click.
- **Single Click Opens File Externally** - Opens files in an external application with a single click.
- **Single Click Selects Only** - Selects the file without opening it.

:::info
Double-clicking always opens a file in the preview area or navigates to a folder.
:::

At the bottom of the dialog, you’ll find these options:

- **Help** - Opens this page from the online documentation.
- **Set as Default** - Saves the settings as the default for all folders with this perspective.
- **Set for This Folder** - Saves the current settings for the folder, so these options will be applied upon opening.

The dialog also indicates if the current folder has custom settings. You can reset them using the **Reset Custom Settings** button.

<!-- * **Show sub folders content** - If you don't care about folder structure, or do not know where in the hierarchy you would find a necessary file, you can turn this option on, to show every file from all sub folders recursively, starting from your current directory. The list will display all files in order, without any indication of their actual locations. This option will allow you to work with multiple files across a folder hierarchy at once.-->

### Example Configurations

A common arrangement found in file browsing applications is the grid. The grid view offers a resizable grid with thumbnail previews of certain file formats, for quick and effective browsing. The files and folder are represented by user interface element called cards.

The following screenshot shows the grid view in its **compact mode**. The thumbnails are in the so called **cover** mode, covering the whole area defined for the thumbnail. In order to achieve this effect this mode will more likely cut some of the border areas of the thumbnail's image. The folder details is turned on in the screenshot.
![](/media/grid/grid-perspective.png)

The next screenshot shows the grid view in its **large mode**. The thumbnails here are in the **contain** mode, which displays the whole thumbnail in the thumbnail area of the card, eventually causing transparent bars to appear on the left and right side of the thumb image. The folder details is turned off in the screenshot.
![](/media/grid/grid-view-large-mode.png)

## Drag to move within TagSpaces

An alternative way to move files into another folder is to drag it icon onto a folder on the **Folder navigation** area on the left panel. When the folder lights up with a greenish hue, just release the dragged item, and the file will be immediately moved into that folder.

:::tip
You can access sub folders of any folder displayed in the hierarchy, by clicking the folder icon next to its name.
:::

![](/media/drop-files-to-folder.png)

## Export files as CSV

<ProFeature />

With this feature you can export the list of file and folder from the current folder or from the current search results as CSV file. This will allow you to process the information annotations you have entered in TagSpaces such as tags and description in other tools. The export can be started by clicking on the button from the main toolbar of the default perspective, marked on the next screenshot.

<CenteredImage
    caption="Starting the CSV export from the toolbar of the perspective"
    src="/media/csv-export.png"
    showCaption
  />

The exported file contains the following columns:

- **name** - name of the entry
- **is file** - true if the entry is a file, false if it is folder
- **file extension** - only for files
- **tags** - a semicolon separated list of tags
- **size** - in bytes
- **last modified date** - ISO8601 compatible timestamp of the last modification
- **full path** - the full path to the current entry
- **description** - the entry description in markdown format

You can see how such exported CSV file looks like in the screenshot of the next section.
