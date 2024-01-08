# Image Viewer

A TagSpaces extension allowing you to open different kinds of image formats

## Features

- Opening of the following image formats: JPG, PNG, GIF, SVG, BMP, WEBP, ICO, TIFF, AVIF, TGA
- Preview of these formats: CR2, NEF, DNG, PSD
- Zooming, flipping and rotating of the current image
- Different background colors of the viewer for better contrast
- For JPG files it features an integrated Exif and IPTC reader with auto rotation of photos according to the Exif information
- Support image printing
- Grayscale filter
- Exporting current image in JPG, PNG or WEBP format (only for the desktop apps)

<!-- ![Screenshot of the Image Viewer as running in the Linux version of TagSpaces](/media/extensions/viewer-image-demo.gif) -->

![Screenshot of the image viewer extensions](/media/extensions/viewer-image-lead.png)

The following screenshot shows a dialog with the extracted Exif and IPTC information.

![Screenshot showing extracted Exif information](/media/extensions/viewer-image-exif.png)

## Used libraries

This extension thankfully relays on the following great libraries:

- [viewer.js](https://fengyuanchen.github.io/viewerjs/)
- [exif.js](https://github.com/exif-js/exif-js)
- [UTIF.js](https://github.com/photopea/UTIF.js/)
- [tga.js](https://github.com/vthibault/tga.js/)
- [psd](https://github.com/meltingice/psd.js/)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)

## Installation

This extensions is packaged with any new version of TagSpaces

## Source code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/image-viewer)

## Development

If you want to extend this extensions, please follow our general [extension development guide](/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/image-viewer/LICENSE.txt)
