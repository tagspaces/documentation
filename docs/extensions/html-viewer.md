# HTML Viewer

A TagSpaces extension allowing opening of HTML files.

## Features

Here is a list of the key features offered by this extension:

- Zoom in and zoom out capabilities
- Printing the document
- Search for text in the current document
- Reader mode, extracting only the main part of the document by stripping header, footer, and navigation if available

![General screenshot of the HTML viewer extension](/media/extensions/viewer-html-lead.png)

### Meta-Data

The TagSpaces [Firefox](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/) and [Chrome](https://chrome.google.com/webstore/detail/tagspaces/ldalmgifdlgpiiadeccbcjojljeanhjk) web clippers save the date and time of the saving, the URL from which the webpage is saved, and optionally a screenshot. This information can be accessed from the `File Details` menu entry in the extension's main menu. In the dialog that will appear, you will see the screenshot of the web page (if available) and the original URL of the webpage.

![Web scraping details](/media/extensions/viewer-html-scraping-details.png)

## Used Libraries

This extension thankfully relies on the following great libraries:

- [Readability](https://github.com/mozilla/readability)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [DOMPurify](https://github.com/cure53/DOMPurify)

## Installation

This extension is packaged with any new version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/html-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/html-viewer/LICENSE.txt)
