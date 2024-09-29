---
title: Kanban Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

This perspective shows the first five subfolders of the current folder as columns of a Kanban board. Additional subfolders can be turned on later. The cards in the columns represent the files of the subfolders and can be used to organize tasks or other items. The cards can be moved between columns via drag and drop. Moving cards within a column will persist their order. Columns themselves can also be moved via drag and drop.

<CenteredImage
    caption="Preview of the Kanban perspective"
    src="/media/kanban/hero-kanban-light.png"
    showCaption
  />

## Why is this useful?

Kanban boards have many potential uses. Here are some typical examples:

- **Personal Kanban**
- **Tracking software development**
- **Task management**
- **Recruiting process board**
- **Weekly plan** – Have each day of the week as a column and track activities or document progress like a diary.

## General functionalities

Below is a description of the buttons in the main toolbar of this perspective:

- **Navigate to parent folder** – Self-explanatory.
- **Folder properties** – Opens the folder properties in the right panel, allowing you to add tags, descriptions, and set the background color or custom wallpaper for the current folder.
- **Show the content of the current folder** – Useful for distributing files from the current folder into the columns (subfolders).
- **Toggle visibility of subfolders** – Displays the content of the current folder as an additional column on the far left. Useful for moving files from the current folder to other columns.
- **Import Kanban board** – Opens a dialog for importing a Trello board. Details are provided below.
- **Perspective settings** – Opens a dialog with settings specific to the Kanban perspective.

## Actions for Columns

Beyond moving columns via drag and drop, there are additional actions for each column. In the bottom right corner of every column, there's a plus icon that opens the dialog for [creating files](/creating-files).

![Actions for columns](/media/kanban/column-actions.png)

The three-dot icon in the top-right corner of each column opens a menu with the following options:

- **Hide** – Hides the column. You can show it again using the toolbar button mentioned earlier.
- **Move Left** – Switches the column with the one to the left.
- **Move Right** – Switches the column with the one to the right.
- **Reload Folder** – Reloads the content of the folder.
- **Show in File Manager** – Opens the default file manager of your operating system with the preselected folder.
- **New File / Note** – Opens the dialog for creating new files.
- **Folder Properties** – Opens the folder properties, where you can change the background color, set a wallpaper image, or choose a thumbnail for the folder.

## Migration of Trello Boards

This perspective includes an importer for Trello boards exported as JSON files. To use a Trello board in TagSpaces, you must first export it as JSON. This can be done by navigating to the board's menu (top-right corner) and selecting "More," then "Print and export," and finally "Export as JSON." Save the file locally for easy access during import.

![Export Trello board as JSON file](/media/kanban/trello-json-export.png)

Once you have the JSON file on your computer, open TagSpaces, navigate to the folder where you want to import the Trello board, and switch to the Kanban perspective. Click the "Import Kanban" button and select "Choose Trello JSON file" from the dialog.

### Mapping the Trello Board to Files and Folders

| Trello | TagSpaces     | Comment                                                                                                                                                                                                                  |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Card   | Markdown file | For each card, a text file in markdown format is created, including: description, checklist, link to attachments, link to the original card in Trello, and the timestamp of the import.                                  |
| Column | Folder        | The order of the tasks in the columns is preserved as they are imported into the Kanban folders.                                                                                                                         |
| Labels | Tags          | The labels of the exported board are imported as [location-based tags](/ui/taglibrary/#location-tags). The importer tries to preserve the colors of the labels. All labels are transformed to lowercase by the importer. |

## Perspective Settings

The settings for this perspective can be accessed from the last button in the perspective's toolbar.

![Kanban perspective settings](/media/kanban/kanban-perspecitve-settings.png)

The following options can be adjusted in the settings dialog:

- **Show folders** – Displays subfolders as columns, if available.
- **Show tags** – Toggles between showing the full name of the tags or just a symbol indicating the presence of tags.
- **Show content of the current folder** – Toggles the display of the current folder column on or off (same as the button in the toolbar).
- **Show folder details** – Displays the name and a preview of the folder description above the columns of the board.
- **Toggle thumbnail modes** – Switches between two modes for displaying thumbnails on the cards: cover and contain.
- **Size of the files/tasks in the column** – Adjusts the width of the tiles between compact, default, and large.
- **Definition of the single click** – Customizes the behavior of single-click actions.
