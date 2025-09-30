---
title: Search Overview
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

In order to offer desktop search functionalities, TagSpaces provides a variety of search-related features, which are described in this section.

With the search functionality, you are able to find files and folders by their name, tags, and other properties. The search algorithm considers different weights for the following properties of the [indexed](#indexing) entries:

- The name of the file or the folder
- The tags assigned to the file or the folder
- The description added to the file or the folder
- The name of the parent directory of a given file is also considered by the search algorithm. For example, if you are searching for photos from your vacation in the USA and the folder where these files are located contains the word USA (e.g., '20160301 vacation usa'), the search will list all the files located directly in this folder.
- <ProFeature /> The content of TXT, MD, and HTML files if the [full-text search](#full-text-search) is activated for the current location.

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

- `+` - Will add the tag to the **Must contain all of the tags** field - logical AND
- `|` - Will add the tag to the **At least one tag** field - logical OR
- `-` - Will add the tag to the **None of these tags** field - logical exclusion

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

- **"+usa +beach -sunset jpg"** - Will find all files and folders having `jpg` in the name and having the `usa` and `beach` tags but not the `sunset` tag.
- **"|beach |sunset"** - Will find all files and folders having the tags `beach` or `sunset`.

### Search query composition

As usual, the search can be opened by the `CTRL+SHIFT+F` (`⌘+SHIFT+F` on Mac) key binding. The opened dropdown has two sections. The first is called **Actions**, which will be described below, and the second is **Search query composition**. This allows you to easily compose complex search queries, combining or excluding tags, choosing file size limits, types, and details.

<CenteredImage
  caption="Query composition in the search box"
  src="/media/search/search-query-composition.avif"
  showCaption
/>

The following commands are currently supported:

- **AND tag** - Typing `+` will show the list of all tags in the dropdown so you can select tags that should be present in every file or folder in the search results.
- **NOT tag** - Typing `|` will show the list of all tags in the dropdown so you can select tags that may be present in files or folders in the search results, e.g., files tagged with "tag1" or "tag2."
- **OR tag** - Typing `-` will show the list of all tags in the dropdown so you can select tags that should be excluded from the search results.
- **File type** - Typing `t:` will present a list of supported file type groups, helping to narrow down the search results to documents, images, etc.
- **File size** - Typing `s:` will present a list of predefined file sizes.
- **Last modified** - Typing `lm:` will present a list of predefined points back in time.
- **Search scope** - Typing `sc:` will allow you to choose from the following search scopes: current folder, current location, global search in all locations.
- **Search accuracy** - Typing `a:` will allow you to toggle the search accuracy between fuzzy, semi-strict, or strict.

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

- **Location** - will deliver results from the current location. This is the default scope.
- **Folder** - will deliver results for the current folder, including all sub-folders.
- **Global** - will search in all configured locations. You can find more in the [Global Search](#global-search) section.

### Search accuracy

The following three types of searches are supported:

- **Fuzzy** - will deliver broader search results, tolerating typos in the search query.
- **Strict** - will deliver exact search results.
- **Semi-strict** - similar to strict but case insensitive.

### Search for tagged entries

To support detailed search for tags, the user interface for entering them is split into three input fields:

- **Must contain all of the tags** - all tags listed here must be attached to the files or folders for them to appear in the search results (**logical AND**).
- **At least one tag** - any file or folder containing one of the tags listed here will be included (**logical OR**).
- **None of these tags** - entries with any of the tags listed here will be excluded from the search results (**logical exclusion**).

## Search filters

### Filter by file type

In the file type dropdown, you can specify which types of files to search. The file types are grouped into the following sections:

- **Pictures and Photos**: e.g., JPG, PNG, GIF
- **Documents**: e.g., PDF, ODF, DOCX, EXL
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

### Filter by last modified date

Here you can specify the time period in which the files you're searching for should have been modified. This filter supports the following options:

- **Today** - shows files and folders modified today.
- **Yesterday** - shows results modified yesterday.
- **Past 7 days** - shows results modified in the last 7 days.
- **Past 30 days** - shows results modified in the last 30 days.
- **Past 6 months** - shows files and folders modified in the last 6 months.
- **Past year** - shows files and folders modified in the last 12 months.
- **More than one year** - shows files and folders older than one year.

<CenteredImage
    caption="Options for searching by last modified date"
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

## Indexing

TagSpaces has an integrated file and folder search functionality based on an **index**, which is created when you hit the search button. By default, the index is valid for 10 minutes. This time can be adjusted individually in the properties of each [location](/ui/locations/#local-locations). The idea is that some locations may contain files that do not change often, so a longer validity period, like 1 month, can be applied.

If your location contains a large number of files (>50,000), it is recommended to split it into two or more locations or to [disable the indexing](/ui/locations#local-locations).

If you decide to disable automatic indexing, you should manually update the index regularly to maintain working and accurate search functionality. The index can be updated in the following ways:

- In the menu of each location in the location manager, there is an item called "Refresh Location Index."
- All indexes can be updated at once from the search menu with the option "Update all location indexes."
- Create the index manually with the [command line tools](/dev/command-line-tools).

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

## Full text search

<ProFeature />

TagSpaces PRO supports full text search for text (.TXT), markdown (.MD), HTML and searchable PDF files. You can activate this feature for each location individually in the "Edit Location" dialog, as seen in the following screenshot. Once activated (see the screenshot below), during the indexing of a given location, the application will extract the text content of the supported files and create a keyword list that will be considered in the search algorithm.

:::caution
On locations with many large text files, activating this feature may slow down the application's performance, so be careful where you activate it.
:::

These file formats are currently supported:

- **HTML** - files in HTML format, used for rich text notes.
- **MD** - markdown files.
- **TXT** - plain text files.
- **PDF** - searchable PDF documents (already OCR-ed).

<CenteredImage
    caption="Enabling full-text indexing"
    src="/media/locations/enable-fulltext-search.avif"
    maxWidth="500px"
    showCaption
  />

:::caution
This feature is still in beta and could lead to performance issues if you have many or large text files.
:::

## Global search

TagSpaces Pro offers searching across all locations, called "Global search." It works on both local and remote S3-based locations. You can activate this feature by clicking the _Global_ button in the search area, as shown in the following screenshot.

<CenteredImage
    caption="Activating the global search"
    src="/media/search/activation-global-search.avif"
    maxWidth="400px"
    showCaption
  />

Once in _Global search_ mode, you will see an additional option called "Force re-indexing all locations." Activating this checkbox will force TagSpaces to create a new index for each location before searching in it. This option delivers the most accurate search results but may take more time, especially when re-indexing remote locations or locations with many files.

All other search settings work the same as in single location searches. The [search result limit](#limiting-the-search-results) applies here; once the limit is reached, TagSpaces will stop the search and not continue searching the remaining locations.

:::info
If you are in the context of a given [workspace](/workspaces), the global search will deliver only result from the location assigned to the current workspace.
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

<!-- ### Quick access from search bar

Alternatively, stored searches can also be accessed from the dropdown menu located in the search bar, as seen in the next screenshot.

<CenteredImage
    caption="Accessing stored searches from the search bar"
    src="/media/stored-search-quick-access.png"
    showCaption
  /> -->

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
