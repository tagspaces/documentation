import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Slides Viewer

A TagSpaces extension for opening slides in HTML format created with reveal.js. The extension is introduced for the first time in version 5.2.3 of TagSpaces.

## Features

- Preview reveal.js slides

<CenteredVideo
    caption="Video showing the extension in action"
    src="/media/extensions/slides-viewer-lead.webm"
    posterUrl="/media/extensions/slides-viewer-lead.png"
    maxWidth="90%"
    autoPlay
    showCaption
  />

:::note
The extension extracts only the content of the reveal.js presentation from the HTML file and removes all the embedded and referenced JavaScript code. For the rendering of the slides, it relies on the embedded reveal.js library. This is done to reduce the risk of opening malicious HTML files. The drawback is that the reveal.js version may be outdated and not support the newest features of the latest release.
:::

<!-- ![Screenshot of the slides viewer](/media/extensions/slides-viewer.jpg) -->

## Used Libraries

This extension thankfully relies on the following great libraries:

- [reveal.js](https://revealjs.com/)

## Installation

This extension is packaged with the new version of TagSpaces (after version 5.2).

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/slides-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/slides-viewer/LICENSE.txt)
