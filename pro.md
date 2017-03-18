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

#### Configure the thumbnails size and format
We have added the ability to configure the size and the file type of the create thumbnails. Now you can choose between `PNG` and `JPG` file types. For the thumb size you can choose between several sizes from `100` to `1000` pixel, limiting the height or width of the thumbs depending on which one is bigger.

![screenshot showing the configuring of the thumbnails size and format](/media/configurable-thumbnails.png)

> **Note:** For compatibility and performance reasons, when you change the thumbnail image type to `JPG`, the thumb is still saved with `PNG` extension.

### <i class="profeature">pro</i>Geo Tagging
In order to use this feuature you have to utilize the smart tag `geo-tag`. When you apply it to a file, the dialog from the following screenshot will appear. Here you see a map from [openstreetmap](https://www.openstreetmap.org) and you can select geo coordinates of any location somewhere in the world.

![Geotagging in TagSpaces](/media/tagspaces-geotagging.png)

### <i class="profeature">pro</i>Adding folders meta information {#folderMeta}

Geo Tagging can be use to add geo coordinates as a tag to any kind of files. It is usefull to connect your photos or other documents with a geo location. This can be usefull for planning you vacation or next trip. In order to use this feuature you have to use the smart tag `geo-tag`. When you apply it to a file, the dialog shown on following screenshot will appear. Here with the help of the [OpenStreetMap](https://www.openstreetmap.org) and you can select any location somewhere in the world. It's geographic coordinates will be converted to latitude and longitude, so for example the tag `-17.8114561+29.0917969` will symbolize latitude in decimal degree of *17.8114561° S* and longitude of *29.0917969° E*.

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


### <i class="profeature">pro</i>Deleting files to trashcan {#trashBin}

In the setting of TagSpaces you can activate a checkbox "Move deleted files or folders to trash bin". Aftet activating it, all files deleted in TagSpaces will be send to the *Trash*, *Trashbin* or *Recylce bin* depending on your operating system. From these locations, you files can be easily recovered in case of a unintended deletion.

![Activating the trash bin functionality](/media/activating-trashcan.png)

### <i class="profeature">pro</i>File Description
TODO


### Pro settings

![settings for the pro functionality](/media/settings-tab-pro.png)
