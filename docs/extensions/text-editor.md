# Text Editor

A TagSpaces extension allowing editing of text-based documents.

## Features

- Opening and editing of text documents
- Syntax highlighting for the following file types: h, c, clj, coffee, coldfusion, cpp, cs, css, groovy, haxe, htm, html, java, js, ts, tsx, jsm, json, latex, less, ly, ily, lua, markdown, md, mdx, ml, mli, pl, php, powershell, py, rb, scad, scala, scss, sh, sql, svg, textile, txt, xml

![Code highlighting with the text editor](/media/extensions/text-editor-code.avif)

## Used Libraries

This extension thankfully relies on the following great libraries:

- [Monaco-editor](https://microsoft.github.io/monaco-editor/)
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Mui](https://mui.com/material-ui/) - A popular React UI framework.
- [i18next](https://www.i18next.com/)
- [Dompurify](https://github.com/cure53/DOMPurify) - library for content sanitization

## Installation

This extension is packaged with any new version of TagSpaces.

## User Manual

### Text Editor

The text editor offers code highlighting for some common programming languages. In the extension menu you will find some extras like toggling line number, adjusting the font size or toggling the wrapping for words.

![Screenshot of the editorText](/media/extensions/text-editor-main.avif)

The text editor will keep the option to print from the plain [text viewer](/extensions/text-viewer/).

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/text-editor).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/text-editor/LICENSE.txt)
