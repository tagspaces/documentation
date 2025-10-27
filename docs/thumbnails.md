---
title: Thumbnail Generation
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

When a user opens a folder, the application automatically scans its contents and attempts to generate mini-previews, or thumbnails, for the files in the folder.

## Thumbnails on Local Folders

When you navigate to a folder, TagSpaces will try to generated automatically thumbnails for the supported file types in this folder. The following file types are supported, a full list can be found [here](/supported-file-formats).

- **Images:** PNG, JPG, BMP, GIF, SVG, WEBP, TIFF
- **Videos:** WEBM, OGV, MP4, M4V
- **Notes:** HTML (utilizing embedded screenshots, if created with the TagSpaces [Web Clipper](/web-clipper/))
- **Text Files:** TXT, MD, source code files (using the first lines found in the file)
- **Bookmarks:** URL (using the embedded screenshot, if created with the TagSpaces [Web Clipper](/web-clipper/))
- **Ebooks:** EPUB (using the integrated ebook cover image)
- **Archives:** ZIP (using the first image found in the archive)
- **Office Documents:** PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX (using embedded preview images, if available)

<CenteredImage
    caption="Showing files with generated thumbnails in the grid perspective"
    src="/media/grid/folder-with-generated-thumbs.avif"
    showCaption
/>

The generated thumbnails are stored in the `.ts` folder located within each folder you browse. This caching mechanism significantly improves the speed of browsing folders containing many files. Thumbnail generation can be enabled or disabled in the application settings.

<CenteredImage
    caption="Activating the thumbnails generation in the settings"
    src="/media/settings/settings-enable-tmb-generation.avif"
    showCaption
    maxWidth={700}
/>

## Thumbnails on S3 Locations

When you upload files to an S3 location, TagSpaces will attempt to generate thumbnails during the upload process.
