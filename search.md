# Searching for files and folders

In order to compete with other desktop search applications, TagSpaces offers a variety of search related features, which are described in this section.

The user can switch to the search area by clicking the `Ctrl+3` / `Cmd+3` key combination (configurable in the Setting). For the desktop app there is also a global key combination for opening TagSpaces in search mode. Just press `Ctrl+Shift+f` / `Cmd+Shift+f` to get there.

## Basic search

The search query in the basic search consists of two components. The first one is just a simple free text which searched in the index. The second component is a list of tags. It is possible to define very precise tag queries by including and excluding tags. Please see the next section for more details. The search algorithm considers with different weight the following fields from the index.

- The file or folder name
- The tags assigned to the file or folder
- The description added to the file or the folder
- The name of the parent directory of a given file is also considered by the search algorithm. So for example if you are searching for photos from you vacation in USA and the folder where these files are located contains the word USA (e.g. '20160301 vacation usa 70D'), then the search will list all the files located directly in this folder.
- The content of TXT, MD and HTML, if the full text search is activated for the current location. The full text search for these files is a <i class="profeature">pro</i> feature.

The search algorithm has a build-in fuzziness, meaning that if the search query contains a misspelled word, TagSpaces will try to find files and folder with the best guessed similar names.

- The tag search is strict, without fuzziness, if you are not sure about the exact name of a tag, write in the free text query.
- The search is case insensitive.

<figure>
  <img title="basic search in TagSpaces" src="/media/basic-search.png" class="img-responsive center-block">
  <figcaption>Basic search in TagSpaces</figcaption>
</figure>

The search functionality can be targeted to deliver result for the following scopes:

