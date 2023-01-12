---
title: Tag Library
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

The tag library is the place where you can manage and organize the tags with which you can tag your files and folders. To open it, you need to click the button with the tag icon (1), in the vertical navigation placed on the most left part of the application.

![clarification picture for the tag library user interface](/media/tag-library-overview.png)

The tag library has its own [context menu](#tag-library-context-menu), which can be started by clicking the three dot icon on right of (2). The area marked with (3) represents a single [tag group](#tag-groups). On the top of (3) there is a three dot icon which will open the [context menu](#tag-group-context-menu) of this tag group. (4) show a collapse tag group. Every tag group can be collapsed by clicking on the arrow icon in front of the tag group's name. (5) shows a special tag group used for automatically collecting new tags used in the application. (6) shows a single tag. Every tag has its own three dot icon, which will open its [context menu](#tag-context-menu)

## Tags

The primary purpose of TagSpaces, is tagging files and organizing them. **Tags** are organic and integral parts of TagSpaces. By default, tags are stored as part of the filename, which makes them easily transferable between file and operating systems, without any need to synchronize databases, or do any extra work. A file can organically hold its own tags, as long as changing the filename is permittable.

:::tip
You have the option to use a hidden file (a so called sidecar file) to store tag related information. This can be useful when you are not able, or not allowed to change filenames, such as with a development project, or working collaboratively on shared documents.
:::

Tags can be anything, form descriptive labels, to categories, ratings, priorities, or dates, timestamps, and smart tags. To learn more about the powerful tag management features TagSpaces offers, read the [Tagging section](/tagging)

:::tip
The name of the tags should not contain **spaces** , **\\** , **/** or **#**. The **-** or **\_** symbols can be used instead of spaces.
:::

## Tag groups

Tags are organized into **tag groups**, which are basically categories for tags with similar purpose and/or characteristics. Tag groups make it easier to navigate, select and manage tags in the system. TagSpaces comes with a few pre-defined tag groups, which you can freely modify, delete, or expand upon. The default tag groups are:

- **Smart tags** include various date based tags and geo location tagging. Learn more about smart tags in the [tagging section](/tagging#smart-tags)
- **Common Tags**: This group contains two predefined tags, _book_, and _paper_. This can give you a general idea of the intended purpose of the group.
- **Getting Things Done**: Another useful category that can enhance your productivity, is an implementation of the [GTD time management method](https://en.wikipedia.org/wiki/Getting_Things_Done). Predefined tags here are _done_, _next_, _maybe_ and _waiting_.
- **Priorities** are exactly what they seem. These are color coded tags that will be easily identifiable by a simple glance. The three predefined priority tags are:
  - _high_ - dark orange background
  - _medium_ - orange background
  - _low_ - lime background
- **Ratings** are predefined star-rating tags with an identifiable yellow background. As the `*` (asterix) character is considered a 'wildcard' on most file systems (meaning you cannot use it in filenames), giving a star rating as a filename-based tag would be somewhat difficult. With the yellow "rating" tags this problem can be easily solved, so your files can be organized in a rating-based system.
- **Collected Tags** is a group for all other tags you have given to your files or folders that do not belong to any other group. This tag group is created automatically after the option for collecting tags is activated in tab _General_ of the application settings.

:::tip
All the tag groups except the smart tag are optional and can be removed from the tag library if they are note needed.
:::

## Tag library operations

This menu contains the following three menu items:

- **Create Tag Group** - Opens the dialog for creating tag groups
- **Import Tag Library** - Start the process for importing tag groups in TagSpaces. Lear more in the [tag sharing tutorial](/tutorials/sharing-tags#distributing-the-library)
- **Export Tag Library** - Start the process for exporting tag groups from TagSpaces. Lear more in the [tag sharing tutorial](/tutorials/sharing-tags#exporting-the-existing-tag-groups)

![screenshot of the context menu of the tag library](/media/taglibrary-context-menu.png)

To create a new tag group, click on **Create Tag Group**, right underneath the tag groups. This will bring up a dialog, that will allow you to specify a name for your tag group, and the color of tags that belong to that group. color coding tags groups can help to easily distinguish between tags belonging to the same group, or otherwise share common characteristics. You can also specify the text color for the tags, which can be useful when choosing a lighter or darker background, so that the name can contrast.

![screenshot of the dialog for creating new tag groups](/media/new-tag-group-dialog.png)

Selecting the **Import tag library** and **Export tag library** options will allow you to import/export predefined tags, which you have previously created in TagSpaces. This option takes a `JSON` file, previously exported from (probably another instance of) TagSpaces, and imports all the tags contained within, into your system. This can be useful, when you use TagSpaces on multiple systems, or you work collaboratively with others and wish to share the same tags library. To learn more about sharing tags between systems and people, refer to the [Sharing tag libraries](/tutorials/sharing-tags) tutorial article.

## Tag group operations

Tag groups have their own context menu, accessible by clicking the three dot icon next to the tag group's name. The context menu offers the following options and operations:

- **Add tags** - This will open a very simple dialog, allowing to add new tags to the group. You can add more than one tag at once, separating them with commas, like `tag1,tag2,tag3,tag4`
- **Edit Tag Group** - will let you change the tag group's name, the default tag background, and tag text colors.
- **Move Tag Group Up** and **Move tag Group Down** - will allow you to change the tag group's position among other groups.
- **Sort Tag Group** - will sort all tags inside the group alphabetically. Useful after having manually added a number of tags.
- **Delete Tag group** - will remove the tag group from the library, with all the tags contained within.
- **Collect Tags From Current Location** <ProFeature /> - will collect all the tags used in the current location in the selected tag group.

![the context menu ot tag group](/media/tag-group-context-menu.png)

:::info
Learn more about how to change the default tag background and text colors in the [settings](/ui/settings/#general).
:::

### Drag and drop operations

You can change the order of the tag groups in the tag library with simple drag and drop operations. The order of the tags in the tag group also can be changed with drag and drop. The following video demonstrates this.

<CenteredVideo
    caption="Manage tag groups with drag and drop"
    src="/media/videos/manager-taggroups-with-dnd.mp4"
    autoPlay={false}
    maxWidth={300}
    showCaption
  />

## Tag context menus

Each tag also offers its own context menu, accessible by clicking or right clicking on the tag. The displayed context menu will be slightly different depending on whether you've accessed it from the left panel tag library, or form a tag that is already added to a file. When accessed from the left panel, you will be presented with four options:

- **Show Files With This Tag** - will initiate a search for this tag, so that only entries having the selected tag applied to them, will show.
- **Apply tag** - will apply this tag to the currently selected files in the browsing area.
- **Edit tag** - will let you change the tag's name, or background color and text color.
- **Delete tag** - will remove the tag from the tag group and the tag library. It will not remove it from any file or folder.

![the context menu of a tag in the tag library](/media/tag-context-menu.png)

Accessing the tag context menu from the browsing area in the default perspective will show similar menu, containing the following items:

- **Show Files With This Tag** - will initiate a search for this tag, so that only entries having the selected tag applied to them, will show.
- **Add tag to tag group** - will open a dialog where you can select the tag group where this tag should be added
- **Edit tag** - will let you change the tag's name
- **Remove tag** - will remove the tag from the file or the folder on which the tags is assigned.

![the context menu of a tag from an entry](/media/entry-tag-context-menu.png)

<!-- > You can add key-bindings to any tag. Key bindings are essentially a key combination that allows you to quickly mark a file with the tag in question. just select the file, press the key combination, and the file will be marked.

Key-bindings can be either key combinations, like e.g. `ctrl+a`, which mean you should press these keys simultaneously; or repeated keystrokes, like `e t`, which means you should press these keys in quick succession. Tags that have key bindings will be marked with a little keyboard icon (⌨) in th tag library.

When accessing a tag's context menu from the **file browsing area** (the main area of the User Interface), any modifications will only apply to the tag on the selected file, and **not** to the tag as contained in the tag library. This context menu will still allow you to filter, edit, or remove the tag, and also offer to change its position among the other tags applied to the selected file, moving it left or right.

![](/media/tag-operations-dialog-2.png) -->

:::info
Editing the name of a tag or deleting one from the library tags will only affect the library itself. If the same tag had had already been applied to a file, the tag on that file will remain intact. But if you change the color of a tag in the library, it will be reflected on the files marked with that tag as well. This is because of the way TagSpaces handles tags, that essentially become an organic part of the filename. To learn more about how tagging works, please refer to [File tagging based on filename](/tagging#file-tagging-based-on-filenames) under the Tagging section.
:::

## Predefined tags

The tag library is delivery with some predefined tag groups for some common tagging use cases like adding a priority or a rating.

These special tags are useful for organizing files by either importance or quality. You can apply priorities `high`, `medium` and `low`, and start ratings from `1start` to `5star`. Star ratings are yellow by default, whereas priorities are colour coded to easily distinguish visually.

![Priority and rating tags](/media/priority-and-rating-tags.png)

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

Users can easily extend these tags: You can simply create a new tag and add it to e.g. the priority group, give it a name a colour and a key binding, and you are all set.

## Smart tags

Smart tags are one of the advanced features of TagSpaces. These tags can be either **date and time**, or **location based**, and offer convenient **dynamic tagging** , based on a range of criteria.

![tag library general overview](/media/smart-tags-group.png)

- **Date and time tags** are timestamps textual representations, such as _now_, _today_, _tomorrow_, etc. Applying one of these tags to a file will add a timestamp, corresponding to your choice of smart tag. Tagging a file with e.g. _now_ would apply the full timestamp down to the second, while tagging e.g. _month_ would tag it with a subset like `YYYYMM`. Smart tags have a distinguishing blue background, which they only retain in the tag library.
- <ProFeature /> Applying a geo tag, opens up a dialog with an interactive map, where you can drop a pin. The geo-location (longitude and latitude coordinates), will be added to the selected file as a tag.

These smart tags offer a quick and easy way to timestamp documents or files, with different levels of precision. Dragging or applying a smart tag to a file will create a tag based on the current time date. Currently the following tags and formats are available:

- **now** - This tag will create a very precise timestamp (from current year, down to seconds) of the moment you have applied it. The format of the timestamp is `YYYMMDDThhmmss`, so `20220111T143022` will stay for 14:30:22 on the 11th of January 2022. The used format is compatible with the [ISO8601 standard](https://en.wikipedia.org/wiki/ISO_8601).
- **today**, **tomorrow and **yesterday\*\* will apply a timestamp with the current, the next, or the previous day's date, in the format of `YYYYMMDD`, e.g. `20170314`.
- **month** will create a timestamp of the current month, in the format of `YYYYMM`, e.g. `201703`
- **year** only applies the current year, in the format of `YYYY`, e.g. `2017`

:::info
Every newly created file will automatically have a smart tag, equivalent to **now**.
:::

### Custom timestamp tagging

<ProFeature />

With the help of the `custom-date` smart tag, the user can add any date and time as a tag to any file or folder.

<iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/DVHioQhpyYM?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Geo tagging

<ProFeature />

Geo Tagging can be use to add geo coordinates as a tag to any kind of files. It is useful to connect your photos or other documents with a geo location. This can be used for planning you vacation or next trip. In order to use this feature you have to use the smart tag `geo-location`. When you apply it to a file, the dialog shown on following screenshot will appear. Here with the help of the [OpenStreetMap](https://www.openstreetmap.org) and you can select any location somewhere in the world. The geographic coordinates (latitude and longitude) of this location will be converted in the [plus codes](https://plus.codes/) format, which is a for codding geo coordinates with smaller amount of characters.

<iframe width="100%" height="650" src="https://www.youtube-nocookie.com/embed/n4LsMP85qtc?rel=0&cc_load_policy=1&modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<!-- The geo tag is a special kind of smart tag, available in TaSpaces **PRO**, that allows tagging files with precise geolocation coordinates. When You drag the tag "geo" on a file, the **Edit tag** popup window with the Geo Location tab will open, showing a map from OpenStreetmap. You can drop a pin anywhere, and move it around, it automatically becomes a tag in the format of `latitude+longitude`, e.g. `47.2792290+18.9843750` This tag will then be applied to the file and treated as a geo-smarttag by TagSpaces -->

<br />
<br />
In geo tagging dialog you can enter the latitude and longitude directly without the need of the map. To enable this you have to click on the advanced button in the dialog as shown in the following screenshot.

![Enter latitude and longitude as geo tags](/media/geo-tagging-lat-lon.png)

### Editing smart tags

<ProFeature />

Smart tags, once applied, can be edited, or further refined be refined to include date ranges. Clicking on a tag, ans selecting _Edit Tag_ form the context menu

![](/media/tagspaces-open-tag-contextmenu.png)

will bring up the **Tag Properties** popup dialog. Depending on the type of the smart tag, the dialog looks differently. In the next screenshot the "editor" for the geo smart tags.

![Editing a geo smart tag](/media/tagspaces-edit-geo-tag.png)

### Date ranges as tags

besides being able to easily modify date, or date/time tags on their respective tabs, you can also specify date ranges in the following formats:

- **Year Ranges:** 2016-2018
- **Month Ranges:** 201605-201701
- **Date Ranges:** 20160531-20160603
- **DateTime Ranges**: 20160529T124532-20160529T154500

## Location tags

<ProFeature />

Location tag groups and tags are very useful for sharing tags with other users who are working together on files located on a shared/synced folder. This way they see and can work with the same tags.

To activate this feature, you have to open the advanced tab of the settings and click on the checkbox marked on the following screenshot.

<CenteredImage
    caption="Activating location tags in the settings"
    src="/media/activation-location-tags.png"
    showCaption
  />

After the activation, a new dropdown called Store Tag Group in will appear in the dialog for creating tag groups.

<CenteredImage
    caption="Creating location based tag group"
    src="/media/creating-location-taggroup.png"
    maxWidth="600px"
    showCaption
  />

Technically, the tags in this tag group will be saved in a file located in the .ts folder of the current location. This way, these tags will "travel" with the location by copying the location's folder to a new place, USB stick or just syncing it with Dropbox.
