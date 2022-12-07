---
title: Link files, folders and locations
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import VideoYT from '@site/src/components/VideoYT';

<ProFeature />

### General explanation

One long awaited functionality is the ability to create links between files managed in TagSpaces, so you can navigate from one file to another. The description field of any file or folder can contain links to other files, folders or locations. If you are using markdown for your notes you can place the same kind of links in content of the markdown file.

<VideoYT
    youtubeId="3F2YUKd6rDc"
    title="Using file and folder linking functionality in TagSpaces"
    posterUrl="/media/videoposters/linking-files-and-folders.jpg"
    height={550}
  />

The context menu of every file and folder in the default perspective now have the menu entry **Copy Sharing Link**, which will generate the sharing link and copy it to the clipboard. This link can be used for creating links to this file inside TagSpaces.

<CenteredImage
    caption="Context menu of a file containing the 'Copy Sharing Link' functionality"
    src="/media/copy-sharing-link.png"
  />

### Opening TagSpaces links from the search

If you have received a TagSpaces link (e.g. tslink) in an Email or Chat you can copy it and paste in the search field. Starting the search will open the locaiton, the file or folder to which the tslink is pointing

<CenteredImage
    caption="Open TS-Links from the search box"
    src="/media/tslinks-in-search.png"
    showCaption
  />

### Under the hood

You can have links to location, file and folders. The links have the following formats:

```bash title="Link to a location"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8
```

```bash title="Sharing link for a file"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsepath=%2FMyHome%2Ftodos%5B202109%5D.md
```

```bash title="Sharing link for a folder"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsdpath=%2FPersonal%20Knowledge
```

:::info
In version 5.1 the protocol prefix of the links was changed from `ts:?` to `ts://?` for better compatibility. Links created with older version which begin with `ts:?` are still supported for backwards compatibility.
:::

Technically the links consist of some parameter embedded in the URL.

- ts://? - indicating that this is a TagSpaces link (tslink)
- &tslid - is for the TagSpaces' location ID
- &tsepath - is the encoded relative path the entry
- &tsdpath - is the encoded relative path to the folder

:::caution
Currently, renaming a file or a folder to which a given link points will make the link invalid. TagSpaces will still try to open the valid part of the link (e.g. the location).
:::
