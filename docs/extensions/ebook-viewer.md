import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# eBook Viewer

A TagSpaces extension allowing you to open eBooks or digital magazines in EPUB format.

## Features

- Previewing files in EPUB format
- Automatically switch to two-fold mode by sufficient width

<CenteredVideo
    caption="The EPUB viewer in action"
    src="/media/extensions/viewer-epub.mp4"
    posterUrl="/media/extensions/viewer-epub.jpg"
    maxWidth="100%"
    autoPlay
    showCaption
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
