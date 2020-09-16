# MHTML Viewer for TagSpaces

A TagSpaces extension allowing you to open MHTML and EML files.

## Features

* Viewing of MHTML/MHT files - MHTML is [file format](https://tools.ietf.org/html/rfc2557) for saving web pages with all the images and styling information in one single file. Saving in MHTML format is natively supported by [Chrome&trade;](http://docs.tagspaces.org/tutorials/webclipping.html#enabling-the-saving-of-webpages-as-mhtml), Internet Explorer&trade; and Firefox&trade; (with the help of the [MAFF addon](http://maf.mozdev.org/maff-file-format.html/)) browsers.
* Viewing of EML files - EML is file format for saving emails. It is the default export email format of the Thunderbird email client. The *show original* email functionality in Gmail&trade; also exports the email in this format.
* Readabilty mode - for easy reading of the text content, with support for *serif* and *sans serif* font, different font size and background colors.
* Showing the creation date of the file
* Opening the source url of a MHTML file
* Finding text in the current file
* File printing

![Animation of the viewerMHTML extension](https://github.com/tagspaces/documentation/raw/master/media/extensions/mhtml-viewer-readabilty-mode.gif)

## Used libraries
This extension thankfully relays on the following great project(s):

* [mailparser](https://github.com/andris9/mailparser)
* [readability](https://github.com/mozilla/readability)

## Installation

This extensions is packaged with any new version of TagSpaces

## Source code

The source code of this extension is freely available on [github.com/tagspaces/viewerMHTML](https://github.com/tagspaces/viewerMHTML/)

## Development

If you want to extend this extensions, please follow our general [extension development guide](https://docs.tagspaces.org/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/viewerMHTML/blob/master/LICENSE.txt)

