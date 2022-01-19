---
title: Share files and folders
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

You can share files in two ways, here you will find how this can be done.

## Internal sharing for files and folders

The first one which was introduced in version 3.8 is called "Link for internal sharing", available in the left part of the previous screenshot. It is intended for sharing links to files anf folders with other TagSpaces users. Those links will work on locations which are synced with tools such Dropbox, Google Drive or Nextcloud. Other important requirement is that those location should have the same location id. The location id can be changed in the advanced settings of the location properties.

<CenteredImage
    caption="Sharing link types in the entry properties"
    src="/media/sharing-files.png"
    maxWidth="700px"
    showCaption
  />

Once copied to the clipboard with the **COPY**-button, the links can be shared for example per email or via messenger. The person with which you share the link needs TagSpaces in order to open it. She just needs to open the three-dot menu of the location area and click on the **Open Link**, as showed in the next screenshot.

<CenteredImage
    caption="Open shared links in TagSpaces"
    src="/media/open-shared-links.png"
    maxWidth="500px"
    showCaption
  />

## File sharing for downloading

<ProFeature />

The second kind of sharing links are called "Links for downloading" and are available only for files located on object storages such AWS S3 or MinIO servers. The area responsible for this kind of links is located on the right part of the sharing area. It consists of three elements as seen in the screenshot before the previous one:

- A dropdown where you can select the adjust the **validity duration** of the link. Available options are: 15 minutes, 1 hour, 1 day, 3 days and 1 week
- A **Generate & Copy**-button which will generate the link and copy it to the clipboard
- And a text field where the link is places after the generation

The generated link can be shared to anyone so he/she can start downloading the file.
