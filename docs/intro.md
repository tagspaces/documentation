---
slug: /
title: TagSpaces User Docs
---

Welcome to the documentation of the TagSpaces products!

## What is TagSpaces ?

TagSpaces is an open source, cross-platform, no backend, no login, file manager, organizer and browser. It helps you organize your files, photos and other documents with tags on different platforms and/or devices, according to your own preferences and following your own logic, by using the same smart and friendly interface everywhere.

![Start screen](/media/home-screen.png)

## Key Features

- Platform independent and future-proof tagging for files and folders
- Platform independent way for adding descriptions to files and folders
- Integrated free text and tag search (AND, OR and NOT boolean operators)
- Integrated viewers for many image, video, audio and document file formats
- Integrated editors for HTML, text and markdown files
- Support for user interface themes (e.g. dark mode)
- Supporting thumbnail preview for many file types

## Philosophy

- TagSpaces follows a no backend and no login philosophy
- It is not a SaaS, so there is no back-end
- The application is not Internet dependent, a pure offline use is possible
- TagSpaces is not saving the meta information in a database -> no vendor locking, no lost information on database crashes or installations on a new computer
- All the needed information is extracted by the time of use from your files.
- File system as a database
- The supported tagging options makes a folder with tagged files self containing all the needed information, which useful by e.g. syncing
- No database or vendor locking
- Easy to synchronize between devices, just use TagSpaces with your Dropbox/NextCloud/Google Drive folder
- Saving the tags in the filename enables you to use the search capabilities of your operating system

## Product landscape

- **[TagSpaces Lite Desktop](https://www.tagspaces.org/products/lite/)** - the main, community developed edition of TagSpaces as desktop application for Windows, Mac and Linux
- **[TagSpaces Pro Desktop](https://www.tagspaces.org/products/pro/)** - extended solution based on the community version for advanced users
- **[TagSpaces Pro Web](https://www.tagspaces.org/products/proweb/)** - A package for self hosting on your NAS or other web infrastructure connecting object storage
- **[TagSpaces Pro Enterprise](https://www.tagspaces.org/products/enterprise/)** -
- **[Web Clipper extension for Chrome, Firefox and Edge](https://www.tagspaces.org/products/webclipper/)** - a web clipper browser extension allowing the saving of whole webpages, webpage fragments and screenshot as local files
- **[Android app](https://www.tagspaces.org/downloads/)** - a mobile app offering most of the features from the community desktop version on Android devices

## Common Use Cases

- Organizing files and folders
- Desktop search
- Note taking
- Photo management
- Bookmark management
- Simple file manager
- eBook organizer

## Videos

This short introductory video shows TagSpaces in action:

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/Xjwxq4c0RBQ?rel=0" frameBorder="0" allowFullScreen></iframe>

### Youtube channel

We have [YouTube channel](https://www.youtube.com/channel/UCzfSaeg-7mpt96UI97zwbfQ) where publish videos related to the application.

## Technology Stack

Front-end of the application is based on:

- JavaScript / Typescript / HTML / CSS
- React / Redux / [Material UI](https://material-ui.com/)

Native APIs e.g. for file access are based accordingly:

- Desktop versions for Windows, macOS and Linux based on [Electron](https://www.electronjs.org/)
- Mobile versions for Android based on [Cordova](https://cordova.apache.org/)
- Web versions for managing files in object storages based on [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-javascript/)

---

:::caution
This documentation is a **work in progress**.
:::
