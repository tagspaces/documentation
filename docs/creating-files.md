---
title: Create Files
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Creating and Importing Files

In addition to previewing various file types, TagSpaces also allows you to create new files in several text-based formats, making it a great note-taking application.

## Content Creation Menu

To create a new file in TagSpaces, you have several options. The easiest way is to click the plus icon button, which is almost always visible in the application.

<CenteredImage
    caption="Create new file with the plus button"
    src="/media/editcreate/create-new-plusbutton.avif"
    maxWidth="350px"
  />

On the desktop version of the app, you can also press `ALT` to open the **Main Menu** and then select **New File** from the **File menu**.

<CenteredImage
    caption="Create new file from the main menu"
    src="/media/editcreate/create-new-file-menu.avif"
    maxWidth="650px"
  />

This opens the content creation menu, where you can choose from the following actions:

- **New Plain Text File** - Creates a plain text file with the `.txt` extension.

- **New Markdown File** - Creates a text file with the `.md` extension, which ill allow you to add content [Markdown](https://en.wikipedia.org/wiki/Markdown) format.

<CenteredImage
    caption="Dialog for creating markdown files"
    src="/media/editcreate/create-markdown-file-dialog.avif"
    maxWidth="450px"
  />

- **New HTML File** - Creates an HTML file with the `.html` extension, allowing you to add rich text content.

- **New Link File** - Create a URL file, which contain a link to a web site. This files are supported natively on Mac and Windows. There are suitable for creating bookmarks.

<CenteredImage
    caption="Create new file with the plus button"
    src="/media/editcreate/create-new-link-file.avif"
    maxWidth="450px"
  />

- **New Audio File** - <ProFeature /> - Opens a dialog where you can record an audio note.

<CenteredImage
    caption="Create new file with the plus button"
    src="/media/editcreate/create-new-audio-file.avif"
    maxWidth="550px"
  />

- **New Form Device** - Allows you to import files into the app. See the [Importing Files](#importing-files) section for more details.
- **New Folder** - Opens the dialog for creating new folders, where beside the name you can choose also the folder's background color.

<CenteredImage
    caption="Dialog for creating new folders"
    src="/media/editcreate/create-new-folder-dialog.avif"
    maxWidth="500px"
  />

- **New From URL** - Opens a dialog where you can enter a URL in the text field and click the **OK** button to start the download and save the file in the current folder.

<CenteredImage
    caption="Dialog for downloading files from URLs"
    src="/media/editcreate/download-file-dialog.avif"
    maxWidth="400px"
  />

:::info
Downloading files from URLs generally works for files shared from object stores, but often fails due to CORS restrictions implemented by websites. As a workaround, you can use our **[browser extension](/web-clipper/)**.
:::

- **New Location** - Opens the dialog for creating a new location.

- **New Window** - Open a new application window

At the top of the file creation dialog, the automatically generated file name is displayed. The text is preselected, so you can easily change it to whatever you need. This is especially useful when creating new cards in the Kanban perspective. Below the text field, you will see the path where the file will be created. The default path is usually the current folder, but if no location is open, the file will be created in the root folder of the first location in your location manager.
The file name follows this format: `note[20191113~164613].md` (or `.html` or `.txt`). This format includes a timestamp, which is explained in the next section.

### Timestamp as Default Tag

When you create a new file in TagSpaces, a timestamp in the format `YYYYMMDDThhmmss` is automatically added as a tag:

- `YYYY`: The current year
- `MM`: The current month
- `DD`: The current day
- `T`: A delimiter between the date and time
- `hh`: The hour
- `mm`: The minute
- `ss`: The second

For example, a file created on January 17, 2017, at 10:30:32 would have the timestamp tag `20170117T103032`.

These timestamp tags ensure the uniqueness of automatically generated file names.

<!-- Such timestamps make it possible to easily group files from different locations based on the time of creation. Of course this would be possible by reading the same information from the file system, but tagging with the timestamp allows for greater flexibility. For example you can change the timestamp to anything you like, while keeping the original creation modification date of the file, and tagging the file will allow you to use TagSpaces's powerful grouping and organizing features in the same place you manage other tags. -->

## Importing Files

TagSpaces offers several ways to import files. After a successful import, the file will be copied to the currently open folder.

### Importing from the Folder Menu

You can also import files from the folder menu, located in the top-right corner of the application.

![Screenshot showing how to open the folder menu](/media/tagspaces-open-folder-context-menu.avif)

Choose **New From Device** to open your operating system's file chooser. From there, select the files you want to import.

### Importing Files on Mobile Devices

On mobile devices, tapping the **New From Device** menu opens a dialog that lets you choose various sources for files. In the following screenshot from an **Android** device, you can see options like:

- **Camera**: Opens the _Camera app_ to take a picture and import it into the current location.
- **Camcorder**: Allows you to record a video that can be imported into the app.
- **Voice Recorder**: Launches the _Voice Recorder app_ to create an audio note that can be imported.
- **Files**: Opens the _Files app_ to select files for import.

Depending on your Android device and installed apps, this dialog may display more or fewer options.

<CenteredImage
    caption="Importing files on mobile devices"
    src="/media/editcreate/tagspaces-mobile-import.jpg"
    showCaption
    maxWidth="300px"
/>

On **iOS**, you have the options to take a picture with the _Camera app_ or select one or more files from the _Files app_.

:::info
If the current folder is located on object storage (e.g., AWS S3), importing will trigger the file's upload to the S3 bucket.
:::

### Importing via Drag and Drop

You can also import files by dragging them from your desktop or file manager and dropping them into the app.

<CenteredVideo
    caption="Importing and exporting files via drag and drop from the desktop"
    src="/media/videos/file-drag-and-drop.mp4"
    posterUrl="/media/videos/file-drag-and-drop.jpg"
    maxWidth="100%"
    autoPlay
    showCaption
/>

:::note
If the current folder is located on object storage (e.g., AWS S3), dragging and dropping files will trigger their upload to the S3 bucket.
:::
