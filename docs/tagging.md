---
title: Organizing files and folders with tags
---

## Motivation

Tagging and tags are a fresh approach to categorizing and grouping things. Tagging allows the user to label thing with their own words. They don’t need to conform to keywords or categories created by somebody else. Tagging allows you to describe what you’re seeing in your own words, to imbue the experience with your own meaning. Tagging saves your time, and can makes searching for a specific song, movie, book, document, note, or whatever you’re looking for, much easier and faster.

Tags are personal things. Tagging something is your emotional response and not simply a taxonomic decision. With using tags, you have the control to define things for yourself, and on the web -- not only for music, literature, games and movies, but also public websites, data repositories and consultations. Tagging is a new indirect way of control to express your mind and to name things your way -- you can call it a form of "freedom of speech", if you want to go that far. Tagging is a power to create your own genres in movies, music popular culture, or basically anywhere.

Key functionality in TagSpaces is the ability to add tags to files and folders. In comparison to similar product, **TagSpaces does not use a central database for storing the tags** but rather offers to alternative ways for saving this meta information, which are described in the following sections.

## File tagging based on filenames

TagSpaces supports tagging of files in a cross platform way. It uses basically the name of the file to save this kind of meta information. As an example if you want to add the tags `vacation` and `alps` to a image named `IMG-2653.jpg`, the application will simply rename it to `IMG-2653[vacation alps].jpg`. File renaming is of course very controversial solution, with its own limitations (on some operating systems the file path length is limited to ca. 256 characters). Once embedded in the name of file, the tag stick there and can be removed only by file renaming. **This makes the tagging "durable" and portable**. The tags embedded in the name of a file "survives" synchronization across cloud platforms such as Dropbox and Google Drive and can be read by TagSpaces or any other file searching software on Windows, macOS, Linux or Android.

![Filename tagging](/media/filename-tagging.png)

> **Note**: Drawback of this methods is the limiting in file name/path length in some operating systems. Windows for example is limiting the file path length to ca. 256 characters, which is in general enough but could be a limitation.

## File tagging with sidecar file

As alternative to saving the tags in the file names, TagSpaces offers saving this kind of data in a sidecar files located in a hidden `.ts` folder. The activation of this kind tagging for files, can be done in the settings of the application as shown in the following screenshot.

<!-- > **Note:** Please note that by default the `.ts` folder is hidden only on MacOS and Linux operating systems, on Windows folders with dot in front of their name are not hidden by default. Starting with version 3.0, TagSpaces makes hidden the `.ts` folder under Windows automatically.
-->

<figure>
  <img title="screenshot showing where to activate the saving of the tagging information in sidecar files" src="/media/tagspaces-sidecartagging-activation.png" className="img-responsive center-block" />
  <figcaption>Activating the persisting of tags for files in sidecar files</figcaption>
</figure>

After the activation, the application will created for every tagged file an extra file having the same file name as the source file, but with a additional JSON extension. For example after tagging some files in some of your file locations you will have a similar file structure.

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

The main advantage of this solution is that the name of the files is not changed after tagging and there is theoretically no limit in the number of tags you can add to a given file. If you move or rename tagged files in TagSpaces it will take care of the sidecar file, which will also renamed or moved in the appropriate folder. But if you move or rename this file in an external file manager, you have to move or rename the sidecar files by hand. The same hold true for the deleting a file from an external application. It will not automatically delete the sidecar file in the `.ts` folder. These drawbacks makes the tagging with sidecars less robust and future proof.

> **Note:** If you want to have the files located in the `.ts` folder synched with some cloud service such as Dropbox or Google Drive you have to enable the synching of hidden folders and files.

## Folder tagging with sidecar file

Tags added to folders in TagSpaces are save always in the co called sidecar file. The file is located in the **.ts** sub folder of any tagged folders and is called **tsm.js**

    ~ location (with your files)
    ├── subfolder1
    │   ├── .ts
    │   │   ├── tsm.json <-- contains tags and description for subfolder1
    │   │   └── file2.pdf.json
    │   └── file2.pdf
    ├── .ts
    │   └── file4.docx.json
    └── file4.docx

