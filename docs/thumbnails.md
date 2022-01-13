---
title: Thumbnail Generation
---

import { ProFeature } from '@site/src/components/CommonBlocks';

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

<figure>
  <img alt="Showing generated thumbnails in TagSpaces" src="/media/tagspaces-thumbnails.png" className="img-responsive center-block" />
  <figcaption>Showing generated thumbnails in TagSpaces</figcaption>
</figure>

The generated thumbnails are persisted in the `.ts` folder located in every folder you browse. This feature significantly accelerates the browsing of folders containing many files. The thumbnail generation can be activated or deactivated in the application settings.

<figure>
  <img alt="screenshot showing where to activate the thumbnail generation" src="/media/tagspaces-thumbnail-generation.png" className="img-responsive center-block" />
  <figcaption>Activating the thumbnails generation in the settings</figcaption>
</figure>

## <a id="customThumbnails" href="#customThumbnails">Custom thumbnails for files and folders</a>

<ProFeature /> TagSpaces Pro offers the ability to manually set and change the thumbnail of every file type and folder. The following video show how to set a custom image as a thumbnail to any folder used in TagSpaces.

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ZgnRRO1zdGc?rel=0" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>

Adding a custom thumbnail to any kind of file type, can be achieved in a similar manner from the properties section of any file.
