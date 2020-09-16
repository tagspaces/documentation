---
title: Web clipping - collect everything online
---

## Introduction

In order to provide an easy way to collect web content such as web pages, articles, PDF-documents, bookmarks, places and screenshots, we have created the TagSpaces Web Clipper browser extension.

## Basic features

The browser extensions are available for [Chrome](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tagspaces/). Both extensions have the following functionalities:

- Saving the current webpage as a single file including the embedded images and styling information in HTML format. Here the extension supports two modes. The default one is called **simplified**, where TagSpaces uses a [library](https://github.com/mozilla/readability) for automatic extraction of the webpage's main content without any clutter of adds or navigation. This is very useful clipping articles for example. The second one is called **full**. Here the extension tries to save all the original text and image content of the webpage.
- On Chrome we support an additional file format called MHTML, which is preserving the original look and feel of the web page as much as possible.
- Saving the a selected part of the current webpages as HTML file. TagSpaces tries to embed the contained images as data-urls in the HTML file.
- Saving a screenshot of the visible area of the current web page as a PNG file.
- Saving an URL file containing the url of the current web page. This is useful if you don't want to save the whole page, but only to make a bookmark to it.
- Saving currently opened PDF-document locally.

Before the creation of any file, the user has the ability to change the title of file and to add tags to its file name.

<figure>
  <img title="A screenshot showing the web clipper in action" src="/media/tagspaces-webclipper.png" class="img-responsive center-block" />
  <figcaption>A screenshot showing the web clipper in action</figcaption>
</figure>

The basic functionalities are completely decoupled from the desktop application of TagSpaces and so they can be used with any other application supporting HTML, MHTML, PNG, PDF or URL files.

## Advanced features

In addition to that we offers some features for more advanced use cases such as the following:

- Embedding the clipping timestamp and the source URL of the currently scraped web page in the HTML file. This information can be used later by previewing the file in TagSpaces for navigation to the original URL of the clipped page.
- Integration of a screenshot of the visible part of the web site in the created HTML and URL files. If you open the URL for example is opened in the desktop app, the screenshot is extracted and shown in the file preview area. It is also used for the creation of the thumbnail for this file. In addition to that the screenshot is useful for archiving purposed, it displays the web page in the exact way you have opened it in the browser. Everybody knows that some page change or completely disappear very often. This feature makes TagSpaces a perfect visual bookmarking tool.
- Extracting the geo coordinates from the URLs of mapping services such as OpenStreetMap and Google Maps. This information is converted to a geo tag and embedded in the name of the created file.
- The extension can create the geo tag in [Open Location Code](https://github.com/google/open-location-code) or OLC for short used as [plus codes](https://plus.codes/) in Google Maps for example. The plus codes have the advantage that they represent the geo coordinates in a much simpler and readable way.
- By saving of a screenshot from the current web page, the web clipper adds as tags the domain of this web page, the current date and tag "screenshot". This makes the search later for such screenshot much easier in TagSpaces and other application.

<figure>
  <img title="A screenshot showing the extracted geo location as plus code" src="/media/tagspaces-webclipper-olc.png" class="img-responsive center-block" />
  <figcaption>A screenshot showing the extracted geo location as plus code</figcaption>
</figure>

The browser extensions are a practical additions to the desktop applications of TagSpaces, allowing a seamless way to collect locally and organize data from the web.

## Chrome Fine-tuning

Here you will find some tips and trick for using the TagSpaces extension in the Chrome browser.

### Enabling the saving of webpages as MHTML

TagSpaces is a great tool for MHTML file organization on many platforms, because it features an integrated MHTML viewer, but the question here is how you can save web pages as handy MHTML files directly out of the Chrome browser. Here you will find the answer of this question for the both browsers - Chrome and Chromium respectively. And no, you don't have to install the TagSpaces chrome extension to achieve this, but just to execute the following steps:

1. Start the Chrome/Chromium browser
2. Navigate to "chrome://flags"
3. Find the entry "Save Page as MHTML"
4. Click "enable"
5. Restart your browser
6. That's it, now the web pages will be saved by default as MHTML

![Screenshot showing how enable mhtml saving in chrome](/media/enable--mhtml-saving-chrome.png)

> **Note** After this activation you will not be able to save website in HTML anymore.

### Adding keyboard shortcut to the web clipper in Chrome

At the bottom of the extension management page in the Chrome browser you will find a link named "Keyboard shortcuts". See the red area of the screenshot below.

![open the chrome extension shortcut configuration](/media/chrome-shortcuts-config.png)

This link opens a dialog where you can set a direct keyboard shortcut, which will open the popup area of an extension. Since currently the main functionality of the this area in TagSpaces is to scrap the current webpage, I choose for myself the shortcut `ctrl+s`, which overwrites the default save as functionality of Chrome browser. You can choose of course any other key combination, like for example `ctrl+shift+s`.

![setting ctrl+s as keyboard shortcut for the web clipper](/media/chrome-set-extension-shortcut.png)

So now I can conveniently save and tags any page by just clicking this shortcut combination.

![web clipper in action](/media/tagspaces-web-clipping.png)

### Download location for web clippings

In order to be asked every time, where you want to save the scaped web content, make sure to activate the checkbox "Ask where to save each file before downloading" in the advanced Chrome settings.

![enable asking where to save the files in Chrome](/media/chrome-ask-where-to-save.png)
