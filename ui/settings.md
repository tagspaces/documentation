# Settings

To access the settings dialogue, just click on the gears icon at the bottom left part of the app.

![](/media/open-settings.png)

The dialogue has three tabs, which will be described in order:

## General

Most of the TagSpaces' common settings can be accessed from this tab.

![Setting - General Tab](/media/settings-tab-general.png)

* **Interface language** - TagSpaces has been translated to a variety languages. Choose your preference here
* **Theme selector** - Here the user interface theme can be selected.
* **Check for new version on startup** - You will be notified if a new version if available
* **Use sidecar files for tagging** - once activated, tags assigned to files will not be embedded in their file names, but in so called sidecar files, located in hidden .ts sub folder of the folder where the current file is located.
* **Enable thumbnails generation** - will generate and store persistent thumbnails in the hidden .ts sub folder of the folder where current file is located.
* **Default tag background color** - Allows you to change to default background color of any newly created tags. Existing tags will not be affected.
* **Default tag text color**- Allows you to change to default text color of any newly created tags. Existing tags will not be affected.
* **Move deleted files or folders to trash bin** - will allow you to recover deleted files later, from the trash/recycle bin of your operating system.
* **Show files/directories with a dot(.) in front of the name** - This will allow the browsing of hidden files in UNIX-like systems (Linux, macOS, BSD, etc.)
* **Max search results** - This is the limit of the maximum files and folders, which can be shown in the perspectives and respectively the maximum count of search results.

<!--
* **Use default location as a startup location** - TagSpaces will not remember your last active directory, but will always launch showing the specified location instead.
* **Enable colored file type extensions** - Colour coded extension icons allow for easier navigation
* **Always show tag area on startup** - Even if you close TagSpaces with the directory browser active, io the next startup the tag library will be shown.
* **Loads location meta data** - reads meta from `tsm.json`, located in a .ts subfolder, if present
* **Restore initial settings** - Reset to defaults any time
* **Watch current directory for changes** - Will update directory data as and when files change
* **Tag delimiter** - By default, TagSpaces used a `space` to mark tag boundaries (learn more [here](tagging.md)).  Here you can change this to another character.
* **Prefix for the tag container** - By default, TagSpaces does not use a prefix to show that the next part of the filename contains tags (learn more [here](tagging.md)). here you can change that behaviour. -->

## File types

Here you can choose which viewer and editor to launch for each supported file type.

![](/media/settings-tab-file-types.png)

When you click on a file type's viewer dropdown, you will be offered a list of all installed viewer plugins (**1**).

>**Note:** To learn more about file previews, refer to the [**Viewing Files**](/viewing-files.md) section.

When you click on a file type's editor dropdown, you will be offered a list of all installed editor plugins (**2**).

>**Note:** To learn more about file previews, refer to the [**Editing Files**](/editing-files.md) section.

Clicking on the colored area (**3**) in the most right part of every files type will open a color selection dialog where you can adjust the color of the current file type.

To add a formerly unrecognized extension, just use the **Add New File Type** button (**4**).

## Key bindings

Under the key bindings tab, you can view and edit all the available key bindings, excluding those assigned to tags.

Most of the keybindings are configurable. To change them, Open the **Settings**. In the setting dialog, open the tab **KEY BINDINGS**.

![TagSpaces key bindings options](/media/tagspaces-settings-key-bindings.png)

Here you can see all the keyboard shortcuts by default in TagSpaces, and what actions they perform. You also have the ability to change keyboard shortcuts by clicking on the field in which they were written. Before changing any of the binding, please read the following short instructions:

* For modifier keys you can use `shift`, `ctrl`, `alt`, `option`, `meta`, `command` and `mod`. The last one is special modifier allowing us to refer to the control and command key on Windows/Linux and macOS operating systems respectively.
* Other special keys are `backspace`, `tab`, `enter`, `return`, `capslock`, `esc`, `escape`, `space`, `pageup`, `pagedown`, `end`, `home`, `left`, `up`, `right`, `down`, `ins` and `del`.
* Any other key you should be able to reference by name like `a`, `/`, `$`, `*`, `=`.
* You can assign many keys to a single operation, simply by separating them by `,`.


>**Note:** To learn more about the key bindings, refer to the [this section](/ui/keybindings) of the documentation.
