---
title: Tag Library
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';
import VideoYT from '@site/src/components/VideoYT';

The **Tag Library** in TagSpaces allows you to manage and organize tags, which you can use to categorize and label your files and folders. To access the tag library, click the tag icon (1) located in the vertical navigation bar on the far left side of the application.

![Tag Library User Interface Overview](/media/tag-library-overview.png)

The tag library has its own [context menu](#tag-library-context-menu), which can be started by clicking the three dot icon on right of (2). The area marked with (3) represents a single [tag group](#tag-groups). On the top of (3) there is a three dot icon which will open the [context menu](#tag-group-context-menu) of this tag group. (4) show a collapse tag group. Every tag group can be collapsed by clicking on the arrow icon in front of the tag group's name. (5) shows a special tag group used for automatically collecting new tags used in the application. (6) shows a single tag. Every tag has its own three dot icon, which will open its [context menu](#tag-context-menu)

## Tags

The primary purpose of TagSpaces, is tagging files and organizing them. **Tags** are organic and integral parts of TagSpaces. By default, tags are stored as part of the filename, which makes them easily transferable between file and operating systems, without any need to synchronize databases, or do any extra work. A file can organically hold its own tags, as long as changing the filename is permittable.

:::tip
If renaming files is not feasible, you can store tag information in a hidden sidecar file. This option is particularly useful for collaborative projects or files where the filename cannot be changed.
:::

Tags can be anything from descriptive labels to categories, ratings, priorities, dates, timestamps, and smart tags. To learn more about TagSpaces' powerful tag management features, check out the [Tagging section](/tagging).

:::tip
Tag names should not contain **spaces**, **\\**, **/**, or **#**. Instead, use **-** or **\_** to replace spaces.
:::

## Tag Groups

Tags are organized into **tag groups**, which serve as categories for tags with similar purposes or characteristics. Tag groups make it easier to navigate, select, and manage tags within the system. TagSpaces comes with several pre-defined tag groups that you can modify, delete, or expand as needed. The default tag groups include:

- **Smart Tags**: These tags include various date-based tags and geolocation tags. Learn more in the [smart tags section](/tagging#smart-tags).
- **Common Tags**: This group contains two predefined tags, _book_ and _paper_, offering a general idea of the group’s intended purpose.
- **Getting Things Done (GTD)**: This group is based on the [GTD time management method](https://en.wikipedia.org/wiki/Getting_Things_Done). Predefined tags include _done_, _next_, _maybe_, and _waiting_, designed to enhance productivity.
- **Priorities**: These are color-coded tags, making them easily recognizable at a glance. The predefined priority tags are:
  - _high_ - Dark orange background
  - _medium_ - Orange background
  - _low_ - Lime background
- **Ratings**: These predefined star-rating tags come with a recognizable yellow background. As the `*` (asterisk) is considered a wildcard in most file systems (making it unusable in filenames), these tags provide a workaround for organizing files by rating.
- **Collected Tags**: This group contains tags that don't belong to any other group. It's created automatically after the tag collection option is activated in the General settings tab.

:::tip
All tag groups, except smart tags, are optional and can be removed from the tag library if not needed.
:::

## Tag Library Operations

The tag library menu contains the following options:

- **Create Tag Group**: Opens a dialog for creating a new tag group.
- **Import Tag Library**: Starts the process of importing tag groups. Learn more in the [tag sharing tutorial](/tutorials/sharing-tags#distributing-the-library).
- **Export Tag Library**: Initiates the export process for tag groups. Learn more in the [tag sharing tutorial](/tutorials/sharing-tags#exporting-the-existing-tag-groups).

![Screenshot of the tag library context menu](/media/taglibrary-context-menu.png)

To create a new tag group, click **Create Tag Group** below the existing tag groups. This will open a dialog where you can specify a name and color for your tag group. Color coding helps distinguish between tags that share common characteristics. You can also specify the text color for better contrast depending on the background color.

![Screenshot of the new tag group dialog](/media/new-tag-group-dialog.png)

By selecting **Import Tag Library** or **Export Tag Library**, you can transfer predefined tags between instances of TagSpaces (e.g., on different computers). The process uses a `JSON` file, which allows you to share your tag library across different systems or collaborate with others. Learn more in the [Sharing Tag Libraries](/tutorials/sharing-tags) tutorial.

## Tag Group Operations

Each tag group has its own context menu, accessible via the three-dot icon next to the group name. This menu provides the following options:

- **Add Tags**: Opens a dialog to add new tags to the group. You can add multiple tags at once by separating them with commas (e.g., `tag1,tag2,tag3`).
- **Edit Tag Group**: Allows you to rename the group, change the default background color, and adjust text colors.
- **Move Tag Group Up/Down**: Reorders the tag group within the library.
- **Sort Tag Group**: Sorts all tags in the group alphabetically.
- **Delete Tag Group**: Removes the group and its tags from the library.
- **Collect Tags From Current Location** <ProFeature />: Collects all tags used in the current location and adds them to the selected group.

![Tag group context menu](/media/tag-group-context-menu.png)

:::info
Learn more about changing the default tag background and text colors in the [settings](/ui/settings/#general).
:::

### Drag and Drop Operations

You can reorder tag groups in the library via drag-and-drop. Similarly, you can rearrange tags within a group using drag-and-drop. The following video demonstrates how this works:

<CenteredVideo
    caption="Managing tag groups with drag-and-drop"
    src="/media/videos/manager-taggroups-with-dnd.mp4"
    autoPlay={false}
    maxWidth={300}
    showCaption
  />

## Tag Context Menus

Each tag has its own context menu, accessible by right-clicking on the tag. The context menu varies slightly depending on whether it's accessed from the tag library or from a file. When accessed from the tag library, the options are:

- **Show Files With This Tag**: Searches for files with the selected tag.
- **Apply Tag**: Applies the tag to selected files in the browsing area.
- **Edit Tag**: Lets you rename the tag or change its colors.
- **Delete Tag**: Removes the tag from the tag group and library, but not from any files or folders it's applied to.

![Tag context menu in the tag library](/media/tag-context-menu.png)

When accessed from the file browsing area, the context menu options are similar, but with the addition of:

- **Add Tag to Tag Group**: Opens a dialog to select the tag group where the tag should be added.
- **Edit tag** - will let you change the tag's name for the tagged file and folder not in the tag library.
- **Remove Tag**: Removes the tag from the selected file or folder.

![the context menu of a tag from an entry](/media/entry-tag-context-menu.png)

<!-- > You can add key-bindings to any tag. Key bindings are essentially a key combination that allows you to quickly mark a file with the tag in question. just select the file, press the key combination, and the file will be marked.

Key-bindings can be either key combinations, like e.g. `ctrl+a`, which mean you should press these keys simultaneously; or repeated keystrokes, like `e t`, which means you should press these keys in quick succession. Tags that have key bindings will be marked with a little keyboard icon (⌨) in th tag library.

When accessing a tag's context menu from the **file browsing area** (the main area of the User Interface), any modifications will only apply to the tag on the selected file, and **not** to the tag as contained in the tag library. This context menu will still allow you to filter, edit, or remove the tag, and also offer to change its position among the other tags applied to the selected file, moving it left or right.

![](/media/tag-operations-dialog-2.png) -->

:::info
Editing a tag's name or deleting it from the library affects only the library itself. Tags already applied to files will remain unchanged. However, if you change a tag's color in the library, the color will update on all files using that tag. This is because TagSpaces embeds tags into filenames. Learn more about [file tagging based on filenames](/tagging#file-tagging-based-on-filenames).
:::

<!-- Priority and star ratings all have predefined keyboard bindings assigned to then, to that using them becomes really straightforward and fast. Currently the following key-bindings apply:

### Priorities:
* **high** - `t h`
* **medium** - `t m`
* **low** - `t l`

### Start ratings
* **1star** - `t 1`
* **2star** - `t 2`
* **3star** - `t 3`
* **4star** - `t 4`
* **5star** - `t 5` -->

## Smart tags

Smart tags are an advanced feature in TagSpaces that offer **dynamic tagging** based on **date, time, or location** criteria. These tags automatically update based on real-time or geographic data, making them highly useful for specific tasks.

![Smart Tag Overview](/media/smart-tags-group.png)

### Custom Timestamp Tagging

<ProFeature />

TagSpaces offers several predefined timestamp-based smart tags that can be used to tag files with various levels of date and time precision. Some examples include:

- **now**: Creates a precise timestamp down to the second (e.g., `20220111T143022`).
- **today, tomorrow, yesterday**: Tags a file with the current, next, or previous day in `YYYYMMDD` format (e.g., `20170314`).
- **month**: Applies the current month in `YYYYMM` format.
- **year**: Tags the file with the current year in `YYYY` format.

These smart tags are particularly helpful for maintaining a chronological order in your file organization.

:::info

Each newly created file automatically receives a smart tag equivalent to **now**.
:::

For more advanced users, the **custom-date** smart tag allows you to add any custom date or time as a tag to your files and folders.

<VideoYT
youtubeId="DVHioQhpyYM"
title="Tagging with Timestamps"
posterUrl="/media/timestamp-tagging-poster.avif"
showCaption
/>

### Geo Tagging

<ProFeature />

Geo tagging allows you to add geographic coordinates as tags to files, connecting them with specific locations. This is especially useful for associating documents or photos with places, whether for planning a vacation or referencing a site visit.

When you apply a geo-location tag, a dialog will appear with an interactive map, enabling you to drop a pin on any location. The geographic coordinates will be stored in the [Plus Codes](https://plus.codes/) format, which is a compact way of representing geo-coordinates.

<VideoYT
youtubeId="n4LsMP85qtc"
title="Geo tagging with TagSpaces Pro"
height={550}
posterUrl="/media/geo-tagging-poster.avif"
/>

<!-- The geo tag is a special kind of smart tag, available in TaSpaces **PRO**, that allows tagging files with precise geolocation coordinates. When You drag the tag "geo" on a file, the **Edit tag** popup window with the Geo Location tab will open, showing a map from OpenStreetmap. You can drop a pin anywhere, and move it around, it automatically becomes a tag in the format of `latitude+longitude`, e.g. `47.2792290+18.9843750` This tag will then be applied to the file and treated as a geo-smarttag by TagSpaces -->

### Editing Smart Tags

<ProFeature />

Smart tags can be edited or further refined to include more detailed information, such as date ranges. For example, geo smart tags can be modified using an editor that allows you to update the coordinates or description.

<CenteredImage
    caption="Enter Latitude and Longitude as Geo Tags"
    src="/media/geo-tagging-lat-lon.png"
    maxWidth="500px"
    showCaption
  />

In geo tagging dialog you can enter the latitude and longitude directly without the need of the map. To enable this you have to click on the advanced button in the dialog as shown in the following screenshot.

### Date Ranges as Tags

You can specify date ranges using the following formats:

- **Year Range:** `2016-2018`
- **Month Range:** `201605-201701`
- **Date Range:** `20160531-20160603`
- **DateTime Range:** `20160529T124532-20160529T154500`

These date range tags help you organize and filter files based on time periods.

---

## Location Tags

<ProFeature />

Location tags are particularly useful when sharing tag libraries with collaborators who access files stored in shared or synced folders. Enabling this feature allows users to see and work with the same tags across multiple systems.

To activate location-based tags, open the advanced settings tab and check the corresponding checkbox, as shown below:

![Activating Location Tags in Settings](/media/activation-location-tags.png)

Once activated, you will see a dropdown option called **Store Tag Group In** when creating new tag groups. This allows you to specify that the tag group should be stored in the `.ts` folder of the current location. This ensures that tags "travel" with the location when you copy or sync the folder, for example, when moving it to a USB stick or using Dropbox for syncing.

<CenteredImage
    caption="Creating location based tag group"
    src="/media/creating-location-taggroup.png"
    maxWidth="500px"
    showCaption
  />

In this way, location tags allow for portable and collaborative tagging, making it easier for teams to manage and categorize files in a shared environment.
