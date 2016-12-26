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




TagSpaces PRO search is very powerful. It offers users the opportunity to discover easier and faster the right result for them.

One of the advantages of TagSpaces PRO's search are search operators. They are words that can be added to searches to help narrow down the results. You can use all of the search operators directly in the search box, without opening the advanced search dialog. Here is an example:

<img alt="Advanced Search Syntax example" src="/content/search-syntax-example.png" class="img-responsive">

So for the example above the search query <b>t:picture sport</b> will give you all pictures containing the word <b>sport</b>. No matter where it is located search operator in the search query and will work both placed before the search word or after.

Another way is to click on search button (![TagSpaces button for search field](/content/search-button.png)) to showing the search field and then click on pointing down arrow (![TagSpaces entrance to advanced search dialog window](/content/search-arrow-down.png)) to open the advanced search dialog. Fill the keyword in <b>Search Words</b> and the file type in <b>File Type</b> and will achieve the same effect as above way.

![TagSpaces advanced search dialog](/content/tagspaces-advanced-search.png)

Please make sure, that when you are using search operators, there is no any spaces between the operator and your search terms. A search for <b>t:picture</b> <i>sport</i> will work, but <b>t:</b> <b>picture</b> <i>sport</i> won't.

<div class="table-responsive">
<table class="table">
	<tr>
		<th>Operator</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>t:picture</td>
		<td>Search only for pictures with the following extensions for example: <i>JPG</i>, <i>JPEG</i> <i>PNG</i> and etc.<br>Short search example: <b>t:picture photo</b></td>
	</tr>
	<tr>
		<td>t:doc</td>
		<td>Search only for documents with the following extensions for example: <i>DOCX</i>, <i>PDF</i> <i>ODF</i> and etc.<br>Short search example: <b>t:doc document</b></td>
	</tr>
	<tr>
		<td>t:note</td>
		<td>Search only for notes with the following extensions for example: <i>MD</i>, <i>TXT</i> <i>HTML</i> and etc.<br>Short search example: <b>t:note note</b></td>
	</tr>
	<tr>
		<td>t:audio</td>
		<td>Search only for audio with the following extensions for example: <i>OGG</i>, <i>MP3</i> <i>WAV</i> and etc.<br>Short search example: <b>t:audio song</b></td>
	</tr>
	<tr>
		<td>t:video</td>
		<td>Search only for video with the following extensions for example: <i>WEBM</i>, <i>OGV</i> <i>MP4</i> and etc.<br>Short search example: <b>t:video clip</b></td>
	</tr>
	<tr>
		<td>t:archive</td>
		<td>Search only for archives with the following extensions for example: <i>ZIP</i>, <i>RAR</i> <i>7Z</i> and etc.<br>Short search example: <b>t:archive arch</b></td>
	</tr>
</table>
</div>

If you need more information about supported file types, please take a look at [this article](/documentation/supported-file-formats/).

## Limit search results

We have added an options in the settings to limit the maximal search results or files to be shown in the current perspective. With this version of TagSpaces we changed the default behaviour of the search and now the applications searches automatically in the subfolder of the current folder recursively. This of course may lead on big directory tree to performances issues. That's why have build in a switch in the options where you can disable this functionality.

![limit search results screenshot](/media/new-search-options.png)