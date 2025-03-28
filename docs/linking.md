---
title: Link to files, folders and locations
---

import { ProFeature, CenteredImage, CenteredVideo, FullScreenImage } from '@site/src/components/CommonBlocks';
import VideoYT from '@site/src/components/VideoYT';

<ProFeature />

One long-awaited feature in TagSpaces is the ability to create links between files, folders, and locations. Now, you can navigate seamlessly from one file to another, or to a folder or location. The description field of any file or folder can contain links to other entities. If you're using markdown for notes, you can also place these kinds of links directly into your markdown file content.

<VideoYT
    youtubeId="3F2YUKd6rDc"
    title="Using file and folder linking functionality in TagSpaces"
    posterUrl="/media/videos/linking-files-and-folders.jpg"
    height={550}
/>

The context menu for every file and folder in the default perspective includes the option **Copy Sharing Link**, which generates a sharing link and copies it to your clipboard. This link can be used to create internal links to this file inside TagSpaces.

<CenteredImage
    caption="Context menu of a file containing the 'Copy Sharing Link' functionality"
    src="/media/copy-sharing-link.png"
/>

### Location IDs

:::info
When sharing links between TagSpaces users, make sure that the locations in their TagSpaces installation have the **same IDs**; otherwise, the links will not work. These links also work in folders synced with services like Dropbox or Syncthing.
:::

You can change the location ID in the location's properties, as shown in the following screenshot. For S3 locations, ensure that the location connects to the same subfolder of the connected bucket.

<CenteredImage
  caption="Changing the location ID"
  src="/media/changing-location-id.png"
  maxWidth="515px"
/>

### Links in the web versions of TagSpaces

Users of the web versions can directly copy the URL from their browser or use the copy button in the properties area.

<CenteredImage
    caption="Sharing link types in the entry properties"
    src="/media/tagspaces-links.png"
    showCaption
/>

:::info
Copying the URL from the browser has an advantage: the person receiving the link can open the same installation directly in their browser.
:::

### Opening TagSpaces links from the search

If you've received a TagSpaces link (e.g., a tslink) in an email or chat, you can copy and paste it into the search field. Running the search will open the location, file, or folder the tslink points to.

<CenteredImage
    caption="Open TS-Links from the search box"
    src="/media/tslinks-in-search.png"
    showCaption
/>

### Under the hood

TagSpaces links can point to locations, files, or folders. They follow these formats:

```bash title="Link to a location"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8

ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8
```

```bash title="Sharing link for a file"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsepath=%2FMyHome%2Ftodos%5B202109%5D.md
```

```bash title="Sharing link for a folder"
ts://?tslid=53ea7417-4f7c-9c25-dc44aa41f6c8&tsdpath=%2FPersonal%20Knowledge
```

:::info
In version 5.1, the protocol prefix for links was changed from ts:? to ts://? for better compatibility. Links created in older versions with ts:? are still supported for backward compatibility.
:::

Technically the links consist of some parameter embedded in the URL.

- `ts://?` - Indicates that this is a TagSpaces link (tslink).
- `&tslid` - Represents the TagSpaces location ID.
- `&tsepath` - Encoded relative path to the entry.
- `&tsdpath` - Encoded relative path to the folder.
- `&tseid` - The unique id of a file or folder.

:::tip
Renaming or deleting a file or folder linked in a tslink will make the link unusable. However, TagSpaces will attempt to open the valid part of the link (e.g., the location). If the tslink contains a `tseid`, a search for this id will be offered by the application, so if a file or a folder with this id is still in the location it will be found.
:::
