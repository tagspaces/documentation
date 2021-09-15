# Text Editor

A TagSpaces extension allowing editing of text based documents.

## Features

- Opening and editing of text documents
- Syntax highlighting for the following file types: h, c, clj, coffee, coldfusion, cpp, cs, css, groovy, haxe, htm, html, java, js, jsm, json, latex, less, ly, ily, lua, markdown, md, mdx, ml, mli, pl, php, powershell, py, rb, scad, scala, scss, sh, sql, svg, textile, txt, xml

![Screenshot of the editorText](/media/extensions/editor-text-lead.png)

## Used libraries

This extension thankfully relays on the following great libraries:

- [Codemirror](http://codemirror.net/)

## Installation

This extensions is packaged with any new version of TagSpaces

## User Manual

### Text Editor

When you edit a plain text file, or any unsupported file format that displays the edit button, the simple text editor will open.

![](/media/random-text-file.png)

The only extra the text editor offers is basic code highlighting for some common programming languages, and numbered lines.

![](/media/code-highlighting-js.png)

The text editor will keep the option to print from the plain [text viewer](/extensions/text-viewer.md).

### MarkDown Editor

When you open a MarkDown file for editing from the [MarkDown Viewer](/extensions/viewerMD.md), it will be opened wit the same **Text Editor**, any plain text file would, offering inline highlighting of Markdown syntax.

![](/media/markdown-syntax-highlight.png)

The difference between MarkDown and plain text editors is the two additional functions in its **FAB Oveflow Menu**: _MarkDown Preview_ (**1**), or _MarkDown Help_ (**2**).

![](/media/markdown-editor-overflow.png)

The first option will open a popup window, presenting a formatted preview of the MarkDown file, similar to what you would see in the MarkDown viewer

![](/media/markdown-preview.png)

The second option will offer some basic help about MarkDown syntax and formatting

![](/media/markdown-help.png)

### Linking local files and images

Markdown editor will also allow you to **link local files and images**, from within your connected location, using a path, relative to your currently active folder. **Linked local images** will be shown embedded in the current markdown preview, while **linked files** will open in the default external application, defined by your operating system.

For example he link `[link text](images/picture.jpg)` will show the file named `picture.jpg` (located in the `images` subfolder of the folder your file is located) in the markdown viewer; while `[link text](files/more_files/example.pdf)` will open the file named `example.pdf` (located in the `more_files` subfolder of the `files` folder, located in the current folder) in an external PDF viewer.

To enter a relative path, you can usually use UNIX style slashes (`/`) in paths, e.g. `path/to/file/filename.ext`, as `node.js` upon which TagSpaces is built, will handle them properly even on Windows. This allows for interoperability across different Operating Systems. If you only use Windows however, you can use a backslash (`\`), e.g. `path\to\file\filename.ext`, if you prefer to, but such paths will not be understood on any other system, including Android.

> **Hint** TagSpaces only understands relative paths. You cannot reference any level above your current folder, or the root of your connected location, but might only link files located in the currently active folder, or an subfolders within.

## Source code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/text-editor)

## Development

If you want to extend this extensions, please follow our general [extension development guide](/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/text-editor/LICENSE.txt)
