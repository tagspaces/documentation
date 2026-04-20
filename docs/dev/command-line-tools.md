---
title: Command Line Tools
description: Documentation for the TagSpaces CLI (tscmd) for tagging, describing, indexing, generating thumbnails, and cleaning metadata — designed for automation and AI agentic workflows.
tags: [developer, tool]
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
| `tscmd search`      | Query an existing index for matching files   |
| `tscmd thumbgen`    | Generate thumbnails for a folder             |
| `tscmd metacleaner` | Remove orphaned sidecar files and thumbnails |

All commands that take a directory argument accept **multiple directories** in a single invocation — for example `tscmd indexer /path/a /path/b /path/c`.

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

Create a search index for a folder and all its subfolders:

```bash
tscmd indexer /path/to/folder/
```

By default the index stores file and folder metadata only (tags, descriptions, sizes, timestamps). To also extract textual content from files for full-text search, add `--fulltext`:

```bash
tscmd indexer --fulltext /path/to/folder/
```

The extracted content covers plain text (`.txt`, `.md`, `.marp`), HTML (`.htm`, `.html`, `.xhtml`, `.shtml`, `.mhtml`), email (`.eml`), web shortcuts (`.url`, `.website`, `.webloc`, `.desktop`), tabular/contacts (`.csv`, `.vcf`), documents (`.pdf`, `.docx`, `.odt`), spreadsheets (`.xlsx`, `.ods`), presentations (`.pptx`, `.odp`), and ebooks (`.epub`).

Index multiple folders in one call:

```bash
tscmd indexer /path/to/folder1 /path/to/folder2
```

### Options

| Option           | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| `-f, --fulltext` | Extract full-text content from files                                  |
| `-l, --links`    | Also extract outbound links from file content (requires `--fulltext`) |
| `--force`        | Force a full re-index (skip incremental; rebuilds from scratch)       |

### Incremental indexing

Running `tscmd indexer` a second time on the same folder only re-processes files whose size or modification time changed, and prunes entries for files that were deleted. The command prints a summary line like:

```
  incremental: +3 ~1 -2 =1247
```

…meaning 3 files were added, 1 modified, 2 removed, and 1247 kept unchanged. Use `--force` to bypass the incremental path and rebuild everything.

After each run the CLI prints counts (files, folders, total size), full-text stats (files with text, token count) when `--fulltext` was used, and the elapsed time.

### Output files

The index is split into two files inside `.ts/`:

| File         | Content                                                           |
| ------------ | ----------------------------------------------------------------- |
| `tsi.json`   | Metadata index — tags, sizes, timestamps, descriptions            |
| `tsft.jsonl` | Full-text content (one JSON object per line), only when `-f` used |

Splitting the content keeps `tsi.json` small for fast loads, and lets the full-text file be streamed or partially re-read. Both files are used transparently by TagSpaces Desktop and Web.

## Searching the Index

Query an existing index:

```bash
tscmd search /path/to/folder -q "quarterly report"
```

The `search` command reads `.ts/tsi.json` (and `.ts/tsft.jsonl` when the query contains free-text terms) and prints matching entries. It does not touch the filesystem beyond reading these index files, so it is fast and safe to run repeatedly.

### Query syntax

The `-q` string mixes free-text terms with tag prefixes:

- Bare words — matched against filename, path, description, and extracted full-text
- `+tag` — entry must carry this tag (AND)
- `-tag` — entry must not carry this tag (NOT)
- `|tag` — entry carries at least one of these tags (OR)

Example combining all four:

```bash
tscmd search /documents -q "invoice +finance -draft |urgent"
```

### Options

| Option              | Description                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-q, --query`       | Query string (see syntax above)                                                                                                                       |
| `-t, --tags`        | Additional tags to match (AND logic, merged with `+tag` from `-q`)                                                                                    |
| `--type`            | File-type group: `any`, `images`, `documents`, `notes`, `audio`, `video`, `archives`, `bookmarks`, `ebooks`, `emails`, `folders`, `files`, `untagged` |
| `-s, --search-type` | Match accuracy: `fuzzy` (default), `semistrict`, or `strict`                                                                                          |
| `-n, --max-results` | Maximum number of results (default: 100)                                                                                                              |

Narrow results to images tagged `vacation` but not `private`:

```bash
tscmd search /photos --type images -q "+vacation -private"
```

Strict substring search with no fuzzy matching:

```bash
tscmd search /notes -q "API key" -s strict
```

## Thumbnail Generation

Recursively generate thumbnails for all supported files in a folder:

```bash
tscmd thumbgen /path/to/folder/
```

To include PDF thumbnail generation, add the `-p` flag:

```bash
tscmd thumbgen -p /path/to/folder/
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

# Generate thumbnails and a full-text search index for the organized folder
tscmd thumbgen /downloads/
tscmd indexer --fulltext /downloads/

# Later, query the index
tscmd search /downloads/ -q "quarterly +finance"
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

| File                                                                     | Content                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [`.ts/filename.json`](/dev/metafileformats#file-meta-description-format) | Tags and description for a file                         |
| [`.ts/tsm.json`](/dev/metafileformats#folder-meta-description-format)    | Tags and description for the parent folder              |
| `.ts/filename.jpg`                                                       | Thumbnail for a file                                    |
| `.ts/tsi.json`                                                           | Metadata index for the folder (tags, sizes, timestamps) |
| `.ts/tsft.jsonl`                                                         | Extracted full-text content, one JSON object per line   |

These files are automatically recognized by TagSpaces Desktop and Web applications.

## Third Party Tools

Community tools compatible with TagSpaces metadata:

- [TSS](https://github.com/nahoj/tss) — a command-line tool to manage files with tags, with zsh completion support.
