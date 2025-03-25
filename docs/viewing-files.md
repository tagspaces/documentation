---
title: Preview and Print Files
---

import { ProFeature } from "@site/src/components/CommonBlocks";

TagSpaces supports the previewing of many file types without requiring external viewers. The application includes several viewer extensions:

- [Media Player](/extensions/media-player) - Opens audio and video files.
- [E-Book Viewer](/extensions/ebook-viewer/) - Opens eBooks in EPUB format.
- [HTML Viewer](/extensions/html-viewer/) - Views HTML files, such as those saved by the [Web Clipper](/web-clipper).
- [Image Viewer](/extensions/image-viewer/) - Previews images and photos in formats like JPG, GIF, WEBP, TIF, and TGA.
- [Link Opener](/extensions/url-viewer/) - Opens bookmarks in URL, DESKTOP, or WEBSITE formats.
- [Markdown Reader](/extensions/md-viewer/) - Previews Markdown files.
- [MHTML Reader](/extensions/mhtml-viewer/) - Views webpages in MHTML format and emails in EML format.
- [Mind Map Viewer](/extensions/mindmap-viewer/) - Displays Markdown (.MD) or .MARKDOWN files as mind maps.
- [MSG Viewer](/extensions/msg-viewer/) - Opens emails in MSG format.
- [PDF Viewer](/extensions/pdf-viewer/) - Previews documents in PDF format.
- [RTF Viewer](/extensions/rtf-viewer/) - Views rich text files in RTF format.
- [Text Reader](/extensions/text-viewer/) - Previews plain text files, Markdown files, and various source code formats.
- [Document Viewer](/extensions/document-viewer/) - Previews Word documents in DOCX format.
- [Slides Viewer](/extensions/slides-viewer/) - Opens Reveal.js presentations.
- [Spreadsheet Viewer](/extensions/spreadsheet-viewer/) - Previews spreadsheets in ODS, XLSX, and CSV formats.
- [ZIP Viewer](/extensions/archive-viewer/) - Previews archives in ZIP format.
- [3D Viewer](/extensions/3d-viewer/) - <ProFeature /> Previews 3D models in GLB, STL, and OBJ formats.
- [Font Viewer](/extensions/font-viewer/) - <ProFeature /> Previews fonts in TTF, OTF, and WOFF formats.

TagSpaces is built with extensibility in mind, allowing new file viewers to be easily developed and integrated into the application.

> **Source Code Browser and Editor:** TagSpaces includes a built-in text editor that supports source code highlighting for many common programming languages. Coupled with the [JSON editor](/extensions/json-editor/), it serves as a convenient tool for navigating source code repositories and performing basic code edits. However, it is not intended to replace your IDE but rather to give you a quick overview of code files.

## Assigning File Viewers to File Extensions

You can assign different viewer extensions to specific file extensions via the settings menu.

![settings tab file types](/media/settings/settings-tab-file-types.svg)

## Printing Files

Most viewer extensions in TagSpaces support printing thanks to the built-in print functionality. In the following short video, you can see how to initiate file printing.

![printing files](/media/printing.gif)
