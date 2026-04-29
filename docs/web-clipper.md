---
title: Web Clipping - Collect Everything Online
description: Use the TagSpaces Web Clipper browser extension for Chrome, Firefox, Edge, Brave, and Opera to save web pages, markdown, screenshots, and bookmarks to your local file system.
tags: [tutorial, tool]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import VideoYT from '@site/src/components/VideoYT';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

To provide an easy way to collect web content such as web pages, articles, PDF documents, bookmarks, places, and screenshots, we have created the TagSpaces Web Clipper browser extension. Unlike other web clipping software, our extension saves content locally on the user's hard drive as plain files, offering full control over the saved files.

The extension is available for [Chrome](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tagspaces/), [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tagspaces-web-clipper/dinjgbhjngaockabnagbonbfinanjpdn), and other Chromium-based browsers like **Brave** and **Opera** (install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk) ).

<CenteredVideo
    caption="Demonstration of content collection with the web clipper"
    src="/media/webclipper/webclipper-content-collection.mp4"
    posterUrl="/media/webclipper/webclipper-content-collection.avif"
    autoPlay
    showCaption
    maxWidth="100%"
/>

Here is an older video on [Youtube](https://youtu.be/lUVoa8tAr6U) demonstrating the capabilities of the web clipper.

## Basic Features

Before creating any file, the user can change the file's title and add tags to its name. This information can be entered in sections (1) and (2) of the extension's interface.

<CenteredImage
    caption="A screenshot showing the web clipper in action"
    src="/media/webclipper/web-cipper-extension.avif"
    maxWidth="550px"
    showCaption
/>

:::tip
The basic functionalities described in the following sections are completely decoupled from the TagSpaces desktop application and can be used with any other application that supports HTML, Markdown, MHTML, PNG, PDF, or URL files.
:::

### Save Content as HTML

The `Save Editable Page` button saves the current webpage as a single file, including embedded images and styling, in HTML format. There are two basic extraction modes available:

- **Simplified Mode:** Automatically extracts the webpage's main content without clutter like ads or navigation, useful for clipping articles (uses [Mozilla's Readability](https://github.com/mozilla/readability) library).
- **Full Mode:** Saves all original text and image content of the webpage.

HTML files can be opened with any web browser. TagSpaces also has a built-in [viewer](/extensions/html-viewer/) and [editor](/extensions/html-editor/) for HTML files, allowing users to add comments or highlight important information.

:::info
JavaScript code in the created HTML file is removed to prevent unwanted behavior when opening the file with other programs.
:::

### Save Content as Markdown

By switching the extraction type to **Markdown** in the extension popup, the `Save Editable Page` button saves the webpage content as a `.md` file instead of HTML. The HTML-to-Markdown conversion is powered by the [Turndown](https://github.com/mixmark-io/turndown) library.

This is useful for creating clean, editable notes from web articles that can be opened in any text editor or in TagSpaces' built-in [Markdown editor](/extensions/md-editor).

When the **front matter** option is enabled in the extension settings, a YAML metadata block is automatically added to the top of the markdown file:

```yaml
---
url: "https://example.com/article"
date: "2026-04-08T12:34:56.789Z"
tags:
  - "tag1"
  - "tag2"
---
```

This front matter preserves the source URL, clipping date, and any tags you added, making the file self-contained and easy to process with static site generators or note-taking tools.

:::info
The markdown extraction mode is marked as experimental. Results may vary depending on the complexity of the webpage.
:::

### Save Content as MHTML

Available only on Chromium-based browsers (Chrome, Edge, Brave, Opera), the `Save Complete Page` button saves the webpage in MHTML format, preserving the original design as much as possible.

On some browsers, MHTML saving is not enabled by default. Learn how to activate it [here](#enabling-the-saving-of-webpages-as-mhtml).

MHTML files are natively supported by Chrome, Edge, and Internet Explorer. TagSpaces includes an integrated [MHTML viewer](/extensions/mhtml-viewer/).

### Save Content as PDF

On Firefox, the `Save Complete Page` button saves the webpage as a PDF file.

### Save Current Selection

If you select text and images on the webpage, the `Clip Selection` button saves the selection as an HTML file, embedding images as data URLs directly into the file.

### Save a Screenshot

The `Take Screenshot` button saves a screenshot of the visible area of the webpage as a PNG file.

### Save a Full-Page Screenshot

The `Full-Page Screenshot` button captures the **entire page** — including content below the fold — and saves it as a single tall PNG file. Useful when you want to archive the visual design of a page in full, not just whatever happened to be on screen.

The clipper produces this by scrolling the page in viewport-sized steps, capturing each section, and stitching the images together. To avoid duplicated header bars, navigation menus, and cookie banners in the result, **fixed and sticky elements are hidden after the first capture** and restored when the run finishes. Long pages can take several seconds because the browser limits how often a tab can be captured (no more than two captures per second), so the clipper paces itself accordingly.

The resulting file is auto-tagged with `screenshot` and the page's domain, the same way the regular screenshot is.

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
- **Auto-Tag Extraction:** The extension can extract tags from page metadata (meta keywords, article tags, category URLs, and JSON-LD data) and populate the tags field automatically. A **Clear Tags** button is available to quickly remove all extracted or manually entered tags.

<CenteredImage
    caption="A screenshot showing the extracted geo location as Plus Code"
    src="/media/webclipper/web-clipper-geotag-extraction.avif"
    showCaption
/>

The browser extension seamlessly integrates with the TagSpaces desktop application, allowing for local collection and organization of web data.

## Extension Options

The extension options can be accessed in several ways:

**In Chrome, Edge, Brave, and Opera:**
- Click the **settings button** inside the extension popup
- Right-click the extension icon in the toolbar and choose **Options**
- Open the browser's extension management page and click **Details** → **Extension options**

<CenteredImage
    caption="Extensions options in Chrome"
    src="/media/webclipper/web-clipper-chrome-options.avif"
    showCaption
/>

**In Firefox:**
- Click the **settings button** inside the extension popup
- Open the Firefox Add-ons Manager (`about:addons`), find the TagSpaces Web Clipper, and click **Preferences**

<CenteredImage
    caption="Extensions preferences in Firefox"
    src="/media/webclipper/web-clipper-firefox-preferences.avif"
    showCaption
/>

The following settings are available:

- **Embed screenshot in saved files** — when enabled, a screenshot of the visible area is embedded in HTML and URL files. This screenshot is used as a thumbnail in TagSpaces. Enabled by default.
- **Embed images as data URLs** — when enabled, images on the page are converted to data URLs and embedded directly in saved HTML and Markdown files, making them fully self-contained. Enabled by default. Disable this to reduce file size if you don't need offline image access.
- **Add YAML front matter to Markdown files** — when enabled, saved Markdown files include a YAML metadata block at the top containing the source URL, clipping date, and tags. Enabled by default.
- **Auto-extract tags from page metadata** — when enabled, the extension automatically extracts tags from the page's meta keywords, article tags, category URLs, and JSON-LD structured data, and populates the tags field in the popup. Disabled by default.

:::info
The auto-tag extraction feature is experimental. Extracted tags depend on the metadata provided by the website.
:::

## Adjustments for Chromium-based Browsers

The following adjustments apply to Chrome, Edge, Brave, Opera, and other Chromium-based browsers.

### Enabling Webpage Saving as MHTML

Follow these steps to enable MHTML saving in Chromium-based browsers:

1. Open Chrome/Chromium.
2. Navigate to `chrome://flags`.
3. Search for "Save Page as MHTML."
4. Click "Enable."
5. Restart your browser.

![Screenshot showing how enable MHTML saving in Chrome](/media/webclipper/enable-mhtml-saving-chrome.png)

> **Note**: After activation, you will no longer be able to save websites as HTML files.

### Adding Keyboard Shortcuts to the Web Clipper

At the bottom of Chrome's extension management page, you'll find a "Keyboard shortcuts" link (highlighted in red in the screenshot below). This opens a dialog where you can set a direct keyboard shortcut for the extension's popup area.

![Open the Chrome extension shortcut configuration](/media/webclipper/chrome-shortcuts-config.png)

I set `ctrl+s` as my shortcut, replacing Chrome's default "Save As" functionality, but you can choose any key combination.

![Setting ctrl+s as keyboard shortcut for the web clipper](/media/webclipper/chrome-set-extension-shortcut.png)

### Specify Download Folder for Web Clippings

To be prompted where to save each file, activate the "Ask where to save each file before downloading" option in Chrome's advanced settings.

![Enable asking where to save files in Chrome](/media/webclipper/chrome-ask-where-to-save.png)

### Pin the Web Clipper

Make the Web Clipper easily accessible by pinning it in the extensions area of your browser. Learn how from the video below.

<CenteredVideo
  caption="Video showing how to pin the chrome web clipper to the extensions' area"
  src="/media/videos/pin-extension-chrome.mp4"
  maxWidth={600}
  autoPlay
  showCaption
/>
