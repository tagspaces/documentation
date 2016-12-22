# Search functionalities

## <a id="desktopSearch" href="#desktopSearch">Search based on filenames</a>

TagSpaces has a build in file search functionality. The difference to the classic Desktop Search software is the search is performed only in the currently opened location, since we for now do not index the files. The search has currently the following features:

* On the majority of file types the search considers only the file name for the search result. On some text based files such as txt, markdown or html the text content is also analysed, but this is still an experimental feature.
* It searches your sub-folders recursively by default. This could lead to performance issues on folders with many files and sub-folders. If you want the search to ignore the sub-folders, add `~` character in front of your search query. The default search in the sub-folders can be disabled in the settings. <span class="label label-info">Example:</span> If you want the find files having the word `word1` located in current folder, ignoring the sub-folders you have to enter `~ word1` in the search input box.
* If you want to find all files tagged with a certain tag, you can add the `+` character in front of the tag name. This way occurrences of this word somewhere else in the file name or content will be ignored. <span class="label label-info">Example:</span> If you want to find all files from the current folder tagged with the tag `tag1` you have to enter `+tag1` in the search input box.
* The name of the parent directory of a given file is also considered by the search algorithm. So for example if you are searching for photos from you vacation in USA and the folder where these files are located contains the word USA (e.g. '20160301 vacation usa 70D'), then the search will list all the files located directly in this folder.

Feature versions of the application could include a file indexing functionality for a faster and responsive search.

<figure>
  <img title="screenshot showing the advanced search menu" src="https://www.tagspaces.org/content/v2-2/advanced-search-menu.png" class="img-responsive center-block">
  <figcaption>Screenshot of the advanced search drop down menu</figcaption>
</figure>