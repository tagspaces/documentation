---
title: Share files and folders
---

import { ProFeature, EntFeature, CenteredImage, CenteredVideo, FullScreenImage } from '@site/src/components/CommonBlocks';

You can share files in two ways, here you will find how this can be done.

## Internal sharing for files and folders

The first one which was introduced back in version 3.8 is called "Sharing", as seen in the next screenshot. It is intended for sharing links to files anf folders with other TagSpaces users and installations. These links will work on object storage locations or local locations synced with tools such as Dropbox, Google Drive or Syncthing. Other important requirement is that these location should have the [same location id](/linking#location-ids).

<CenteredImage
    caption="Sharing link file and folder properties"
    src="/media/sharing-link.png"
    maxWidth="778px"
    showCaption
  />

Once copied to the clipboard with the **COPY** button, the link can be shared for example per email or via messenger. The person with which you share the link have to open his installation of TagSpaces and paste the link in the search box of the app and hit enter.

<CenteredImage
    caption="Open TS-Links from the search box"
    src="/media/tslinks-in-search.png"
    showCaption
  />

Alternatively she can navigation to the locations section and open the three-dot menu and choose on the **Open Link**, as showed in the next screenshot.

<CenteredImage
    caption="Open shared links in TagSpaces"
    src="/media/open-shared-links.png"
    maxWidth="697px"
    showCaption
  />

:::info
This kind of links can be also used for internal links in TagSpaces, more on this topic can be found in the a dedicated [linking section](/linking).
:::

## Sharing download link to a file

<ProFeature />

The second kind of sharing links are called "Links for downloading" and are available only for only files (not folders) located on object storages (e.g. AWS S3 or MinIO). The place responsible for this links is located in the file properties and is marked in the next screenshot.

<CenteredImage
    caption="Download links in the file properties"
    src="/media/download-link.png"
    maxWidth="778px"
    showCaption
  />

The click on the **Generate Link** button will open the following dialog:

<CenteredImage
    caption="Generating the download links"
    src="/media/generate-download-link.png"
    maxWidth="595px"
    showCaption
  />

Here you can have the following options:

- Ability to adjust the **validity duration** of the link. Currently supported are these durations: 15 minutes, 1 hour, 1 day, 3 days and 1 week.
- The **Copy** button copies the link to the clipboard, so you can use it in some other application.
- A **QR-code** of the link is automatically generated on opening the dialog. By changing the duration, the QR-code is automatically re-generated.

The generated link can be shared for example via chat ot email so the counterpart, so opening it in a browser will initiate the download. If the link is expired the user will see the following message:

<CenteredImage
    caption="Expired download links"
    src="/media/expired-download-link.png"
    maxWidth="797px"
    showCaption
  />

### Downloading directly in locations

It is possible to download such links also directly in a TagSpaces locations, without the need of a browser. Just go to the file create dialog, click on **More options**, paste the link in the URL text field and click the **Start the Download** button. The file will be saved in the current folder of your current location.

<CenteredImage
    caption="Download in locations"
    src="/media/create-dialog-download-links.png"
    maxWidth="592px"
    showCaption
  />

### Downloading to your phone

If you point the camera of your phone or tablet to the QR-code, the link should be automatically recognized and then you can initiate its opening in your mobile browser. This is the easiest way to transfer files from your object storage locations to mobile devices.

## Sharing many files at once

<ProFeature />

If you want to share the files from a given folder, just few of them or your current search results, you will need a functionality for sharing many files at once. This functionality is now possible in the [Grid](/perspectives/grid), [List](/perspectives/list) and [Kanban](/perspectives/kanban) perspectives. To open the sharing dialog you have to click the sharing icon from the toolbar or choose the share menu item from the file context menu in these perspectives.

<CenteredImage
    caption="Open the file sharing dialog"
    src="/media/open-sharing-dialog.png"
    maxWidth="1056px"
    showCaption
  />

The dialogs opens and generates sharing links which are valid for 3 days. You can adjust the validity of the links from the dropbox, where can choose among 15 minutes, 60 minutes, 1 day, 3 days and 7 days. After the validity time expires the links will not work anymore. TagSpaces do not offer links for permanent sharing.

<CenteredImage
    caption="The file sharing dialog"
    src="/media/file-sharing-dialog.png"
    maxWidth="735px"
    showCaption
  />

In central area of the dialog surrounded by a dashed line you will see a preview of the generated code snipped. If the shared files have thumbnails, they will be displayed, otherwise the name of the file is displayed. In the top part of this area, the expiration date of the links is stated.

At the bottom of dialog you will have the following options:

- **Copy to clipboard** - this will copy the generated code with the links in the clipboard, so you can copy it an email or a chat program.
- **Save as HTML** - this will initiate the saving of the generated code locally as a HTML file, so you can for example include it in as attachment in an email.
- **Save & Share** - this will save the generated HTML file in the S3 bucket and open the file sharing dialog, where you can directly share the file.
- **Close** - will close this dialog.
- **Help** - will open this help page in online documentation of the application.

:::info
If the links are not expired, anybody in possession of the code with the sharing will be able to access and download the shared files. So please be careful how, where and with whom you share the code
:::

### Using the HTML snipped in email clients

This is how the HTML snipped looks like once pasted in some common email clients.

#### Thunderbird

<CenteredImage
    caption="Sharing snipped in Thunderbird"
    src="/media/sharing-snipped-thunderbird.png"
    maxWidth="970px"
    showCaption
  />

:::info
In Gmail you should uncheck the "Plain text mode" makred in the screenshot bellow in order the links to recognized
:::

#### Gmail

<CenteredImage
    caption="Sharing snipped in Gmail"
    src="/media/sharing-snipped-gmail.png"
    maxWidth="970px"
    showCaption
  />

#### Outlook

<CenteredImage
    caption="Sharing snipped in Outlook"
    src="/media/sharing-snipped-outlook.png"
    maxWidth="970px"
    showCaption
  />

### Using the HTML snipped in chat apps

This is how the HTML snipped looks like once pasted in some common chat apps.

#### Signal

<CenteredImage
    caption="Sharing snipped in Signal"
    src="/media/sharing-snipped-signal.png"
    maxWidth="970px"
    showCaption
  />

#### Whatsapp

<CenteredImage
    caption="Sharing snipped in Whatsapp"
    src="/media/sharing-snipped-whatsapp.png"
    maxWidth="970px"
    showCaption
  />
