# Webclipping - collect everything online

We offer browser extension for capturing web content. These so called web scraper or clipper are available for the Chrome and Firefox browsers.

## TagSpaces Firefox Addon

* Saving the current webpage as single files including the embedded images and styling information in pure HTML format.
* Saving the a selected part of the current webpages as HTML file.
* Saving a screenshot of the visible area of the current webpage as a PNG files.
* Adding tags in the file names to the scraped files before saving

TODO: Add screenshot

> **Note** Saving a webpage as a HTML will save in the html code also the data and time of the clipping and the urls from which the webpage is saved. This information can be accessed later in the [HTML viewer](/extensions/viewerHTML.html#meta-data) extension while opening the file with it.

## TagSpaces Chrome Extension

* Saving the current webpage as single files including the embedded images and styling information in MHTML format.
* Saving the a selected part of the current webpages as HTML file.
* Saving a screenshot of the visible area of the current webpage as a PNG files.
* Adding tags in the file names to the scraped files before saving

TODO: Add screenshot

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

### Adding keyboard shortcut to the webclipper in Chrome
At the bottom of the extension management page in the Chrome browser you will find a link named "Keyboard shortcuts". See the red area of the screenshot below.

![open the chrome extension shortcut configuration](/media/chrome-shortcuts-config.png)

This link opens a dialog where you can set a direct keyboard shortcut, which will open the popup area of an extension. Since currently the main functionality of the this area in TagSpaces is to scrap the current webpage, I choose for myself the shortcut `ctrl+s`, which overwrites the default save as functionality of Chrome browser. You can choose of course any other key combination, like for example `ctrl+shift+s`.

![setting ctrl+s as keyboard shortcut for the web clipper](/media/chrome-set-extension-shortcut.png)

So now I can conviniently save and tags any page by just clicking this shortcut combination.

![web clipper in action](/media/tagspaces-web-clipping.png)

### Download location for web clippings

In order to be asked everytime, where you want to save the scapped web content, make sure to activate the checkbox "Ask where to save each file before downloading" in the advanced Chrome settings.

![enable asking where to save the files in Chrome](/media/chrome-ask-where-to-save.png)


