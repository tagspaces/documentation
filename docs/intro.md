---
slug: /
title: TagSpaces Intro
---

Welcome to the documentation of the TagSpaces products as of **version 3**.

> **Note:** This documentation is in <b>work in progress</b> status.

TagSpaces is an open source, cross-platform, no backend, no login, file manager, organizer and browser. It helps you organize your files, photos and other documents with tags on different platforms and/or devices, according to your own preferences and following your own logic, by using the same smart and friendly interface everywhere.

<!-- The following few slides explain the basics of the project. To navigate the presentation use the arrow keys or click on it and use the arrow key on your keyboard. -->

<!--iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQEVye_m0Su6d0_jcUmmnqNVzt2cnXVB8CcejLr8k6fGH5_TIV4YC5QNbxyNBNoVdwRFu42Zor7ni1g/embed?start=true&loop=true&delayms=5000" frameBorder="0" width="100%" height="500" allowFullScreen></iframe-->

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
  - The supported tagging options makes a folder with tagged files
    self containing all the needed information, which useful by e.g. syncing
  - No database or vendor locking
  - Easy to synchronize between devices, just use TagSpaces with your Dropbox/NextCloud/Google Drive folder
    -Saving the tags in the filename enables you to use the search capabilities of your operating system

## Products landscape

- **Community desktop version** - the main, community developed edition of TagSpaces
- **PRO desktop version** - extended solution based on the community version for advanced users
- **Web Clipper as Firefox addon** - a web clipper allowing the saving of whole webpages, webpage fragments and screenshot as local files
- **Web Clipper as Chrome extension** - same as the web clipper for Firefox
- **Android app** - an app offering most of the features from the community desktop version on a Android device (currently in development)
<!--- **Web self hosting edition** - A package for self hosting on top of a any WebDAV server such as Nextcloud or ownCloud.-->

## Common Use Cases

- Organizing files and folders
- Desktop search
- Note taking
- Photo management
- Bookmark management
- Simple file manager
- eBook organizer

## Videos

The short introductory video below shows TagSpaces in action:

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/KUO1zvavYMw?rel=0" frameBorder="0" allowFullScreen></iframe>

Check out the [TagSpaces YouTube channel](https://www.youtube.com/channel/UCzfSaeg-7mpt96UI97zwbfQ) for more TagSpaces related videos.

## Technology Stack

Frontend based on:

- JavaScript / React / Redux
- HTML / CSS / React Material UI

Native APIs (for example for file access) are:

- Desktop versions for Windows, macOS and Linux based on Electron
- Mobile versions for Android and iOS based on Cordova
- Web versions based on webDAV, AWS S3
