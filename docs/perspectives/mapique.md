---
title: Mapique Perspective
tags: [perspective]
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks'

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

### Smart pin icon

With the help of a little pictogram you can directly recognize if the pin is for file or for a folder. The little balkan in the center of the icon represent the first tag of the file or the folder with its color. This will allow you to visually recognize the tagged files and folders. In the following screenshot for example, every pin is a geo-tagged file representing one person. The year of birth is the first tag. And the years are organized in decades with different colors. So now with help of the colored pins on the map you can get a first impression about the age distribution of those people and maybe build some kind of cluster.

<CenteredImage
    caption="Colored map icons according to the color of the first tag"
    src="/media/mapique/mapique-geo-tag-pins.png"
    showCaption
  />

## Navigating Tagged Folders

Since TagSpaces supports tagging of folders, you can geo tag your folders and turning them this way displayable in the Mapique perspective. On the following screenshot you can see that folders have a dedicated icon, so they can differentiated from the files. Clicking on a folder icon will open a small popup, which when clicked will navigate to the selected folder.

In general, not all folders have a geo tag but the Mapique perspective shows only files and folder which have such tags. This is kind of problematic if you are trying to navigate through a tree of folders. That's why we have added a new button in the main toolbar of the Mapique perspective, which turning an overlay containing all sub folders of the current folder on and off. Once turned on, the user can seamlessly navigate deep in a folder tree (even if there are not geo tags). The following video shows how this works.

<!-- <CenteredImage
    caption="Showing geo tagged files on topographical map"
    src="/media/tagspaces-mapique-folders.png"
    maxWidth1="550px"
    showCaption
  /> -->

<CenteredVideo
    caption="Navigating folders in the Mapique perspective"
    src="https://www.tagspaces.org/content/v3-11/mapique-folders.mp4"
    posterUrl="https://www.tagspaces.org/content/v3-11/mapique-folders.png"
    maxWidth="100%"
    showCaption
  />

## Encoding geo tags

TagSpaces uses by default <a href="https://plus.codes/" rel="nofollow">plus codes</a> for encoding the geo locations. Plus codes can encode for example these coordinates **48°08'27.8"N 11°34'53.6"E** with only few characters **8FWH4HRJ+CJ**, this makes the format perfectly suitable for using them as tags.
