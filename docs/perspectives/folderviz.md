---
title: Folder Visualization Perspective
tags: [perspective]
---

> **Note**: This perspective is not available in version 3 of TagSpaces.

The **FolderViz Perspective** is a collection of experimental views hat apply some information visualization concepts to representing your files and folders. While the primary aim of FolderViz perspective is to showcase TagSpaces' capabilities to developers, some of the options might offer some useful features to the end users.

**FolderViz Perspective** was offering five types of views, which were accessible from the FAB menu:

## MindMap View

**MindMap** will display all folders and subfolders contained within the current directory, in an expandable tree-node format. There are plans to extend this view in the future with an inverted graph of tags so you can navigate your tagged files, with the help of the tag group three instead of the folder tree, and drag and drop files from one branch of tag tree to some other branch, which will automatically re-tag them.

![](/media/folderviz-mindmap.png)

## Tree View

**Tree** will display a fully expanded tree, similar to **MindMap**, only not interactive. It can be useful to visualize folder hierarchy, but this view can have performance issues with large directory structures.

![](/media/folderviz-tree-view.png)

## TreeMap View

**TreeMap** offers a representation of all files and folders, where the size of the squares correspond to file sizes, relative to the root and each other, while the structure of the squares represents folder hierarchy.

![](/media/folderviz-treemap.png)

## TreeMap-Navi View

**TreeMap Navi** is just like TreeMap, but without the hierarchy. Here the squares fully use up the available User Interface, allowing for a better visual representation of relative file sizes. This can be useful for finding large files or folders.

![](/media/folderviz-treemap-navi.png)

## Bilevel Partition

**Bilevel Partition** is the most experimental and least functional of all views, basically a test to push the capabilities of folder and file visualization. While it might produce some interesting looking results, it will most certainly be removed from a future release of TagSpaces.

![](/media/bilevel-partition.png)
