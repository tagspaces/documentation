---
title: Introduction
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Get Started - User Interface Areas

TagSpaces opens as a single-window application designed to maximize space usage, whether on large screens or small mobile displays. Its user interface follows Google's Material Design guidelines, making it adaptable and consistent across operating systems and platforms.

This streamlined experience ensures ease of use across platforms, so once you're familiar with the features, you can use them anywhere. The image below shows a typical start screen, with a list of available locations on the left and the content of the currently opened folder in the center, using the default perspective.

![Explanation of the application's user interface areas](/media/main-ui-areas.svg)

The application's user interface consists of the following main areas:

1. **[Left Drawer](#left-drawer)** - Open the [location manager](/ui/locations/) or [tag library](/ui/taglibrary/) and access other important app functionalities like [settings](/ui/settings).
2. **[Navigation and Search](#navigation-and-search)** - Use this area to search, switch locations, or navigate to parent folders.
3. **[Browsing Area](/browsing-files)** - The central section for browsing files and folders using various **perspectives**.
4. **[Common Actions Area](#preview-area)** - Access actions for the currently opened file or folder.
5. **[File](/files/#file-properties) / [Folder](/folders/#folder-properties) Properties** - View the properties of the opened file or folder.
6. **[File Preview](#file-preview)** - Preview and/or edit the current file here.

## Left Drawer

The main drawer is divided into three sub-areas:

**Top Area**: Displays the app's logo and application version. Clicking the logo opens the **About dialog**, where you can check licensing details and new versions. Below the logo, the **Create New (1)** button opens a dialog to [create files](/creating-files), and the **Open Link (2)** button open new internal or external [link](/linking). The rightmost button **(3)** toggles between **light** and **dark** [themes](#dark-mode-and-themes). In the [TagSpaces Custom](https://www.tagspaces.org/products/custom/) version, this button can open the logged user's properties.

<CenteredImage
    caption="Bottom Toolbar in the left area"
    src="/media/core/left-drawer.svg"
    showCaption
    maxWidth={350}
  />

**Bottom toolbar**: You can access here the following areas

- **(4) [Location Manager](/ui/locations)** - Manage your locations here.
- **(5) [Tag Library](/ui/taglibrary)** - Organize tags into groups.
- **(6) [Quick Access](/quick-access)** - Access [stored searches](/search#stored-search-queries), [bookmarks](/bookmarks), and recently used files and folders.
- **(7) Help** - Access area where you can get help, suggest features, give us feedback or contact support.
- **(8) [Settings](/ui/settings#general)** - Access the settings dialog of the application.

## Navigation and Search

The file browsing area displays files from the active folder in various views (list, grid, or kanban), depending on the active perspective. Learn more in the [perspective section](/browsing-files).

![Screenshot showing the file browsing area](/media/browsing-area.svg)

- **(1)** - Toggles the [left drawer](#left-drawer).
- **(2)** - Navigates back to the last opened file, folder, or location (beta).
- **(3)** - Reverts the previous navigation step.
- **(4)** - Opens [search](/search).
- **(5)** - Displays parent folders as buttons, enabling navigation.
- **(6)** - Displays the current folder's name, which opens the [folder menu](#folder-menu).
- **(7)** - Switches the [perspective](/browsing-files) of the current folder.

:::tip
In cloud-based locations, the folder icon in **(5)** will be a **cloud**. Otherwise, it will be a **briefcase**.
:::

### Folder Menu

The folder menu includes options such as:

- Reload, rename, or delete the folder.
- Open the folder in the operating system's file manager.
- Create new files, subfolders, or add files.
- Import macOS tags (only on macOS desktop app).
- Switch between different perspectives: [Grid](/perspectives/grid), [List](/perspectives/list), [Gallery](/perspectives/gallery), [Mapique](/perspectives/mapique), [Kanban](/perspectives/kanban).
- Access folder [properties](/folders#folder-properties).

## Preview Area

When a file is opened, the main UI splits into two areas, with the right side becoming the **Preview Area**. TagSpaces supports displaying various file types, from markdown to PDFs and images. For more details, see [Previewing Files](/viewing-files) and [Editing Files](/editing-files).

![Area for previewing and editing files](/media/preview-area.svg)

- **(1) Title Area** - Displays the file's name and extension, with options to [bookmark](/bookmarks) and tag it.
- **(2) Edit & Close** - Close the file or folder, enable edit mode, and toggle **auto-save** for text files.
- **(3) [File](/files#file-toolbar) / [Folder](/folders#folder-toolbar) Toolbar** - Contains actions for the opened file or folder.
- **(4) Navigation** - Navigate between files in the current folder or search results.
- **(5) Preview & Edit Area** - Displays the file preview and offers editing options for supported file types.

## Dark Mode and Themes

Themes can be changed in the [general settings](/ui/settings#general).

<CenteredVideo
    caption="Switching user interface themes"
    posterUrl="/media/core/switch-themes-poster.avif"
    src="/media/core/switch-themes.mp4"
    autoPlay={false}
    width="100%"
    showCaption
  />

## Multiple Windows and Tabs

TagSpaces supports multiple windows or tabs in the web versions. You can open locations, folders, or files in new windows/tabs, or start a new instance of the application.

![Opening a location in a new window](/media/open-new-window.avif)

## Scalable User Interface

TagSpaces' UI is scalable, allowing you to adjust the zoom factor according to your screen. Access the zoom options from the **View** menu. Options include zoom in, zoom out, and resetting the zoom to its default.

![Zoom menu options](/media/core/zoomable-ui-menu.avif)

- **Zoomed In Interface**:

![Zoomed In Interface](/media/core/zoomed-out.avif)

:::tip
In a browser, use the built-in zoom functionality.
:::

## Full Screen Mode

The desktop app supports full screen mode, which can be toggled by pressing `F11` or selecting _View -> Toggle Fullscreen_ from the **Main Menu**.

![Toggle Fullscreen](/media/core/toggle_fullscreen.avif)

:::tip
In a browser, use the browser's full screen capabilities.
:::

## Tray Menu

On Windows, macOS, and Linux, starting the desktop app loads a **tray menu** integrated into the operating system.

<CenteredImage
    caption="Tray Menu on macOS"
    src="/media/core/tray-menu-macos.avif"
    showCaption
    maxWidth="300px"
  />

The tray menu offers the following functionalities:

- **Show TagSpaces** - `Ctrl+Shift+W` / `Cmd+Shift+W`
- **Show Search** - `Ctrl+Shift+F` / `Cmd+Shift+F`
- **New File / Note** - `Ctrl+Shift+N` / `Cmd+Shift+N`
- **Open Next File** - `Ctrl+Shift+D` / `Cmd+Shift+D`
- **Open Previous File** - `Ctrl+Shift+P` / `Cmd+Shift+P`
- **Pause/Resume Playback** - `Ctrl+Shift+P` / `Cmd+Shift+P`
- **Quit TagSpaces** - `Ctrl+Q` / `Cmd+Q`

:::tip
These key combinations are available globally and can be used even if TagSpaces is not in focus. They can be disabled in the [settings](/ui/settings#key-bindings).
:::
