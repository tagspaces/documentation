---
title: Grid Perspective
sidebar_label: Grid Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

This perspective is optimized for general browsing through file and folder structures while supporting some common file management operations such as: tagging, renaming, deleting, copying and moving of files and folders.

The most common way of presenting the content of a folder is a grid which is the default view in TagSpaces.

![screenshot of the default perspective of the app](/media/grid/grid-perspective-toolbar.svg)

:::info
The colored rectangle shows the area in TagSpaces which is typically occupied by the **[perspectives](/browsing-files)**.
:::

## Main Toolbar

The toolbar of the perspective is located in the top part of the perspective's, see the rectangle from the previous screenshot. The toolbar includes the following buttons and sub menus.

- **(1) Open parent folder** - will navigate to the parent folder of the current folder, if it is part of the current location. This action can be achieved also by using the **BACKSPACE** key of the keyboard.

- **(2) Toggles File Selection** - will mark every file and folder in the perspective as selected or unselected.

- **(3) Opens the folder properties** -

- **(4) Add/Remove tags** will allow you to manage tags on selected files. (This options is only available when there is an active selection, and works on multiple files simultaneously.) To learn more about how tagging works, refer to the [Tagging -> Tagging using context menus](/tagging#tag-operations-on-many-entries) section.

- **(5) Copy/move files** will allow you to copy or move the currently selected files. This option is only available when there is an active selection, and works on multiple files simultaneously. Selecting this option will present you with the **Move or Copy File(s)** dialog. After specifying the target directory (which can be anywhere on the file system, even outside your connected locations), you can choose to move or copy the file(s) by pressing the corresponding button.

![Screenshot of the dialog for moving or copying of multiple files](/media/copy-move-files-dialog.png)

- **(6) Delete files** - will open a dialog where you can confirm the deletion of the selected files.

- **(7) Sort files** - open a menu with following options. There is an arrow in front of one these options, it indicates how the files and folders in the perspective are sorted.

  - **Title** - will sort the file alphabetically by name.
  - **Size** - will sort the files by their size.
  - **Date Modified** - will sort the files by the date of the last modification.
  - **First Tag** - will sort the files alphabetically by the title of their first tag.
  - **File Ext.** - will sort the files alphabetically by their file extension.
  - **Random** - will sort the files in a random way. This could be useful if TagSpaces is used as music player and you want to hear audio tracks in a random order.
    :::tip
    Clicking a second time on same sorting option will reverse the sort order. By sorting option **random** this will lead to a new randomization of the file order.
    :::

    :::info
    Sort order is preserved after navigation to a new folder.
    :::

- **(8) Export as CSV**
- **(9) Opens perspective settings** - will open a dialgo where you can choose among the following options:
  - **Show/Hide Subfolders** - Toggles the visibility of folders in the perspective
  - **Toggle thumbnail modes** - Toggles between the two modes(cover and contain) of displaying thumbnails, see [bellow](#grid-view) for more details.
  - **Compact mode** - A condensed display mode, where the area representing a file or folder takes a smaller place the default mode. Some of the information available in the following modes may be hidden here.
  - **Default mode** - The default display mode.
  - **Large mode** - A display mode, where the area representing a file or folder takes a larger place the default mode.
  - **Single click opens file internally** - Single click or tap on a file will open it in the applications
  - **Single click opens file externally** - Single click or tap on a file will open it in the default external application for your operating system.
  - **Single click selects only** - Single click or tab on a file will just select it, without opening it.

:::info
Double click on a file will always open it in the preview area. Double click on a folder will navigate to this folder.
:::

<!-- * **Show sub folders content** - If you don't care about folder structure, or do not know where in the hierarchy you would find a necessary file, you can turn this option on, to show every file from all subfolders recursively, starting from your current directory. The list will display all files in order, without any indication of their actual locations. This option will allow you to work with multiple files across a folder hierarchy at once.
* **Export to CSV** will create a **Comma Separated Variable** from all displayed files, be it from the current folder, or from the full folder hierarchy, and save it n a folder of your choice. The generated CSV contains `path,title,size,tag1,tag2,tag3,...`, where each new line represents a separate file.
* **About** will display information about the perspective extension in a pop-up window. -->

## Main area

A common arrangement found in file browsing applications is the grid. The grid view offers a resizable grid with thumbnail previews of certain file formats, for quick and effective browsing. The files and folder are represented by user interface element called cards.

The following screenshot shows the grid view in its **compact mode**. The thumbnails are in the so called **cover** mode, covering the whole area defined for the thumbnail. In order to achieve this effect this mode will more likely cut some of the border areas of the thumbnail's image.
![](/media/grid/grid-perspective.png)

The next screenshot shows the grid view in its **large mode**. The thumbnails here are in the **contain** mode, which displays the whole thumbnail in the thumbnail area of the card, eventually causing transparent bars to appear on the left and right side of the thumb image.
![](/media/grid/grid-view-large-mode.png)

:::info
Switching the thumbnail mode is triggered by the **Toggle thumbnails mode** menu item of the more options menu from the [perspective's toolbar](#main-toolbar).
:::

### File Card

Each card on the grid can represent the following information. In area **(1)** the tags added to this file will appear. If the file has a description it will be displayed in section **(2)**. Behind the number **(1)** and **(2)** a thumbnail of the file (if available) will be displayed. In **(3)** you will find the title of the file. Title is the part of the file name without the file extension. In section **(4)** you will find the file extension with appropriate color defined in the [File types tab](/ui/settings#file-types) from the settings. Bellow number **(5)** the amount of time elapsed since the last time the file was modified will be displayed. Hovering this area with the mouse pointer will show a tooltip with exact date and time of the file modification. Bellow number **(6)** the size of the file can be found. Hovering this are will display the file size in bytes.

![](/media/grid/grid-perspective-file-card.png)

<ProFeature /> - Defining descriptions for file is feature available in the Pro and the Enterprise versions of the app.

### Folder Card

The folder card show basically similar information as the file card. In area **(1)** the tags added to this folder will appear. If the folder has a description it will be displayed in section **(2)**. Behind the number **(1)** and **(2)** a thumbnail of the folder will be displayed. In **(3)** you will find the name of the folder. Instead on the file extension in section **(4)** a folder icon will be shown. If the folder has a [custom color](/ui/userinterface#folder-properties-area) it is also visible on the card behind number **(3)** and **(4)**.

![](/media/grid/grid-perspective-folder-card.png)

<ProFeature /> - Defining descriptions and thumbnails for folders are features available in the Pro and the Enterprise versions of the app.

### Selecting files

File in the perspective can be selected by holding the CTRL key and clicking on the file or the folder. You can select a range of files by holding the SHIFT key, clicking on a _file 1_ and then clicking on _file 2_. This way make all file between _file 1_ and _file 2_ to be selected.

To select or deselect all the listed files, you can use the first button from the perspective's toolbar.

## File context menu

The file context menu can be accessed by right-clicking a file in either perspective. It will offer some common file management options.

![the context menu of a file](/media/file-context-menu.png)

- **Open File** - will split the main area of TagSpaces into two, and open the file in the right pane. TagSpaces offers viewers for various file types, which can be opened inside the application. To learn more bout supported types, refer to the [Viewing Files](/viewing-files) section.
- **Open Parent Folder** - this feature is especially useful if the perspective shows search result from different folders, so using will open the parent folder of the currently selected file.
- **Open File Natively** - will open the file in whatever application is associated with the file type in your operating system.
- **Show in File Manager** - will show this file in the default file manager of your operating system
- **Add / Remove Tags** - will open a dialog where you can add or remove multiple tag to this file.
- **Rename File** - will open the file rename dialog, where you can change the name of the file.
- **Duplicate File** - use this feature to create a copy of the current file. The new file can be easily separated from the original, since it will have the following tags: "copy" and e.g. "20210831T1230" representing the date and time of the duplication.
- **Move / Copy File** - will open a dialog, where you can choose where this file should be moved or copied
- **Use as thumbnail for the current folder** - will set the thumbnail of the file as thumbnail for the current folder
- **Delete** - will open a dialog, where you can confirm the deletion the file
- **Copy Sharing Link** - will copy a link for [internal sharing](/sharing) pointing to this file in the clipboard

## Folder context menu

The folder context menu can be accessed by right-clicking on a folder the perspective. It will offer some common folder management options.

![The context menu of a folder](/media/folder-context-menu.png)

- **Open Directory** - will navigate to the selected directory.
- **Rename directory** - will open the directory rename dialog, where you can change the name of the folder.
- **Delete directory** - will open a dialog, where you can confirm the deletion the directory
- **Show in File Manager** - will open this directory in the default file manager of your operating system
- **Use as thumbnail for parent folder** - will set the thumbnail of the folder as thumbnail for the parent folder
- **Copy Sharing Link** - will copy a link for [internal sharing](/sharing) pointing to this folder in the clipboard
- **Directory Properties** - will open the properties of this folder in the preview area (most right panel) of the application

### Drag to move within TagSpaces

An alternative way to move files into another folder is to drag it icon onto a folder on the **Folder navigation** area on the left panel. When the folder lights up with a greenish hue, just release the dragged item, and the file will be immediately moved into that folder.

:::tip
You can access sub folders of any folder displayed in the hierarchy, by clicking the folder icon next to its name.
:::

![](/media/drop-files-to-folder.png)

## Importing files with drag and drop

Besides dragging files from the **File Browser Area** to a sub folder, TagSpaces allows you to add files the currently opened folder by dragging and dropping it from the operating system, or its default file management application.

To do this, just grab a file icon with your mouse, and drag it to TagSpaces' application.

![Importing files with drag and drop](/media/drag-file-into-tagspaces.png)

## Export folder content and search results as CSV

<ProFeature />

Here you have the ability to export the file and folder list of the current folder or from the current search results as CSV file. This will allow you to process the information collected with TagSpaces in other tools. The export can be started by clicking on the button from the main toolbar of the default perspective, marked on the next screenshot.

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
