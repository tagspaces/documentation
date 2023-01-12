import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# 3D Viewer

A TagSpaces extension for opening 3d file formats. The extension is introduced for first time in version 5.2 of TagSpaces.

## Features

- 3D preview of GLB, GLTF, STL and OBJ files
- Rotation of the models with mouse dragging
- Use the mouse wheel to zoom in and out,
- Moving the mouse by hold right click will shift the rotation center of the model,
- Save screenshot of the current 3D rendering as PNG file

<CenteredVideo
    caption="The 3D viewer showing 'Ordinary Behavior 2 - Television' (https://skfb.ly/oBEsP) by gozdemrl is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)."
    src="/media/extensions/3d-viewer.mp4"
    posterUrl="/media/extensions/3d-viewer.jpg"
    maxWidth="90%"
    autoPlay
    showCaption
  />

<!-- ![Screenshot of the 3d viewer](/media/extensions/3d-viewer.jpg) -->

## Used libraries

This extension thankfully relays on the following great libraries:

- [model-viewer](https://modelviewer.dev/)
- [viewstl](https://www.viewstl.com/)
- [three.js](https://threejs.org/)
- [FileSaver](https://github.com/eligrey/FileSaver.js/)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)

## Installation

This extensions is packaged with new version of TagSpaces (after version 5.2)

## Source code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/3d-viewer)

## Development

If you want to extend this extensions, please follow our general [extension development guide](/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/3d-viewer/LICENSE.txt)
