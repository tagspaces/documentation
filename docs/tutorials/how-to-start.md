---
title: How to start
tags: [tutorial]
---

<!-- 🧭 TagSpaces as manager for personal data storage -->

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Getting Started with TagSpaces

Welcome to **TagSpaces**, your privacy-friendly file manager and organizer.  
This guide will help you get started quickly after downloading and installing the app.

---

## Launching for the First Time

When you start TagSpaces, after you accept the software license, you’ll be greeted by the **Welcome Screen**.  
From here, you can:

- Create or connect a **location** (a folder you want to manage with TagSpaces)
- Explore the **intro tour** to understand the interface
- Open existing folders on your computer or cloud storage

<!-- > 💡 **Tip:**  -->

:::tip
TagSpaces never uploads your data anywhere by default. All your files stay where they are — on your local drive or your object storage.
:::

---

## Understanding “Locations”

A **location** is simply a folder from your computer, an external drive, or an S3-compatible cloud bucket.

<!-- > 🔒 **Privacy Note:** TagSpaces reads and writes directly to your files — it does not upload or track any data. -->

TagSpaces connect automatically some of your standard folders like the **Downloads**, **Documents**, **Music** and **Desktop**. The **Locations** are visible on the left area of the application window.

<CenteredImage src="/media/how-to-start/default-locations.avif" caption="Default locations in the location manager" showCaption/>

The standard locations are fully optional you can remove them or create new locations pointing to folders which contain files you want to manage in TagSpaces.

**To create a new location:**

1. Click the **“New button”** on the top left part of the main screen, and the choose **New Location** from the menu.

<CenteredImage src="/media/how-to-start/open-create-location-dialog.avif" caption="Opening the dialog for creating new locations" showCaption/>

2. Click the folder icon to to choose a folder from your file system, which will be the root of your location.

<CenteredImage src="/media/how-to-start/choosing-folder.avif" caption="Choose the folder for the location" showCaption/>

3. Choosing the folder from your file system

<CenteredImage src="/media/how-to-start/choosing-location-folder.avif" caption="Choosing the root folder for your location from your file system" showCaption/>

4. Give the location a recognizable name.

<CenteredImage src="/media/how-to-start/adjusting-location.avif" caption="Giving a suitable name for your location" showCaption/>

TagSpaces takes automatically the name of the chosen folder as name for the location. You can change this name to something else in this dialog.

5. Now you can browse, tag, and organize all files inside that location directly within TagSpaces.

<CenteredImage src="/media/how-to-start/listing-location.avif" caption="Giving a suitable name for your location" showCaption/>

:::info Connecting cloud locations
TagSpaces can connect to folders located on object storage. The object storage can be hosted on a [NAS](/tutorials/folders-as-objectstorage-with-s3proxy) or in the Cloud like on [AWS S3](/tutorials/s3-bucket-locations) or [Wasabi](/tutorials/wasabi-locations).
:::

 <!-- [Cloudflare R2](/tutorials/tagspaces-web-cloudflare) or [Contabo](/tutorials/contabo-locations). -->

---

## Navigating the Interface

TagSpaces uses a clean, two-panel layout:

- **Left panel:** lists your connected locations and tag groups
- **Main area:** displays folder contents using a **perspective** (grid, list, gallery, kanban, etc.)
- **Top bar:** provides search, sorting, and settings access

---

## Tagging Your Files and Folders

Tags are at the heart of TagSpaces. They help you organize and find files faster.

The following video how you can apply tags to files and folder:

- By adding tags from the tag library using drag and drop
- By dragging tags from one file and dropping them onto another
- By using the tagging dialog to add and remove tags

<CenteredVideo
    src="/media/videos/file-and-folder-tagging.mp4"
    videoAutoplay={false}
    posterUrl="/media/videos/file-and-folder-tagging.jpg"
    maxWidth="100%"
    autoPlay
    caption="Video showing various ways to apply tags to files and folders"
    showCaption
/>

You can group tags by category in [tag groups](/ui/taglibrary#tag-groups) — for example:  
🧾 _Document Type_, 🎨 _Project_, 🌍 _Location_, or 📅 _Year_.

> ⚙️ **Tagging method:** Choose between storing tags in filenames or in sidecar files (`.json`).  
> Adjust this in **Settings → Tagging Method**.

---

## Creating Notes and New Files

TagSpaces includes built-in editors for:

- **Markdown** (recommended for note-taking)
- **Plain text**
- **HTML** (for formatted documents)

**To create a note:**

1. Click the **“+ New File”** button.
2. Select a format.
3. Start typing — your note is saved as a regular file in your folder.

---

## Exploring Perspectives

**Perspectives** define how your files are displayed:

| Perspective                                            | Description                                     |
| ------------------------------------------------------ | ----------------------------------------------- |
| 🗂️ [Grid](/perspectives/grid)                          | Visual tile layout                              |
| 📋 [List](/perspectives/list)                          | Table-like view with sorting                    |
| 🖼️ [Gallery](/perspectives/gallery) <ProFeature />     | Ideal for image collections                     |
| 🗺️ [Mapique](/perspectives/mapique) <ProFeature />     | Display geo-tagged files on a map               |
| 📊 [FolderViz](/perspectives/folderviz) <ProFeature /> | Visualize folder structures and tag connections |
| ✅ [Kanban](/perspectives/kanben) <ProFeature />       | Manage tasks as cards in a board                |

Switch perspectives using the **Perspective Switcher** in the toolbar.
![Changing perspectives for a folder](/media/core/perspective-switch.avif)

---

## Syncing Files Across Devices

TagSpaces works with any file synchronization service:

- Dropbox
- Google Drive
- Nextcloud
- Syncthing
- S3-compatible storage (Pro)

Connect the same folder as a location on multiple devices to keep tags and notes synced.

---

## Customization and Themes

Personalize your workspace:

- Light and dark modes
- Adjustable language and default perspectives
- Custom folder background colors (Pro)
- Tag color customization

Go to **Settings → Appearance & Preferences** to tweak your setup.

---

## Next Steps

Now that you’ve created your first location:

- Add and tag files
- Write your first Markdown note
- Try switching perspectives
- Install the **[TagSpaces Web Clipper](https://www.tagspaces.org/products/webclipper/)** to save content from the web

> 🚀 **Pro Tip:** Upgrade to TagSpaces Pro for advanced perspectives, geo-tagging, and automation with local AI integrations.

---

## 💡 Additional Resources

- [Tutorials](/tags/tutorial/)
- [Community Forum](https://tagspaces.discourse.group/)
- [FAQ](https://www.tagspaces.org/faq/)
