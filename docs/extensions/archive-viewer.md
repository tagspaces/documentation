---
title: Archive Viewer
description: TagSpaces Archive Viewer extension for browsing and previewing ZIP file contents using the jszip library, bundled with all TagSpaces editions.
tags: [extension]
---

import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

# Archive Viewer

A TagSpaces extension allowing you to preview the content of ZIP files.

## Features

- Listing the content of ZIP files
- Previewing the content of the files in the ZIP container

![Screenshot of the viewerZIP](/media/extensions/viewer-zip-lead.png)

## Used Libraries

This extension thankfully relies on the following great projects:

- [jszip](https://stuk.github.io/jszip/)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [DOMPurify](https://github.com/cure53/DOMPurify)

## Installation

This extension is packaged with any new version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/archive-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/archive-viewer/LICENSE.txt)
