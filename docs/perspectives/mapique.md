---
title: Mapique Perspective
---

## Motivation

This perspective can be useful for visualizing files and folder tagged with geo location tags on map.

Here are some ideas for which this perspective can be used.

- Saving favorite places, privately
- Planning trips and places to visit
- Showing pictures taken on trips
- Place any file and document on a map
- Add private annotations to a map
- ... (please share your use case with us)

> <profeature /> The perspective is available only in the PRO and the Enterprise versions of the product.

## Supported Maps

The default map shown by opening of this perspective is provided by [OpenStreetMap](https://www.openstreetmap.org/)

<figure>
  <img title="" src="/media/tagspaces-mapique-openstreetmap.png" class="img-responsive center-block" />
  <figcaption>Showing geo tagged files on the default map from openstreetmap.org</figcaption>
</figure>

An optional topological map is provided by [OpenTopoMap](https://opentopomap.org/) and looks as in the following screenshot.

<figure>
  <img title="" src="/media/tagspaces-mapique-topo.png" class="img-responsive center-block" />
  <figcaption class="img-responsive center-block">Showing geo tagged files on a topographical map</figcaption>
</figure>

## User interface

From the main toolbar of this perspective the user can access the following functionalities:

- **Extract geo locations** - start the extraction of geo location tags from EXIF information in JPG files from the current directory.
- **Geo tag current folder** - takes the location of the current map center and add it as geo tag in pluscode format to the current folder.
- **Change the map type** - clicking on this button will iterate through the currently supported map types, which are for now: openstreetmap (default one) and topographical.
- **Opens perspective's documentation** - clicking on the button will open this page.

Clicking in the popup of a file on the map will open it the file previewing area of TagSpaces, where you add or change the file description, rename the file or choose another thumbnail, please see the following screenshot for comparison.

<figure>
  <img title="" src="/media/tagspaces-mapique-file-properties.png" class="img-responsive center-block" />
  <figcaption class="img-responsive center-block">Showing the file properties in the mapique perspective</figcaption>
</figure>

## Navigating Tagged Folders

Since TagSpaces supports tagging of folders, you can geo tag your folders and turning them this way displayable in the mapique perspective. On the following screenshot you can see that folders have a dedicated icon, so they can differentiated from the files. Clicking on a folder icon will open a small popup, which when clicked will navigate to the selected folder.

<figure>
  <img title="" src="/media/tagspaces-mapique-folders.png" class="img-responsive center-block" />
  <figcaption>Showing geo tagged files on topographical map</figcaption>
</figure>

## Encoding geo tags

TagSpaces uses by default <a href="https://plus.codes/" rel="nofollow">plus codes</a> for encoding the geo locations. Plus codes can encode for example these coordinates **48°08'27.8"N 11°34'53.6"E** with only few characters **8FWH4HRJ+CJ**, this makes the format perfectly suitable for using them as tags.
