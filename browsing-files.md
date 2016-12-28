# Browsing File and Folder Structures

tbd

## Working with the List perspective

## Working with the Grid perspective
tbd

### Showing folders in the grid perspective
This new feature gives shows in folders in the perspectives in addition for files. It enables a more intuitive way for navigating through folders, which is common the file managers build in the most modern operating systems. We implemented it as a pilot in the grid perspective, but the feature is not enabled by the default. It can be activated from the *More Operations* dialog of the extension. This dialog can be opened from a menu item with the same name located in the extensions main menu (the yellow button in the right bottom corner). See the screenshot bellow for details. We plan to integrate it also in the list perspective.

![subfolder support in the grid perspective](media/subfolder-support-grid-perspective.png)


## Working with the ImageSwiper perspective
tbd

## Common features

## Generating live thumbnails for photos

In the Grid and ImageSwiper perspectives TagSpaces generates thumbnails for JPG and PNG files on the fly. These small image previews are not persisted on your system, so every time you open a folder they will be regenerated. TagSpaces generates thumbnails only for image files which are currently visible in the application.

### Color coded file extensions
In the grid and list perspective there is support for color coded file extensions, allowing you a better visual recognition of the file type.  For the most common file extension we defined a custom color for extension buttons in the different perspectives. In the following screenshot, you can see the colored extensions in the list perspective.

![color codes file extensions in the list perspective](/media/color-coded-file-extensions-list.png)

Of course you can switch this feature off. Just go to the general tab of the settings and disable the *Enable colored file type extensions* checkbox. In the future we are planing to make the colors for the extensions configurable.