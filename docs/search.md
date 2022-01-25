---
title: Search Overview
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';

In order to offer desktop search functionalities, TagSpaces offers a variety of search related features, which are described in this section.

The user can switch to the search area by clicking the `Ctrl+Shift+f` / `Cmd+Shift+f` key combination. This is global key binding so it will work even if the application is not currently visible or if focus. The search area can be also opening with magnifying glass icon visible above **(1)** in the following screenshot.

![Open search](/media/open-search.png)

## Basic search

With basic search you are able to find files and folders by their name, tags and other properties. The search algorithm considers with different weight the following properties of the [indexed](#indexing) entries.

- The name of the file or the folder
- The tags assigned to the file or the folder
- The description added to the file or the folder
- The name of the parent directory of a given file is also considered by the search algorithm. So for example if you are searching for photos from you vacation in USA and the folder where these files are located contains the word USA (e.g. '20160301 vacation usa'), then the search will list all the files located directly in this folder.
- The content of TXT, MD and HTML, if the [full text search](#full-text-search) is activated for the current location - <ProFeature />

The **search options** can be access after clicking on the button with the sliders visible above **(2)** on the previous screenshot.

![Search options](/media/search-options.png)

### Search scope

The search algorithm can be required to deliver results for the following search scopes:

- **Location** - will search in the current location. This is the default scope.
- **Folder** - will search the current folder including all sub-folders.
- **Global** <ProFeature /> - will search in all configured locations. You can find more in the [Global Search](#global-search) section.

### Search types

The following three types of search are supported:

- **Fuzzy** - will deliver broader search results, tolerating typos in the search query
- **Strict** - will deliver exact search results
- **Semi-strict** - it is same as strict but case insensitive

### Search for tagged entries

In order to provide a detailed search support for tags, the user interface for entering them was split in three input fields:

- **Must contain all of the tags** - all tags listed here should be attached to the files or the folders in order to include them in the search results (**logical AND**)
- **At least one tag** - any file or folder which contains one of the specified here tags will be included (**logical OR**)
- **None of these tags** - entries which have one the tags listed here will be excluded from the search results (**logical exclusion**)

### Search query

The search query consists of two parts. The first one is just a simple free text for which is searched in the index. The second component is a list of tags. Here you define very precise the query by including and excluding tags. You can use the following shortcuts to add, remove or exclude certain tags.

- `+` - will add the tag in the **Must contain all of the tags** field - logical ADD
- `|` - will add the tat in the **At least one tag** field - logical OR
- `-` - will add the tags in the **None of these tags** field - logical exclusion

The tags specified here will be visible in the search options described in the previous [paragraph](#search-for-tagged-entries)

<CenteredImage
    caption="Short video showing searching for tagged files"
    src="https://www.tagspaces.org/content/v3-x/advanced-tag-search.gif"
    maxWidth1="550px"
    showCaption
  />

Example search queries:

- **"jpg +usa +beach -sunset"** - will find all files and folders having jpg in the name and having the tag `beach` but not `sunset`
- **"|beach |sunset"** - will find all files and folder having the tag `beach` or `sunset`

### Indexing

TagSpaces has an integrated file and folder search functionality based on an **index**, which is created when you hit the search button. The index is valid for by default for 10 minutes. This time can adjust individually in the properties of every [location](/ui/locations/#local-locations). The ideas behind this is that some locations may contain files which do not change so often, so here a longer validity like 1 month can be applied.

<!--  If your location contains a huge amount of files (> 20000) it is recommended to split it in two or more location or to [disable the indexing](/ui/locations#local-locations) on location start (which is a <ProFeature /> feature). Disabling the indexing at start may also be useful for location based in a networks like on NAS systems or AWS S3 buckets. -->

If you decide to disable the automatic indexing, you should do this step manually on regular based in order to have a working and accurate search functionality. The index can be updated in the following ways:

- In the menu of every location in the location manager there is an item called "Refresh Location Index"
- All indexes can be update at once from the search menu with the option "Update all location indexes"

<CenteredImage
    caption="Updating indexes for all locations"
    src="/media/update-all-indexes.png"
    maxWidth1="550px"
    showCaption
  />

### Limit the search results

By default, TagSpaces is limiting the amount of the found search results to 1000 files. This limitation is also valid for the maximum files, which can be displayed in a single folder. In tab general of the Settings there is a field where you can increase or decrease this limit. See the next screenshot.

<CenteredImage
    caption="Adjust number of shown / found items in the perspectives"
    src="/media/adjust-search-limit.png"
    maxWidth="650px"
    showCaption
  />

## Advanced search

<ProFeature />

The search options described in this section are available only in the Pro and Enterprise editions of TagSpaces. In addition to the basic search, the advanced search supports the following filter criteria:

<CenteredImage
    caption="Screenshot showing the advanced search options"
    src="/media/tagspaces-advanced-search.png"
    maxWidth="300px"
    showCaption
  />

### Search by type

In the file type dropdown you can specify types of the files you want to search. The file types are grouped in the following sections:

- Pictures and Photos: JPG, PNG, GIF, etc.
- Documents: PDF, ODF, DOCX, EXL, etc.
- Notes: MD, TXT, HTML, etc.
- Audio files: OGG, MP3, WAV, etc.
- Video files: WEBM, OGV, MP4, etc.
- Archives: ZIP, RAR, TGZ, 7Z, etc.
- Bookmarks: URL, LNK, etc.
- eBook EPUB, MOBI, AZW, PRC, etc.

In addition to that there are some special filters:

- Folders - selecting this options will limit the search to only folders
- Files - selecting this option will limit the search to only files
- Untagged files or folders - this options will show only files and folders witch are not tagged

<CenteredImage
    caption="Search by file type"
    src="/media/tagspaces-search-by-type.png"
    maxWidth="300px"
    showCaption
  />

### Search by file size

In this dropdown you can filter for files by their size. The following options are supported:

- Empty - will filter files with zero size
- Tiny - will filter files smaller than 10KB
- Very small - will filter files smaller than 100KB
- Small - will filter files smaller than 1MB
- Medium - will filter files smaller than 50MB
- Large - will filter files smaller than 1GB
- Huge - will filter files bigger that 1GB

<CenteredImage
    caption="Options for searching by size"
    src="/media/tagspaces-search-by-size.png"
    maxWidth="300px"
    showCaption
  />

### Search by last modified date

Here you can specify in which period the files you are searching should have been modified. This filter supports the following options:

- Today - will show files and folders modified today
- Yesterday - will show results modified yesterday
- Past 7 days - will show results modified in the last 7 days
- Past 30 days - will shows results modified in the last 30 days
- Past 6 months - will show files and folders modified in the last 6 months from today
- Past year - will show files and folders modified in the last 12 months from today
- More than one year - will show files and folder older than one year

<CenteredImage
    caption="Options for searching by last modified date"
    src="/media/tagspaces-search-by-last-modified-date.png"
    maxWidth="300px"
    showCaption
  />

### Search by time period

This filter is planed.

### Search by GPS coordinates

This filter is planed.

### Full text search

<ProFeature />

TagSpaces PRO supports full text search for text (.TXT), markdown (.MD) and html (.HTML) files. You can activate this feature for every location individually in the "Edit Location" dialog, as seen in the following screenshot. After the activating of this feature (see next screenshot), during the indexing of a given location, the application will try to extract the text content of the supported files and create a keyword list with will be considered later by the search algorithm.

:::caution
On locations with many big text files, activating this features may slow down the performance of the application, so be careful on which location you are activating it.
:::

<!--This text content is saved in the hidden `.ts` folder and is considered later by the search. Since this is a early experimental feature, please don't relay only on ly on it.-->

These file formats are currently supported:

- HTML - files in HTML format, used for notes in rich text format
- MD - markdown files
- TXT - plain text files

<!-- * Office Documents: PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX (extracts the text content)
* Images: JPG (extracts Exif and IPTC informations)
* Audios formats: MP3 (extracts id3 tags)
* Ebooks: EPUB (extracts the text content) -->

<CenteredImage
    caption="Options for searching by last modified date"
    src="/media/tagspaces-enabling-fulltext-indexing.png"
    maxWidth="650px"
    showCaption
  />

:::caution
This feature is still in beta state and could lead to performance issues if you are dealing with many and/or big text files.
:::

### Global search

<ProFeature />

Starting with version 3.5, TagSpaces Pro offers searching in all locations. We call this feature "Global search". It works on local and remote S3 based locations. The feature can be activated by clicking the _Global_-button in the search area, as seen in the following screenshot.

<CenteredImage
    caption="Activating the global search"
    src="/media/global-search.png"
    maxWidth="300px"
    showCaption
  />

Once in _Global search_-mode you will see one additional search options called "Force re-indexing all locations". Activating this checkbox will force TagSpaces to create a new index for every location before in searches in it. This options will deliver most accurate search result but can take more time, especially re-indexing remote locations or locations containing many files.

All other search related settings should work as known from the single location search. The [search result limit](#limiting-the-search-results) is applying here, so once reached TagSpaces will stop the search and will no go in the remaining un-searched locations.

:::caution
**Global search** should be considered as a feature in **Beta** status. There could be some edge cases which are not functioning correctly. Please share any glitches with us, we will try to fix them.
:::

## Stored search queries

<ProFeature />

With the functionality one can store commonly used search queries for later use.

![export search queries](/media/stored-searches.png)

:::tip
The stored searches are location independent, so they can be executed on any location.
:::

### Export and import search queries

This functionality will allow you to share commonly used search queries with other users working with you on the same file base.

In the three dot menu of the stored search are you will find menu entries with which you can export and import search queries. The file format of the export is JSON, which can be opened and edited with any modern text editor. If needed, you can fine-tune the search queries in the editor and distribute them to another TagSpaces installations for you or your colleagues.

<CenteredImage
    caption="Screenshot of the menu for triggering the import and export of stored searches"
    src="/media/import-export-searches.png"
  />

Due to the fact the search queries have unique IDs, TagSpaces can recognize if the query is already imported so you can skip the re-import or import the newer version of it. An example export can be found in the [documentation](/dev/metafileformats#format-of-the-exported-search-queries) of the project.

<CenteredImage
    caption="Screen showing the dialog for importing stored search queries"
    src="/media/import-stored-searches-dialog.png"
    maxWidth="600px"
  />

<!-- Advanced search v2.x / Search query language

* It searches your sub-folders recursively by default. This could lead to performance issues on folders with many files and sub-folders. If you want the search to ignore the sub-folders, add `~` character in front of your search query. The default search in the sub-folders can be disabled in the settings. <span class="label label-info">Example:</span> If you want the find files having the word `word1` located in current folder, ignoring the sub-folders you have to enter `~ word1` in the search input box.
* If you want to find all files tagged with a certain tag, you can add the `+` character in front of the tag name. This way occurrences of this word somewhere else in the file name or content will be ignored. <span class="label label-info">Example:</span> If you want to find all files from the current folder tagged with the tag `tag1` you have to enter `+tag1` in the search input box.

One of the advantages of TagSpaces PRO's search are search operators. They are words that can be added to searches to help narrow down the results. You can use all of the search operators directly in the search box, without opening the advanced search dialog. Here is an example:

![Advanced Search Syntax example]()/media/search-syntax-example.png

So for the example above the search query **t:picture sport** will give you all pictures containing the word **sport**. No matter where it is located search operator in the search query and will work both placed before the search word or after.

Another way is to click on search button (![TagSpaces button for search field](/content/search-button.png)) to showing the search field and then click on pointing down arrow (![TagSpaces entrance to advanced search dialog window](/content/search-arrow-down.png)) to open the advanced search dialog. Fill the keyword in **Search Words** and the file type in **File Type** and will achieve the same effect as above way.

![TagSpaces advanced search dialog](/media/tagspaces-advanced-search.png)

Please make sure, that when you are using search operators, there is no any spaces between the operator and your search terms. A search for **t:picture** *sport* will work, but **t:** **picture** *sport* won't.

| Operator | Operator |
| -- | -- |
| t:picture | Search only for pictures with the following extensions for example: *JPG*, *JPEG*, *PNG* and etc.<br>Short search example: **t:picture photo** |
| t:doc | Search only for documents with the following extensions for example: *DOCX*, *PDF*, *ODF* and etc.<br>Short search example: **t:doc document** |
| t:note | Search only for notes with the following extensions for example: *MD*, *TXT*, *HTML* and etc.<br>Short search example: **t:note note** |
| t:audio | Search only for audio with the following extensions for example: *OGG*, *MP3*, *WAV* and etc.<br>Short search example: **t:audio song** |
| t:video | Search only for video with the following extensions for example: *WEBM*, *OGV*, *MP4* and etc.<br>Short search example: **t:video clip** |
| t:archive | Search only for archives with the following extensions for example: *ZIP*, *RAR*, *7Z* and etc.<br>Short search example: **t:archive arch** |

If you need more information about supported file types, please take a look at [this article](https://www.tagspaces.org/supported-file-formats/).

* Pictures: JPG,PNG,GIF,... (query shortcut t:picture)
* Documents: PDF,ODF,DOCX,EXL,... (query shortcut t:doc)
* Notes: MD,TXT,HTML,... (query shortcut t:note)
* Audio: OGG,MP3,WAV,... (query shortcut t:audio)
* Video files (WEBM,OGV,MP4,... (query shortcut t:video)
* Archives (ZIP,RAR,TGZ,7Z,... (query shortcut t:archive)

> **Note** You can use the query shortcut for a given file type directly in the search box, without opening the advanced search dialog. So for example the search query `t:audio coldplay` will give you all audio files containing the word coldplay.

-->
