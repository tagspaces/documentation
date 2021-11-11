---
title: Linking files, folders and locations
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

One long awaited functionality is the ability to create links between files managed in TagSpaces, so you can navigate from one file to another. This is possible in version 4, you can use the description field of any file or folder to create links to other files and folders. If you are using markdown for your notes you can place the same kind of links in content of the file.

The context menu of every file and folder in the default perspective now have the menu entry **Copy Sharing Link**, which will generate the sharing link and copy it to the clipboard. This link can be used for creating links to this file inside TagSpaces.

<CenteredImage
    caption="Context menu of a file containing the 'Copy Sharing Link' functionality"
    src="/media/copy-sharing-link.png"
  />

### Under the hood

You can have links to location, file and folders. The links have the following formats:

```bash title="Link to a location"
ts:?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8
```

```bash title="Sharing link for a file"
ts:?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsepath=%2FMyHome%2Ftodos%5B202109%5D.md
```

```bash title="Sharing link for a folder"
ts:?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsdpath=%2FPersonal%20Knowledge
```

Technically the links consist of some parameter embedded in the URL.

- ts:? - indicated that this is TagSpaces link
- &tslid - is for the TagSpaces' location ID
- &tsepath - is the encoded relative path the entry
- &tsdpath - is the encoded relative path to the folder

:::warning
Currently, renaming the file or the folder to which a given link points will make it invalid. TagSpaces will still try to open the valid part of the link (e.g. the location).
:::
