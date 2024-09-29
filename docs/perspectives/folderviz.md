---
title: FolderViz Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

The **FolderViz Perspective** is a collection of experimental views that apply information visualization techniques to represent files and folders. While this perspective primarily serves as a showcase of TagSpaces' capabilities for developers, some of its features may also be beneficial for end users.

This perspective currently offers three views accessible via the perspective menu. Hovering over a file or folder displays an overlay with a thumbnail (if available) and additional details. Double-clicking on a folder navigates to that folder, while double-clicking on a file opens it in the file preview area.

## Tree View

<CenteredImage
    caption="Screenshot of the tree view"
    src="/media/folderviz/folderviz-tree.png"
    showCaption
  />

## Radial Tree View

<CenteredVideo
    caption="Short video showcasing the radial tree visualization"
    src="/media/folderviz/folderviz-radial.mp4"
    posterUrl="/media/folderviz/folderviz-radial-poster.jpg"
    maxWidth="90%"
    autoPlay
    showCaption
  />

## Treemap View

<CenteredImage
    caption="Screenshot of the treemap view"
    src="/media/folderviz/folderviz-treemap.png"
    showCaption
  />

## Legacy Views from v2

### MindMap View

The **MindMap View** displays all folders and subfolders within the current directory in an expandable tree-node format. There are plans to enhance this view in the future with an inverted graph of tags, allowing you to navigate your tagged files via a tag group tree rather than a folder tree. This could enable drag-and-drop functionality, where moving a file between branches would automatically re-tag it.

![MindMap View](/media/folderviz/folderviz-mindmap.png)

### TreeMap View

The **TreeMap View** represents files and folders as tiles, where the size of each tile corresponds to the file size relative to others in the same folder hierarchy. This provides a visual understanding of file sizes in relation to the root and each other.

![TreeMap View](/media/folderviz/folderviz-treemap-view.png)

### Tree View

The **Tree View** shows a fully expanded, non-interactive folder tree, similar to **MindMap**, but static. While useful for visualizing folder hierarchies, it may struggle with performance in large directories.

![Tree View](/media/folderviz/folderviz-tree-view.png)

### TreeMap-Navi View

**TreeMap Navi** is similar to **TreeMap** but omits the folder hierarchy, using the entire user interface to represent relative file sizes. This view can be particularly useful for identifying large files or folders.

![TreeMap Navi View](/media/folderviz/folderviz-treemap-navi.png)

### Bilevel Partition

The **Bilevel Partition** is the most experimental view, mainly designed as a test to explore folder and file visualization capabilities. While it can generate intriguing visual results, it is likely to be removed in a future release of TagSpaces.

![Bilevel Partition View](/media/folderviz/bilevel-partition.png)
