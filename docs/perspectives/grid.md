---
title: Grid Perspective
description: TagSpaces Grid Perspective is the default file browser view showing files as tiles with thumbnails, tags, descriptions, and metadata for visual file management.
sidebar_label: Grid Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';
import { WebPageStructuredData } from '@site/src/components/StructuredData';

<WebPageStructuredData />


The **Grid Perspective** is optimized for general browsing of files and folder structures. It supports common file management operations such as renaming, tagging, deleting, copying, and moving files and folders.

In TagSpaces, the Grid Perspective is the default view and the most commonly used way to display folders and their contents.

![Screenshot of the default grid perspective](/media/grid/grid-lead.avif)

## File Tile

Each file tile in the grid perspective displays the following information:

- **(1)** Tags assigned to the file
- **(2)** File description, if available
- **(3)** File title (filename without extension or tags)
- **(4)** File extension, color-coded based on the settings in the [File Types tab](/ui/settings#file-types)
- **(5)** Last modified date
- **(6)** File size (hover to see the exact size in bytes)
- **(7)** Selection indicator (highlighted with a colored border)
- **(8)** File thumbnail, if available
- **(9)** Indicator for a [geo-tag](/ui/taglibrary/#geo-tagging)

![A tile representing a file](/media/grid/file-tile.svg)

:::info
<ProFeature /> Adding descriptions and geo-tags to files is available in the Pro versions of TagSpaces.
:::

## Folder Tile

Folder tiles display information similar to file tiles:

- **(1)** Tags assigned to the folder
- **(2)** Folder description, if available
- **(3)** Folder name and optional [custom color](/folders/#folder-properties)
- **(4)** Folder icon (instead of a file extension)
- **(5)** Folder thumbnail, if available
- **(6)** Selection indicator

![A tile representing a folder](/media/grid/folder-tile.svg)

:::info
<ProFeature /> Adding descriptions and custom thumbnails to folders is available in the Pro versions of TagSpaces.
:::

## Selecting Files and Folders

You can select multiple files or folders using the following methods:

- Hold `CTRL` / `⌘` and click to select individual entries
- Hold `SHIFT`, click the first entry, then click another to select a range
- Use **Select All** in the toolbar or press `CTRL+A` / `⌘+A`

![Folder with selected files and subfolders](/media/grid/folder-with-selected-entries.png)

:::tip
You can also select multiple entries by clicking on an empty area of the grid and dragging a selection rectangle. All entries inside the rectangle will be selected.
:::

## Perspective Toolbar

<CenteredImage
caption="Toolbar of the Grid Perspective"
src="/media/grid/grid-toolbar.avif"
/>

The toolbar at the top of the perspective provides quick access to common actions:

- **Parent Folder** – Navigates to the parent directory (also available via the `BACKSPACE` key)
- **Select All** – Selects or deselects all visible entries
- **Details** – Opens the properties of the current folder
- **Sort Files** – Opens a sorting menu with the following options:

  - **Title**
  - **Size**
  - **Date Modified**
  - **First Tag**
  - **File Extension**
  - **Random** (useful for random playback of audio files)

  :::tip
  Clicking the same sorting option again reverses the sort order. Selecting **Random** again generates a new random order.
  :::

  :::info
  The selected sort order is preserved when navigating between folders.
  :::

- **Tags** – Manage tags for one or multiple selected entries  
  See [Tag Operations on Multiple Entries](/tagging#tag-operations-on-many-entries).
- **Copy / Move Entries** – Opens the dialog for copying or moving selected files and folders

<CenteredImage
caption="Dialog for moving or copying files and folders"
src="/media/core/copy-move-files-dialog.avif"
showCaption
maxWidth={500}
/>

- **Delete** – Opens a confirmation dialog for the deletion of the selected files and folders
- **Share Files** – Opens the file sharing dialog, available only for object storage locations
- **Zoom In / Zoom Out** – Adjusts tile size
- **Export as CSV** – Described [below](#export-files-as-csv)
- **Perspective Settings** – Opens the settings dialog for this perspective

## File Context Menu

Right-clicking a file opens the file context menu.

<CenteredImage
caption="The file context menu"
src="/media/grid/file-context-menu.avif"
showCaption
maxWidth={600}
/>

Available actions include:

- **Open File** – Opens the file in the preview area
- **Open Parent Folder** – Useful in search results
- **Open File Natively** – Opens the file in the default external application of your operating system.
- **Open with** – A sub-menu listing the external applications registered on your system for this file type, so you can pick a non-default opener (e.g. a specific editor or viewer) in one click without leaving TagSpaces.
- **Show in File Manager** - Opens the file in the default file manager of the operating system.
- **Add / Remove Tags** - Opens a dialog to manage tags for the file.
- **Rename File** - Opens a file renaming dialog.
- **Duplicate File** – Creates a copy with a timestamp and a “copy” tag
- **Share Files** – Object storage only
- **Move / Copy File** - Opens the move/copy dialog. The dialog surfaces your **recent target folders** at the top, so frequently used destinations are one click away.
- **Delete File** - Opens a deletion confirmation dialog.
- **Use as Thumbnail for Current Folder** - Sets the file’s thumbnail as the folder thumbnail.
- **Use as Background Image** – Will show only if the selected files is an image, and will set this image as background for the current folder.
- **Copy Sharing Link** - Copies an internal [sharing link](/sharing/#internal-sharing-for-files-and-folders) for the file in the clipboard.
- **Download File** - will initiate the downloading of the file.
- **File Details** – Shows properties in the preview area

## Folder Context Menu

Right-clicking a folder opens its context menu.

<CenteredImage
caption="The folder context menu"
src="/media/grid/folder-context-menu.avif"
showCaption
maxWidth={600}
/>

Menu options include:

- **Open Folder** - Navigates to the selected directory.
- **Open in New Window** - Opens the folder in a new TagSpaces window or tab (web version).
- **Rename Folder** - Opens the folder renaming dialog.
- **Move / Copy Folder** - Opens the dialog to move or copy the folder, with quick access to your recent target folders.
- **Delete Folder** - Opens a deletion confirmation dialog.
- **Show in File Manager** - Opens the directory in the default file manager.
- **Use as Thumbnail for Parent Folder** - Sets the folder’s thumbnail as the parent folder thumbnail.
- **Copy Sharing Link** - Copies a link for internal sharing or linking.
- **Add / Remove Tags** - Opens the dialog to manage folder tags.
- **Folder Details** - Opens the folder properties in the preview area.

## Current Folder Context Menu

Right-clicking on an empty area in the Grid Perspective opens the context menu of the current folder.  
This menu is identical to the one available via the folder navigator in the top navigation bar. See [Folder Menu](/ui/userinterface/#folder-menu).

## Perspective Settings

The Grid Perspective settings can be opened using the settings button on the right side of the toolbar.

Available options include:

- **Show Folders** - Toggles visibility of the sub folders in the current folder.
- **Show Tags on Files and Folders** - Toggles between showing all tags and much compacted tag preview, showing just the number of the applied tags and the color of the first and second tag if available.
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
Double-clicking always opens a file internally or navigates into a folder.
:::

<CenteredImage
caption="Grid Perspective settings dialog"
src="/media/grid/grid-settings.avif"
showCaption
maxWidth={650}
/>

The settings configured in this dialog can apply either to the **Grid Perspective globally** or **only to the current folder**. For this reason, two separate buttons are available at the bottom of the dialog to persist your changes.

- **Set as default (2)** – Saves the current settings as the default for all folders using the Grid Perspective.
- **Set for this folder (3)** – Saves the current settings only for the active folder. These settings will be applied the next time the folder is opened.

At the top of the dialog, an indicator shows whether the current folder has custom settings applied. These can be removed using the **Reset Custom Settings (1)** button.

When a folder has custom settings, the **Perspective Settings** button in the toolbar is highlighted, as shown in the previous screenshot.

## Drag to Move Within TagSpaces

You can move files by dragging them onto a folder in the **Folder Navigation** panel on the left.  
When the destination folder highlights, release the mouse button to move the file.

:::tip
You can expand subfolders in the folder tree by clicking the arrow icon next to a folder name.
:::

<CenteredImage
caption="Moving files using drag and drop"
src="/media/grid/drop-files-to-folder.avif"
showCaption
/>

## Export Files as CSV

<ProFeature />

You can export files and folders from the current folder or search results as a CSV file. A CSV (Comma-Separated Values) file is a simple text file used to store tabular data, where each row represents a record and values are separated by commas (or other delimiters). This allows you to process metadata such as tags and descriptions in external tools (e.g. spreadsheets or databases).

<CenteredImage
caption="Starting the CSV export from the toolbar"
src="/media/grid/csv-export.avif"
showCaption
/>

The exported CSV file contains the following columns:

- **name** - name of the entry
- **is file** - `true` if the entry is a file, `false` if it is folder
- **file extension** - only for files
- **tags** - a semicolon separated list of tags
- **size** - in bytes
- **last modified date** - ISO8601 compatible timestamp of the last modification
- **full path** - the full path to the current entry
- **description** - the entry description in Markdown format

## Example Views of the Grid Perspective

### Compact Mode

Shows a dense layout with thumbnails in **cover** mode. Folder details are enabled.

![](/media/grid/grid-perspective.png)

### Large Mode

Shows larger tiles with thumbnails in **contain** mode. Folder details are disabled.

![](/media/grid/grid-view-large-mode.png)

### Wiki / Confluence View

When folder descriptions are enabled, the folder description can act as a wiki-like page, with files listed below.

![](/media/grid/grid-wiki-view.avif)

## Conclusion

The Grid Perspective is the most versatile and commonly used view in TagSpaces.  
It balances powerful file management features with a clean visual presentation, making it suitable for everyday use as well as advanced workflows.
