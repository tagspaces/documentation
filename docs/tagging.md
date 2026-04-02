---
title: Organizing Files and Folders with Tags
description: Discover how to organize files and folders in TagSpaces using tags stored in filenames or sidecar files, enabling portable, vendor-independent metadata management.
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

## Why Tagging?

Tagging is a versatile approach to organizing files and folders. Unlike predefined categories, tagging lets users label items with words that reflect their personal understanding. It enhances searching and helps categorize files like songs, books, documents, and more in a user-defined way. Tags are personal, providing the freedom to define and group files as you see fit.

One of the core functionalities in TagSpaces is the ability to add tags to files and folders. Unlike other products, **TagSpaces does not rely on a central database for storing tags**. Instead, it offers two alternative methods, which are described in the following sections.

<CenteredVideo
    caption="Various ways for tagging files and folders"
    src="/media/tagging/tag-files-and-folders.mp4"
    posterUrl="/media/tagging/tag-files-and-folders.avif"
    autoPlay
    showCaption
    maxWidth="100%"
/>

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

<!-- <CenteredImage src="/media/filename-tagging.png" caption="Tags embedded in file names" /> -->

```
Filename [tag1 tag2].extension
│       │  │    │  │ │       │
│       │  │    │  │ └───────┴──── File extension (3–4 chars)
│       │  │    │  │
│       │  │    │  └────────────── Closing bracket "]"
│       │  │    │                    marks end of tag area
│       │  │    │
│       │  │    └───────────────── A tag ("tag2")
│       │  │
│       │  ├────────────────────── Opening bracket "["
│       │  │                        marks begin of tag area
│       │  │
│       │  └────────────────────── A tag ("tag1" ) and mandatory space
│       │                          used for tag separation
│       │
│       └───────────────────────── Optional space for visual separation of the title
│
└───────────────────────────────── Original filename / title
                                   describing the file's content
```

Once embedded in the name of file, the tag stick there and can be removed only by file renaming. **This makes the tagging "durable" and portable**. The tags embedded in the name of a file "survives" synchronization across cloud platforms such as Dropbox and Google Drive and can be read by TagSpaces or any other file searching software on Windows, macOS or Linux.

### Storing Tags in Sidecar Files

As an alternative to embedding tags in file names, TagSpaces allows storing tags in sidecar files within a hidden `.ts` folder. This can be activated in the settings for all locations or per location in the properties of every location.

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

To add or remove tags from multiple files or folders, first, select them by holding the CTRL/⌘ key and clicking on the entries with the left mouse button. You can also use checkboxes in the list view.

Once selected, right-click on the files and choose `Add / Remove Tags` from the context menu, or click the `Tags` button in the toolbar.

This will open a popup dialog for managing tags.

<CenteredImage src="/media/tagging/tagging-multiple-tags-dialog.avif" caption="Tagging multiple files"  maxWidth="500px"/>

The options in the dialog are:

- **Clean all tags:** Removes all tags from the selected files.
- **Remove tags:** Removes the specified tags. You have to manually enter the tags which you want to remove from the selected files.
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

This action is supported in the [grid](/perspectives/grid), [list](/perspectives/list) and [kanban](/perspectives/kanban) perspective.
<CenteredImage src="/media/tagging/tagging-dnd-taglibrary.avif" caption="Tagging with drag-and-drop from the tag library" maxWidth={650}/>

### Dragging a tag to the tagging section of the details area

This actions is supported in the details of files and folders and can be initiated from the tag library or from a file or folder in the [grid](/perspectives/grid) and [list](/perspectives/list) perspectives

<CenteredImage src="/media/tagging/tagging-dnd-entrydetais.avif" caption="Tagging with drag-and-drop from the tag library folder details" />

### Dragging a tag from one file or folder to another

This action is supported in the [grid](/perspectives/grid) and [list](/perspectives/list) perspectives.
<CenteredImage src="/media/tagging/tagging-dnd-entry-to-entry.avif" caption="Tagging with drag-and-drop from a folder to another" maxWidth={650}/>
