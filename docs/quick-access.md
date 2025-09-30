---
title: Quick Access
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Quick Access Area

The quick access section can be accessed from the left drawer and looks like this:

<CenteredImage
    caption="Opening the Quick Access Area"
    src="/media/quickaccess/quick-access-area.avif"
    showCaption
    maxWidth="350px"
/>

This section contains the following areas:

- **[Stored Search Queries](/search#stored-search-queries)** - contains prepared search queries for a later use, more on this in the [search section](/search/#stored-search-queries)
- **[Bookmarks](/bookmarks)** - contains a list of bookmarked files and folders, more on this in the [bookmark section](/bookmarks)
- **Recently opened files** - contains a list of recently opened files
- **Recently edited files** - contains a list of recently edited files
- **Recently opened folders** - contains a list of folders opened in the details section

Since version 6.6 every bookmarks or recently visited entries have its own context menu containing the following operations:

<CenteredImage
    caption="Opening the Quick Access Menu"
    src="/media/quickaccess/quick-access-menu.avif"
    showCaption
    maxWidth="350px"
/>

- **Open entry** - will open the entry in the current application window
- **Open in new window** - will open the entry in a new application window or browser tab if on the web version.
- **Copy the link to the clipboard** - will copy the link of the bookmarked file to clipboard, so it can be shared will somebody else working on the same files
- **Remove** - will remove the file or folder from the list

## Configuring the recently opened entries

The amount of the collected files can be adjusted in the advanced tab of the settings. Here you can also clear the history or deactivate the collection of the recent entries by choosing the _disabled_ menu item in dropdowns.

<CenteredImage
caption="Configuring the recently opened entries in the settings"
showCaption
src="/media/settings/settings-recently-opened-entries.avif"
/>
