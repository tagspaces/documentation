---
title: Thumbnail Generation
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

When the user opens a given folder, the application scans its content and tries to generate mini previews of file content automatically. These mini previews are known also als thumbnails.

## Thumbnails on local folders

The free version of TagSpaces supports thumbnail generation only for image and video file formats e.g. JPG, PNG, MP4.

The PRO version, on the other hand, tries to create thumbnails from the following files format.

- Images: PNG, JPG, BMP, GIF, SVG, WEBP, TIFF
- Videos: WEBM, OGV, MP4, M4V
- Notes: HTML (uses the embedded screenshot, if created with the TagSpaces [Web Clipper](/web-clipper/)
- Text files: TXT, MD, source code files (uses the first lines found in the files)
- Bookmarks: URL (uses the embedded screenshot, if created with the TagSpaces [Web Clipper](/web-clipper/))
- Ebooks: EPUB (uses the integrated ebook cover image)
- Archives: ZIP (uses the first found image in the archive)
- Documents: PDF
- Office Documents: ODT, ODP, ODS, DOCX, XLSX, PPTX (uses the embedded preview image if available)

<CenteredImage
    caption="Showing generated thumbnails in TagSpaces"
    src="/media/tagspaces-thumbnails.png"
    showCaption
  />

The generated thumbnails are persisted in the `.ts` folder located in every folder you browse. This feature significantly accelerates the browsing of folders containing many files. The thumbnail generation can be activated or deactivated in the application settings.

<CenteredImage
    caption="Activating the thumbnails generation in the settings"
    src="/media/tagspaces-thumbnail-generation.png"
    showCaption
  />

## Thumbnails on S3 locations

Thumbnails are not not generated on S3 locations. The reason for this is that the application have to download all files from the current folder in order to generate the thumbnails. This can be unpractical by folder with many files. There is one exception if you are uploading files to a s3 location, the application will try to generate a thumbnail during the upload process.
