---
title: Annotating files and folders
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

<ProFeature />
In addition to the tagging, in the TagSpaces PRO you have the ability to annotate every file or folder with a description. This is useful in particular if you want to add some more textual content to given a file or folder. This description information is managed in the properties area of every entry, and can be opened by clicking on the i-button, marked with **(1)** on the following screenshot.

<CenteredImage
    caption="Screenshot showing file with added description"
    src="/media/tagspaces-file-description.png"
    showCaption
  />

The properties area reveals the following information:

- **Name** - the name of the current file or folder, click on the rename button will make the name editable
- **Tags** - shows all the tags (sidecar and file name based) of the current entry. You can add new tags by selecting them from the dropdown menu or drag &amp; drop them here from the tag library. Removing tag is possible with the (x) button placed on every tag.
- **Description** - shows the description of the current file or folder if available
- **Path** - showing the path of the file or folder, clicking the move button will allow you to move this file
- **Date modified** - shows the date and time of the last modification of the current entry
- **Size** - shows the size if the current file in byes, it is displayed only for files
- **Thumbnail** - shows the thumbnail of the entry if available

The file and folder descriptions which is marked with **(2)** on the previous screenshot, can be edited by clicking the edit button or just clicking directly on the description area. The descriptions text can contain [Markdown](https://en.wikipedia.org/wiki/Markdown) allowing you to add basic formatting, links and lists to the content.

The descriptions is indexed by the search algorithm and considered in the search results. If a given file or folder has a descriptions, the first few words from it a displayed in the grid perspective, as marked with **(3)** on the previous screenshot.

:::tip
Editing file and folders descriptions is available in TagSpaces PRO. The lite version supports only displaying existing descriptions for both files and folders.
:::

### File description

For adding the description to a given file, TagSpaces PRO use the same sidecar file as the one used for the sidecar files. This file is called exactly like the original file but with `.json` at the end in the hidden `.ts` folder of current folder.

    ~ some-folder
    ├── .ts
    │   ├── file5.png.json - contains tags and description for file.png
    │   ├── file6.docx.json - contains tags and description for file6.docx
    │   └── tsm.json
    ├── file5.png
    └── file6.docx

### Folder description

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

### Custom folder color

With this feature every folder opened in TagSpaces can have its own background color. In addition to tagging you can use colors to mark folders used for particular use case or area of work. For example you can differentiate your personal folders from your work folders with color or you can mark folders containing sensitive or important information.

<CenteredImage
    caption="Short video showing how to set color to a folder"
    src="/media/tagspaces-folder-colors.gif"
    showCaption
  />
