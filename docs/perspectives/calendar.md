---
title: Calendar Perspective
tags: [perspective]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />
The Calendar is a new perspective allowing you to places files and folder on a calender depending on the selected grouping filters.

## Grouping filters

This perspective currently supports four grouping filters which are described bellow.
<CenteredImage
    caption="Date and time groping filters"
    src="/media/calendar/calendar-grouping-filters.avif"
    showCaption
  />

### By Date Tags

The first filter groups files and folders by date tags. Example date tag is `20260108` which represents the 8th of January 2026. [Date tags](/ui/taglibrary/#date-and-time-tagging) are available in the smart tags of the tag library and allow you to date and time stamp tag to files and folders.

### By Folder Name

The second filter groups files and folder by the name of their parent folder if it represents a valid date, month or year such as:

- `20260108` - for the 8th of January 2026
- `202601` - for January 2026
- `2026` - for the year 2026

### By Last Modified Date

This filter will group the files and folders by their date of last modification.

### By Creation Date

This filter will group the files and folders by their creation date.

:::tip
This filter is not available for object storage locations, because object storage usually do not have support for creation date.
:::

## Views

The following views are currently supported.

### Years View

This view show a table where the rows represent the year and the columns represent months. Click on a table cell will list all the files and folders association with corresponding month. The number in the table is count of the associated files and folders. The color of the cell is also bound to the amount of the entries in this cell.

<CenteredImage
    caption="Screenshot showing the years view in the calendar perspective"
    src="/media/calendar/calendar-perspective-years-view.avif"
    showCaption
  />

### Year View

This views represent a calendar for a given year, where the rows are the days of the week and the columns are grouped by months. Click on a calendar cell will list all the files and folders association with corresponding day. The number in the table is count of the associated files and folders. The color of the cell is also bound to the amount of the entries in this cell. With the arrow key on the left the years can switched.

<CenteredImage
    caption="Screenshot showing the year view in the calendar perspective"
    src="/media/calendar/calendar-perspective-year-view.avif"
    showCaption
  />

### Month View

This views is also a calendar but only for one month and here the columns represents the days of the week. The first number in every cell is the days of the month, the second number is count of files which are grouped in this day. Click on a calendar cell will list all the files and folders association with corresponding day. The color of the cell is also bound to the amount of the entries in this cell. With the arrow key on the left the month can switched.

<CenteredImage
    caption="Screenshot showing the month view in the calendar perspective"
    src="/media/calendar/calendar-perspective-month-view.avif"
    showCaption
  />

## Persistence of the filter and views

The views and grouping filters are persisted per folder, this ensures that the next time you open certain directory with the calendar perspective the same view and grouping will be applied.
