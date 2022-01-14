---
title: Mapique Perspective
---

import { ProFeature, EntFeature, CenteredImage } from '@site/src/components/CommonBlocks'

<ProFeature />

This perspective can be useful for visualizing geo-tagged files and folders.

Here are some ideas for which this perspective can be used.

- Saving favorite places, privately
- Planning trips and places to visit
- Showing pictures taken on trips
- Place any file and document on a map
- Add private annotations to a map

## Supported Maps

The default map shown by opening of this perspective is provided by [OpenStreetMap](https://www.openstreetmap.org/)

<CenteredImage
    caption="Showing geo tagged files on the default map from openstreetmap.org"
    src="/media/tagspaces-mapique-openstreetmap.png"
    maxWidth1="550px"
    showCaption
  />

An optional topological map is provided by [OpenTopoMap](https://opentopomap.org/) and looks as in the following screenshot.

<CenteredImage
    caption="Showing geo tagged files on a topographical map"
    src="/media/tagspaces-mapique-topo.png"
    maxWidth1="550px"
    showCaption
  />

## User interface

From the main toolbar of this perspective the user can access the following functionalities:

- **Extract geo tags** - start the extraction of geo coordinates from JPG files with embedded EXIF/IPTC located in the the current directory.
- **Geo tag current folder** - takes the location of the current map center and add it as geo tag in [Plus Code format](https://en.wikipedia.org/wiki/Open_Location_Code) to the current folder.
- **Change the map type** - clicking on this button will iterate through the currently supported map types, which are for now: openstreetmap (default one) and topographical.
- **Opens perspective's documentation** - clicking on the button will open this page.

Clicking in the popup of a file on the map will open it the file previewing area of TagSpaces, where you add or change the file description, rename the file or choose another thumbnail, please see the following screenshot for comparison.

<CenteredImage
    caption="Showing the file properties in the Mapique perspective"
    src="/media/tagspaces-mapique-file-properties.png"
    maxWidth1="550px"
    showCaption
  />

## Navigating Tagged Folders

Since TagSpaces supports tagging of folders, you can geo tag your folders and turning them this way displayable in the mapique perspective. On the following screenshot you can see that folders have a dedicated icon, so they can differentiated from the files. Clicking on a folder icon will open a small popup, which when clicked will navigate to the selected folder.

<CenteredImage
    caption="Showing geo tagged files on topographical map"
    src="/media/tagspaces-mapique-folders.png"
    maxWidth1="550px"
    showCaption
  />

## Encoding geo tags

TagSpaces uses by default <a href="https://plus.codes/" rel="nofollow">plus codes</a> for encoding the geo locations. Plus codes can encode for example these coordinates **48°08'27.8"N 11°34'53.6"E** with only few characters **8FWH4HRJ+CJ**, this makes the format perfectly suitable for using them as tags.
