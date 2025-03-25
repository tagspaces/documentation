---
title: Settings Overview
---

import { ProFeature, CenteredImage, FullScreenImage } from '@site/src/components/CommonBlocks';

# Settings

To access the settings dialog, click on the gears icon located at the bottom-left part of the app.

<FullScreenImage
caption="Access the settings of the app"
src="/media/settings/open-settings.jpg"
maxWidth={500}
/>

The settings dialog consists of five tabs, which are described below.

## General

Most common TagSpaces settings are accessible from the **General** tab.

<FullScreenImage
caption="Settings - General Tab"
src="/media/settings/settings-general.jpg"
maxWidth={600}
/>

- **Interface language**: Choose your preferred language from the variety of translations available for TagSpaces.
- **Color scheme**: Select between light, dark, or matching the operating system's theme. The last option will automatically switch between light and dark based on your operating system settings.
- **Preferred light theme**: Choose the theme that will be used in light mode.
- **Preferred dark theme**: Choose the theme that will be used in dark mode.
- **Default perspective**: Set the default perspective that will be used for opening folders.
- **File tagging method**: Specifies the default [file tagging approach](/tagging#file-tagging).
- **Check for new version on startup**: The app will check for new versions on startup and notify you if available.
- **Enable changing the tag order with drag and drop**: Experimental feature for reordering tags via drag and drop.
- **Collect new tags in the tag library**: If activated, new tags will automatically be added to the `Collected Tag` group in the [tag library](/ui/taglibrary).
- **Enable thumbnails generation**: Generates and stores persistent thumbnails in the `.ts` subfolder of the folder where the file resides.
- **Default tag background color**: Set the default background color for newly created tags. Existing tags will not be affected.
- **Default tag text color**: Set the default text color for newly created tags. Existing tags will not be affected.
- **Move deleted files or folders to trash bin**: When enabled, deleted files will be moved to the Trash, Trashbin, or Recyclebin depending on your operating system, allowing easy recovery in case of accidental deletion.
- **Show files/directories with a dot (.) in front of the name**: Allows browsing hidden files in UNIX-like systems (Linux, macOS, BSD, etc.).
- **Max search results**: Limit the maximum number of files and folders displayed in perspectives and search results.

## File Types

This section allows you to configure the viewers and editors that will open specific file types.

<FullScreenImage
caption="Adjusting the file associations"
src="/media/settings/settings-tab-file-types.jpg"
maxWidth={650}
/>

- **File Viewer Dropdown**: Select the preferred [viewer plugin](/viewing-files) for each file type (**1**).
- **File Editor Dropdown**: Select the preferred [editor plugin](/editing-files) for each file type (**2**).
- **Color Coding**: Adjust the color of the file type by clicking on the colored area (**3**).
- **Add New File Type**: Add a new file type that was previously unrecognized (**4**).

### Color-coded File Extensions

In the [grid](/perspectives/grid), [list](/perspectives/list), and [kanban](/perspectives/kanban) perspectives, color-coded file extensions enhance visual recognition. For common file extensions, custom colors are predefined and displayed on the extension buttons in the file rows or cards.

![Color-coded file extensions in the list perspective](/media/settings/color-coded-file-extensions.jpg)

## Key Bindings

The **Key Bindings** tab allows you to view and customize keyboard shortcuts.

<FullScreenImage
caption="Changing the key bindings"
src="/media/settings/settings-key-bindings.jpg"
maxWidth={600}
/>

Most key bindings are configurable. You can modify them by clicking on the field where the binding is listed.

### Modifier Keys

- Use `shift`, `ctrl`, `alt`, `option`, `meta`, `command`, and `mod`. `mod` is a special modifier referring to the control key on Windows/Linux and the command key on macOS.

### Special Keys

- `backspace`, `tab`, `enter`, `return`, `capslock`, `esc`, `escape`, `space`, `pageup`, `pagedown`, `end`, `home`, `left`, `up`, `right`, `down`, `ins`, and `del`.

To assign multiple keys to a single operation, separate them by a comma (`,`).

:::tip
For more details, refer to the [Key Bindings section](/ui/keybindings) of the documentation.
:::

## Extensions

This tab includes two sections:

- **Core Extensions**: Lists the extensions packaged with the current version of the application.
- **Installed Extensions**: Shows manually installed extensions. Once the **Developer Mode** is activated in the [Advanced](#advanced) tab, a button labeled **Install Extension** becomes available, allowing you to install extensions from a ZIP package.

<FullScreenImage
caption="Settings - Extensions Tab"
src="/media/settings/settings-extensions.jpg"
maxWidth={600}
/>

:::warning
Install extensions only from trusted sources, as malicious extensions could pose security risks to your system.
:::

## Advanced

The **Advanced** tab contains settings intended for advanced use cases.

<FullScreenImage
caption="Settings - Advanced Tab"
src="/media/settings/settings-advanced.jpg"
maxWidth={600}
/>

- **Enable mobile mode**: Switch the app to mobile mode for use on small screens or smaller app window sizes.
- **Enable developer mode**: Enables experimental features like the ability to load third-party extensions.
- **Enable generating thumbnails and search index in a separate process**: Thumbnails and the search index are generated in a separate process by default for better performance. You can disable this and use the main app process, but this may negatively impact performance.
- **Show warning on opening files externally**: A warning will appear when opening files with external programs to prevent accidental execution of malicious files (e.g., an .exe file on Windows).
- **Enable location tags** <ProFeature />: Store tag groups outside the main tag library in the location itself. Learn more [here](/ui/taglibrary/#location-tags).
- **Geo tagging format** <ProFeature />: Choose from the following geo-tagging formats:
  - **PlusCode**: Encodes latitude and longitude coordinates into a short text representation, e.g., `8FV9P8RR+MW` for `47.741687, 7.342313`.
  - **MGRS**: Military Grid Reference System, which encodes coordinates like `4QFJ12345678`.
- **Map tile servers** <ProFeature />: TagSpaces uses OpenStreetMap-based maps for its geotagging features. You can add custom map tile servers here, including from [this list of common servers](https://wiki.openstreetmap.org/wiki/Tile_servers) or your own server for an internet-independent geo-tagging system.

:::caution
Please respect the policies and terms of use of the map service providers.
:::

### Additional Buttons

- **Restore default settings**: Resets the app to its original settings, including connected locations and the tag library. Be careful, as this action cannot be undone without backups.
- **Reload application**: Reloads the app, similar to pressing the browser reload button.
