---
title: Introduction
---

# User Interface Areas

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

TagSpaces opens up as a single-window application that tries to make the best use of any space available, be it large wide screens, or small mobile displays. The user interface, devised along the guidelines of Google's material design specifications, is very adaptable. The application will look the same, regardless of the operating system, or platform it runs under.

![Start screen](/media/home-screen.png)

This streamlined experience offers familiarity and an ease to use the application across platforms, while you will need to familiarize yourself with its extensive features only once. The following screen shows a typical start screen of TagSpaces with the list of the available locations on left, and content of the currently opened folder with the default perspective in center of the application.

![explanation of the applications user interface areas](/media/main-ui-areas.png)

The user interface of the application consists of the following main areas:

- **(1) [Left Drawer](#left-drawer-area)** - Here you can open the [location manager](/ui/locations) or the [tag library](/ui/taglibrary) and access other important functionalities of the app like the [settings](/ui/settings).
- **(2) [Navigation and Search](#browsing-area)** - Here you can open the search, switch the current location or navigate to a parent folders.
- **(3) [Browsing area](/browsing-files)** - This section is occupied by the so called **perspective** used for browsing files and folders.
- **(4) [Common actions area](#preview-area)** - Here you can access common actions for the currently opened file or folder.
- **(5) [File / Folder properties](#file-properties-area)** - Here you will find some properties for the currently opened file or folder.
- **(6) [Preview area](#preview-area)** - In this area you can preview and/or edit the current file.

## Left Drawer Area

The main drawer of the app is divided in three sub areas.

The one located at the top shows the logo of the app and its current version. Clicking on the app logo will open the **About dialog** of the app, where you can find details about the licensing or check for new app versions. Right beneath the logo you find a bar containing two buttons. The first one called **New** will open a dialog where you can [create files](/creating-files) in TagSpaces. The second button "Connect a location" will trigger the process of connecting local or remote [locations](/ui/locations) in the app.

The area at button contains six buttons. The button with the gear icon located at the left will open the app [settings](/ui/settings). With the button at the most right you can switch between the _light_ and _dark_ [themes](#dark-mode) of the app. If you are using the [TagSpaces Enterprise](https://www.tagspaces.org/products/enterprise/) product this button will be exchanged with a button, which will open the properties of the currently logged user.

The with the four so called radio buttons in the middle, you can switch between the following areas in main part of the drawer:

- **[Location manager](/ui/locations)**
- **[Tag Library](/ui/taglibrary)**
- **[Stored search queries](/search/#stored-search-queries)**
- **Help and feedback** - here you can access the application help, suggest a feature or contact us.

## Browsing Area

The file browsing area normally takes up he majority of the user interface. This is where all files from the currently active folder are displayed, either as a list, grid, or folder tree, depending on the active [**perspective**](/browsing-files#Perspectives). To learn more about the all file browsing features, navigate to the [perspective section](/browsing-files).

![Screenshot showing the file browsing area](/media/browsing-area.png)

The button **(1)** placed in the top left part of the browsing area toggles the [left drawer area](#left-drawer-area).

**(2)** will open the [search](/search) input field.

**(3)** opens a dropdown showing a list of all currently configured [locations](/ui/locations). From this dropdown you can quickly switch to another location.

:::tip
<ProFeature /> If you are in a cloud based location, the icon of the button for changing the location will be a <b>cloud</b>, in other cases the icon will be the <b>briefcase</b>.
:::

The area above number **(4)** shows the name of the current folder and the names of the parent folders in reversed order. The folder names are separated by slashes (/). The parent folders are shown only if the these folders are in the current location. Clicking on the name parent folders will navigate to them.

Clicking the button for current folder **(5)** will open folder context menu, which is described in the next section.

### Folder context menu

The context menu for the current folder contains the following menu items:

- **Reload Directory** - Reloads the content of the current folder
- **Rename Directory** - Opens the folder rename dialog
- **Delete Directory** - Open a dialog where you can confirm the deletion of the folder
- **Show in File Manager** - Opens the folder in the default file manager of the operating system
- **New Subdirectory** - Opens the folder create dialog, where you can enter the name of the new sub folder
- **New File / Note** - Open the dialog for [creating new](/editing-files#creating-files) files / notes
- **Add Existing File** - Opens a file choose where you can select a file from your local files system, which will be added to your current folder in TagSpaces.
- **Import macOS tags** - This menu item is visible only on macOS, selecting it will start the attaching of native macOS tags as TagSpaces tags.
- **Default Perspective** - will open the current folder in the default [Grid/List](/perspectives/grid) perspective
- **Gallery Perspective** - will open the current folder in the [Gallery](/perspectives/gallery) perspective
- **Mapique Perspective** - will open the current folder in the [Mapique](/perspectives/mapique) perspective
- **Kanban Perspective** - will open the current folder in the [Kanban](/perspectives/kanban) perspective
- **Directory Properties** - Opens the [properties](/ui/userinterface#folder-properties-area) of the current folder

## Preview area

When a file is opened, the main UI area splits into two, the rightmost page becoming the **Preview area**. TagSpaces is capable of natively displaying different file types, from markdown, through HTML and docx, to PDF or various image files. To learn more about all the viewable and editable files, and TagSpaces' full file handling capacity, navigate to the [Viewing Files section](/viewing-files) and [Editing Files section](/editing-files) respectively.

The following screenshot show a JPG file (photo) with name _IMG_0180_ **(1)** opened in the preview area. Here the preview area uses the full width of the application windows. This can be achieved by clicking on button **(5)** from the preview toolbar. The preview area can be closed by clicking the button with **X** icon located on the right to **(2)**

<CenteredImage
    caption="Screenshot of the file preview area"
    src="/media/preview-area.png"
    maxWidth="650px"
    showCaption
  />

The file preview toolbar offer some actions, some of them are described bellow:

- **(3) Properties** - Toggles the [file properties area](#file-properties-area). This can be achieved also by clicking on the file name or the file extension located on the left of **(1)**
- **(4) Full screen** - Opens the file preview in full screen. You can leave the full screen mode by clicking the ESC key of you keyboard or the by clicking the round green x-button which will appear in the top right corner of the screen.
- **(5) Full width** - Toggles the file preview in the full width of the application windows, by hiding the file browsing and areas in left panel of the app.
- **(6) Open externally** - Opens the current file in the default application of your operating system.
- **(7) Download** - If you are running the web version of TagSpaces, this button will start the downloading of the file, on the desktop versions the button will open file save dialog allowing you to make copy of it somewhere else on the file system (e.g. your Desktop)
- **(8) Reload** - Will reload the file in the file preview area
- **(9) Delete** - Will open a dialog, where you can confirm the deletion of the file.
- **(10) Previous/Next** - With the arrow button located above **(10)** you can open the previous or the next file from the current folder (or search results) in the preview area.

## File properties

Clicking the button with the **( i )** icon will open and respectively close the file properties area. Here you will find details about the currently opened files such as:

<CenteredImage
    caption="Screenshot of the file properties area"
    src="/media/file-properties-area.png"
    maxWidth="650px"
    showCaption
  />

- **(1) File Name** - Shows the complete name of the file together with its extension. Clicking the **RENAME** button or just on the file name (1) will allow you to change the name of the file.
- **(2) Tags** - Show the tags added to the file. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - if the file has attached geo-tag, a map will displayed showing the exact location of the geo tag. The used map is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) Description** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and Markdown formats are supported.
- **(5) Date Modified** - Shows the date and the time when the file was last modified.
- **(6) Size** - Shows the size of the current file.
- **(7) Path** - Shows the complete path of the file. If the file is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path. Clicking on the **MOVE** button, will open a dialog, where you can move or copy the existing file to a new path.
- **(8) Links for sharing** - will show one or two fields representing links which you can [share](/sharing) files with other users.
- **(9) Thumbnail** <ProFeature /> - This area shows the current thumbnail of the file. Clicking on the **CHANGE THUMBNAIL** button will open a dialog, where can choose a new thumbnail for the file. The application supports adding a custom thumbnail to every file type.

:::tip
The description field of files and folders supports basic [**markdown syntax**](https://en.wikipedia.org/wiki/Markdown).
:::

## Folder properties

The folder properties is very similar to the file properties area. It can be opened and closed in the same way by the button with the <nobr>**( i )**</nobr> icon.

<CenteredImage
    caption="Folder properties area"
    src="/media/folder-properties.svg"
    maxWidth="650px"
    showCaption
  />

- **(1) Folder Name** - Shows the complete name of the folder. Clicking the **RENAME** button will switch the area to edit box, where you can change the name of the folder.
- **(2) Tags** - Show the tags added to the folder. Clicking on this area will open a dropdown, where you can choose additional tags which can be assigned to this file. You can also drop tags from the tag library or other files or folders here.
- **(3) Map with geo-tag** - (not on the screnshot) if the file has attached geo-tag, a map will displayed showing the exact location of the geo tag (see [file properties](/ui/userinterface#file-properties-area)). The used map is configurable in the [settings](/ui/settings/#advanced) of the app.
- **(4) Description** <ProFeature /> - Shows the description assigned to the current file. Clicking on the **EDIT** will turn the description area in a edit box, where you can adjust the description of this file. Plain text and Markdown formats are supported.
- **(5) Date modified** - Show the date and the time when this folder was last modified.
- **(6) Size** - Calculated size of the current folder with the current subfolder. This feature is not available on object storage locations.
- **(7) Path** - Shows the complete path of the folder. If the folder is located on an object storage location, a cloud icon instead of the a suitcase will be shown in front of the path.
- **(8) Sharing link** - will show one or two fields representing links which you can [share](/sharing) files with other users.
- **(9) Default perspective for this folder** <ProFeature /> - Click on this field will open a dropdown where you can specify the default perspective for this folder.
- **(10) Folder Background** <ProFeature /> - Shows the color which is assigned to this folder. Clicking in the color area will open a dialog for changing the color of the folder. Click [here](/annotations/#custom-folder-color) for a short video demonstration the functionality.
- **(11) Thumbnail** <ProFeature /> - This area shows the current thumbnail of the folder. Clicking on the **CHANGE** button will open a dialog, where can choose a new thumbnail for it.
- **(12) Wallpaper** <ProFeature /> -

<!-- ## Dark mode

Version 3 of TagSpaces supports user interface themes. The community version is delivered with a light (which is the default one) and a dark theme. The themes can be switched with just one click on the button, which is emphasized on the following screenshot.

![Picture showing the app in the light and the dark theme](/media/themes-switch.jpg) -->

## Scalable user interface

The user interface of the application scalable, this allows you to adjust the zooming factor according to your preference, screen resolution or display size. In the desktop you can access the zoom functionality from the **View** in the **Main Menu**. Here you will find zoom in, zoom out functionality and also the possibility to restore the initial zoom factor with **Actual size** menu item.

In the following screenshot you will see the menu options from the **View** sub menu and also TagSpaces with zoomed in interface.

![Zoom menu items](/media/zoomable-ui-menu.png)

And here you will see TagSpaces with zoomed out interface.

![Zoomed out interface](/media/zoomed-out.png)

:::tip
If the application is running in a browser, please use the integrated in the browser zooming capabilities.
:::

## Full screen mode

The desktop application can run in a full screen mode, which can be toggled by pressing the `F11` key, or selecting _View -> Toggle Fullscreen_ from the **Main Menu.**

![](/media/toggle_fullscreen.png)

:::tip
If the application is running in a browser, please use the integrated in the browser full screen mode capabilities.
:::

## Tray Menu

On Windows, macOS and Linux starting the desktop application will load also a so called tray menu.

![Tray menu on Linux](/media/tray-menu-linux.png)

This menu offers the following functionalities:

- **Show TagSpaces** `Ctrl+Shift+W` / `Cmd+Shift+W` - Brings the app on top if it is minimized or behind other windows.
- **Show Search** `Ctrl+Shift+F` / `Cmd+Shift+F` - Brings the app on top and shows the search input field and brings the cursor on it, so you can enter your search query and confirm it with `Enter`.
- **New File / Note** `Ctrl+Shift+N` / `Cmd+Shift+N` - Brings the app on top and shows the dialog for creating new files.
- **Open next file** `Ctrl+Shift+W` / `Cmd+Shift+W` - Opens the next file (start its playback if audio/video file) in the current perspective or search results.
- **Open previous file** `Ctrl+Shift+W` / `Cmd+Shift+W` - Opens the previous file (start its playback if audio/video file) in the current perspective or search results.
- **Pause / Resume Playback** `Ctrl+Shift+P` / `Cmd+Shift+P` - Pause the currently played audio or video file, resumes the playback if it was paused.
- **Quit TagSpaces** - Quits the app.

:::tip
The keyboard combination described here are globally available, so you can use them even if the application is not visible or on focus.
:::