> **Note:** If you want to have the files located in the `.ts` folder synched with some cloud service such as Dropbox or Google Drive you have to enable the synching of hidden folders and files.

## Tagging using context menus

A context menu can be accessed by by right clicking a file or folder in the default perspective. From the context menu, select _Add / Remove Tags_.

![](/media/tagspaces-tagging-default-perspective.png)

This will open a popup dialog, that allows you to manage tags on the current file. If the multiple tags were selected the popup dialog will not display all tags from all files, but rather will allows you to specify tags by name, offering suggestions based on tags currently in the tag library.

![](/media/tagspaces-tagging-dialog.png)

The options you have here are:

- **Clean all tags**, which will remove all tags form the selected files
- **Remove tags** will remove the specified tags from the files
- **Add tags** will add the specified tags to the selected files

## Tagging in file and folder properties area

Tags can be added in the file and folder properties area, by simple selecting them from the dropdown list or dropping the over the tagging area. For removing tags just click on the **x**-button located in tag components.

![Dropping tag in the file properties area](/media/tagspaces-tagging-draganddrop.png)

## Tagging with drag and drop

File and folder can be tagged also with drag and drop. Here is a list of the supported drag and drop operations.

- Dragging a tag from the tag library and dropping it to a file or folder. This action is supported in the [default perspective](/perspectives/grid.md).
- Dragging a tag from the tag library and dropping it to a tagging section in file or folder properties area. This action work regardless of the current perspective.
- Drag a tag from a file or folder and drop it on another file or folder for tagging it. This action is supported in the [default perspective](/perspectives/grid.md).
- Drag and drop can be used also in the tag library for moving tags from one tag group to another

![Dropping tag in the file properties area](/media/tagspaces-tagging-folder-dandd.png)

## Priorities and ratings

These special tags are useful for organizing files by either importance or quality. You can apply priorities `high`, `medium` and `low`, and start ratings from `1start` to `5star`. Star ratings are yellow by default, whereas priorities are colour coded to easily distinguish visually.

![](/media/smart-tag-colours.png)

<!-- Priority and star ratings all have predefined keyboard bindings assigned to then, to that using them becomes really straightforward and fast. Currently the following key-bindings apply:

### Priorities:
* **high** - `t h`
* **medium** - `t m`
* **low** - `t l`

### Start ratings
* **1star** - `t 1`
* **2star** - `t 2`
* **3star** - `t 3`
* **4star** - `t 4`
* **5star** - `t 5` -->

Users can easily extend these tags: You can simply create a new tag and add it to e.g. the priority group, give it a name a colour and a key binding, and you are all set.

## Smart tags

Smart tags are one of the advanced features of TagSpaces. These tags can be either **date and time**, or **location based**, and offer convenient **dynamic tagging** , based on a range of criteria.

![tag library general overview](/media/smart-tags-group.png)

- **Date and time tags** are timestamps textual representations, such as _now_, _today_, _tomorrow_, etc. Applying one of these tags to a file will add a timestamp, corresponding to your choice of smart tag. Tagging a file with e.g. _now_ would apply the full timestamp down to the second, while tagging e.g. _month_ would tag it with a subset like `YYYYMM`. Smart tags have a distinguishing blue background, which they only retain in the tag library.
- <profeature /> Applying a geo tag, opens up a dialog with an interactive map, where you can drop a pin. The geo-location (longitude and latitude coordinates), will be added to the selected file as a tag.

These smart tags offer a quick and easy way to timestamp documents or files, with different levels of precision. Dragging or applying a smart tag to a file will create a tag based on the current time date. Currently the following tags and formats are available:

