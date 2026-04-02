---
title: Mindmap Viewer
description: TagSpaces Mindmap Viewer extension for visualizing Markdown files as interactive mind maps using markmap.js with zoom and pan navigation.
tags: [extension]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

# Mindmap Viewer

A TagSpaces extension for opening mind maps based on markdown with the help of markmap.js.

## Features

- Visualize markdown heading structure as an interactive mind map
- Zoom in and out with the mouse wheel or toolbar controls
- Pan the view by clicking and dragging
- Collapse and expand branches by clicking on nodes
- Automatic layout and positioning of nodes

![Screenshot of the mind map viewer](/media/extensions/mindmap-viewer-lead.png)

## Used Libraries

This extension thankfully relies on the following great libraries:

- [markmap.js](https://markmap.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [Dompurify](https://github.com/cure53/DOMPurify)

## Installation

This extension is packaged with every version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/mindmap-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/mindmap-viewer/LICENSE.txt)
