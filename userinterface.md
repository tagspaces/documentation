# User Interface

## Start screen
The following screen shows a typical start screen of TagSpaces with an opened tag library, and showing a folder's content with the "list perspective" extension.

(***Todo: Extend this bit and explain about material design, plus cross-platoform uniformity***)


![Start screen](media/home-screen.png)

The user interface of the application consists of the following main areas:

* [Location management dropdown](#location-manager) - located below the TagSpaces logo
* [Folder navigator area](#folder-navigation) - located at the leftmost area of the user interface
* [Tag library area](#tag-library) - located at the leftmost area of the user interface (replaces the folder navigator, when active)
* [File browser area](browsing-files.html) - located in the main area of the user interface
* [File content area](viewing-files.html) - if a file is opened, the main area splits into two panes. The file viewer will occupy the right pane, while the left will be preserved for the file browser.
* [Settings dialog](#settings) - started by the gear-wheels button in the bottom left part of the user interface
* (***ToDo: Add FAB to the list***)

![explanation of the applications user interface areas](/media/tagspaces-ui-areas.png)

## Location manager
A **location** is a folder on your local file system, containing files and other folders, which will serve as a root for listing subfolders, files and documents. Typical locations are for example the folder where you collect your photos or folders where you store your documents, ebooks or music.

> **Hint:** Do not choose very large directories such as your *home folder* as a location root folder, as this may lead to performance issues.

The **location manager** is implemented as a dropdown menu, which allows you to switch very quickly between different locations. Once opened, you will see a list of the currently connected locations. Here you can select any location, or access its properties, by clicking the pencil icon next to its name. You can add new locations, by clicking on the **Connect new location** button.

![Location manager](/media/location-manager.png)

In the **location properties dialog** you can update the name of the location or change the path to the root folder. You can also select here the default [**perspective**](browsing-files.html#perspectives), used with this location. For example on location containing mainly images and photos, you may want to open with [**image-swipper**](/extensions/perspectiveImageSwipper) perspective, offering a preview of the images and easy navigation through them.

With the *remove location* button you can remove the location permanently from TagSpaces. This operation will not affect your files, it only removes the connection to TagSpaces.

![Location properties](/media/location-properties.png)

### Startup location
By default TagSpaces opens the last opened location on startup. You can change this behaviour by first enabling on the option *Use default location in the as a startup location* in the general tab of the settings, then turning on the **Startup location** switch in the properties dialog of a desired startup location. The selected location will then open by default on every start of the application. The current startup location is marked by a different color in the location dropdown list.

## Folder navigation

To open the folder navigation view on the left pane, you need to click the folder icon, in the middle of the view-chooser widget at the bottom of the left panel.

![Folder navigator](/media/folder-navigation.png)

### How to use navigation

Folder navigation is simple and intuitive. You will be presented with a grid-list of all the subfolders found in your location root. Clicking one of these will navigate to that folder. The current folder will now be represented as a new list item **(1)** underneath the top level folder **(2)**, with any subfolders listed as a grid at the bottom **(3)**.

To navigate back, you can either click the *up* button on the grid **(4)**, or click on a folder higher up in the list.

(***ToDo: Image with numbers***)

> **Hint:** A neat trick, that allows for a lot more advanced navigation is to list the subfolders of any folder higher up on the path, allowing you to navigate straight there. To list the subfolders of any item, click on the black folder icon, next to a folder's name.

(***ToDo: Image crop***)

### The context menu

Clicking on the "overflow" button besides folder list items, will open up a context menu, with directory operations. From here you can reload folder contents, rename or delete the folder, Add a new subfolder, or open it in your operating system's default file manager.

#### <i class="profeature">pro</i> Updating thumbnails and folder properties

TagSpaces PRO offers two more options in the context menu:

* **Update thumbnails** will refresh the thumbnail cache. TagSpaces generates non-persistent image thumbnails by default. To fully access the powerful thumbnail generating capabilities of TagSpaces PRO, you must first enable this feature from the *PRO* tag of the Options dialog. Once enabled, Tagspaces PRO will generate persistent thumbnails of other files types as well, such as PDF, docx, epub, etc. Thse imaghe thumbnails offer a quick preview of the file's contents when browsing in **Grid perspective** (***Todo: Add link***)

* **Directory properties** will open a a dialog, that allows you to view (but not modify) the folder path, add or edit a description and tags of the directory. To use this feature, you will need to enable **Enable the use of a hidden folder(.ts) for storing meta data and thumbnails** option from the *PRO* tab of the options dialog.

>**Hint:** Generating thumbnails, or adding meta information to a folder will not alter the folder or its contents, but place a hidden subdirectory in it, containing the thumbnails and a .json file with the meta information.


### Alternative folder navigation
Navigation through folder is an essential use case of TagSpaces, that's we have provided an alternative way of doing this operation, in case you have closed the left panel of the application or you are on a mobile device.

![alternative folder navigator](/media/folder-navigation-alternative.png)

Clicking on a folder in the alternative navigator will open a context, where you can execute some basic folder operations and navigate to some sub folder.

### Go to previous folder button (***Todo: This should be moved up***)
Other convenient feature is the so called "go to previous folder" button in the folder navigation area. Which for example can be used to leave your current location and browse files in parent folder of a given location.

![go to previous folder button](/media/goto-previous-folder.png)

## Tag Library
TODO
* Open the tag library
* Clarifying tag and tag group terms
* Creating and importing tag groups
* Explaining the context menu of a tag
* Explaining the context menu of a tag group (sorting and other functionalities)

![tag library general overview](/media/tag-library.png)

> **Hint** You can easily open the tag library by the following keyboard combination `s t`.

> **Hint:** Find out how to change the default tag background and text colors in the [settings documentation](#settings)


## Settings
The setting of the application can be opened from the button with gear-wheels in the bottom of the left area, as displayed in the following screenshot. Alternatively you can use the main menu `View > Settings`.

![open settings dialog](/media/open-settings-dialog.png)

TODO
* Explaining all the functionalities in the general tab of the settings

![Setting tab general](/media/settings-tab-general.png)
