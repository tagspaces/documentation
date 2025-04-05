---
title: Organizing Files and Folders with Tags
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

## Why Tagging?

Tagging is a versatile approach to organizing files and folders. Unlike predefined categories, tagging lets users label items with words that reflect their personal understanding. It enhances searching and helps categorize files like songs, books, documents, and more in a user-defined way. Tags are personal, providing the freedom to define and group files as you see fit.

Tagging is more than just organization; it's a way of expressing your thoughts and emotions. Instead of conforming to someone else's categories, you define what matters to you. Think of it as a form of personal expression or even a type of "freedom of speech."

One of the core functionalities in TagSpaces is the ability to add tags to files and folders. Unlike other products, **TagSpaces does not rely on a central database for storing tags**. Instead, it offers two alternative methods, which are described in the following sections.

## File Tagging

TagSpaces supports two methods for tagging files: embedding tags in file names and using sidecar files. Both methods work on any file type and across all supported operating systems.

<CenteredImage src="/media/settings/settings-specify-file-tagging-method.avif" caption="File tagging method in the settings" maxWidth="700px" />

### Storing Tags in File Names

This method embeds tags directly into the file name. For example, adding the tags `vacation` and `alps` to an image named `IMG-2653.jpg` will rename it to `IMG-2653[vacation alps].jpg`.

**Advantages:**

- **Durable and Portable:** Tags persist across platforms like Dropbox and Google Drive.
- **Compatibility:** Tags are visible and searchable using any file browsing software.

**Drawbacks:**

- **File Path Length Limitations:** Some operating systems (like Windows) restrict the file path length to around 256 characters, which can limit how many tags you can add.

<CenteredImage src="/media/filename-tagging.png" caption="Tags embedded in file names" />

Once embedded in the name of file, the tag stick there and can be removed only by file renaming. **This makes the tagging "durable" and portable**. The tags embedded in the name of a file "survives" synchronization across cloud platforms such as Dropbox and Google Drive and can be read by TagSpaces or any other file searching software on Windows, macOS, Linux or Android.

:::tip
File name tagging may run into limitations due to file path length restrictions on certain operating systems like Windows.
:::

### Storing Tags in Sidecar Files

As an alternative to embedding tags in file names, TagSpaces allows storing tags in sidecar files within a hidden `.ts` folder. This can be activated in the settings for all locations or per location in the properties of every location.

<!-- :::info
Note: By default, `.ts` folders are hidden on macOS and Linux, but not on Windows.
::: -->

When tagging a file, TagSpaces will create a corresponding sidecar file with the same name as the source file but with a `.json` extension. For example:

```
~ location (with your files)
├── subfolder1
│   ├── .ts
│   │   ├── file1.jpg.json <-- contains the tags and the description for file1.jpg
│   │   └── file2.pdf.json
│   ├── file1.jpg
│   └── file2.pdf
├── .ts
│   ├── file3.png.json
│   └── file4.docx.json
├── file3.png
└── file4.docx
```

**Advantages:**

- **File Integrity:** Tags are stored separately, preserving the original file name.
- **Unlimited Tags:** There is theoretically no limit to the number of tags you can add.

**Drawbacks:**

- **Manual Maintenance:** If files are moved or renamed outside of TagSpaces, you must also move or rename the corresponding sidecar files manually.
- **Synchronization Issues:** Hidden `.ts` folders may not sync with cloud services unless explicitly enabled.

:::tip
To sync `.ts` folders with cloud services like Dropbox or Google Drive, enable the synchronization of hidden folders and files.
:::

## Folder Tagging

Tags added to folders are always saved in sidecar files. The file is located in the `.ts` subfolder and is called `tsm.json`.

```
~ location (with your files)
├── subfolder1
│   ├── .ts
│   │   ├── tsm.json <-- contains tags and description for subfolder1
│   │   └── file2.pdf.json
│   └── file2.pdf
├── .ts
│   └── file4.docx.json
└── file4.docx
```

:::tip
To sync `.ts` folders with cloud services like Dropbox or Google Drive, enable the synchronization of hidden folders and files.
:::

## Tag Operations on Multiple Entries

To add or remove tags from multiple files or folders, first, select them by holding the CTRL/CMD key and clicking on the entries with the left mouse button. You can also use checkboxes in the list view.

