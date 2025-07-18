---
title: FolderViz Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

This perspective is a collection of views that apply information visualization techniques to analyze and represent files, folders and tags. While this perspective started as a showcase of TagSpaces' capabilities for developing custom solutions, some of its features may also be beneficial for end users.

The perspective currently offers five views, accessible from the main toolbar located as usual on the top of the perspective. **Clicking** on a file or folder will display an overlay showing a thumbnail (if available) and additional details. Double-clicking on a folder will navigate to it, while **double-clicking** on a file will open it in the file preview area. **Click and drag** on the view will move the visualization. **Scrolling** with the mouse will zoom in and out.

Click on the **legend** elements on the top of the visualization will toggle the visibility of the corresponding entries in the graph.

In the **vertical menu** located in the top left part of the views you will find some useful commands, like redrawing the graph, changing its appearance or hiding the vertical menu in order to not have it on screenshots.

The colors of the files are the same use for the file extension and can be configured in the [settings](/ui/settings/#file-types). The color of the tags are coming from the [tag library](/ui/taglibrary).

## Folder Tree View

This shows an expanded, folder tree, similar to MindMap. While useful for visualizing folder hierarchies, it may struggle with performance in folders with many files.

<CenteredImage
    caption="Screenshot of the folder tree view"
    src="/media/folderviz/folderviz-folder-tree.avif"
    showCaption
  />

## Circular Folder Tree View

Shows the same information like the folder tree view but in a circular tree.

<CenteredImage
    caption="Screenshot of the folder circular tree view"
    src="/media/folderviz/folderviz-circular-tree.avif"
    showCaption
  />

## Links Graph View

This view uses the index created by the full-text search in a given location to show links between files and folder and their links to external website. The arrow connecting linked entries show the direction of the link. Only file and folder participating in a link will be displayed here.

<CenteredImage
    caption="Screenshot of the links graph view"
    src="/media/folderviz/folderviz-linksgraph.avif"
    showCaption
  />

:::info

- Full-text search should be enabled for the location in order to have a link extraction.
- The links are extracted from files in plain text, Markdown, HTML or PDF formats and from the description of any files or folder.
- The links between the files and folder should be in the in the tagspaces' [link format](/linking) in order to be displayed here.
  :::

## Tags Graph View

The visualization show all the used tags with the tagged entries in a given location. Double-click on a tag will start a search for this tag and will show the files and folder tagged with it.

<CenteredImage
    caption="Screenshot of the tree graph view"
    src="/media/folderviz/folderviz-tagsgraph.avif"
    showCaption
  />

## Treemap View

The TreeMap View represents files and folders as tiles, where the size of each tile corresponds to the file size relative to others in the same folder hierarchy. This provides a visual understanding of file sizes in relation to the root and each other.

<CenteredImage
    caption="Screenshot of the treemap view"
    src="/media/folderviz/folderviz-treemap.avif"
    showCaption
  />
