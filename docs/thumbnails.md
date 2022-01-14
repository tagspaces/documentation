---
title: Thumbnail Generation
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

When the user opens a given folder, the application scans its content and tries to generate mini previews of file content automatically. These mini previews are known also als thumbnails.

The free version of TagSpaces supports thumbnail generation only for image and video file formats e.g. JPG, PNG, MP4. The PRO version, on the other hand, tries to create thumbnails from the following files format.

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

## Custom thumbnails

<ProFeature /> 
TagSpaces Pro offers the ability to manually set and change the thumbnail of **any file type and folder**. The following video show how to set a custom image as a thumbnail to any folder used in TagSpaces.

<!-- <VideoYT
    youtubeId="ZgnRRO1zdGc"
    title="Video showing hot manually add thumnbail to a folder"
    posterUrlBak="/media/videoposters/linking-files-and-folders.jpg"
    height={550}
  /> -->

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ZgnRRO1zdGc?rel=0" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>

Adding a custom thumbnail to any kind of file type, can be achieved in a similar manner from the properties section of any file.
