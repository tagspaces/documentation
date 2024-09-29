# MHTML Viewer

A TagSpaces extension allowing you to open MHTML and EML files.

## Features

- Viewing of MHTML/MHT files - MHTML is a [file format](https://tools.ietf.org/html/rfc2557) for saving web pages with all the images and styling information in one single file. Saving in MHTML format is natively supported by [Chrome™](/web-clipper#enabling-the-saving-of-webpages-as-mhtml) and Internet Explorer™ browsers.
- Viewing of EML files - EML is a file format for saving emails. It is the default email export format of email apps such as Thunderbird™ or Google Mail™.
- Reader mode, extracting only the main part of the document by stripping header, footer, and navigation if available.
- Showing the creation date of the file.
- Opening the source URL of an MHTML file.
- Finding text in the current file.
- File printing.

<!-- ![Animation of the viewerMHTML extension](/media/extensions/mhtml-viewer-readabilty-mode.gif) -->

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-lead.png)

Dialog showing the scraping details, with the ability to open the original URL in an external browser.

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-webscraping.png)

### Showing email exported in EML format

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-emlpreview.png)

## Used Libraries

This extension thankfully relies on the following great projects:

- [mailparser](https://github.com/andris9/mailparser) - A powerful library for parsing email messages.
- [Readability](https://github.com/mozilla/readability) - A library that extracts the main content of web pages.
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for responsive design.
- [i18next](https://www.i18next.com/) - An internationalization framework for JavaScript.
- [Mark.js](https://markjs.io/) - A library to highlight text in a document.
- [Dompurify](https://github.com/cure53/DOMPurify) - A DOM-only XSS sanitizer.

## Installation

This extension is packaged with any new version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/mhtml-viewer).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/mhtml-viewer/LICENSE.txt)
