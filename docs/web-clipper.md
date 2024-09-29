---
title: Web Clipping - Collect Everything Online
tags: [tutorial]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import VideoYT from '@site/src/components/VideoYT';

To provide an easy way to collect web content such as web pages, articles, PDF documents, bookmarks, places, and screenshots, we have created the TagSpaces Web Clipper browser extension. Unlike other web clipping software, our extension saves content locally on the user's hard drive as plain files, offering full control over the saved files.

The extension is available for [Chrome](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tagspaces/), and [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tagspaces-web-clipper/dinjgbhjngaockabnagbonbfinanjpdn).

<VideoYT
    youtubeId="lUVoa8tAr6U"
    title="TagSpaces Web Clipper Introduction Video"
    posterUrl="/media/videos/tagspaces-webclipper-screenshot-yt-video.png"
    height={550}
/>

## Basic Features

Before creating any file, the user can change the file's title and add tags to its name. This information can be entered in sections (1) and (2) of the extension's interface.

<CenteredImage
    caption="A screenshot showing the web clipper in action"
    src="/media/tagspaces-webclipper.png"
    maxWidth="550px"
    showCaption
/>

:::tip
The basic functionalities described in the following sections are completely decoupled from the TagSpaces desktop application and can be used with any other application that supports HTML, MHTML, PNG, PDF, or URL files.
:::

### Save Content as HTML

The `Save Editable Page` button saves the current webpage as a single file, including embedded images and styling, in HTML format. There are two modes available:

- **Simplified Mode:** Automatically extracts the webpage's main content without clutter like ads or navigation, useful for clipping articles (uses [Mozilla's Readability](https://github.com/mozilla/readability) library).
- **Full Mode:** Saves all original text and image content of the webpage.

HTML files can be opened with any web browser. TagSpaces also has a built-in [viewer](/extensions/html-viewer) and [editor](/extensions/html-editor) for HTML files, allowing users to add comments or highlight important information.

:::info
The javascript code in the crate HTML-file is removed in order to prevent unwanted behavior on opening the file with other programs.
:::

### Save Content as MHTML

Available only on Chromium-based browsers like Chrome and Edge, the `Save Complete Page` button saves the webpage in MHTML format, preserving the original design as much as possible.

On some browsers, MHTML saving is not enabled by default. Learn how to activate it [here](#enabling-the-saving-of-webpages-as-mhtml).

MHTML files are natively supported by Chrome, Edge, and Internet Explorer. TagSpaces includes an integrated [MHTML viewer](/extensions/mhtml-viewer).

### Save Content as PDF

On Firefox, the `Save Complete Page` button saves the webpage as a PDF file.

### Save Current Selection

If you select text and images on the webpage, the `Clip Selection` button saves the selection as an HTML file, embedding images as data URLs directly into the file.

### Save a Screenshot

The `Take Screenshot` button saves a screenshot of the visible area of the webpage as a PNG file.

### Save Bookmark

The `Create Bookmark` button creates a URL file containing the current webpage's URL, useful for saving only the link rather than the entire page.

### Download PDF

If the current webpage is a PDF, the extension offers to save it directly.

## Advanced Features

The TagSpaces Web Clipper also includes several advanced features:

- **Timestamp and Source URL:** The extension embeds the clipping timestamp and source URL in the HTML file. This information is used later for navigation back to the original webpage when previewing in TagSpaces.
- **Screenshot Integration:** A screenshot of the visible part of the webpage is embedded in the created HTML and URL files. This screenshot is used as a thumbnail and helps archive the webpage as it appeared at the time of clipping. This makes TagSpaces an effective visual bookmarking tool.
- **Geo Coordinates Extraction:** For URLs from mapping services like OpenStreetMap or Google Maps, the extension extracts geo coordinates and converts them to a geo tag, embedded in the file name.
- **Plus Codes Support:** The geo tag can be converted to [Open Location Code](https://github.com/google/open-location-code) or Plus Codes, which provide a simpler and more readable representation of geo coordinates (used in Google Maps).
- **Automated Tagging:** When saving a screenshot, the domain of the webpage, current date, and the "screenshot" tag are automatically added to the file, making search and organization easier within TagSpaces and other applications.

<CenteredImage
    caption="A screenshot showing the extracted geo location as Plus Code"
    src="/media/tagspaces-webclipper-olc.png"
    showCaption
/>

The browser extension seamlessly integrates with the TagSpaces desktop application, allowing for local collection and organization of web data.

## Adjustments for Chrome-based Browsers

### Enabling Webpage Saving as MHTML

Follow these steps to enable MHTML saving in Chrome and Chromium browsers:

1. Open Chrome/Chromium.
2. Navigate to `chrome://flags`.
3. Search for "Save Page as MHTML."
4. Click "Enable."
5. Restart your browser.

![Screenshot showing how enable MHTML saving in Chrome](/media/enable--mhtml-saving-chrome.png)

> **Note**: After activation, you will no longer be able to save websites as HTML files.

### Adding Keyboard Shortcuts to the Web Clipper

At the bottom of Chrome's extension management page, you'll find a "Keyboard shortcuts" link (highlighted in red in the screenshot below). This opens a dialog where you can set a direct keyboard shortcut for the extension's popup area.

![Open the Chrome extension shortcut configuration](/media/chrome-shortcuts-config.png)

I set `ctrl+s` as my shortcut, replacing Chrome's default "Save As" functionality, but you can choose any key combination.

![Setting ctrl+s as keyboard shortcut for the web clipper](/media/chrome-set-extension-shortcut.png)

### Specify Download Folder for Web Clippings

To be prompted where to save each file, activate the "Ask where to save each file before downloading" option in Chrome's advanced settings.

![Enable asking where to save files in Chrome](/media/chrome-ask-where-to-save.png)

### Pin the Web Clipper

Make the Web Clipper easily accessible by pinning it in the extensions area of your browser. Learn how from the video below.

<CenteredVideo
  caption="Video showing how to pin the chrome web clipper to the extensions' area"
  src="/media/videos/pin-extension-chrome.mp4"
  maxWidth={600}
  autoPlay
  showCaption
/>
