---
title: Share files and folders
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo, FullScreenImage } from '@site/src/components/CommonBlocks';

You can share files in two ways, and here is how it can be done.

## Internal sharing for files and folders

The first method, introduced back in version 3.8, is called "Sharing." It allows you to share links to files and folders with other TagSpaces users and installations. These links will work for object storage locations or local locations synced with tools such as Dropbox, Google Drive, or Syncthing. A key requirement is that these locations must have the [same location ID](/linking#location-ids).

<CenteredImage
    caption="Sharing link in file and folder properties"
    src="/media/sharing/sharing-link.avif"
    maxWidth="600px"
    showCaption
/>

Once copied to the clipboard with the **COPY** button, the link can be shared, for example, via email or messenger. The recipient must open TagSpaces, paste the link into the search box, and press enter.

<CenteredImage
    caption="Open TS-Links from the search box"
    src="/media/search/tslink-in-search.avif"
    showCaption
/>

Alternatively the **Open Link** button from the next screenshot can be used for this purpose.

<CenteredImage
    caption="Open sharing link in TagSpaces"
    src="/media/sharing/open-sharing-link.avif"
    maxWidth="650px"
    showCaption
/>

:::info
These kinds of links can also be used for internal links within TagSpaces. More details can be found in the dedicated [linking section](/linking).
:::

## Download links for files on object storage

<ProFeature />

The second type of sharing links, called "Links for downloading," are available only for files (not folders) located on object storages such as AWS S3 or MinIO buckets. The relevant section in the file properties is shown in the next screenshot.

<CenteredImage
    caption="Download links in the file properties"
    src="/media/sharing/open-download-link-dialog.avif"
    maxWidth="600px"
    showCaption
/>

Clicking the **Generate Link** button opens the following dialog:

<CenteredImage
    caption="Generating the download links"
    src="/media/sharing/generate-download-link.avif"
    maxWidth="600px"
    showCaption
/>

Here you have the following options:

- Adjust the **validity duration** of the link. Supported durations include: 15 minutes, 1 hour, 1 day, 3 days, and 1 week.
- The **Copy** button copies the link to the clipboard for use in other applications.
- A **QR-code** of the link is automatically generated. Changing the duration will regenerate the QR-code.

The generated link can be shared via chat or email. When opened in a browser, the download will be initiated. If the link expires, the user will see this message:

<CenteredImage
    caption="Expired download links"
    src="/media/expired-download-link.png"
    maxWidth="797px"
    showCaption
/>

### Downloading directly in locations

It is possible to download files via links directly into a TagSpaces location, bypassing the browser. Click on the **Create new** button and from the menu choose **New From URL**

<CenteredImage
    caption="Open "
    src="/media/open-download-from-url-dialog.avif"
    maxWidth="350px"
    showCaption
/>

This will open the following dialog, where you can paste the URL and start the download with the **OK** button.

<CenteredImage
    caption="Open "
    src="/media/download-file-dialog.avif"
    maxWidth="450px"
    showCaption
/>

### Downloading to your phone

You can also download files to your phone or tablet. Point your device’s camera at the QR-code, and it will automatically recognize the link, allowing you to open it in your mobile browser. This is an easy way to transfer files from object storage to mobile devices.

## Sharing multiple files at once

<ProFeature />

To share files from a folder, a selection of files, or search results, you can use the "Share many files" feature. This functionality is available in the [Grid](/perspectives/grid), [List](/perspectives/list), and [Kanban](/perspectives/kanban) perspectives. To open the sharing dialog, click the sharing icon in the toolbar or select the share option from the context menu in these perspectives.

<CenteredImage
    caption="Open the file sharing dialog"
    src="/media/sharing/open-sharing-dialog.png"
    maxWidth="1056px"
    showCaption
/>

The dialog generates sharing links that are valid for 3 days by default. You can adjust the validity duration to 15 minutes, 60 minutes, 1 day, 3 days, or 7 days. After expiration, the links will no longer work. TagSpaces does not offer permanent sharing links.

<CenteredImage
    caption="The file sharing dialog"
    src="/media/sharing/file-sharing-dialog.png"
    maxWidth="735px"
    showCaption
/>

The center of the dialog, surrounded by a dashed line, shows a preview of the generated HTML snippet. If the shared files have thumbnails, they will be displayed; otherwise, the filenames will be shown. The expiration date of the links is displayed at the top of this area.

At the bottom of the dialog, you have the following options:

- **Copy to clipboard** - Copies the generated code with the links to the clipboard, so you can paste it into an email or chat application.
- **Save as HTML** - Saves the generated code locally as an HTML file, which can be attached to an email.
- **Save & Share** - Saves the generated HTML file to the S3 bucket and opens the sharing dialog, allowing direct sharing of the file.
- **Close** - Closes the dialog.
- **Help** - Opens this help page in the online documentation.

:::caution
If the links have not expired, anyone with the code snippet can access and download the shared files. So be cautious with whom and how you share this code.
:::

### Using the HTML snippet in email clients

Here is how the HTML snippet appears when pasted into some common email clients.

#### Thunderbird

<CenteredImage
    caption="Sharing snippet in Thunderbird"
    src="/media/sharing/sharing-snipped-thunderbird.png"
    maxWidth="970px"
    showCaption
/>

:::info
In Gmail, make sure to uncheck the "Plain text mode" option, as marked in the screenshot below, to ensure the links are recognized.
:::

#### Gmail

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

This is how the HTML snippet looks when pasted into common chat applications.

#### Signal

<CenteredImage
    caption="Sharing snippet in Signal"
    src="/media/sharing/sharing-snipped-signal.png"
    maxWidth="970px"
    showCaption
/>

#### Whatsapp

<CenteredImage
    caption="Sharing snippet in Whatsapp"
    src="/media/sharing/sharing-snipped-whatsapp.png"
    maxWidth="970px"
    showCaption
/>
