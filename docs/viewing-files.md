---
title: Preview and Print Files
---

import { ProFeature } from "@site/src/components/CommonBlocks";

The application supports previewing of many file types without the need of external viewer. It comes with the following viewer extensions:

- [Media Player](/extensions/media-player) - Opens audio and video files
- [E-Book Viewer](/extensions/ebook-viewer) - Opens ebooks in EPUB format
- [HTML Viewer](/extensions/html-viewer) - Viewer for HTML files e.g. from the [Web Clipper](/web-clipper)
- [Image Viewer](/extensions/image-viewer) - Viewer for image and photis in JPG, GIF, WEPB, TIF, TGA formats
- [Link Opener](/extensions/url-viewer) - Bookmarks in URL, DESKTOP, WEBSITE ...
- [Markdown Reader](/extensions/md-viewer) - Viewer for markdown files
- [MHTML Reader](/extensions/mhtml-viewer) - webpages in MHTML and and emails EML format
- [Mind Map Viewer](/extensions/mindmap-viewer) - Presents a MD or MARKDOWN file as mindmap
- [MSG Viewer](/extensions/msg-viewer) - Viewer for Emails in MSG format
- [PDF Viewer](/extensions/pdf-viewer) - Viewer for documents in PDF format
- [RTF Viewer](/extensions/rtf-viewer) - Viewr for richt text files in RTF format
- [Text Reader](/extensions/text-viewer) - Viewer for plain text files in TXT, Markdown and various source code formats
- [Document Viewer](/extensions/document-viewer) - Viewer for word documents in DOCX
- [Slided Viewer](/extensions/slides-viewer) - Viewer for Reveal.js presentations
- [Spreadsheet Viewer](/extensions/spreadsheet-viewer) - Preview of spreadsheets in ODS, XLSX, CSV formats
- [ZIP Viewer](/extensions/archive-viewer) - Preview for archives in ZIP file format
- [3D Viewer](/extensions/3d-viewer) - <ProFeature /> Preview for 3d models in GLB, STL and OBJ formats
- [Font Viewer](/extensions/font-viewer) - <ProFeature /> Preview for fonts in TTF, OTF and WOFF formats

TagSpaces is designed with extensibility in mind so any other kind of file viewers can be easily developed and integrated.

> **Source code browser and editor** The text editor supports source code highlighting for many common programming languages. This in combination with the build in [JSON editor](/extensions/json-editor) makes the application a good source code navigator with basic editing capabilities. The intention here is not to makes TagSpaces your next IDE, but rather to give your quick overview of source code repositories.

## Assigning file viewer to file extensions

![settings tab file types](/media/settings-tab-file-types.svg)

## Printing files

The majority of the viewer extensions has tha ability to print the opened files, thanks to the build in print functionality. In the following short video, you can see how you can start the printing.

![printing files](/media/printing.gif)
