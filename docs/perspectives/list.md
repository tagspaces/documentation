---
title: List Perspective
sidebar_label: List Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

This perspective is optimized for general browsing through files and folders and performing standard file and folder operations. It features three representation modes: compact, default, and large.

![Screenshot of the list perspective](/media/list/list-lead.png)

The following information can be found on every row representing a file in this view:

- **File extension** - A color-coded icon, representing the file type. Scroll down to [Color-coded file extensions](#color-coded-file-extensions) to learn more about this feature.
- **Folder icon** - On rows representing folders, instead of the file extension, a folder icon is displayed.
- **Title** - The file's title, which is the filename without the extension or any tag information.
- **Description** - If the file/folder has a description, it will be displayed here.
- **Tags** - All the tags that are applied to the file will appear here, with the correct background and font color. To learn more about tag colors, refer to the [Tag Library](/ui/taglibrary) section.
- **Size** - The file size, displayed in a human-readable format.
- **Date modified** - The time the file was last modified.

:::info
The functionalities of the list perspective are very similar to the **[grid perspective](/perspectives/grid)**. Please follow the previous link for more details.
:::

<CenteredImage
    caption="List perspective in compact mode"
    src="/media/list/list-compact-mode.png"
    showCaption
/>
