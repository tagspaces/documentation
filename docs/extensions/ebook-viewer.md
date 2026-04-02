---
title: eBook Viewer
description: TagSpaces eBook Viewer extension for reading EPUB ebooks with auto two-fold mode, adjustable font size, line spacing, and reading margin settings.
tags: [extension]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

# eBook Viewer

A TagSpaces extension allowing you to open eBooks or digital magazines in EPUB format.

## Features

- Previewing files in EPUB format
- Automatically switches to two-page mode when the window is wide enough
- Readability options, for changing font type and adjusting line spacing and text size

<CenteredImage
    caption="eBook view with opened menu showing readability options"
    src="/media/extensions/ebook-viewer.avif"
    showCaption
    maxWidth="750px"
  />

Short video showing the eBook viewer in action:
<CenteredVideo
    caption="The EPUB viewer in action"
    src="/media/extensions/viewer-epub.mp4"
    posterUrl="/media/extensions/viewer-epub.jpg"
    maxWidth="100%"
    autoPlay
    showCaption={false}
  />

## Used Libraries

This extension thankfully relies on the following great libraries:

- [epub.js](https://github.com/futurepress/epub.js/)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [jszip.js](https://stuk.github.io/jszip/)

## Installation

This extension is packaged with any new version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/ebook-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/ebook-viewer/LICENSE.txt)
