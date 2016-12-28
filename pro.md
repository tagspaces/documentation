# TagSpaces PRO

## Introduction

tbd

## Features {#features}
<!-- Content from  https://tagspaces.org/products/pro/-->

### <a id="tagSidecarSaving" href="#tagSidecarSaving">Saving tags in sidecar files</a><sup style="color: gray">&nbsp;BETA</sup>

As alternative to saving the tagging information in the file names, TagSpaces PRO offers saving this kind of meta information in a sidecar files located in a hidden `.ts` folder. This option can be activated in the settings of the application as shown in the following screenshot.

<span class="label label-info">Note</span> Please note that by default the `.ts` folder is hidden only on OSX and Linux operating systems, on Windows folders with dot in front of their name are not hidden by default. Setting these folders as hidden on Windows can be achieved manually or with script if needed.

<figure>
  <img title="screenshot showing where to activate the saving of the tagging information in sidecar files" src="https://www.tagspaces.org/content/v2-2/activating-tags-sidecars.png" class="img-responsive center-block">
  <figcaption>Activating the persistend of the tags in sidecar files</figcaption>
</figure>

After the activation, the application will created for every tagged file an extra file having the same file name as the source file but with the additional JSON extension. For example after tagging some files in some of your file locations you will have a similar file structure.


    ~ location (with your files)
    ├── subfolder
    │   ├── .ts
    │   │   ├── file1.jpg.json
    │   │   └── file2.pdf.json
    │   ├── file1.jpg
    │   └── file2.pdf
    ├── .ts
    │   ├── file3.png.json
    │   └── file4.docx.json
    ├── file3.png
    └── file4.docx


The main advantage of this solution is that the name of the files is not altered by tagging and there is theoretically no limit in amount of tags you can add to a given file. However it has the following drawback. If you move or rename tagged files in TagSpaces it will take care of the sidecar file, which will also renamed or moved in the appropriate folder. But if you move or rename this file in an external applicaiton, you have to move or rename the sidecar files by hand. The same hold true for the deleting a file from an external file manager. It will not automatically delete the sidecar file in the `.ts` folder.

<span class="label label-info">Note</span> If you want to have the files located in the `.ts` folder synched with some cloud service such as Dropbox or Google Drive you have to enable the synching of hidden folders and files.

### <a id="thumbnailsGeneration" href="#thumbnailsGeneration">Generating persistent thumbnails</a><sup style="color: gray">&nbsp;BETA</sup>

In perspectives supporting showing of file previews like [Grid](https://www.tagspaces.org/extensions/perspectiveGrid) and [ImageSwiper](https://www.tagspaces.org/extensions/perspectiveImageSwiper), TagSpaces PRO is generating thumbnails for the visible files in the perspective. Currently the application tries to generated thumbnails for the following files types:

  * Images: PNG, JPG, BMP, GIF, SVG, WEBP
  * Videos: WEBM, OGV, MP4, M4V
  * Notes: HTML
  * Audios formats: MP3 (with embedded thumbnail)
  * Ebooks: EPUB (with integrated cover image)
  * Archives: ZIP (it just takes an image found in the archive)
  * Office Documents: PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX

In comparison to the community edition which generates thumbnails (only for PNGs and JPGs) on every opening of a folder, the PRO version persists the generated thumbnails in the `.ts` folder located in every folder you browse with it. This feature significantly accelerates the browsing of folders containg many files. The thumbnail generation can be activated in the PRO tab of the application settings.

<figure>
  <img title="screenshot showing where to activate the thumbnail generation" src="https://www.tagspaces.org/content/v2-2/activating-thumbnails-generation.png" class="img-responsive center-block">
  <figcaption>Activating the thumbnails generation</figcaption>
</figure>

Here is a short video showing the thumbnail generation in action.

<video controls autoplay loop src="/media/demo-tmb-generation.mp4"></video>

### <a id="advancedSearch" href="#advancedSearch">Advanced search</a>

The advanced search dialog in TagSpaces PRO contains two more search features:

#### Search by file type

In the file type dropdown you can specify a group of files you want to search. The following file type groups are supported:

* Pictures: JPG,PNG,GIF,... (query shortcut t:picture)
* Documents: PDF,ODF,DOCX,EXL,... (query shortcut t:doc)
* Notes: MD,TXT,HTML,... (query shortcut t:note)
* Audio: OGG,MP3,WAV,... (query shortcut t:audio)
* Video files (WEBM,OGV,MP4,... (query shortcut t:video)
* Archives (ZIP,RAR,TGZ,7Z,... (query shortcut t:archive)

<span class="label label-info">Note</span> You can use the query shortcut for a given file type directly in the search box, without opening the advanced search dialog. So for example the search query `t:audio coldplay` will give you all audio files containing the word coldplay.

#### Search history

For quick access TagSpaces PRO keeps a history of your last 15 search queries in a list. This list can be cleaned by selecting the last item in it called "Clear search history" in it.

<figure>
  <img title="screenshot showing user interface of the advanced search menu" src="https://www.tagspaces.org/content/v2-2/advanced-search-pro.png" class="img-responsive center-block">
  <figcaption>Advanced search menu with activated search history and search by file types</figcaption>
</figure>

### <a id="fullTextSearch" href="#fullTextSearch">Text extraction and full text search</a><sup style="color: gray">&nbsp;ALPHA</sup>

After activating the text extraction checkbox in the settings, TagSpaces PRO will try to extract the text content of files you are currently browsing. This text content is saved in the hidden `.ts` folder and is considered later by the search. Since this is a early experimental feature, please don't relay only on ly on it.

These file formats are currently supported:

* Notes: HTML, MD, TXT (extracts the text content)
* Office Documents: PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX (extracts the text content)
* Images: JPG (extracts Exif and IPTC informations)
* Audios formats: MP3 (extracts id3 tags)
* Ebooks: EPUB (extracts the text content)

<figure>
  <img title="screenshot showing how to activate the text extraction functionality" src="https://www.tagspaces.org/content/v2-2/activating-text-extraction.png" class="img-responsive center-block">
  <figcaption>Activating the text extraction functionality</figcaption>
</figure>

<span class="label label-info">Warning</span> Please note, that this is still a very experimental functionality which on directories with many files, may lead to freezing of the application.

### <a id="trashBin" href="#trashBin">Deleting files to trashcan</a>
,
In the setting of TagSpaces you can activate a checkbox "Move deleted files or folders to trash bin". Aftet activating it, all files deleted in TagSpaces will be send to the *Trash*, *Trashbin* or *Recylce bin* depending on your operating system. From these locations, you files can be easily recovered in case of a unintended deletion.

<figure>
  <img title="screenshot showing where to activate the trashbin functionality" src="https://www.tagspaces.org/content/v2-2/activating-trashcan.png" class="img-responsive center-block">
  <figcaption>Activating the trash bin functionality</figcaption>
</figure>

### <a id="folderMeta" href="#folderMeta">Adding folders meta information</a>

TagSpaces PRO gives you the ability to add tags and a description to every folder connected to it. These information is managed in the folder properties dialog, which can be accessed as shown in the following screenshots.

<figure>
  <img title="screenshot showing how to access the folder properties" src="/content/v2-2/showing-folder-properties.png" class="img-responsive center-block">
  <figcaption>Opening the folder properties dialog</figcaption>
</figure>
<br><br>
<figure>
  <img title="screenshot showing the folder properies dialog" src="https://www.tagspaces.org/content/v2-2/folder-meta-tagging-description.png" class="img-responsive center-block">
  <figcaption>Folder properties dialog with tags and description</figcaption>
</figure>


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