Once selected, right-click on the files and choose `Add / Remove Tags` from the context menu, or click the `Tags` button in the toolbar.

This will open a popup dialog for managing tags.

<CenteredImage src="/media/tagging/tagging-multiple-tags-dialog.avif" caption="Tagging multiple files"  maxWidth="500px"/>

The options in the dialog are:

- **Clean all tags:** Removes all tags from the selected files.
- **Remove tags:** Removes the specified tags. You have to manually enter the tags which you want to be remove from the selected files.
- **Add tags:** Adds the specified tags to the selected files.

### Adding Multiple Tags at Once

You can add multiple tags at once by separating them with commas in the tagging dialog.

<CenteredVideo
  caption="Tagging with many tags at once."
  src="/media/videos/tagging-dialog-many-tags.mp4"
  posterUrl="/media/videos/tagging-dialog-many-tags.jpg"
  autoPlay={false}
  showCaption
/>

## Tagging in File and Folder Properties Area

Tags can also be added in the properties area by selecting them from a dropdown or dragging them into the tagging area. To remove a tag, click the open the three-dots menu next to the tag and choose `Remove tag`.

<CenteredImage src="/media/tagging/tagging-entry-details.avif" caption="Tagging in the file and folder details area" maxWidth={600} />

## Tagging with Drag and Drop

Tagging can also be performed using drag-and-drop. Here are the supported operations:

### Dragging a tag from the tag library to a file or folder

This action is supported in the [grid](/perspectives/grid), [list](/perspectives/list) and [kanban](/perspectives/kanbak) perspective.
<CenteredImage src="/media/tagging/tagging-dnd-taglibrary.avif" caption="Tagging with drag-and-drop from the tag library" maxWidth={650}/>

### Dragging a tag to the tagging section of the details area

This actions is supported in the details of files and folders and can be initiated from the tag library or from a file or folder in the [grid](/perspectives/grid) and [list](/perspectives/list) perspectives

<CenteredImage src="/media/tagging/tagging-dnd-entrydetais.avif" caption="Tagging with drag-and-drop from the tag library folder details" />

### Dragging a tag from one file or folder to another

This action is supported in the [grid](/perspectives/grid) and [list](/perspectives/list) perspectives.
<CenteredImage src="/media/tagging/tagging-dnd-entry-to-entry.avif" caption="Tagging with drag-and-drop from a folder to another" maxWidth={650}/>

<!-- ## Tagging using keyboard shortcuts
Another quick way to tag files is to set keyboard shortcuts to often-used tags. To specify a shortcut, click on a tag in the **Tag Library**, and select *Edit Tag* from the context menu

![](media/edit-tag-context.png)

You will then be presented with the **Edit tag** popup dialogue, in which you can specify the keyboard shortcut under **Key Binding**

![](media/edit-tag-popup.png)
Tag that has a keyboard shortcut assigned, are marked with a little keyboard icon in the tag library

![](media/edit-tag-keyboard.png)

Shortcuts can be single characters, key combinations, or sequences of two or more characters.
* To specify a single key shortcut, type that key into the box. E.g. to set the key `a` as a shortcut for a tag, simply type the letter 'a' and press OK.
* For key combinations, type all keys separated by a plus sign (`+`). E.g. to specify `Ctrl+Shift+a` (to be pressed simultaneously) as a shortcut, just type "ctrl+shift+a".
    > For combinations to work, you do not need to use modifier keys. `a+g+6` is as valid a combination as would e.g. `ctrl+shift+6` be
* To use character sequences, type each character, separated by a single whitespace. for example, when you set `a b c` as a shortcut, you would need to type the letters 'a', 'b' and 'c' after one another to tag a file. You do not need to do this quickly, as long as you do not press anything else, the sequence will be recognised. This feature can be quite useful for users, who experience difficulties pressing certain key combinations.
    > Modifier keys, such as `Ctrl`, `Shift`, etc, **can** be used in sequential combinations. Specifying e.g. `ctrl a` would make a shortcut of pressing `Ctrl` followed by `a`. pressing the keys simultaneously would not work in this case.

Using keyboard shortcuts can also work on multiple files. If you select more than one file, the tag bound to the key(s) or key combination you press will be applied to all of them.

> Keyboard shortcuts can **not** be used to remove tags, only to assign them. -->
