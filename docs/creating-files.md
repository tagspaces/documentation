---
title: Create Files
---

Besides opening and previewing various file types, TagSpaces can also create new files of some text-based formats. File creation is a functionality that allows TagSpaces to become an effective note-taking application.

To create a new file in TagSpaces you have many options. The easiest one is from the button with plus icon, which almost always visible in the application

![create new file with the plus button](/media/create-new-plusbutton.png)

On the desktop version of the app you can also use the _File menu_ from the _Main menu_. If the main menu is not visible you can open it by pressing the ALT keyboard key.

![create new file from main menu](/media/create-new-file-menu.png)

In mobile mode the file creation dialog can be started from the plus button marked in the next screenshot.

![create new file in mobile mode](/media/tagspaces-mobile-open-create-dialog.png)

The triggering of the file creation action will open a _Create new content_ dialog, where you can choose one of the following actions:

<!-- where you can adjust the file name of the file, which will be create in area (1). In are (2) you can enter the text context of the file, you can copy and paste plain text, markdown or even HTML content here. This area could be left also empty allowing you enter content later. In a area (3) you should specify the type of the text content. Currently the following file formats are supported:

In the last section (4), you can specify where the file should be create. The initial path here is taken automatically from the currently opened folder.
-->

- **Create Note** - will create a HTML which can contain rich text content, with _.html_ file extension.
- **Create MarkDown File** - will create a [markdown](https://en.wikipedia.org/wiki/Markdown), with _.md_ file extension.
- **Create Text Fuke** - will create a plain text file, with _.txt_ file extension.
- **Add File** - will give you the possibility to import a single file in the app. See more in the [importing files](#importing-files) section.

![screenshot showing the create new content dialog](/media/tagspaces-create-content-dialog.png)

The name of the create files will be _note[20191113~164613].md_ (or .html or .txt). Learn more for the timestamp tag in next section.

## Timestamp as default tag

When you create a new file in TagSpaces, a time-stamp in the format of YYYMMDD~hhmmss will be automatically added as a tag, where

- `YYYY` means the current year
- `MM` - the current month
- `DD` - the day
- `hh` - the hour
- `mm` - the minute
- `ss` - the second

when the file was created. For example a file created on the 17th of January in 2017, at 10:30 (and 32 seconds) would be tagged with timestamp like `20170117-133032`.

Using these timestamp-tags ensures the uniqueness of the automatically generated file name of the file created by the app.

<!-- Such timestamps make it possible to easily group files from different locations based on the time of creation. Of course this would be possible by reading the same information from the file system, but tagging with the timestamp allows for greater flexibility. For example you can change the timestamp to anything you like, while keeping the original creation modification date of the file, and tagging the file will allow you to use TagSpaces's powerful grouping and organizing features in the same place you manage other tags. -->

## Importing files

In TagSpaces files can be imported in many ways. After a successful import the imported file should be copied in the current folder from the current location.

### Import from the create content dialog

See how this dialogs looks like in the [creating files](#creating-files) section.

### Import from the folder menu

The importing of a file can be initiated also from the folder menu, which can be opened by clicking on the area marked in the next screenshot.

![screenshot showing how to open the folder menu](/media/tagspaces-open-folder-context-menu.png)

In the menu which will appear, choose the _Add existing file_ options.

### Import with drag and drop from the desktop

And finally, files can be imported also by simple dragging one from your desktop or the default file manager of your operating system and drop it in the app.

<video src="/media/tagspaces-drag-drop.mp4" autoplay="true" loop="true" poster="/media/tagspaces-drag-drop.png" className="img-responsive"></video>

### Importing files on mobile devices

TBD

![importing on mobile devices](/media/tagspaces-mobile-import.jpg)
