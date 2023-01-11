# MHTML Viewer

A TagSpaces extension allowing you to open MHTML and EML files.

## Features

- Viewing of MHTML/MHT files - MHTML is [file format](https://tools.ietf.org/html/rfc2557) for saving web pages with all the images and styling information in one single file. Saving in MHTML format is natively supported by [Chrome&trade;](/web-clipper#enabling-the-saving-of-webpages-as-mhtml) and Internet Explorer&trade; browsers.
- Viewing of EML files - EML is file format for saving emails. It is the default email export format of the email apps such as Thunderbird&trade; or Google Mail&trade;.
- Reader mode, extracting only the main part of the document by striping header, footer and navigation if available
- Showing the creation date of the file
- Opening the source url of a MHTML file
- Finding text in the current file
- File printing

<!-- ![Animation of the viewerMHTML extension](/media/extensions/mhtml-viewer-readabilty-mode.gif) -->

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-lead.png)

Dialog showing the scraping details, with ability to open the original URL in an external browser.

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-webscraping.png)

### Showing email exported in EML format

![Screenshot of the MHTML viewer extension](/media/extensions/viewer-mhtml-emlpreview.png)

## Used libraries

This extension thankfully relays on the following great projects:

- [mailparser](https://github.com/andris9/mailparser)
- [Readability](https://github.com/mozilla/readability)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [Mark.js](https://markjs.io/)
- [Dompurify](https://github.com/cure53/DOMPurify)

## Installation

This extensions is packaged with any new version of TagSpaces

## Source code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/mhtml-viewer)

## Development

If you want to extend this extensions, please follow our general [extension development guide](/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/mhtml-viewer/LICENSE.txt)
