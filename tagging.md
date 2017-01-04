# Organize your data with tags

<!-- toc -->

## Motivation
Tagging and tags is fresh and better alternative of categorizing and grouping things.
Tagging allows people to call thing with their own words. They don’t need to conform with keywords or categories in internet created by somebody else. Allow them to describe what they’re seeing in their own words, to imbue the experience with their own meaning. Tagging spares of your time, it creates a variety of tags in different sites and can make the searching for a specific song or a movie or a book or whatever you’re looking for much more easy and faster.

Tags are personal thing. Tagging something is your emotional response and not simply a taxonomic decision. With using tags, people have the control to define things in the web - not only for music, literature, games and movies, but also public websites, data repositories and consultations. Tagging is a new indirect way of control to express your mind and to call things your way - you can call it a "form of freedom of speech" if you want to go that far. Tagging is a power to create your own genres in movies and music for example.

## File Tagging based on filename{#file-tagging}

TagSpaces supports tagging of files in a multi platform way. It uses basically the name of the file to save this kind of meta information. As an example if you want to add the tags `vacation` and `alps` to a image named `IMG-2653.jpg`, the application will simply rename it to `IMG-2653[vacation alps].jpg`. File renaming is of course very controversial decision (see our users [discussion]), with its own limitations (on some operating systems the file path length is limited to ca. 256 characters), but it allows a portable way for adding tags on every platform (even cloud based).

![Filename tagging](media/filename-tagging.png)

## Tagging with Drag & Drop

The user interface of the application is design to be usable on touch screens, but for the pure desktop, we support many drag & drop operation such as:

* Adding tags from the tag groups to files in the list & grid perspectives and to the file viewer
* Moving tags from one tag group to another

<video src="/media/tagspaces-drag-drop.mp4" autoplay="true" loop="true" poster="/media/tagspaces-drag-drop.png" class="img-responsive"></video>

## Tagging using keyboard shortcuts
TODO:
* Setting individual shortcuts for single tags

## Smart tags

TODO
* General description and purpose
* Date and time based
* Geo location

![tag library general overview](/media/smart-tags-group.png)

Smart tag formats:
* Year: 2016
* Month: 201605
* Date: 20160529
* DateTime: 20160529~124532 / 20160529!124532
* (Time: 124323)
* Year Ranges: 2016-2018
* Month Ranges: 201605-201701
* Date Ranges: 20160531-20160603
* DateTime: 20160529~124532-20160529~154500 20160529!124532-20160529!154500

![date time smart tag editor](/media/tageditor-datetime.png)

Geo tag

## <i class="profeature">pro</i>File Tagging based on sidecar files {#tagSidecarSaving}
As alternative to saving the tagging information in the file names, TagSpaces PRO offers saving this kind of meta information in a sidecar files located in a hidden `.ts` folder. This option can be activated in the settings of the application as shown in the following screenshot.

> **Note** Please note that by default the `.ts` folder is hidden only on OSX and Linux operating systems, on Windows folders with dot in front of their name are not hidden by default. Setting these folders as hidden on Windows can be achieved manually or with script if needed.

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

## <i class="profeature">pro</i>Folder Tagging
TODO


