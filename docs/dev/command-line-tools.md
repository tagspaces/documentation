---
title: Command Line Tools
description: Documentation for the TagSpaces CLI (tscmd) for tagging, describing, indexing, generating thumbnails, and cleaning metadata — designed for automation and AI agentic workflows.
tags: [developer]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

# Command Line Tools

**tscmd** is a command-line tool for managing files and folders used in TagSpaces Desktop and Web apps. It can add tags, set descriptions, generate search indexes, create thumbnails, and clean up orphaned metadata — all from the terminal.

<CenteredImage
    caption="tscmd running in a terminal"
    src="/media/core/tagspaces-command-line.avif"
  />

Because every command is non-interactive and produces structured output, tscmd integrates naturally into automation scripts, CI/CD pipelines, cron jobs, and **AI agentic workflows** where an LLM-based agent needs to organize, annotate, or prepare file collections programmatically.

The source code is available on [GitHub](https://github.com/tagspaces/tagspaces-common/tree/develop/packages/tagspaces-shell).

## Installation

```bash
npm install -g @tagspaces/shell
```

This makes the `tscmd` command available globally.

## Commands Overview

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `tscmd tag`         | Add tags to files and folders                |
| `tscmd describe`    | Set descriptions on files and folders        |
| `tscmd indexer`     | Generate a search index for a folder         |
| `tscmd thumbgen`    | Generate thumbnails for a folder             |
| `tscmd metacleaner` | Remove orphaned sidecar files and thumbnails |

## Tagging Files and Folders

Add one or more tags to files or folders:

```bash
tscmd tag /path/to/file.pdf -t invoice 2026 important
```

Tag multiple files at once:

```bash
tscmd tag /path/to/photo1.jpg /path/to/photo2.jpg -t vacation berlin
```

### Options

| Option                  | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `-t, --tags` (required) | Space-separated list of tags to add             |
| `-m, --method`          | Tagging method: `rename` (default) or `sidecar` |

The **rename** method embeds tags directly in the filename (e.g. `report[invoice 2026].pdf`). The **sidecar** method writes tags to a `.ts/filename.json` metadata file, leaving the original filename untouched. For folders, the sidecar method is always used regardless of the `--method` flag.

Tags are merged with any existing tags — duplicates are automatically avoided.

:::tip
Use the `sidecar` method when filenames must remain stable, for example in version-controlled repositories or when other tools depend on exact filenames.
:::

## Setting Descriptions

Add a text description to a file or folder:

```bash
tscmd describe /path/to/file.pdf -d "Q1 financial report, reviewed by legal team"
```

Read the description from a file:

```bash
tscmd describe /path/to/photo.jpg -f /path/to/description.md
```

Read from stdin (useful for piping output from other tools):

```bash
echo "Generated summary" | tscmd describe /path/to/file.pdf -d -
```

Apply the same description to multiple entries:

```bash
tscmd describe /path/to/folder1 /path/to/folder2 -d "Archive - do not modify"
```

### Options

| Option              | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `-d, --description` | Inline description text. Use `-` to read from stdin.         |
| `-f, --file`        | Path to a file whose content will be used as the description |

Descriptions are stored in `.ts/` sidecar files and are visible in the TagSpaces properties panel.

## Search Index Generation

Create a full-text search index for a folder and all its subfolders:

```bash
tscmd indexer /path/to/folder/
```

The generated index is stored as `.ts/tsi.json` and is used by TagSpaces for fast search operations. This is especially useful for large file collections or locations on object storage where on-the-fly indexing would be too slow.

## Thumbnail Generation

Recursively generate thumbnails for all supported files in a folder:

```bash
tscmd thumbgen /path/to/folder/
```

To include PDF thumbnail generation, add the `-p` flag:

```bash
tscmd thumbgen -p /path/to/folder/
```

### Prerequisites for PDF thumbnails

The [sharp](https://sharp.pixelplumbing.com/install) library must be installed globally:

```bash
npm install -g sharp
```

Set the `NODE_PATH` environment variable to point to the global npm modules:

```bash
export NODE_PATH=$(npm root --quiet -g)
```

Thumbnails are stored in the `.ts/` subdirectory alongside the source files.

## Cleaning Obsolete Metadata

Identify orphaned sidecar files and thumbnails that are no longer connected to existing files:

```bash
tscmd metacleaner /path/to/folder/
```

By default, this runs in **analyze mode** — it lists files that would be deleted without actually removing them. Review the output, then run with `--analyze false` to perform the actual cleanup:

```bash
tscmd metacleaner --analyze false /path/to/folder/
```

### Options

| Option          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `-a, --analyze` | Dry-run mode (default: `true`). Set to `false` to delete files. |

## Use in AI Agentic Workflows

The non-interactive, composable design of tscmd makes it well-suited for AI agent tool-use scenarios. An LLM agent with shell access can use these commands to organize and annotate files as part of a larger workflow.

### Example: automated file organization

An AI agent processing a folder of downloaded documents could:

```bash
# Tag files based on content analysis
tscmd tag /downloads/report-q1.pdf -t finance quarterly 2026
tscmd tag /downloads/team-photo.jpg -t team event berlin

# Add AI-generated descriptions
echo "Quarterly financial report covering Q1 2026 revenue and expenses" \
  | tscmd describe /downloads/report-q1.pdf -d -

# Generate thumbnails and search index for the organized folder
tscmd thumbgen /downloads/
tscmd indexer /downloads/
```

### Example: batch processing with pipes

Combine tscmd with standard Unix tools for batch operations:

```bash
# Tag all PDFs in a folder
find /documents -name "*.pdf" -exec tscmd tag {} -t document pdf \;

# Apply a description from a template file to multiple folders
for dir in /projects/*/; do
  tscmd describe "$dir" -f /templates/project-description.md
done
```

### Why tscmd works well with AI agents

- **Non-interactive** — no prompts or confirmations (except metacleaner's analyze-first safety)
- **Idempotent tagging** — running the same tag command twice does not create duplicates
- **Stdin support** — agents can pipe generated text directly into `tscmd describe`
- **Batch-friendly** — multiple paths can be passed in a single command
- **Structured metadata** — all metadata is stored as JSON in `.ts/` sidecar files, readable by both TagSpaces and other tools

## Metadata Storage

All metadata generated by tscmd is stored in `.ts/` subdirectories:

| File                | Content                                    |
| ------------------- | ------------------------------------------ |
| `.ts/filename.json` | Tags and description for a file            |
| `.ts/tsm.json`      | Tags and description for the parent folder |
| `.ts/filename.jpg`  | Thumbnail for a file                       |
| `.ts/tsi.json`      | Search index for the folder                |

These files are automatically recognized by TagSpaces Desktop and Web applications.

## Third Party Tools

Community tools compatible with TagSpaces metadata:

- [TSS](https://github.com/nahoj/tss) — a command-line tool to manage files with tags, with zsh completion support.
