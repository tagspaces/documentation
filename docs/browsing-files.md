---
title: Perspectives Overview
tags: [perspective]
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

When you navigate to a folder in your active location, the files contained in the selected folder will be displayed on the main file browsing area of the user interface. TagSpaces offers flexible views to display your files. We call these views **perspectives**.

Perspectives are not an integral part of TagSpaces, but exist as modular extensions. This modular approach allows for more flexibility, easier development, and customizability of each separate perspective. TagSpaces is delivered by default with one perspective. Other perspective can be added on demand in the Enterprise version of the product. In this document we will describe the following perspectives:

- [Grid Perspective](/perspectives/grid) - presenting your files as in a grid, suitable for tagging and file management. It is the **default** perspective build in TagSpaces.

- [List Perspective](/perspectives/list) - presenting your files as list, suitable for tagging and file management.

- [Gallery Perspective](/perspectives/gallery) <ProFeature /> - optimized for browsing and viewing images and photos. This extension is available in the Pro and Enterprise packages

- [Mapique Perspective](/perspectives/mapique) <ProFeature /> - showing geo-tagged files and folder and folders on a map. This extension is available in the Pro and Enterprise packages

- [Kanban Perspective](/perspectives/kanban) <ProFeature /> - show your files as tasks in a Kanban board, representing the sub folders as columns in the board

- [FolderViz Perspective](/perspectives/folderviz) - this is an experimental perspective which applies some information visualization concepts to presenting your folder and file structures.

## Switching perspectives

The perspective for the current folder can be switched in two ways. The first and easier one is to user perspective switch located in the bottom right are of the application, as seen in the screenshot bellow.

![Changing perspectives for a folder](/media/tagspaces-perspective-switch.png)

In some case such as the use of the application on mobile devices the perspective switch is not available. In this case, the folder menu available in the upper right part of the screen, should be opened. In this menu you can choose from the available perspectives, compare the previous screenshot.

## Default perspective for a folder

Every folder can have its own default perspective, which can be selected in the folder properties area.

![Selecting default folder perspective](/media/folder-properties-select-perspective.png)

Once you choose a perspective here, every time you open this folder, it will be opened with selected perspective.

## Custom perspective settings per folder

<ProFeature />

TBD

- Per directory sorting
- Per directory file limit
