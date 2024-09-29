---
title: Mapique Perspective
tags: [perspective]
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks'

<ProFeature />

This perspective is useful for visualizing geo-tagged files and folders.

Here are some ideas for which this perspective can be used:

- Saving favorite places privately
- Planning trips and places to visit
- Showing pictures taken on trips
- Placing any file or document on a map
- Adding private annotations to a map

## Supported Maps

The default map shown when opening this perspective is provided by [OpenStreetMap](https://www.openstreetmap.org/).

<CenteredImage
    caption="Showing geo-tagged files on the default map from openstreetmap.org"
    src="/media/tagspaces-mapique-openstreetmap.png"
    maxWidth1="550px"
    showCaption
  />

An optional topological map is provided by [OpenTopoMap](https://opentopomap.org/) and looks as shown in the following screenshot.

<CenteredImage
    caption="Showing geo-tagged files on a topographical map"
    src="/media/tagspaces-mapique-topo.png"
    maxWidth1="550px"
    showCaption
  />

## User Interface

From the main toolbar of this perspective, the user can access the following functionalities:

- **Extract geo tags** - Start the extraction of geo coordinates from JPG files with embedded EXIF/IPTC located in the current directory.
- **Geo tag current folder** - Takes the location of the current map center and adds it as a geo tag in [Plus Code format](https://en.wikipedia.org/wiki/Open_Location_Code) to the current folder.
- **Change the map type** - Clicking this button will iterate through the currently supported map types, which for now include: OpenStreetMap (default) and topographical.
- **Open perspective's documentation** - Clicking this button will open this page.

Clicking on the popup of a file on the map will open the file in the previewing area of TagSpaces, where you can add or change the file description, rename the file, or choose another thumbnail. The following screenshot shows a comparison.

<CenteredImage
    caption="Showing the file properties in the Mapique perspective"
    src="/media/tagspaces-mapique-file-properties.png"
    maxWidth1="550px"
    showCaption
  />

### Smart Pin Icon

With the help of a small pictogram, you can directly recognize if the pin is for a file or a folder. The small tile in the center represents the first tag of the file or folder with its color. This allows you to visually recognize tagged files and folders. In the following screenshot, for example, each pin represents a geo-tagged file representing one person. The first tag is the year of birth, with the years organized in decades using different colors. The colored pins on the map help illustrate the age distribution of these individuals, which could allow for building clusters.

<CenteredImage
    caption="Colored map icons according to the color of the first tag"
    src="/media/mapique/mapique-geo-tag-pins.png"
    showCaption
  />

## Navigating Tagged Folders

Since TagSpaces supports tagging of folders, you can geo-tag folders, making them displayable in the Mapique perspective. In the following screenshot, you can see that folders have a dedicated icon, differentiating them from files. Clicking on a folder icon will open a small popup, which when clicked, will navigate to the selected folder.

Not all folders have geo tags, so the Mapique perspective only shows files and folders with such tags. This can be problematic when trying to navigate through a folder tree. To address this, a new button has been added to the main toolbar of the Mapique perspective. This button toggles an overlay displaying all subfolders of the current folder. Once turned on, the user can seamlessly navigate deep within a folder tree, even if there are no geo tags. The following video demonstrates how this works.

<CenteredVideo
    caption="Navigating folders in the Mapique perspective"
    src="https://www.tagspaces.org/content/v3-11/mapique-folders.mp4"
    posterUrl="https://www.tagspaces.org/content/v3-11/mapique-folders.png"
    maxWidth="100%"
    showCaption
  />

## Encoding Geo Tags

TagSpaces uses [Plus Codes](https://plus.codes/) by default for encoding geo locations. Plus codes can encode coordinates such as **48°08'27.8"N 11°34'53.6"E** into a short string like **8FWH4HRJ+CJ**, making the format ideal for use as tags.
