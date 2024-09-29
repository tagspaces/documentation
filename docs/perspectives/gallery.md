---
title: Gallery Perspective
tags: [perspective]
---

import { ProFeature, EntFeature, CenteredImage } from '@site/src/components/CommonBlocks'

<ProFeature />

This perspective offers basic image gallery functionality, including previewing images from the current folder and a presentation mode with full-screen viewing.

<CenteredImage
    caption="Showing the regular view of the gallery perspective"
    src="/media/gallery/gallery-masonry.png"
    showCaption
  />

:::tip
This perspective can only be activated in folders containing images and photos in file formats such as JPG, PNG, GIF, BMP, SVG, WEBP, etc.
:::

## Functionalities in the Toolbar

<CenteredImage
    caption="Showing the regular view of the gallery perspective"
    src="/media/gallery/gallery-scroll.svg"
    showCaption
  />

The toolbar of the gallery perspective offers the following functionalities:

- **(1) Navigate to parent folder** - Opens the parent folder of the current folder.
- **(2) Switch to masonry view** - Returns to the initial masonry view.
- **(3) Folder properties** - Opens the [properties](/ui/userinterface#folder-properties) of the current folder.
- **(4) Open previous/next image** - Navigates to the previous or next image file in the current folder.
- **(5) Start/stop presentation mode** - Toggles the slideshow presentation mode, displaying images from the current folder for 3 seconds each. (Future releases will allow configurable durations.)
- **(6) Full screen mode** - Opens the currently selected file in full screen mode.
- **(7) File properties** - Opens the properties of the current file in the regular properties area.
- **(8) Thumbnail bar modes** - Toggles through thumbnail bar positions: at the top, on the left, or hidden. These modes apply in full screen mode as well.
- **(9) Import EXIF/IPTC** - Opens the dialog to import EXIF/IPTC information from your files.
- **(10) Help** - Opens this page for further guidance.

:::tip
In full-screen mode, you can navigate through the files using the left and right arrow keys on your keyboard. On touch-screen devices, images can be changed by swiping left or right.
:::

## Importing EXIF/IPTC Data from JPGs

Many digital cameras embed additional metadata, such as geolocation, in the photos they capture. One common format for this metadata is [EXIF](https://en.wikipedia.org/wiki/Exif). Another format is [IPTC](https://en.wikipedia.org/wiki/IPTC_Information_Interchange_Model), which is often used for embedding keywords and descriptions in JPG files. The gallery perspective can read and convert the following data into TagSpaces' tags:

- **EXIF geolocation** - Converts latitude and longitude into geo-tags using [Plus Code](https://maps.google.com/pluscodes/) or MGRS format.
- **EXIF shooting date and time** - Converts the shooting date and time into a date-time tag.
- **IPTC keywords** - Imports IPTC keywords as regular tags.

<CenteredImage
    caption="Dialog for importing EXIF/IPTC data from JPGs"
    src="/media/gallery/import-exif-iptc.png"
    showCaption
  />