- **(1) Current location**, which is the default scope
- **(2) Current folder** including all sub-folders, which in the case of the root folder in a locations is the same as the first scope
- **(3) All locations** <i class="profeature">pro</i>. You can find out more in the [Global Search](#proglobal-search) section of the documentation.

### Searching for tags

In order to provide a boolean search support for tags, the search user interface for tags was split in three input fields:

- Must contain all of the tags - all of the tags listed here should be attached to the files or directories (**logical AND search**)
- At least one tag - any file or folder which contains one of the specified here tags will be included (**logical OR search**)
- None of these tags - entries which have one the tags listed here will be excluded from the search results (**negative search**)

<figure>
  <img title="Short video showing searching for tags in action" src="https://www.tagspaces.org/content/v3-x/advanced-tag-search.gif" class="img-responsive center-block">
  <figcaption>Short video showing searching for tags in action</figcaption>
</figure>

> **Note:** After opening of a certain location, the application starts to index in background all the files and folders from this location recursively. During the indexing time the search is not available to the user, but all other functionalities are accessible. Opening of location containing more the 100000 files could lead to performance issues, during the index or later by search.

### Indexing

TagSpaces has an integrated file and folder search functionality based on an **index**, which is created immediately after the user opens a given location. The indexing process may take some resources on opening the location, but delivers later accurate and up to date search results.

> Note: If your location contains a huge amount of files (> 20000) it is recommended to split it in two or more location or to [disable the indexing](/ui/locations.html#regular-locations) on location start (which is a <i class="profeature">pro</i> feature). Disabling the indexing at start may also be useful for location based in a networks like on NAS systems or AWS S3 buckets.

If you decide to disable the automatic indexing, you should do this step manually on regular based in order to have a working and accurate search functionality. The index can be updated in the following ways:

- In the menu of every location in the location manager there is an item called "Refresh Location Index"
- All indexes can be update at once from the search menu with the option "Update all location indexes"

 <figure>
  <img title="Updating indexes for all locations" src="/media/update-all-indexes.png" class="img-responsive center-block">
  <figcaption>Updating indexes for all locations </figcaption>
</figure>

### Limiting the search results

By default, TagSpaces is limiting the amount of the found search results to 1000 files. This limitation is also valid for the maximum files, which can be displayed in a single folder. The reason for adding such limitation is the fact that pagination is not typical for file managers and for now we do not want to add such. In tab general of the Settings there is a field where you can increase or decrease this limit. See the next screenshot.

<figure>
  <img title="Screenshot of the advanced search options" src="/media/adjust-search-limit.png" class="img-responsive center-block">
  <figcaption>Adjust number of shown / found items in the perspeectives</figcaption>
</figure>

## <i class="profeature">pro</i>Advanced search

The search options described in this section are available only in the Pro and Enterprise editions of TagSpaces. In addition to the searching by files name and by tag, the advanced search supports the following filter criteria:

<figure>
  <img title="Screenshot showing the advanced search options" src="/media/tagspaces-advanced-search.png" class="img-responsive center-block">
  <figcaption>Screenshot showing the advanced search options</figcaption>
</figure>

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

<figure>
  <img title="Search by file type" src="/media/tagspaces-search-by-type.png" class="img-responsive center-block">
  <figcaption>Search by file type</figcaption>
</figure>

### Search by file size

In this dropdown you can filter for files by their size. The following options are supported:

- Empty - will filter files with zero size
- Tiny - will filter files smaller than 10KB
- Very small - will filter files smaller than 100KB
- Small - will filter files smaller than 1MB
- Medium - will filter files smaller than 50MB
- Large - will filter files smaller than 1GB
- Huge - will filter files bigger that 1GB

<figure>
  <img title="Search by size" src="/media/tagspaces-search-by-size.png" class="img-responsive center-block">
  <figcaption>Options for searching by size</figcaption>
</figure>

### Search by last modified date

Here you can specify in which period the files you are searching should have been modified. This filter supports the following options:

- Today - will show files and folders modified today
- Yesterday - will show results modified yesterday
- Past 7 days - will show results modified in the last 7 days
- Past 30 days - will shows results modified in the last 30 days
- Past 6 months - will show files and folders modified in the last 6 months from today
- Past year - will show files and folders modified in the last 12 months from today
- More than one year - will show files and folder older than one year

<figure>
  <img title="Search by last modified date and time" src="/media/tagspaces-search-by-last-modified-date.png" class="img-responsive center-block">
  <figcaption>Options for searching by last modified date</figcaption>
</figure>

### Search by time period

This filter is still work in progress.

### Search by GPS coordinates

This filter is still work in progress.

### Full text search for TXT, MD and HTML

After activating the full text search with the checkbox in the properties of a given location (see next screenshot), TagSpaces will try to extract and index the text content of supported file formats.

<!--This text content is saved in the hidden `.ts` folder and is considered later by the search. Since this is a early experimental feature, please don't relay only on ly on it.-->

These file formats are currently supported:

- HTML - files in HTML format, used for notes in rich text format
- MD - markdown files
- TXT - plain text files

<!-- * Office Documents: PDF, ODT, ODP, ODS, DOCX, XLSX, PPTX (extracts the text content)
* Images: JPG (extracts Exif and IPTC informations)
* Audios formats: MP3 (extracts id3 tags)
* Ebooks: EPUB (extracts the text content) -->

<figure>
  <img title="Search by last modified date and time" src="/media/tagspaces-enabling-fulltext-indexing.png" class="img-responsive center-block">
  <figcaption>Options for searching by last modified date</figcaption>
</figure>

> **Note:** This feature is still in beta state and could lead to performance issues if you are dealing with many and/or big text files.

## <i class="profeature">pro</i>Global search

Starting with version 3.5, TagSpaces Pro offers searching in all locations. We call this feature "Global search". It works on local and remote S3 based locations. The feature can be activated by clicking the _Global_-button in the search area, as seen in the following screenshot.

<figure>
  <img title="Global search in TagSpaces" src="/media/global-search.png" class="img-responsive center-block">
  <figcaption>Search globally in all locations</figcaption>
</figure>

Once in _Global search_-mode you will see one additional search options called "Force re-indexing all locations". Activating this checkbox will force TagSpaces to create a new index for every location before in searches in it. This options will deliver most accurate search result but can take more time, especially re-indexing remote locations or locations containing many files.

All other search related settings should work as known from the single location search. The [search result limit](#limiting-the-search-results) is applying here, so once reached TagSpaces will stop the search and will no go in the remaining un-searched locations.

> Note: _Global search_ should be considered as a feature in Beta status. There could be some edge cases which are not functioning correctly. Please share any glitches with us, we will try to fix them.

## <i class="profeature">pro</i>Saved searches

Work in progress

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