- **now** - This tag will create a very precise timestamp (from current year, down to seconds) of the moment you have applied it. The format of the timestamp is `YYYMMDDThhmmss`, so `20220111T143022` will stay for 14:30:22 on the 11th of January 2022. The used format is compatible with the [ISO8601 standard](https://en.wikipedia.org/wiki/ISO_8601).
- **today**, **tomorrow and **yesterday\*\* will apply a timestamp with the current, the next, or the previous day's date, in the format of `YYYYMMDD`, e.g. `20170314`.
- **month** will create a timestamp of the current month, in the format of `YYYYMM`, e.g. `201703`
- **year** only applies the current year, in the format of `YYYY`, e.g. `2017`

> **Note:** Every newly created file will automatically have a smart tag, equivalent to **now**.

### Custom timestamp tagging <profeature />

With the help of the `custom-date` smart tag, the user can add any date and time as a tag to any file or folder.

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/DVHioQhpyYM?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Geo tagging <profeature />

Geo Tagging can be use to add geo coordinates as a tag to any kind of files. It is useful to connect your photos or other documents with a geo location. This can be used for planning you vacation or next trip. In order to use this feature you have to use the smart tag `geo-location`. When you apply it to a file, the dialog shown on following screenshot will appear. Here with the help of the [OpenStreetMap](https://www.openstreetmap.org) and you can select any location somewhere in the world. The geographic coordinates (latitude and longitude) of this location will be converted in the [plus codes](https://plus.codes/) format, which is a for codding geo coordinates with smaller amount of characters.

<iframe width="100%" height="650" src="https://www.youtube-nocookie.com/embed/n4LsMP85qtc?rel=0&cc_load_policy=1&modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<!-- The geo tag is a special kind of smart tag, available in TaSpaces **PRO**, that allows tagging files with precise geolocation coordinates. When You drag the tag "geo" on a file, the **Edit tag** popup window with the Geo Location tab will open, showing a map from OpenStreetmap. You can drop a pin anywhere, and move it around, it automatically becomes a tag in the format of `latitude+longitude`, e.g. `47.2792290+18.9843750` This tag will then be applied to the file and treated as a geo-smarttag by TagSpaces -->

### Editing smart tags <profeature />

Smart tags, once applied, can be edited, or further refined be refined to include date ranges. Clicking on a tag, ans selecting _Edit Tag_ form the context menu

![](/media/tagspaces-open-tag-contextmenu.png)

will bring up the **Tag Properties** popup dialog. Depending on the type of the smart tag, the dialog looks differently. In the next screenshot the "editor" for the geo smart tags.

![Editing a geo smart tag](/media/tagspaces-edit-geo-tag.png)

### Date ranges as tags

besides being able to easily modify date, or date/time tags on their respective tabs, you can also specify date ranges in the following formats:

- **Year Ranges:** 2016-2018
- **Month Ranges:** 201605-201701
- **Date Ranges:** 20160531-20160603
- **DateTime Ranges**: 20160529T124532-20160529T154500

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
    > **Note:** For combinations to work, you do not need to use modifier keys. `a+g+6` is as valid a combination as would e.g. `ctrl+shift+6` be
* To use character sequences, type each character, separated by a single whitespace. for example, when you set `a b c` as a shortcut, you would need to type the letters 'a', 'b' and 'c' after one another to tag a file. You do not need to do this quickly, as long as you do not press anything else, the sequence will be recognised. This feature can be quite useful for users, who experience difficulties pressing certain key combinations.
    >**Note:** Modifier keys, such as `Ctrl`, `Shift`, etc, **can** be used in sequential combinations. Specifying e.g. `ctrl a` would make a shortcut of pressing `Ctrl` followed by `a`. pressing the keys simultaneously would not work in this case.

Using keyboard shortcuts can also work on multiple files. If you select more than one file, the tag bound to the key(s) or key combination you press will be applied to all of them.

>**Note:** Keyboard shortcuts can **not** be used to remove tags, only to assign them. -->
