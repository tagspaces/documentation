---
title: Perspectives Overview
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

When you navigate to a folder in your active location, the files contained in the selected folder will be displayed in the main file browsing area of the user interface. TagSpaces offers flexible views to display your files. We call these views **perspectives**.

Perspectives are modular extensions that allow more flexibility, easier development, and customizability. TagSpaces is delivered by default with two perspective, while additional perspectives can be found in the PRO products. This is a list of all currently available :

- [Grid Perspective](/perspectives/grid/) - Presents files and folders in a grid format, suitable for tagging and file management. It is the **default** perspective built into TagSpaces.
- [List Perspective](/perspectives/list/) - Presents files in a list format, suitable for tagging and file management.
- [Gallery Perspective](/perspectives/gallery/) <ProFeature /> - Optimized for browsing and viewing images and photos.
- [Mapique Perspective](/perspectives/mapique/) <ProFeature /> - Displays geo-tagged files and folders on a map. Available in the Pro edition.
- [Kanban Perspective](/perspectives/kanban/) <ProFeature /> - Shows your files as tasks on a Kanban board, representing subfolders as columns on the board.
- [FolderViz Perspective](/perspectives/folderviz/) <ProFeature /> - An experimental perspective that applies information visualization concepts to presenting your folder and file structures.

## Switching Perspectives

The perspective for the current folder can be switched in two ways. The easiest method is to use the perspective switch located in the bottom-right corner of the application, as shown in the screenshot below.

![Changing perspectives for a folder](/media/core/perspective-switch.avif)

In some cases, such as when using the application on mobile devices, the perspective switch is not available. In these cases, you can open the folder menu located in the upper-right part of the screen. From this menu, you can choose from the available perspectives, similar to the previous screenshot.

:::tip
Every folder can have its own **[default perspective](/folders/#default-folder-perspective)**, which can be selected in the folder properties area. Once you choose a perspective, every time you open that folder, it will be displayed using the selected perspective.
:::

## Custom Perspective Settings Per Folder

<ProFeature />

In the PRO version, you can assign a default perspective to any folder so that every time you open the folder, it will automatically be displayed using the selected perspective.

Some perspectives support custom settings at the folder level. For example, you can set custom _sorting_, _thumbnail mode_, or _pagination limits_. You can learn more in the [perspective settings](/perspectives/grid/#perspective-settings) section.
