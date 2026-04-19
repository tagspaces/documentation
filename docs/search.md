---
title: Search Overview
description: Complete guide to TagSpaces search with AND, OR, NOT operators, full-text search, tag filtering, and indexed search for fast file discovery across locations.
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />


In order to offer desktop search functionalities, TagSpaces provides a variety of search-related features, which are described in this section.

With the search functionality, you are able to find files and folders by their name, tags, and other properties. The search algorithm considers different weights for the following properties of the [indexed](#indexing) entries, with the file or folder name being the strongest signal:

- The name of the file or the folder
- The description added to the file or the folder
- The path of the file, including the names of the parent directories. For example, if you are searching for photos from your vacation in the USA and the folder where these files are located contains the word USA (e.g., `20160301 vacation usa`), the search will list all the files located directly in this folder.
- The tags (and their descriptions) assigned to the file or the folder
- <ProFeature /> The content of supported text and office files if the [full-text search](#full-text-search) is activated for the current location.

## Open the search

The user can start a search by switching to the search area by pressing the `Ctrl+F` / `Cmd+F` key combination. It can also be opened by clicking on the search text field.

<CenteredImage
  caption="Open search"
  src="/media/search/open-search.avif"
  showCaption
/>

Once activated, you can start entering the tags or other search [terms](#search-query). If you choose to enter tags with the `+` symbol, you will see suggestions **(1)** and you can choose from them with the arrow `UP` and `DOWN` keys. The search can be started by hitting the `ENTER` key or by clicking on the search button **(4)**. You can close the search mode with the `ESC` key or by clicking on the X-button **(3)**.

<CenteredImage
  caption="Explanation of the search user interface"
  src="/media/search/search-ui.avif"
  showCaption
/>

The **advanced search options**, visible in the next screenshot, can be accessed after clicking on the button with the sliders **(2)** from the previous screenshot.

<CenteredImage
  caption="Advanced search options"
  src="/media/search/advanced-search.avif"
  showCaption
  maxWidth={400}
/>

## Search query

The search query consists of two parts. The first one is just a simple free text that is searched in the index. The second component is a list of tags. Here, you can define a more precise query by including and excluding tags. You can use the following shortcuts to add, remove, or exclude certain tags:

- `+` - Will add the tag to the **Must contain all of the tags** field — logical **AND**
- `|` - Will add the tag to the **At least one tag** field — logical **OR**
- `-` - Will add the tag to the **None of these tags** field — logical **NOT**

The tags specified here will be visible in the search options described in the previous [paragraph](#search-for-tagged-entries).

<CenteredVideo
    caption="Searching for tags"
    src="/media/search/searching-for-tags.mp4"
    posterUrl="/media/search/searching-for-tags.jpg"
    maxWidth="100%"
    autoPlay
    showCaption
/>

Example search queries:

- **`+usa +beach -sunset jpg`** — files and folders with `jpg` in the name or content, tagged with `usa` **and** `beach`, but **not** `sunset`.
- **`|beach |sunset`** — files and folders tagged with `beach` **or** `sunset` (at least one).
- **`project discussion`** — files where **both** `project` **and** `discussion` appear (the default is fuzzy matching — see [Search accuracy](#search-accuracy) for strict variants).
- **`"quarterly report"`** — files containing the exact phrase. Double quotes keep the words together.

### Pasting a complex query

You can compose the entire query externally and paste it into the search box in one go, for example:

```
project notes +work +urgent -draft |client-a
```

When the pasted (or fully typed) input contains a text term together with any tag prefix (`+`, `-`, or `|`), TagSpaces recognizes every token, creates the corresponding tag chips, and routes the remaining words into the free-text part. Pressing `ENTER` immediately runs the search.

### Search query composition

The opened dropdown has two sections. The first is **Actions**, described below, and the second is **Search query composition**, which lets you compose complex queries by combining tags with filters for file type, size, dates, scope, and accuracy.

<CenteredImage
  caption="Query composition in the search box"
  src="/media/search/search-query-composition.avif"
  showCaption
/>

The following commands are currently supported:

- **AND tag** — Typing `+` shows the tag suggestions; select to require the tag on every result.
- **OR tag** — Typing `|` shows the tag suggestions; select to allow results tagged with at least one of them.
- **NOT tag** — Typing `-` shows the tag suggestions; select to exclude results with that tag.
- **File type** — Typing `t:` presents supported file type groups to narrow results (documents, images, notes, etc.).
- **File size** — Typing `si:` presents predefined size buckets.
- **Last modified** — Typing `lm:` presents predefined time windows.
- **Date created** — Typing `cd:` presents predefined creation-date windows.
- **Search scope** — Typing `sc:` lets you pick between current folder, current location, or global search.
- **Search accuracy** — Typing `a:` toggles between fuzzy, semistrict, or strict matching.

The chip row reorders itself for clarity: scope and accuracy chips come first (they are search-wide modifiers), filter chips (type, size, dates) in the middle, and tag chips last.

### App actions

In the search menu, you can also start some common actions just by using your keyboard. The following commands are currently supported:

- **Locations** - Typing `l:` will list the current locations, allowing you to easily find and open one by typing the first few letters.
- **Filter** - Typing `f:` will filter the current content of the folder without starting a new search.
- **History** - Typing `h:` will list the last opened or edited files so you can filter and open one of them.
- **Bookmarks** - Typing `b:` will allow you to filter and open your bookmarked files or folders.
- **Saved search query** - Typing `q:` will allow you to filter and start your saved search queries.
- **Search history** - Typing `s:` will allow you to find and execute search queries you have used in the past.

<CenteredImage caption="Quick access for actions in the search box" src="/media/search/search-actions.avif" showCaption />

### Search scope

The search algorithm can be required to deliver results for the following search scopes:

- **Location** — will deliver results from the current location. This is the default scope.
- **Folder** — will deliver results for the current folder, including all sub-folders.
- **Global** — will search in all configured locations. You can find more in the [Global Search](#global-search) section.

### Search accuracy

Three search accuracy modes are supported. In every mode, a query with multiple words behaves as a logical **AND** — every term must match somewhere in the entry. Quote a phrase with `"..."` to keep words together as a single term.

- **Fuzzy** (default) — tolerant matching that forgives typos and incomplete words. Fuzzy mode also enables an advanced query syntax (powered by [Fuse.js extended search](https://www.fusejs.io/examples.html#extended-search)) that lets you fine-tune the results.

  White space acts as an **AND** operator, while a single pipe (`|`) character acts as an **OR** operator. To escape white space, use double quotes — e.g. `="vacation photos"` for an exact-match phrase.

  | Token | Match type | Description |
  |---|---|---|
  | `report` | fuzzy-match | Items that fuzzy match `report` |
  | `=invoice` | exact-match | Items that are exactly `invoice` |
  | `'budget` | include-match | Items that include `budget` |
  | `!draft` | inverse-exact-match | Items that do not include `draft` |
  | `^meeting` | prefix-exact-match | Items that start with `meeting` |
  | `!^archive` | inverse-prefix-exact-match | Items that do not start with `archive` |
  | `.pdf$` | suffix-exact-match | Items that end with `.pdf` |
  | `!.tmp$` | inverse-suffix-exact-match | Items that do not end with `.tmp` |

- **Strict** — case-sensitive, no fuzziness. Each term must appear verbatim in one of the searched fields.
- **Semistrict** — like strict but case-insensitive. `Report` also matches `report` or `REPORT`.

Starting with version 6.11, strict and semistrict queries also support multi-word AND semantics and `"quoted phrases"`, matching how fuzzy mode already worked.

:::tip
The default fuzzy matching is tuned to forgive typos but reject unrelated short-string collisions. If a search feels too strict for your data, switch to `a: fuzzy` (the default) — strict and semistrict are only meant for exact-lookup workflows.
:::

### Search for tagged entries

To support detailed search for tags, the user interface for entering them is split into three input fields:

- **Must contain all of the tags** - all tags listed here must be attached to the files or folders for them to appear in the search results (**logical AND**).
- **At least one tag** - any file or folder containing one of the tags listed here will be included (**logical OR**).
- **None of these tags** - entries with any of the tags listed here will be excluded from the search results (**logical exclusion**).

## Search filters

### Filter by file type

In the file type dropdown, you can specify which types of files to search. The file types are grouped into the following sections:

- **Pictures and Photos**: e.g., JPG, PNG, GIF
- **Documents**: e.g., PDF, ODF, DOCX, XLSX
- **Notes**: e.g., MD, TXT, HTML
- **Audio files**: e.g., OGG, MP3, WAV
- **Video files**: e.g., WEBM, OGV, MP4
- **Archives**: e.g., ZIP, RAR, TGZ, 7Z
- **Bookmarks**: e.g., URL, LNK
- **eBook**: e.g., EPUB, MOBI, AZW, PRC
- **Emails**: e.g., EML, MSG

In addition, there are special filters:

- **Folders** - limits the search to only folders.
- **Files** - limits the search to only files.
- **Untagged files and folders** - displays only files and folders that are not tagged.

<CenteredImage
    caption="Search by file type"
    src="/media/search/tagspaces-search-by-type.avif"
    maxWidth="350px"
    showCaption
  />

### Filter by file size

In this dropdown, you can filter files by their size. The following options are supported:

- **Empty** - filters files with zero size.
- **Tiny** - filters files smaller than 10KB.
- **Very small** - filters files smaller than 100KB.
- **Small** - filters files smaller than 1MB.
- **Medium** - filters files smaller than 50MB.
- **Large** - filters files smaller than 1GB.
- **Huge** - filters files larger than 1GB.

<CenteredImage
    caption="Options for searching by size"
    src="/media/search/tagspaces-search-by-size.png"
    maxWidth="300px"
    showCaption
  />

### Filter by creation and last modified date

Here you can specify the time period in which the files you're searching for should have been modified. This filters supports the following options:

- **Today** - shows files and folders modified today.
- **Yesterday** - shows results modified yesterday.
- **Past 7 days** - shows results modified in the last 7 days.
- **Past 30 days** - shows results modified in the last 30 days.
- **Past 6 months** - shows files and folders modified in the last 6 months.
- **Past year** - shows files and folders modified in the last 12 months.
- **More than one year** - shows files and folders older than one year.

<CenteredImage
    caption="Options for searching by creation and last modified date"
    src="/media/search/tagspaces-search-by-last-modified-date.png"
    maxWidth="300px"
    showCaption
  />

### Filter by time period

This filter limits search results to files and folders that have date-time tags pointing to a certain time period.

<CenteredImage
    caption="Options for searching entries tagged with date tags"
    src="/media/search/search-for-time-period.avif"
    maxWidth="550px"
    showCaption
  />

### Filter by GPS coordinates

This filter is planned.

## Full-text search

<ProFeature />

With full-text indexing enabled on a location, TagSpaces extracts the readable text of your files during indexing and makes it searchable by any keyword it contains.

You can activate this feature for each location individually in the **Edit Location** dialog. Once activated, the next indexing pass will pull the text out of supported files and merge it into the index.

<CenteredImage
    caption="Enabling full-text indexing"
    src="/media/locations/enable-fulltext-search.avif"
    maxWidth="500px"
    showCaption
  />

### Supported file types

| Category | Extensions | Notes |
|---|---|---|
| Plain text | `.txt`, `.md`, `.marp` | Markdown and [Marp](https://marp.app/) presentations |
| HTML family | `.htm`, `.html`, `.xhtml`, `.shtml`, `.mhtml` | Body text extracted, scripts/styles stripped |
| Email | `.eml` | Headers and body treated as plain text |
| Web shortcuts | `.url`, `.website`, `.webloc`, `.desktop` | URL, name, and description fields |
| Tabular | `.csv` | Cell values, commas and semicolons treated as separators |
| Contacts | `.vcf` (vCard) | Name, email, organisation, title, phones, etc. |
| Documents | `.docx`, `.pdf` | Word documents and searchable PDFs (OCR must be done before) |
| Spreadsheets | `.xlsx`, `.ods` | Shared strings and inline cell values |
| Presentations | `.pptx`, `.odp` | Slide text, speaker notes, slide layouts |
| OpenDocument text | `.odt` | Body, styles, metadata |
| Ebooks | `.epub` | All XHTML chapter files inside the archive |

### Embedded images and attachments

Screenshots embedded as `data:image/...` URLs in Markdown or HTML, inline base64 icons in `.url` / `.webloc` files, and `PHOTO` fields in vCards are stripped out **before** the text is indexed. This keeps `tsft.jsonl` (the fulltext index file) small, keeps indexing fast, and keeps searches relevant.

Binary attachments inside MHTML, EPUB, or Office archives are ignored for the same reason — only the readable content goes into the index.

### Chinese, Japanese, Korean

CJK text has no spaces between words, so TagSpaces indexes it as **overlapping character bigrams** in addition to individual characters. The query `中国` will find documents containing `中国`, `美国中国人`, and similar runs. Single-character CJK queries (e.g., `中`) are also supported — the outer Latin one-character-query gate doesn't apply to CJK.

### The split index format

Since version 6.11, the fulltext content is stored in a separate `tsft.jsonl` file alongside the main `tsi.json` metadata index. Consequences for users:

- **Searches that don't need fulltext** (tag filters, filenames, etc.) load only `tsi.json` — much faster.
- **Fulltext is loaded on demand** the first time you run a text search in a given session.
- **The regular index stays small** even when fulltext indexing is enabled on huge locations.

Older indexes are read transparently: a location last indexed with the previous monolithic format will be upgraded to the split format the next time the index is rebuilt.

:::caution
Activating full-text search on locations with many large files increases initial indexing time and disk usage for the index. [Incremental indexing](#indexing) mitigates this on subsequent runs — only new or modified files are re-processed.
:::

## Indexing

TagSpaces has an integrated file and folder search based on an **index**. The index is created the first time you run a search on a location and refreshed automatically when it becomes older than the location's configured maximum age (10 minutes by default). This maximum age can be adjusted individually in the properties of each [location](/ui/locations/#local-locations) — locations that rarely change can safely use an age of a week or a month.

### Incremental indexing

Starting with version 6.11, re-indexing is incremental by default. On the second and any subsequent run, TagSpaces first performs a lightweight walk of the directory tree that only reads file timestamps and sizes, then:

- **Unchanged** files are kept from the existing index as-is (including their extracted text).
- **New** files are indexed from scratch.
- **Modified** files (different mtime or size) are re-extracted.
- **Deleted** files are removed from the index.

Re-indexing a 50,000-file location typically takes a few seconds instead of minutes when most files haven't changed. You can force a full re-index any time from the search menu ("Update all location indexes") or with the `--force` flag on the [command-line tool](/dev/command-line-tools).

### Large locations and manual updates

If your location contains a very large number of files (>50,000), it is recommended to split it into two or more locations or to [disable automatic indexing](/ui/locations#local-locations).

When automatic indexing is disabled, the index can be refreshed in the following ways:

- In the menu of each location in the location manager, there is an item called **Refresh Location Index**.
- All indexes can be updated at once from the search menu with the option **Update all location indexes**.
- Create or refresh the index manually with the [command-line tools](/dev/command-line-tools).

<CenteredImage
    caption="Updating indexes for all locations"
    src="/media/locations/update-all-indexes.avif"
    maxWidth="650px"
    showCaption
  />

## Limit the search results

By default, TagSpaces limits the number of search results to 1,000 files and folders. This limitation also applies to the maximum number of files that can be displayed in a single folder. In the [general](/ui/settings#general) tab of the settings, there is a field where you can increase or decrease this limit. See the next screenshot.

<CenteredImage
    caption="Adjust the number of found items in the search result"
    src="/media/settings/limit-search-results.avif"
    maxWidth="700px"
    showCaption
  />

## Global search

TagSpaces Pro offers searching across all locations, called **Global search**. It works on both local and remote S3-based locations. You can activate this feature by clicking the _Global_ button in the search area, as shown in the following screenshot.

<CenteredImage
    caption="Activating the global search"
    src="/media/search/activation-global-search.avif"
    maxWidth="400px"
    showCaption
  />

Once in _Global search_ mode, you will see an additional option called **Force re-indexing all locations**. Activating this checkbox will force TagSpaces to create a new index for each location before searching in it. This option delivers the most accurate search results but may take more time, especially when re-indexing remote locations or locations with many files. Incremental indexing still applies — only new or changed files are re-processed unless you also pass `--force`.

All other search settings work the same as in single-location searches. The [search result limit](#limit-the-search-results) applies here; once the limit is reached, TagSpaces will stop the search and not continue searching the remaining locations.

:::info
If you are in the context of a given [workspace](/workspaces), the global search will deliver only results from the locations assigned to the current workspace.
:::

## Search history

This feature can be activated in the app's advanced settings, where you can choose how large the search history should be. Once activated, the app will save the last searches performed, including the search query and the location where they were executed.

<CenteredImage
    caption="Activating the search history in the settings"
    src="/media/settings/activation-search-history.avif"
    maxWidth="700px"
    showCaption
  />

The search history can also be **disabled** by choosing _disabled_ from the dropdown or **deleted** by clicking the trash bin icon.

## Stored search queries

This feature allows you to store commonly used search queries for later use. The following video demonstrates how to use this feature.

<CenteredVideo
    caption="Creating and deleting stored search queries"
    src="/media/search/creating-stored-search-query.mp4"
    posterUrl="/media/search/creating-stored-search-query-poster.avif"
    maxWidth="100%"
    autoPlay
    showCaption
/>

:::tip
Stored searches are location-independent, meaning they can be executed on any location.
:::

### Create stored searches

<CenteredImage
    caption="Dialog for creating stored search"
    src="/media/search/create-stored-search.avif"
    showCaption
  />

### Edit stored searches

<CenteredImage
    caption="Dialog for editing stored search"
    src="/media/search/edit-stored-search.avif"
    maxWidth="700px"
    showCaption
  />

### Export and import

<ProFeature />
This functionality allows you to share commonly used search queries with others who are working with you on the same file base.

In the three-dot menu of the stored search area, you will find menu entries for exporting and importing search queries. The file format for the export is JSON, which can be opened and edited with any modern text editor. If needed, you can fine-tune the search queries in the editor and distribute them to other TagSpaces installations for yourself or colleagues.

<CenteredImage
    caption="Menu for triggering the import and export of stored searches"
    src="/media/search/import-export-searches.avif"
    maxWidth="811px"
  />

Due to the unique IDs associated with search queries, TagSpaces can recognize if the query has already been imported, allowing you to skip the re-import or import the newer version. An example export can be found in the [documentation](/dev/metafileformats#format-of-the-exported-search-queries).

<CenteredImage
    caption="Dialog for exporting stored search queries"
    src="/media/search/import-stored-searches-dialog.avif"
    maxWidth="500px"
    showCaption
  />
