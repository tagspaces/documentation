---
title: Markdown Editor
description: TagSpaces Markdown Editor with WYSIWYG editing, frontmatter support, embedded images, emoji, tables, math expressions, text-to-speech, and mind map generation from headings.
---

import { CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

# Markdown Editor

The built-in markdown editor provides a WYSIWYG editing experience for `.md` and `.mdx` files. It is based on the [Milkdown](https://milkdown.dev/) framework and supports a wide range of markdown features including frontmatter, tables, math expressions, and embedded media.

<CenteredVideo
    caption="Markdown editor - demonstration"
    src="/media/extensions/md-editor-demo.mp4"
    posterUrl="/media/extensions/md-editor-demo-poster.avif"
    autoPlay={true}
    showCaption
/>

## Features

- **WYSIWYG** markdown editing with live preview
- **Frontmatter** support for YAML metadata
- Embedding images, including as data URLs
- Emoji support 🍒
- Tables with keyboard navigation
- Text formatting (bold, italic, strikethrough, inline code)
- Headings (H1–H6)
- Ordered, bullet, and task lists
- Code blocks with syntax highlighting
- Math expressions (LaTeX)
- Blockquotes
- Horizontal rules
- Reading aloud the text content of the document (text-to-speech)
- Visualizing the heading structure as a mind map
- Copy and paste markdown content from other sources

:::tip
Type `/` on a new line to open a menu showing all available markdown elements — headings, lists, images, tables, quotes, code blocks, and more.
:::

## Frontmatter

The editor supports YAML frontmatter blocks at the beginning of markdown files. Frontmatter is a common way to store metadata such as titles, descriptions, tags, dates, or custom fields that can be used by static site generators and other tools.

A frontmatter block is delimited by triple dashes (`---`) and must appear at the very beginning of the file:

```markdown
---
title: My Document
description: A brief summary of the content
date: 2026-03-15
tags:
  - tutorial
  - markdown
author: John Doe
---

# My Document

The actual markdown content starts here.
```

When editing a file with frontmatter, the editor displays the YAML block in a dedicated editable area at the top of the document, keeping it visually separated from the main content. You can edit the frontmatter fields directly in this area.

<CenteredImage
    caption="Frontmatter support in the md-editor"
    src="/media/extensions/md-editor-frontmatter.avif"
    showCaption
    maxWidth={700}
  />

## Mind Map View

The editor can generate a mind map visualization of the document based on its heading structure. This provides a quick overview of how the document is organized.

![Screenshot of the markdown editor mind map](/media/extensions/md-editor-mindmap.png)

## Live Demo

You can test the editor live [here](https://demo.tagspaces.com/int.html?tslid=10ades09-c7fd-zt33-fc67-a75db43rt4gz&tsdpath=demo%2FNote-Taking&tsepath=demo%2FNote-Taking%2Fcomplex-markdown-note.md).

## Keyboard Shortcuts

> `Mod` is `Cmd` on macOS and `Ctrl` on Windows/Linux.

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

### Formatting

| Action         | Key       |
| -------------- | --------- |
| Bold           | Mod-b     |
| Italic         | Mod-i     |
| Inline Code    | Mod-e     |
| Strike Through | Mod-Alt-x |

### Headings and Blocks

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

### Lists

| Action       | Key       |
| ------------ | --------- |
| Ordered List | Mod-Alt-7 |
| Bullet List  | Mod-Alt-8 |
| Task List    | Mod-Alt-9 |
| Indent Item  | Mod-]     |
| Outdent Item | Mod-[     |

### Tables

| Action               | Key       |
| -------------------- | --------- |
| Next Cell            | Mod-]     |
| Previous Cell        | Mod-[     |
| Exit Table and Break | Mod-Enter |

## Used Libraries

This extension relies on the following libraries:

- [Milkdown](https://milkdown.dev/) — a plugin-driven WYSIWYG markdown editor framework
- [React](https://reactjs.org/)
- [MUI](https://mui.com/)

## Installation

This extension is packaged with every version of TagSpaces.

## Source Code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/md-editor).

## Development

If you want to extend this extension, please follow the [extension development guide](/dev/extension-development-guide).

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/md-editor/LICENSE.txt)
