---
title: Introduction
---

# User Interface Areas

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

TagSpaces opens up as a single-window application that tries to make the best use of any space available, be it large wide screens, or small mobile displays. The user interface, devised along the guidelines of Google's material design specifications, is very adaptable. The application will look the same, regardless of the operating system, or platform it runs under.

<!-- ![Start screen](/media/home-screen.png) -->

This streamlined experience offers familiarity and an ease to use the application across platforms, while you will need to familiarize yourself with its extensive features only once. The following screen shows a typical start screen of TagSpaces with the list of the available locations on left, and content of the currently opened folder with the default perspective in center of the application.

![explanation of the applications user interface areas](/media/main-ui-areas.svg)

The user interface of the application consists of the following main areas:

- **(1) [Left Drawer](#left-drawer)** - Here you can open the [location manager](/ui/locations) or the [tag library](/ui/taglibrary) and access other important functionalities of the app like the [settings](/ui/settings).
- **(2) [Navigation and Search](#navigation-and-search)** - Here you can open the search, switch the current location or navigate to a parent folders.
- **(3) [Browsing area](/browsing-files)** - This section is occupied by the so called **perspective** used for browsing files and folders.
- **(4) [Common actions area](#preview-area)** - Here you can access common actions for the currently opened file or folder.
- **(5) [File](/files#file-properties) / [Folder](/folders#folder-properties) properties** - Here you will find the properties of the currently opened file or folder.
- **(6) [File Preview](#file-preview)** - In this area you can preview and/or edit the current file.

## Left Drawer

The main drawer of the app is divided in three sub areas.

The one located at the top shows the logo of the app and its current version. Clicking on the app logo will open the **About dialog** of the app, where you can find details about the licensing or check for new app versions. Right beneath the logo you find a bar containing two buttons. The first one called **Create** will open a dialog where you can [create files](/creating-files) in TagSpaces. The second button "New Window" will open a new TagSpaces [window or tab](#multiple-windows-and-tabs).

The area at button contains six buttons. The button with the gear icon **(1)** located at the left will open the app [settings](/ui/settings). With the button **(6)** at the most right you can switch between the **light** and **dark** [themes](#dark-mode-and-themes) of the app. If you are using the [TagSpaces Enterprise](https://www.tagspaces.org/products/enterprise/) product this button will be exchanged with a button, which will open the properties of the currently logged user.

![drawer toolbar](/media/left-drawer-toolbar.svg)

The with the four so called radio buttons in the middle, you can switch between the following areas in main part of the drawer:

- **(2) [Location Manager](/ui/locations)** - this is the place for managing your locations
- **(3) [Tag Library](/ui/taglibrary)** - the library contains all your tags organized in tag groups
- **(4) [Quick Access](/quick-access)** - here you will find [stored searches](/search#stored-search-queries), [bookmarks](/bookmarks) and lists of recently used files and folders.
- **(5) Help & feedback** - here you can access the application help, suggest a feature or contact us.

## Navigation and Search

The file browsing area normally takes up he majority of the user interface. This is where all files from the currently active folder are displayed, either as a list, grid, or folder tree, depending on the active [**perspective**](/browsing-files#Perspectives). To learn more about the all file browsing features, navigate to the [perspective section](/browsing-files).

![Screenshot showing the file browsing area](/media/browsing-area.svg)

The button **(1)** placed in the top left part of the browsing area toggles the [left drawer area](#left-drawer-area).

**(2)** will open the [search](/search) input field.

**(3)** opens a dropdown showing a list of all currently configured [locations](/ui/locations). From this dropdown you can quickly switch to another location.

:::tip
If you are in a cloud based location, the icon of the button for changing the location will be a <b>cloud</b>, in other cases the icon will be the <b>briefcase</b>.
:::

The area above number **(4)** shows the name of the current folder and the names of the parent folders in reversed order. The folder names are separated by slashes (/). The parent folders are shown only if the these folders are in the current location. Clicking on the name parent folders will navigate to them.

Clicking the button for current folder **(5)** will open folder menu, which is described in the next section.

### Folder menu

The menu for the current folder contains the following items:

- **Reload Folder** - Reloads the content of the current folder
- **Rename Folder** - Opens the folder rename dialog
- **Delete Folder** - Open a dialog where you can confirm the deletion of the folder
- **Show in File Manager** - Opens the folder in the default file manager of the operating system
- **New File** - Open the dialog for [creating new](/editing-files#creating-files) files or note
- **New Subfolder** - Opens the folder create dialog, where you can enter the name of the new sub folder
- **Add Files** - Opens a file chooser where you can select a file from your local files system, which will be added to your current folder in TagSpaces.
- **Import macOS tags** - This option is visible only on the native macOS app, selecting it will to extract native macOS tags and them as TagSpaces tags.
- **Grid Perspective** - will present the current folder in the [Grid](/perspectives/grid) perspective
- **List Perspective** - will present the current folder in the [List](/perspectives/list) perspective
- **Gallery Perspective** - will present the current folder in the [Gallery](/perspectives/gallery) perspective
- **Mapique Perspective** - will present the current folder in the [Mapique](/perspectives/mapique) perspective
- **Kanban Perspective** - will present the current folder in the [Kanban](/perspectives/kanban) perspective
- **Folder Properties** - Opens the [properties](/folders#folder-properties) of the current folder

## Preview Area

When a file is opened, the main UI area splits into two, the rightmost page becoming the **Preview area**. TagSpaces is capable of natively displaying different file types, from markdown, through HTML and docx, to PDF or various image files. To learn more about all the viewable and editable files, and TagSpaces' full file handling capacity, navigate to the [Previewing Files](/viewing-files) and [Editing Files](/editing-files) sections respectively.

The following screenshot show a markdown file with the title _diagrams_ **(1)**. The file is not bookmarked and has one tag. The preview area can be closed by clicking the button with **X** icon located in section **(2)**.

![Area for previewing and editing files](/media/preview-area.svg)

A short explanation of the areas visible in the previous screenshot will follow:

- **(1) Title area** - here you will find the title and the extension of the currently opened file or folder. You can also [bookmark](/bookmarks) it and see if it has been tagged.
- **(2) Edit & Close** - here you can close the currently opened file or folder. By some text file types you can start the edit mode and toggle the **auto-save** functionality.
- **(3) Toolbar** - containing common buttons for common action for the currently opened file or folder
- **(4) Navigation** - these buttons are shown only on files and will navigate to the next or the previous file in the current folder or search results
- **(5) Preview & edit** - this is the area where you can see the preview of currently opened. Here you can even [edit](/editing-files) some text files.

## Dark Mode and Themes

The themes can be changed from the [tab general](/ui/settings#general) of the settings.

![Picture showing the app in the light and the dark theme](/media/themes-switch.jpg)

## Multiple Windows and Tabs

TBD

:::caution
All the instances share the same local storage.
:::

## Scalable User Interface

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

![Toggling the fullscreen mode](/media/toggle_fullscreen.png)

:::tip
If the application is running in a browser, the integrated full screen capabilities of the browser can be used.
:::

## Tray Menu

On Windows, macOS and Linux starting the desktop application will load also a so called tray menu, which is integrated in the operating system.

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
The key combination described here are globally available, so you can use them even if the application is not visible or on focus. The global keys can be disabled in the [settings](/ui/settings#key-bindings)
:::
