---
title: Kanban Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

This perspective shows the first five sub folders of the current folder as columns of a Kanban board. Further sub folder can turned on later. The cards in the columns are actually the files of the sub folder and can represent for example tasks. The cards can be moved from one column to another with drag and drop. The columns can be also moved with drag and drop.

<CenteredImage
    caption="Preview of the Kanban perspective"
    src="/media/kanban/hero-kanban-light.png"
    showCaption
  />

:::caution
The development of this perspective is not finalized yet, so the documentation is also work in progress.
:::

## Why is this useful?

- **Personal Kanban**
- **Task management**

## Main toolbar

- **Navigate to parent folder** - self explaining
- **Folder properties** - open the folder properties in the right panel, so you can add tags, description, set background color or custom wallpaper for the current folder
- **Shows the content of the current folder** - this is useful if want to distribute files from the current folder to the columns (sub folders)
- **Toggle visibility of sub folders** - this button will show the content of the current folder as addition column placed on the most left. This could be useful if you have files there which you want to move with drag and drop to the other columns.
- **Import Kanban board** - open a dialog where you can start the import of a Trello board. Details are explained bellow.
- **Perspective settings** - opens a dialog with settings of the Kanban perspective

## Actions for columns

Besides moving the column with drag and drop, there are some more actions attached to every column on the board. In the bottom right corner of every columns there is a button with a plus icon, which will open the dialog for [creating files](/creating-files).

![Actions for columns](/media/kanban/column-actions.png)

The button with top right position with tree dot icon will open a menu, where you can do the following actions:

- **Hide** - hides the column, you can always show the column from the button in toolbar, mentioned in the previous section
- **Move Left** - switches the position of the column with the column on the left
- **Move Right** - switches the position of the column with the column on the right
- **Reload Folder** - reloads the content of the folder
- **Show in File Manager** - opens the default file manager of your operating system with preselected folder
- **New File / Note** - opens the dialog for creating files
- **Folder Properties** - open the properties of the folder, where you can change the background color, set a walpaper image or choose an thumbnail for the folder

## Migration of Trello boards

This perspective features a importer for Trello boards exported as JSON files. In order to use a Trello board in TagSpaces you have to export it first as JSON. This can be done in the board's menu accessible after clicking the tree-dot menu in the top right corner of the board and select "More", then "Print and export" and finally "Export as JSON". Save the file somewhere locally so you can select in easily in the next steps.

![Export Trello board as JSON file](/media/kanban/trello-json-export.png)

Once you have the file on you computer, open TagSpaces, navigate to the folder where you want to import the Trello board and switch to the Kanban perspective. Click the import Kanban button and select "Choose Trello JSON file" from the dialog which will appear.

### Mapping the Trello board to files and folders

| Trello | TagSpaces     | Comment                                                                                                                                                                                                                 |
| :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card   | Markdown file | For every card is created a text file in markdown format, including: description, checklist, link to attachments, Link to original card in Trello, timestamp of the import                                              |
| Column | Folder        | The order of the tasks in the columns is preserved later in the Kanban folders                                                                                                                                          |
| Labels | Tags          | The labels of the exported boards are imported as [locations based tags](/ui/taglibrary/#location-tags). The importer tries to preserve the color of the labels. All labels are transformed to lower case by the import |
|        |               |                                                                                                                                                                                                                         |

## Perspective Settings

The settings of the perspective can be opened from the last button in the perspective's toolbar.

![Kanban perspective settings](/media/kanban/kanban-perspecitve-settings.png)

The following options can be adjusted in this settings dialog:

- Show folders - currently not is use
- Show tags - show the full name of the tags or only a symbol representing the availability of tags
- Show content of the current folder - turn the current folder column on and off, same as the button in the toolbar
- Show folder details - currently not in use
- Toggle thumbnail modes -
- Size of the files/tasks in the column - the width of the tiles can be switched among compact, default and large
- Definition of the single click

### Folder specific settings
