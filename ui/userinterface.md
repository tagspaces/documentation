# User Interface

<!-- toc -->

## Start screen

TagSpaces opens up as a single-window application that tries to make the best use of any space available, be it large wide screens, or small mobile displays. The user interface, devised along the guidelines of Google's material design specifications, is very adaptable. The application will look the same, regardless of the operating system, or platform it runs under.

This streamlined experience offers familiarity and an ease to use the application across platforms, while you will need to familiarize yourself with its extensive features only once. The following screen shows a typical start screen of TagSpaces with the list of the available locations on left, and content of the currently opened folder with the default perspective in center of the application.


![Start screen](/media/home-screen.png)

The user interface of the application consists of the following main areas:

* [Location management](#location-manager) - located below the TagSpaces logo
* [Folder navigator](#folder-navigation) - located at the leftmost area of the user interface
* [Tag library area](#tag-library) - located at the leftmost area of the user interface (replaces the folder navigator, when active)
* [File browser area](browsing-files.html) - located in the main area of the user interface
* [File content area](viewing-files.html) - if a file is opened, the main area splits into two panes. The file viewer will occupy the right pane, while the left will be preserved for the file browser.

![explanation of the applications user interface areas](/media/tagspaces-ui-areas.png)

## Locations
A **location** is a folder on your local file system, which will serve as a root for listing sub folders, files and documents. Typical locations are for example the folder where you collect your photos or folders where you store documents, ebooks or music.

> **Hint:** Do not choose very large directories such as your *home folder* as a location root folder, as this may lead to performance issues. The reason for this is that TagSpaces is indexing the whole location every time you open it and the indexing can just take time if the location contains many files. On modern computers with SSD harddrives having a location with up to 60000 files is usually not a problem. The current upper limit for files indexed in a locations is 200000.

The **location manager** is can be opened by clicking the case button (1) from the vertical navigation, or by pressing the *CTRL+1* key combination. Once opened, you will see a list of the currently configured locations. Here you can open any location by clicking its name. You can add new locations, by clicking on the **Connect new location** button (2). This button will open the *Connect a Location* dialog, which is very similar to the [*Edit Location*](#regular-locations) dialog. The torch icon (3) indicates **Startup Location**, which is the location loaded automatically on the application start.

Clicking second time on a location name, will trigger the loading of the sub directories in this locations, once loaded this folder will be listed in the **folder navigation area** (5)

![Location manager](/media/location-manager.png)

The location with the cloud icon (6) in front of its name is located in the AWS S3 compatible cloud storage. See [cloud locations](#cloud-locations) for more details.

The location with the light green background color (4) is the **currently opened location**. The 3-dot button located on the most right part of every location in the location manager will open the **context menu** for this location. This menu contains the following menu entries:

* *Edit Location* - will open the [*Edit Location*](#regular-locations) dialog where you can change the location properties such as name or path.
* *Refresh Location Index* - will trigger the indexing process manually, this menu entry is visible only for the currently opened location
* *Move up* - will move the location visually up in the location manager
* *Move down* - will move the location visually down in the location manager
* *Remove location* - will remove the location permanently from the app. This operation will not affect your files, it only removes its reference in TagSpaces.
* *Show in File Manager* - will open the path in your file system to which this location point in the default file manager of your operating system
* *Close Location* - will simply close this location if it is currently opened.


### Location types

In TagSpaces there two type of locations, regular (local) and cloud based (AWS S3 Object Storage). The type can be selected in the create and edit location dialogs.

<!-- You can also select here the default [**perspective**](browsing-files.html#perspectives), used with this location. For example if the  location contains mainly images and photos, you may want to open it with the  [**image-swiper perspective**](/extensions/perspectiveImageSwipper) , offering a preview of the images and easy navigation through them. -->

#### Regular Locations
Regular locations are pointing to a folder located on your local computer. This could be also a folder where you sync locally your Dropbox files or a folder from a connected network drive.

> **Note:** Be careful with connected huge folder located on network drive, depending on the speed of the network, this could lead to performance issues.

![Edit properties of a regular location](/media/edit-regular-location-dialog.png)

The regular locations have the following properties:

* *Location name* - this is the name of location as displayed in the location manager
* *Location path* - the path from your computer, to which this location points
* *Startup location* - turning this switch on will make the location load automatically on application start. You can set only one location to be a startup one.
* *Open this location in read-only mode* <i class="profeature">pro</i> - switches the interface of TagSpaces to read-only mode
* *Enable full text search for TXT, MD and HTML files* <i class="profeature">pro</i> - activates the indexing of the content of text, markdown and HTML files.
* *Switch to manual index creation with persisted search index* <i class="profeature">pro</i> - disables the automatic indexing of a location on its opening. The application will try to open a previously created index located in a file *tsi.json* from the *.ts* folder of the location. This is useful on locations with many files, where the content does not change very often.
* *Watch for external changes in this location* <i class="profeature">pro</i> - once switched on TagSpaces will watch the folder to which the location points and all its sub folders for changes and reflect them in the application.

#### Cloud Locations
These location are pointing to AWS S3 compatible stores (also known as buckets) located in the Internet.

> <i class="profeature">pro</i> Cloud locations are available only in the [Pro](https://www.tagspaces.org/products/pro) and [Enterprise](https://www.tagspaces.org/products/enterprise) editions of TagSpaces.

![Edit properties of a cloud location](/media/edit-cloud-location-dialog.png)

In addition to the regular locations, the cloud locations have the following properties:

* *Location Path* - the path in the bucket to which this location points
* *Access Key* - the access key of a user, who has the rights to open this bucket
* *Secret Access Key* - the secret access key of the user
* *Bucket Name* - the name of the bucket to which this location points
* *Region* - the AWS region, where the bucket is hosted. The dropdown is located on the right from the bucket name.

> Note: *Watch for external changes in this location* is disabled because it is not available for cloud locations.

## Tag Library
The tag library is the place where you can manage and organize the tags with which you can tag your files and folders. To open it, you need to click the button with the tag icon (1), in the vertical navigation placed on the most left part of the application.

![clarification picture for the tag library user interface](/media/tag-library-overview.png)

The tag library has its own [context menu](#tag-library-context-menu), which can be started by clicking the three dot icon on right of (2). The area marked with (3) represents a single [tag group](#tag-groups). On the top of (3) there is a three dot icon which will open the [context menu](#tag-group-context-menu) of this tag group. (4) show a collapse tag group. Every tag group can be collapsed by clicking on the arrow icon in front of the tag group's name. (5) shows a special tag group used for automatically collecting new tags used in the application. (6) shows a sing tag. Every tag has its own three dot icon, which will open its [context menu](#tag-context-menu)

### Tags

The primary purpose of TagSpaces, is tagging files and organizing them. **Tags** are organic and integral parts of TagSpaces. By default, tags are stored as part of the filename, which makes them easily transferable between file and operating systems, without any need to synchronize databases, or do any extra work. A file can organically hold its own tags, as long as changing the filename is permittable.

><i class = "profeature">pro</i> **Hint** In TagSpaces PRO, you have the option to use a hidden file (a so called sidecar file) to store tags related information. This can be useful when you are not able, or not allowed to change filenames, such as with a development project, or working collaboratively on shared documents.

Tags can be anything, form descriptive labels, to categories, ratings, priorities, or dates, timestamps, and smart tags.

> **Hint:** To learn more about the powerful tag management features TagSpaces offers, read the [Tagging section](tagging.html)

### Tag groups

Tags are organized into **tag groups**, which are basically categories for tags with similar purpose and/or characteristics. Tag groups make it easier to navigate, select and manage tags in the system. TagSpaces comes with a few pre-defined tag groups, which you can freely modify, delete, or expand upon. The default tag groups are:

* **Smart tags** include various date based tags and geo location tagging. Learn more about smart tags in the [tagging section](/tagging.html#smart-tags)
* **Common Tags**: This group contains two predefined tags, *book*, and *paper*. This can give you a general idea of the intended purpose of the group.
* **Getting Things Done**: Another useful category that can enhance your productivity, is an implementation of the [GTD time management method](https://en.wikipedia.org/wiki/Getting_Things_Done). Predefined tags here are *done*, *next*, *maybe* and *waiting*.
* **Priorities** are exactly what they seem. These are color coded tags that will be easily identifiable by a simple glance. The three predefined priority tags are:
    * *high* - dark orange background
    * *medium* - orange background
    * *low* - lime background
* **Ratings** are predefined star-rating tags with an identifiable yellow background. As the `*` (asterix) character is considered a 'wildcard' on most file systems (meaning you cannot use it in filenames), giving a star rating as a filename-based tag would be somewhat difficult. With the yellow "rating" tags this problem can be easily solved, so your files can be organized in a rating-based system.
* **Collected Tags** is a group for all other tags you have given to your files or folders that do not belong to any other group. This tag group is created automatically after the option for collecting tags is activated in tab *General* of the application settings.

> **Hint:** All the tag groups except the smart tag are optional and can be removed from the tag library if they are note needed.

### Tag library context menu
This menu contains the following three menu items:

* **Create Tag Group** - Opens the dialog for creating tag groups
* **Import Tag Library** - Start the process for importing tag groups in TagSpaces. Lear more in the [tag sharing tutorial](/tutorials/sharing-tags.html#distributing-the-library)
* **Export Tag Library** - Start the process for exporting tag groups from TagSpaces. Lear more in the [tag sharing tutorial](/tutorials/sharing-tags.html#exporting-the-existing-tag-groups)

![screenshot of the context menu of the tag library](/media/taglibrary-context-menu.png)

To create a new tag group, click on **Create Tag Group**, right underneath the tag groups. This will bring up a dialog, that will allow you to specify a name for your tag group, and the color of tags that belong to that group. color coding tags groups can help to easily distinguish between tags belonging to the same group, or otherwise share common characteristics. You can also specify the text color for the tags, which can be useful when choosing a lighter or darker background, so that the name can contrast.

![screenshot of the dialog for creating new tag groups](/media/new-tag-group-dialog.png)

Selecting the **Import tag library** and **Export tag library** options will allow you to import/export predefined tags, which you have previously created in TagSpaces. This option takes a `JSON` file, previously exported from (probably another instance of) TagSpaces, and imports all the tags contained within, into your system. This can be useful, when you use TagSpaces on multiple systems, or you work collaboratively with others and wish to share the same tags library. To learn more about sharing tags between systems and people, refer to the [Sharing tag libraries](/tutorials/sharing-tags.html) tutorial article.

### Tag group context menu
Tag groups have their own context menu, accessible by clicking the three dot icon next to the tag group's name. The context menu offers the following options and operations:

* **Add tags** - This will open a very simple dialog, allowing to add new tags to the group. You can add more than one tag at once, separating them with commas, like `tag1,tag2,tag3,tag4`
* **Edit Tag Group** - will let you change the tag group's name, the default tag background, and tag text colors.
* **Move Tag Group Up** and **Move tag Group Down** - will allow you to change the tag group's position among other groups.
* **Sort Tag Group** - will sort all tags inside the group alphabetically. Useful after having manually added a number of tags.
* **Delete Tag group** - will remove the tag group from the library, with all the tags contained within.
* **Collect Tags From Current Location <i class="profeature">pro</i>** - will collect all the tags used in the current location in the selected tag group.

![the context menu ot tag group](/media/tag-group-context-menu.png)

> **Hint:** Learn more about how to change the default tag background and text colors in the [settings documentation](#settings) section below.

### Tag context menu
Each tag also offers its own context menu, accessible by clicking or right clicking on the tag. The displayed context menu will be slightly different depending on whether you've accessed it from the left panel tag library, or form a tag that is already added to a file. When accessed from the left panel, you will be presented with four options:

* **Show Files With This Tag**  -  is essentially a tag filter you can apply, so that only files that have the selected tag applied to them, will show.
* **Edit tag**  -  will let you change the tag's name, or background color and text color.
* **Delete tag**  -  will remove the tag from the tag group and the tag library. It will not remove it from any file or folder.

![the context menu of a tag in the tag library](/media/tag-operations-dialog.png)

Accessing the tag context menu from the browsing area in the default perspective will show similar menu, containing the following items:

* **Show Files With This Tag**  -  is a tag filter you can apply, so that only files that have the selected tag applied to them, will show.
* **Edit tag**  -  will let you change the tag's name
* **Remove tag**  -  will remove the tag from the file or the folder on which the tags is assigned.

<!-- **Hint:** You can add key-bindings to any tag. Key bindings are essentially a key combination that allows you to quickly mark a file with the tag in question. just select the file, press the key combination, and the file will be marked.

Key-bindings can be either key combinations, like e.g. `ctrl+a`, which mean you should press these keys simultaneously; or repeated keystrokes, like `e t`, which means you should press these keys in quick succession. Tags that have key bindings will be marked with a little keyboard icon (⌨) in th tag library.

When accessing a tag's context menu from the **file browsing area** (the main area of the User Interface), any modifications will only apply to the tag on the selected file, and **not** to the tag as contained in the tag library. This context menu will still allow you to filter, edit, or remove the tag, and also offer to change its position among the other tags applied to the selected file, moving it left or right.

![](/media/tag-operations-dialog-2.png) -->

> **Hint:** Editing the name of a tag deleting one from the library tags will only affect the library itself. If the same tag had had already been applied to a file, the tag on that file will remain intact. But if you change the color of a tag in the library, it will be reflected on the files marked with that tag as well. This is because of the way TagSpaces handles tags, that essentially become an organic part of the filename.  To learn more about how tagging works, please refer to [File tagging based on filename](tagging.html#file-tagging-based-on-filename) under the Tagging section.

## Browsing Area
The file browsing area normally takes up he majority of the user interface. This is where all files from the currently active folder are displayed, either as a list, grid, or folder tree, depending on the active [**perspective**](browsing-files.html#Perspectives). To learn more about the all file browsing features, navigate to the [File Browsing Section](/browsing-files.html).

![](/media/browsing-area.png)

Clicking on the three dot icon above (4) will open the context menu for the current directory, which contains the following menu items:

* **Open Parent Directory** -
* **Reload Directory** -
* **Rename Directory** -
* **Delete Directory** -
* **Show in File Manager** -
* **New Subdirectory** -
* **New File / Note** -
* **Add Existing File** -
* **Extract Content** -
* **Directory Properties** -

## Preview and properties area
When a file is opened, the main UI area splits into two, the rightmost page becoming the **Preview area**. TagSpaces is capable of natively displaying different file types, from markdown, through HTML and docx, to PDF or various image files. To learn more about all the viewable and editable files, and TagSpaces' full file handling capacity, navigate to the [Viewing Files section](/viewing-files.html) and [Editing Files section](/editing-files.html) respectively.

![](/media/preview-area.png)


![](/media/properties-area.png)

## Zoomable user interface
The user interface of the application zoomable, this allows you to adjust the zoom scale according to your screen resolution and display size. In the desktop you can access the zoom functionality from the **View** in the **Main Menu**. Here you will find zoom in, zoom out functionality and also the possibility to restore the initial zoom factor with **Actual size** menu item.

In the following screenshot you will see the menu options from the **View** sub menu and also TagSpaces with zoomed in interface.

![Zoom menu items](/media/zoomable-ui-menu.png)

And here you will see TagSpaces with zoomed out interface.

![Zoomed out interface](/media/zoomed-out.png)

> **Hint**: If the application is running in a browser, please use the integrated in the browser zooming capabilities.


## Full screen mode
The desktop application can run in a full screen mode, which can be toggled by pressing the `F11` key, or selecting *View -> Toggle Fullscreen* from the **Main Menu.**

![](/media/toggle_fullscreen.png)

> **Hint**: If the application is running in a browser, please use the integrated in the browser full screen mode capabilities.

