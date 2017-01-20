# Browsing Your Files

When you navigate to a folder in your active location, the files contained in the selected folder will be displayed on the main file browsing area of the user interface. TagSpaces offers flexible, configurable views to display your files. These views are called **perspectives**.

## Perspectives overview

Perspectives are not an integral part of TagSpaces, but exist as modular extensions. This modular approach allows for more flexibility, easier development, and customisability of each separate perspective. By default, there are four perspective extensions included in TagSpaces, which are:

* [List Perspective](extensions/perspectiveList.html) - Presenting your files as list, optimized for simple file management.


* [Grid Perspective](extensions/perspectiveGrid.html) - Presenting your files as grid of thumbnails, if enabled. Unlike other perspectives, the grid can also display folders.


* [ImageSwiper Perspective](extensions/perspectiveImageSwiper.html) - A perspective optimized for browsing and viewing image files. Use this for your photo or image folders.


* [FolderViz Perspective](extensions/perspectiveGraph.html) - This is experimental perspective which applies some information visualization concepts to presenting your folder and file structures.


## List perspective

The most common way of presenting files in a folder, is the list format. In the list perspective, all files are represented as rows of a list, just like ou woudl find in most file browsing applications.

***IMAGE***

Each row is broken down into columns, which give information about the files in quetson. The columns, from left to right are:

* **File extension**  -  A color coded icon, representing the file type. (Scroll down to [Common features -> Color coded file extensions](#color-coded-file-extensions) to learn more about this feature.) Underneath the file extension icon, there is also a checkbox, which can be used to easily select one or more files. This also mean, that  `Ctrl or Shift + click` will **not** work for selecting multiple files.


* **Title** - The file's title is basically the filename sans the extension or any tag information. By default, TagSpaces stores tags as part of the filename. To learn more about how this is achieved, see the [*Tagging*](tagging.md) section.


* **Tags** - All the tags that are applied to the file will appear here, with the right background and font color. To learn more about tag colors, refer to the [*User interface -> Tag Library](userinterface.md#tag-library) section.


* **Size** - This is the file size, represented in a human readable format.


* **Date modified** - The time the file had been last modified, in a format of `YYYY.MM.DD-hh:mm:ss`

> **Hint:** To change the list oreder, you can click the list column headers. Each header offers biderectional sorting, although there is currently no indicator of either the direction, or the active sorting mode.

**IMAGE** (with list header closeup, and highlighted)


### List overflow menu options

The **Floating Action Button** (FAB) at the bottom right corner, hides a contextual overflow menu applicable for the currently active perspective. The List perspective offers its own set of options, that will allow you to manage the list of files in certain ways.

***IMAGE***

* **Toggle Select All Files** will mark every file on the list as selected.


* **Add/Remove tags** will allow you to manage tags on selected files (only available when there is an active selection, works on multiple files simultaneously). To learn more about how this feature works, refer to the [Tagging -> Tagging using context menus](tagging.md/tagging-using-context-menus) section.


* **Copy/move files** will allow you to copy or move one or more selected files (only available when there is an active selection, works on multiple files simultaneously). Selecting this option will present you wit the Move or Copy File(s) dialog. After specifying the target director, which can be anywhere on the filesystem, even outside your connected locations, you can choose to move or copy them by pressing the right button.

***IMAGE***

* **Delete files** will allow you to delete the files or files selected (only available when there is an active selection, works on multiple files simultaneously).


* **Show subfolders content** - If you don1t care about folder structure, or do not know where in the hierarchy you would find a necessary file, you can turn this option on, to show every file from all subfolders, recursively, starting from your current directory. The list will display all files in order, without any indication of their actual locations.

* **Export to CSV** will create a **Comma Separated Variable** from all displayed files, be it from the current folder, or from the full folder hierarchy, and save it n a folder of your choice. The generated CSV contains `path,title,size, tag1, tag2,tag3,...`, where each new line represents a separate file.


## Grid perspective
tbd

### Showing folders in the grid perspective
This new feature gives shows in folders in the perspectives in addition for files. It enables a more intuitive way for navigating through folders, which is common the file managers build in the most modern operating systems. We implemented it as a pilot in the grid perspective, but the feature is not enabled by the default. It can be activated from the *More Operations* dialog of the extension. This dialog can be opened from a menu item with the same name located in the extensions main menu (the yellow button in the right bottom corner). See the screenshot bellow for details. We plan to integrate it also in the list perspective.

![subfolder support in the grid perspective](media/subfolder-support-grid-perspective.png)


## ImageSwiper perspective
tbd

## Common features

### File context menu


### Color coded file extensions
In the grid and list perspective there is support for color coded file extensions, allowing you a better visual recognition of the file type.  For the most common file extension we defined a custom color for extension buttons in the different perspectives. In the following screenshot, you can see the colored extensions in the list perspective.

![color codes file extensions in the list perspective](/media/color-coded-file-extensions-list.png)

Of course you can switch this feature off. Just go to the general tab of the settings and disable the *Enable colored file type extensions* checkbox. In the future we are planing to make the colors for the extensions configurable.


### Generating live thumbnails for photos

In the Grid and ImageSwiper perspectives TagSpaces generates thumbnails for JPG and PNG files on the fly. These small image previews are not persisted on your system, so every time you open a folder they will be regenerated. TagSpaces generates thumbnails only for image files which are currently visible in the application.
