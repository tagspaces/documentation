# TagSpaces PRO

## Introduction
TODO

## Community vs PRO comparison
TODO (take if from the website)

## Features  {#features}
TODO add links to the main PRO features described in this documentation
* Sidecar file tagging
* Signed installers
* Advanced search

### <i class="profeature">pro</i>Generating persistent thumbnails<sup style="color: gray">&nbsp;BETA</sup> {#thumbnailsGeneration}

In perspectives supporting showing of file previews like [Grid](https://www.tagspaces.org/extensions/perspectiveGrid) and [ImageSwiper](https://www.tagspaces.org/extensions/perspectiveImageSwiper), TagSpaces PRO is generating thumbnails for the visible files in the perspective. Currently the application tries to generated thumbnails for the following files types:

  * Images: PNG, JPG, BMP, GIF, SVG, WEBP
  * Videos: WEBM, OGV, MP4, M4V
  * Notes: HTML
  * Audios formats: MP3 (with embedded thumbnail)
  * Ebooks: EPUB (with integrated cover image)
  * Archives: ZIP (it just takes an image found in the archive)
  * Office Documents: PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX

In comparison to the community edition which generates thumbnails (only for PNGs and JPGs) on every opening of a folder, the PRO version persists the generated thumbnails in the `.ts` folder located in every folder you browse with it. This feature significantly accelerates the browsing of folders containing many files. The thumbnail generation can be activated in the PRO tab of the application settings.

![Activating the thumbnails generation](/media/activating-thumbnails-generation.png)

Here is a short video showing the thumbnail generation in action.

<video controls autoplay loop src="/media/demo-tmb-generation.mp4"></video>

### <i class="profeature">pro</i>Deleting files to trashcan {#trashBin}

In the setting of TagSpaces you can activate a checkbox "Move deleted files or folders to trash bin". Aftet activating it, all files deleted in TagSpaces will be send to the *Trash*, *Trashbin* or *Recylce bin* depending on your operating system. From these locations, you files can be easily recovered in case of a unintended deletion.

![Activating the trash bin functionality](/media/activating-trashcan.png)

### <i class="profeature">pro</i>Adding folders meta information {#folderMeta}

TagSpaces PRO gives you the ability to add tags and a description to every folder connected to it. These information is managed in the folder properties dialog, which can be accessed as shown in the following screenshots.

![Opening the folder properties dialog](/media/showing-folder-properties.png)


![Folder properties dialog with tags and description](/media/folder-meta-tagging-description.png)

Technically TagSpaces PRO created a sidecar file called `tsm.json` in the hidden `.ts` folder of every folder. This file contains the folder tags and  description.

    ~ location folder (with your files)
    ├── subfolder
    │   ├── .ts
    │   │   └── tsm.json
    │   ├── file1.jpg
    │   └── file2.pdf
    ├── .ts
    │   └── tsm.json
    ├── file3.png
    └── file4.docx


### Pro settings

![settings for the pro functionality](/media/settings-tab-pro.png)
