---
title: Kanban Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

In this perspective the app shows the sub folders of the current folder as columns of a Kanban board. The files in the columns can represent tasks and the user can move them from one column to another with drag and drop.

<CenteredImage
    caption="Preview of the Kanban perspective"
    src="/media/kanban/hero-kanban-light.png"
    showCaption
  />

:::caution
The development of this perspective is not finalized yet, so the documentation is also work in progress.
:::

## Main toolbar

- **Navigate to parent folder** -
- **Folder properties** - open the folder properties in the right panel, so you can add tags, description, set background color or custom wallpaper for the current folder
- **Shows the content of the current folder** - this is useful if want to distribute files from the current folder to the columns (sub folders)
- **Toggle visibility of sub folders** -
- **Import Kanban board** - open a dialog where you can start the import of a Trello board
- **Perspective settings** - opens a dialog with setting of the Kanban perspective

## Migration of Trello boards

In order to use a Trello board in TagSpaces you have to export it as JSON file from there. This can be done in the board's menu accessible after clicking the tree-dot menu in the top right corner of the board and select "More", then "Print and export" and finally "Export as JSON". Save the file somewhere locally so you can select in easily in the next steps.

![Export Trello board as JSON file](/media/kanban/trello-json-export.png)

Once you have the file on you computer, open TagSpaces, navigate to the folder where you want to import the Trello board and switch to the Kanban perspective. Click the import Kanban button and select "Choose Trello JSON file" from the dialog which will appear.

### Mapping the Trello board to files and folders

| Trello | TagSpaces     | Comment                                                                                                                                                                                                               |
| :----- | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card   | Markdown file | For every card is created a text file in markdown format, including: description, checklist, link to attachments, Link to original card in Trello, timestamp of the import                                            |
| Column | Folder        | The order of the tasks in the columns is preserved later in the Kanban folders                                                                                                                                        |
| Labels | Tags          | The labels of the exported boards are imported as [locations based tags](/ui/taglibrary/#location-tags). The import tries to preserve the color of the labels. All labels are transformed to lower case by the import |
|        |               |                                                                                                                                                                                                                       |
