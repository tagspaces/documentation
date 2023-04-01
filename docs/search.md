---
title: Search Overview
---

import VideoYT from '@site/src/components/VideoYT';
import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

In order to offer desktop search functionalities, TagSpaces provides a variety of search related features, which are described in this section.

The user can start a search by switch to the search area by pressing the `Ctrl+Shift+f` / `Cmd+Shift+f` key combination. This is global key binding so it will work even if the application is not currently visible or if focus. The search area can be also opening with magnifying glass icon visible above **(1)** in the following screenshot.

![Open search](/media/open-search.png)

With the search functionality you are able to find files and folders by their name, tags and other properties. The search algorithm considers with different weight the following properties of the [indexed](#indexing) entries.

- The name of the file or the folder
- The tags assigned to the file or the folder
- The description added to the file or the folder
- The name of the parent directory of a given file is also considered by the search algorithm. So for example if you are searching for photos from you vacation in USA and the folder where these files are located contains the word USA (e.g. '20160301 vacation usa'), then the search will list all the files located directly in this folder.
- The content of TXT, MD and HTML, if the [full text search](#full-text-search) is activated for the current location - <ProFeature />

The **search options**, visible in the next screenshot, can be accessed after clicking on the button with the sliders **(2)** from the previous screenshot.

![Search options](/media/search-options.png)

## Search scope

The search algorithm can be required to deliver results for the following search scopes:

- **Location** - will deliver results from the current location. This is the default scope.
- **Folder** - will deliver results for the current folder including all sub-folders.
- **Global** <ProFeature /> - will search in all configured locations. You can find more in the [Global Search](#global-search) section. This scope has currently a beta status.

## Search types

The following three types of search are supported:

- **Fuzzy** - will deliver broader search results, tolerating typos in the search query
- **Strict** - will deliver exact search results
- **Semi-strict** - it is same as strict but case insensitive

## Search for tagged entries

In order to provide a detailed search support for tags, the user interface for entering them was split in three input fields:

- **Must contain all of the tags** - all tags listed here should be attached to the files or the folders in order to include them in the search results (**logical AND**)
- **At least one tag** - any file or folder which contains one of the specified here tags will be included (**logical OR**)
- **None of these tags** - entries which have one the tags listed here will be excluded from the search results (**logical exclusion**)

## Search query

The search query consists of two parts. The first one is just a simple free text for which is searched in the index. The second component is a list of tags. Here you define very precise the query by including and excluding tags. You can use the following shortcuts to add, remove or exclude certain tags.

- `+` - will add the tag in the **Must contain all of the tags** field - logical AND
- `|` - will add the tat in the **At least one tag** field - logical OR
- `-` - will add the tags in the **None of these tags** field - logical exclusion

The tags specified here will be visible in the search options described in the previous [paragraph](#search-for-tagged-entries)

<CenteredVideo
    caption="Searching for tags"
    src="/media/videos/searching-for-tags.mp4"
    posterUrl="/media/videos/searching-for-tags.jpg"
    maxWidth="100%"
    autoPlay
    showCaption
  />

Example search queries:

- **"jpg +usa +beach -sunset"** - will find all files and folders having jpg in the name and having the `usa` and `beach` tags but not the `sunset` tag
- **"|beach |sunset"** - will find all files and folder having the tags `beach` or `sunset`

## Search actions

As usually the search can be opened by the CTRL+SHIFT+F (⌘+SHIFT+F on Mac) key binding. The opened dropdown has the two sections. The first is called actions and here you can choose among the following items, using the up and down arrow keys or typing the one letter shortcut followed by a column:

- **locations** - typing `l:` will make the dropdown list the current locations, so you easily find and open one by writing the first letters of it
- **filter** - typing `f:` will filter the current content of the folder by, without starting a new search
- **history** - typing `h:`will make the dropdown list the lastly opened or edited files so you can filter and open one of them
- **bookmarks** - typing `b:` will allow to filter and open your bookmarked files or folders
- **search query** - typing `q:`will allow to filter and start your saved search queries

<CenteredImage caption="Quick access action in the search box" src="/media/search-actions.png" showCaption />

## Search query composition

With the following commands you will have the ability to easy compose complex search queries, combining or excluding tags, choosing the file size limit, type and details.

- **AND tag** - typing `+` will show the list of all tags in the dropdown so you can select tags which should be present in every file or folder in the search results
- **NOT tag** - typing `|` will show the list of all tags in the dropdown so you can select tags which can be presented in file or folder in the search results, so you will get for example all files tagged with "tag1" or "tag2".
- **OR tag** - typing `-` will show the list of all tags in the dropdown so you can select a tags which should be excluded from the search results
- **file type** - typing `t:` will present a list from the support file type group, so narrow the search result to for example documents or images
- **file size** - typing `s:` will present a list with predefined files sizes
- **last modified** - typing `lm:` will present a list of predefined points back in time
- **search scope** - typing `sc:` will allow you to choose among the following search scopes: current folder, current location, global search in all locations
- **search accuracy** - typing `a:` will allow to toggle the search accuracy between: fuzzy, semi-strict or string.

<CenteredImage
  caption="Query composition in the search box"
  src="/media/search-query-composition.png"
  showCaption
/>

## Indexing

TagSpaces has an integrated file and folder search functionality based on an **index**, which is created when you hit the search button. The index is valid by default for 10 minutes. This time can adjust individually in the properties of every [location](/ui/locations/#local-locations). The ideas behind this is that some locations may contain files which do not change so often, so here a longer validity like 1 month can be applied.

<!--  If your location contains a huge amount of files (> 20000) it is recommended to split it in two or more location or to [disable the indexing](/ui/locations#local-locations) on location start (which is a <ProFeature /> feature). Disabling the indexing at start may also be useful for location based in a networks like on NAS systems or AWS S3 buckets. -->

If you decide to disable the automatic indexing, you should do the indexing manually on regular based in order to have a working and accurate search functionality. The index can be updated in the following ways:

- In the menu of every location in the location manager there is an item called "Refresh Location Index"
- All indexes can be update at once from the search menu with the option "Update all location indexes"

<CenteredImage
    caption="Updating indexes for all locations"
    src="/media/update-all-indexes.png"
    maxWidth1="550px"
    showCaption
  />

## Limit the search results

By default, TagSpaces is limiting the amount of the found search results to 1000 files and folders. This limitation is also valid for the maximum files, which can be displayed in a single folder. In tab [general](/ui/settings#general) of the settings there is a field where you can increase or decrease this limit. See the next screenshot.

<CenteredImage
    caption="Adjust number of shown / found items in the perspectives"
    src="/media/adjust-search-limit.png"
    maxWidth="650px"
    showCaption
  />

<!-- ## Advanced search

<ProFeature />

The search options described in this section are available only in the Pro and Enterprise editions of TagSpaces.

<CenteredImage
    caption="The advanced search options"
    src="/media/tagspaces-advanced-search.png"
    maxWidth="300px"
    showCaption
  />

In addition to the basic search, the advanced search supports the following filter criteria: -->

## Search by type

In the file type dropdown you can specify types of the files you want to search. The file types are grouped in the following sections:

- **Pictures and Photos**: JPG, PNG, GIF, etc.
- **Documents**: PDF, ODF, DOCX, EXL, etc.
- **Notes**: MD, TXT, HTML, etc.
- **Audio files**: OGG, MP3, WAV, etc.
- **Video files**: WEBM, OGV, MP4, etc.
- **Archives**: ZIP, RAR, TGZ, 7Z, etc.
- **Bookmarks**: URL, LNK, etc.
- **eBook**: EPUB, MOBI, AZW, PRC, etc.

In addition to that there are some special filters:

- **Folders** - selecting this options will limit the search to only folders
- **Files** - selecting this option will limit the search to only files
- **Untagged files or folders** - this options will show only files and folders witch are not tagged

<CenteredImage
    caption="Search by file type"
    src="/media/tagspaces-search-by-type.png"
    maxWidth="300px"
    showCaption
  />

## Search by file size

In this dropdown you can filter for files by their size. The following options are supported:

- **Empty** - will filter files with zero size
- **Tiny** - will filter files smaller than 10KB
- **Very small** - will filter files smaller than 100KB
- **Small** - will filter files smaller than 1MB
- **Medium** - will filter files smaller than 50MB
- **Large** - will filter files smaller than 1GB
- **Huge** - will filter files bigger that 1GB

<CenteredImage
    caption="Options for searching by size"
    src="/media/tagspaces-search-by-size.png"
    maxWidth="300px"
    showCaption
  />

## Search by last modified date

Here you can specify in which period the files you are searching should have been modified. This filter supports the following options:

- **Today** - will show files and folders modified today
- **Yesterday** - will show results modified yesterday
- **Past 7 days** - will show results modified in the last 7 days
- **Past 30 days** - will shows results modified in the last 30 days
- **Past 6 months** - will show files and folders modified in the last 6 months from today
- **Past year** - will show files and folders modified in the last 12 months from today
- **More than one year** - will show files and folder older than one year

<CenteredImage
    caption="Options for searching by last modified date"
    src="/media/tagspaces-search-by-last-modified-date.png"
    maxWidth="300px"
    showCaption
  />

## Search by time period

This filter is planed.

## Search by GPS coordinates

This filter is planed.

## Full text search

<ProFeature />

TagSpaces PRO supports full text search for text (.TXT), markdown (.MD) and html (.HTML) files. You can activate this feature for every location individually in the "Edit Location" dialog, as seen in the following screenshot. After the activating of this feature (see next screenshot), during the indexing of a given location, the application will try to extract the text content of the supported files and create a keyword list with will be considered later by the search algorithm.

:::caution
On locations with many big text files, activating this features may slow down the performance of the application, so be careful on which location you are activating it.
:::

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

TagSpaces Pro offers searching in all locations. We call this feature "Global search". It works on local and remote S3 based locations. The feature can be activated by clicking the _Global_-button in the search area, as seen in the following screenshot.

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

## Search history

<ProFeature /> - since version 5.3

This features can be activated in the advanced settings of the app. After the activation the app will save the last performed searches, with their search query and the location where they were executed.

## Stored search queries

<ProFeature />

With the functionality one can store commonly used search queries for later use. The following video is demonstrating how this feature can be used.

<VideoYT
    youtubeId="WMGsJjh_XPU"
    title="Video showing creation and usage of a stored search query"
    posterUrl="/media/stored-searches.png"
    height={550}
  />

:::tip
The stored searches are location independent, so they can be executed on any location.
:::

### Quick access from search bar

Alternatively, the stored searches can be accessed also from the dropdown menu located in the search bar. As seen in the next screenshot.

<CenteredImage
    caption="Accessing the stored searches from the search bar"
    src="/media/stored-search-quick-access.png"
    showCaption
  />

### Export and import

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
