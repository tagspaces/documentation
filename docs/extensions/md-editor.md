import { CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Markdown Editor

A TagSpaces extension allowing viewing and editing of Markdown files.

<CenteredVideo
    caption="Markdown editor - demonstration"
    src="/media/extensions/md-editor-demo.mp4"
    posterUrl="/media/extensions/md-editor-demo-poster.avif"
    autoPlay={true}
    showCaption
/>

## Features

- **WYSIWYG** Markdown editing
- Embedding images, also as data URLs
- Support for emojis 🍒
- Support for tables
- Simple text _formatting_ and headers
- Copy and paste markdown text
- Support for math expressions
- Reading aloud the text content of the document
- Visualizing the markdown header structure as a mind map

**TIP**: Just type `/` on a new line to get a menu showing all available markdown elements such as headings, bullet lists, images, quotes or tables.

### Mindmap

The extension can generate a mind map structure of the document based on its header structure.

![Screenshot of the markdown editor mind map](/media/extensions/md-editor-mindmap.png)

### Diagrams (depracated)

The editor supports presenting and editing of [mermaid](https://mermaid-js.github.io/mermaid/) based diagrams:

<CenteredVideo
    caption="Mermaid based diagrams in the markdown editor"
    src="/media/extensions/editor-md-mermaid-diagrams.mp4"
    posterUrl="/media/extensions/editor-md-mermaid-diagrams.png"
    autoPlay={false}
    showCaption
/>

## Live Demo

You can test it live [here](https://demo.tagspaces.com/int.html?tslid=10ades09-c7fd-zt33-fc67-a75db43rt4gz&tsdpath=demo%2FNote-Taking&tsepath=demo%2FNote-Taking%2Fcomplex-markdown-note.md).

## Used Libraries

This extension thankfully relies on the following libraries:

- [Milkdown](https://milkdown.dev/)
- [React](https://reactjs.org/)
- [Mui](https://mui.com/)

## Keyboard Shortcuts

> `Mod` is `Cmd` on macOS and `Ctrl` for Windows/Linux.

### Essentials

| Action    | Key       |
| --------- | --------- |
| Copy      | Mod-c     |
| Cut       | Mod-x     |
| Paste     | Mod-v     |
| New Line  | Enter     |
| Exit Code | Mod-Enter |
| Print     | Mod-p     |
| Save      | Mod-s     |

### History

| Action | Key         |
| ------ | ----------- |
| Undo   | Mod-z       |
| Redo   | Mod-Shift-z |

### Mark

| Action         | Key       |
| -------------- | --------- |
| Bold           | Mod-b     |
| Italic         | Mod-i     |
| Inline Code    | Mod-e     |
| Strike Through | Mod-Alt-x |

### Paragraph

| Action      | Key         |
| ----------- | ----------- |
| Normal Text | Mod-Alt-0   |
| H1          | Mod-Alt-1   |
| H2          | Mod-Alt-2   |
| H3          | Mod-Alt-3   |
| H4          | Mod-Alt-4   |
| H5          | Mod-Alt-5   |
| H6          | Mod-Alt-6   |
| Code Fence  | Mod-Alt-c   |
| Line Break  | Shift-Enter |

### List

| Action         | Key       |
| -------------- | --------- |
| Ordered List   | Mod-Alt-7 |
| Bullet List    | Mod-Alt-8 |
| Task List      | Mod-Alt-9 |
| Sink List Item | Mod-]     |
| Lift List Item | Mod-[     |

### Table

| Action               | Key       |
| -------------------- | --------- |
| Next Cell            | Mod-]     |
| Prev Cell            | Mod-[     |
| Exit Table and Break | Mod-Enter |

---

## Installation

This extension is packaged with any new version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/md-editor).

## Development

If you want to extend this extension, please follow our general [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/md-editor/LICENSE.txt)
