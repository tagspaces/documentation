# Mapique perspective (available in v3.3)

**Table of Contents**
<!-- toc -->

## Motivation


## User interface
The main toolbar of this perspective offers the following functionalities:

* **Extract geo locations** - start the extraction of geo location tags from EXIF information in JPG files from the current directory.
* **Geo tag current folder** - takes the location of the current map center and add it as geo tag in pluscode format to the current folder.
* **Change the map type** - clicking on this button will iterate throught the currently supported map types, which are for now: openstreetmap (default one) and topographical. 
* **Opens perspective's documentation** - clicking on the button will open this page.

## Supported Maps
The default map shown by opening of this perspective is provided by [OpenStreetMap](https://www.openstreetmap.org/)
<figure>
  <img title="" src="/media/tagspaces-mapique-openstreetmap.png" class="img-responsive center-block">
  <figcaption>Showing geo tagged files on the default map from openstreetmap.org</figcaption>
</figure>

An optional topological map is provided by [OpenTopoMap](https://opentopomap.org/) and looks as in the following screenshot.
<figure>
  <img title="" src="/media/tagspaces-mapique-topo.png" class="img-responsive center-block">
  <figcaption class="img-responsive center-block">Showing geo tagged files on a topographical map</figcaption>
</figure>

## Navigating Tagged Folders
Since TagSpaces supports tagging of folders, you can geo tag your folders and turning them this way displayable in the mapique perspective. On the following screenshot you can see that folders have a dedicated icon, so they can differentiated from the files. Clicking on a folder icon will open a small popup, which when clicked will navigate to the selected folder. 
<figure>
  <img title="" src="/media/tagspaces-mapique-folders.png" class="img-responsive center-block">
  <figcaption>Showing geo tagged files on topographical map</figcaption>
</figure>