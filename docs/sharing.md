---
title: Share files and folders
description: Learn how to share files and folders in TagSpaces using internal sharing links for cloud-synced files and download links for object storage locations.
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo, FullScreenImage } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

TagSpaces provides two ways to share files and folders: **internal sharing links** for other TagSpaces users, and **download links** for anyone with a browser. This page covers both methods.

## Internal Sharing Links

Internal sharing links allow you to share references to files and folders with other TagSpaces users. These links work for object storage locations and local locations synced with tools such as Dropbox, Google Drive, or Syncthing. The only requirement is that both installations must have the [same location ID](/linking#location-ids).

<CenteredImage
    caption="Sharing link in file and folder properties"
    src="/media/sharing/sharing-link.avif"
    maxWidth="600px"
    showCaption
/>

Copy the link using the **COPY** button and share it via email or messenger. The recipient can open it in TagSpaces by either:

- Pasting the link into the **search box** and pressing Enter
- Using the **Open Link** button in the left drawer

<CenteredImage
    caption="Opening a sharing link in TagSpaces"
    src="/media/sharing/open-sharing-link.avif"
    maxWidth="650px"
    showCaption
/>

For full details on the link format, relative path links in markdown/HTML, and location ID configuration, see the [Linking documentation](/linking).

## Download Links for Object Storage

<ProFeature />

Download links allow anyone with a browser to download a file — no TagSpaces installation required. This feature is available only for files stored on object storage (AWS S3, Wasabi, Cloudflare R2, etc.), not for local files.

The download links section appears in the file properties:

<CenteredImage
    caption="Download links section in file properties"
    src="/media/sharing/open-download-link-dialog.avif"
    maxWidth="600px"
    showCaption
/>

Clicking **Generate Link** opens the following dialog:

<CenteredImage
    caption="Generating a download link"
    src="/media/sharing/generate-download-link.avif"
    maxWidth="600px"
    showCaption
/>

Available options:

- **Validity duration** — choose from 15 minutes, 1 hour, 1 day, 3 days, or 1 week. After expiration, the link stops working.
- **Copy** — copies the link to the clipboard.
- **QR code** — automatically generated for easy mobile access. Changes when the duration is adjusted.

When opened in a browser, the link initiates a download. If the link has expired, the user sees an error message:

<CenteredImage
    caption="Expired download link message"
    src="/media/expired-download-link.png"
    maxWidth="797px"
    showCaption
/>

### Downloading to your phone

Point your phone's camera at the QR code to open the download link in your mobile browser. This is a convenient way to transfer files from object storage to mobile devices.

### Downloading files into a TagSpaces location

You can download a file via URL directly into the current TagSpaces location. Click the **Create new** button and choose **New From URL**.

<CenteredImage
    caption="Opening the download dialog"
    src="/media/open-download-from-url-dialog.avif"
    maxWidth="350px"
    showCaption
/>

Paste the URL into the dialog and click **OK** to start the download.

<CenteredImage
    caption="Dialog for downloading files from URLs"
    src="/media/editcreate/download-file-dialog.avif"
    maxWidth="450px"
    showCaption
/>

## Sharing Multiple Files

<ProFeature />

You can share multiple files at once from a folder, a selection, or search results. This feature is available in the [Grid](/perspectives/grid), [List](/perspectives/list), and [Kanban](/perspectives/kanban) perspectives. Open the sharing dialog from the toolbar's sharing icon or from the context menu.

<CenteredImage
    caption="Opening the file sharing dialog from the toolbar"
    src="/media/sharing/open-sharing-dialog.png"
    maxWidth="1056px"
    showCaption
/>

The dialog generates download links with a default validity of 3 days. You can adjust the duration to 15 minutes, 1 hour, 1 day, 3 days, or 7 days. TagSpaces does not offer permanent sharing links.

<CenteredImage
    caption="The file sharing dialog"
    src="/media/sharing/file-sharing-dialog.png"
    maxWidth="735px"
    showCaption
/>

The center area (dashed border) shows a preview of the generated HTML snippet. Files with thumbnails display their thumbnails; otherwise, filenames are shown. The expiration date is displayed at the top.

At the bottom of the dialog:

- **Copy to clipboard** — copies the HTML snippet for pasting into email or chat applications.
- **Save as HTML** — saves the snippet locally as an HTML file that can be attached to an email.
- **Save & Share** — saves the HTML file to the S3 bucket and opens a dialog for sharing it directly.
- **Close** — closes the dialog.
- **Help** — opens this documentation page.

:::caution
Anyone with the HTML snippet can access and download the shared files until the links expire. Be careful about how and with whom you share it.
:::

### Using the HTML snippet in email clients

Here is how the snippet appears when pasted into common email clients.

#### Thunderbird

<CenteredImage
    caption="Sharing snippet in Thunderbird"
    src="/media/sharing/sharing-snipped-thunderbird.png"
    maxWidth="970px"
    showCaption
/>

#### Gmail

:::info
In Gmail, make sure to uncheck "Plain text mode" to ensure the links are recognized.
:::

<CenteredImage
    caption="Sharing snippet in Gmail"
    src="/media/sharing/sharing-snipped-gmail.png"
    maxWidth="970px"
    showCaption
/>

#### Outlook

<CenteredImage
    caption="Sharing snippet in Outlook"
    src="/media/sharing/sharing-snipped-outlook.png"
    maxWidth="970px"
    showCaption
/>

### Using the HTML snippet in chat apps

#### Signal

<CenteredImage
    caption="Sharing snippet in Signal"
    src="/media/sharing/sharing-snipped-signal.png"
    maxWidth="970px"
    showCaption
/>

#### WhatsApp

<CenteredImage
    caption="Sharing snippet in WhatsApp"
    src="/media/sharing/sharing-snipped-whatsapp.png"
    maxWidth="970px"
    showCaption
/>
