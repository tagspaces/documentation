---
title: Settings Overview
---

import { ProFeature } from '@site/src/components/CommonBlocks';

# Settings

To access the settings dialog, just click on the gears icon at the bottom left part of the app.

![Access the settings of the app](/media/open-settings.png)

The settings dialog has four tabs, which will be described bellow.

## General

Most of the TagSpaces' common settings can be accessed from the General tab.

![Settings - General Tab](/media/tagspaces-settings-general.png)

- **Interface language** - TagSpaces has been translated to a variety languages. Choose your preference here
- **Color scheme** - You can choose here among: light, dark and match operating system. The last will to dark or light color scheme based on your operating system.
- **Preferred light theme** - you can select here the theme which will be used in the light mode
- **Preferred dark theme** - you can select here the theme which will be used in the dark mode
- **Default perspective** - you can choose here the default perspective which will be used for opening folders in the application.
- **File tagging method** - specifies the default [file tagging approach](/tagging#file-tagging).
- **Check for new version on startup** - the application will check on startup if there is a new version of the application available so you can be notified.
- **Enable changing the tag order with drag and drop** - this is experimental feature
- **Collect new tags in the tag library** - if activated, the app will collect all the new tags in the `Collected Tag` tag group of the [tag library](/ui/taglibrary)
- **Enable thumbnails generation** - will generate and store persistent thumbnails in the hidden .ts sub folder of the folder where current file is located.
- **Default tag background color** - Allows you to change to default background color of any newly created tags. Existing tags will not be affected.
- **Default tag text color**- Allows you to change to default text color of any newly created tags. Existing tags will not be affected.
- **Move deleted files or folders to trash bin** - After activating it, all files deleted in TagSpaces will be send to the Trash, Trashbin or Recylcebin depending on your operating system. From these locations, you files can be easily recovered in case of a unintended deletion.
- **Show files/directories with a dot(.) in front of the name** - This will allow the browsing of hidden files in UNIX-like systems (Linux, macOS, BSD, etc.)
- **Max search results** - This is the limit of the maximum files and folders, which can be shown in the perspectives and respectively the maximum count of search results.

## File types

Here you can choose which viewer and editor to launch for each supported file type.

![Adjusting the file associations](/media/settings-tab-file-types.svg)

When you click on a file type's viewer dropdown, you will be offered a list of all installed viewer plugins (**1**).

:::tip
To learn more about file previews, refer to the [**Viewing Files**](/viewing-files) section.
:::

When you click on a file type's editor dropdown, you will be offered a list of all installed editor plugins (**2**).

:::tip
To learn more about file previews, refer to the [**Editing Files**](/editing-files) section.
:::

Clicking on the colored area (**3**) in the most right part of every files type will open a color selection dialog where you can adjust the color of the current file type.

To add a formerly unrecognized extension, just use the **Add New File Type** button (**4**).

### Color coded file extensions

In the [grid](/perspectives/grid), [list](/perspectives/list) and [kanban](/perspectives/kanban) perspectives, color coded file extensions are supported. They allow a better visual recognition of the file type. For the most common file extensions, custom colors have been defined, to be displayed on the extension buttons found on the file rows or cards.

![color codes file extensions in the list perspective](/media/color-coded-file-extensions-list.svg)

## Key bindings

Under the key bindings tab, you can view and edit all the available key bindings, excluding those assigned to tags.

Most of the keybindings are configurable. To change them, Open the **Settings**. In the setting dialog, open the tab **KEY BINDINGS**.

![Changing the key bindings](/media/tagspaces-settings-key-bindings.png)

Here you can see all the keyboard shortcuts by default in TagSpaces, and what actions they perform. You also have the ability to change keyboard shortcuts by clicking on the field in which they were written. Before changing any of the binding, please read the following short instructions:

- For modifier keys you can use `shift`, `ctrl`, `alt`, `option`, `meta`, `command` and `mod`. The last one is special modifier allowing us to refer to the control and command key on Windows/Linux and macOS operating systems respectively.
- Other special keys are `backspace`, `tab`, `enter`, `return`, `capslock`, `esc`, `escape`, `space`, `pageup`, `pagedown`, `end`, `home`, `left`, `up`, `right`, `down`, `ins` and `del`.
- Any other key you should be able to reference by name like `a`, `/`, `$`, `*`, `=`.
- You can assign many keys to a single operation, simply by separating them by `,`.

:::tip
To learn more about the key bindings, refer to the [this section](/ui/keybindings) of the documentation.
:::

## Extensions

This tab has two sections:

- **Core Extensions** which list the extension together with their version packaged with the current application version.
- **Installed Extensions** here you will find a list of all manually installed extension. After activating the developer mode in the [Advanced](#advanced) tab, you will see here a [Install Extension] button, with which you choose a extension packaged as ZIP and install it.

![Settings - Extensions tab](/media/tagspaces-settings-extensions.png)

:::warning
Please install extension only from trusted source. Malicious extension can be a significant security risk for your system!
:::

## Advanced

In this area we have collected settings which are relevant for some advanced use cases.

![Settings - Advanced area](/media/tagspaces-settings-advanced.png)

- **Enable mobile mode** - switches the app in mobile mode, which can be useful on small screens or app window sizes
- **Enable developer mode** - this will enable some experimental features, like the ability to load extensions from third parties.
- **Enable generating thumbnails and search index in a separate process** - the application generates thumbnails and search index in a separate process, here you can disable this functionality and use the main app process for that. This will have a negative impact on the performance.
- **Show warning on opening files externally** - showing a warning on opening files with external programs is a way to prevent you executing potentially malicious files (e.g. opening an .exe file on Windows will execute it)
- **Enable location tags** - <ProFeature /> enabling this will give the options to store tag groups outside in the location itself (out of the tag library). Learn more [here](/ui/taglibrary/#location-tags).
- **Geo tagging format** - <ProFeature /> here you have the ability to choose the geo tagging format. The apps offers the following formats
  - PlusCode - is geo codding [format](https://en.wikipedia.org/wiki/Open_Location_Code) offering a short text representation so geo coordinate with latitude: `47.741687` and longitude `7.342313` will be encoded in `8FV9P8RR+MW`.
  - MGRS - is another geo codding [format](https://en.wikipedia.org/wiki/Military_Grid_Reference_System), where the geo tags looks like this `4QFJ12345678`.
- **Map tile servers** - <ProFeature /> TagSpaces uses OpenStreetMap based maps to represent maps in the geotagging capabilities of the application. Here you add custom OpenStreetMap compatible map tile server. On the [OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Tile_servers) there is a list of common map server. With this functionality you can also add your own map tile server, in case you want to have completely Internet independent geo-tagging system.

:::caution
Please respect the policies and the terms of usage of any given map service provider!
:::

In the upper part of the advanced settings tab you will find the following buttons:

- **Restore default settings** - which restores the initial settings of the app, including connected location and tag library, so be careful before confirming. You can also export the locations and the tag library and then import them after a reset.
- **Reload application** - this will just reload the application, similar to hitting the reload button in a browser.
