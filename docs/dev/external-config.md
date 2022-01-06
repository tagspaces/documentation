---
title: External Configuration
---

## Introduction

This document will describe how to deploy TagSpaces Pro and Enterprise with predefined configuration such as custom logo and color, tag library or locations. The settings discussed here should be saved in a file called **extconfig.js**, placed in the folder where the application is hosted.

## Configuring a custom logo

For exchanging the application logo the **ExtLogoURL** parameter should be used. A valid values can be an URL:

```js title="Add custom logo"
window.ExtLogoURL = "https://www.tagspaces.org/content/text-logo.svg";
```

or a relative path the file containing the logo:

```js
window.ExtLogoURL = "custom-logo.png";
```

:::tip
Images with up to **250 px** width and up to **50 px** height suits best in the user interface of the application. Valid image file formats are JPG, GIF, PNG and SVG.
:::

## Disabling the onboarding dialog and the license confirmation

The property **ExtIsFirstRun** can be used for disabling the initial onboarding dialog and license confirmation.

    window.ExtIsFirstRun = true;

## Switching desktop and mobile mode of the app

The property **ExtDisplayMode** can be used for switching between the desktop and mobile mode of the app.

    window.ExtDisplayMode = 'mobile';

Possible values are 'mobile' and 'desktop'.

## Setting the file tagging mode of the app

The property **ExtUseSidecarsForFileTagging** can be used for switching between using the file rename method and using sidecar files for saving the tagging information.

    window.ExtUseSidecarsForFileTagging = false;

Possible values are 'true' and 'false'.

> **Note:** If the parameter is specified then this setting could not be changed in the TagSpaces settings dialog anymore. The user can only see which file tagging method is activated (renaming files or using sidecar files)

## Configuring custom locations

With this feature TagSpaces can be deployed with a set of predefined location, which could point to local folder or object store buckets hosted for example on AWS S3. The configuration property responsible for this feature is called **ExtLocations**.

This an example for connecting an AWS S3 bucket as location:

```js title="extconfig.js"
window.ExtLocations = [
  // a list containing one or many locations
  {
    uuid: "10565f09-c7fd-2333-fc67-a75db27rt5ba", // an inique id of the location
    type: "1", // 1 defines the locations a cloud based
    name: "The name of the cloud location", // the name of the location
    path: "demo", // the path to sub folder in the location
    accessKeyId: "your_access_key", // the access key of the user
    secretAccessKey: "your_secret_key", // the secret case of the user
    bucketName: "demo-bucket", // the name of the S3 bucket
    region: "eu-central-1", // the AWS region
    endpointURL: "https://nas34r:3000/minio", // optional property allowing the specify the cloud end-point directly
    isNotEditable: true, // disable the opening of the location properties and export
    isDefault: true, // if true this location will be loaded by the application start
    isReadOnly: true, // if true the user interface of the application turns to read-only mode
    persistIndex: false, // if true the search index will be persisted and loaded by default on location opening
    fullTextIndex: false, // activated the full-text search for TXT, MD and HTML files
    watchForChanges: false, // activates the watching for changed files in the current location, (feature is not working on cloud locations)
    maxIndexAge: 600000 // time in milliseconds (10 minutes x 60 secs per minute x 1000 milliseconds per second) for which the index is valid
    persistTagsInSidecarFile: true // specifies the way files are tagged in this location
    ignorePatternPaths: ["**/node_modules/**"], // list of path strings to ignore while indexing
  },
];
```

The following snipped is an example for connecting a local folder as location:

```js
window.ExtLocations = [
  // an array containing one or many locations
  {
    uuid: "53453458-c7fd-2333-fc67-a75db27rt5ba", // an unique id of the location
    type: "0", // 0 defines the location as local
    name: "The name of the local location", // the name of the location
    paths: ["/var/mnt/data/"], // the path pointing to the local folder
    isDefault: true, // if true this location will be loaded by the application start
    isReadOnly: true, // if true the user interface of the application turns to read-only mode
    persistIndex: false, // if true the search index will be persisted and loaded by default on location opening
    fullTextIndex: false, // activated the full-text search for TXT, MD and HTML files
    watchForChanges: false, // activates the watching for changed files in the current location
  },
];
```

### Disable the editing of the locations (deprecated)

The editing of the locations can be disabled with the following property: **ExtLocationsReadOnly**

> Note: This switch is not supported anymore. Now as soon as you have externally configured locations they are automatically read-only.

### Saving locations in the browser

Turning on this property will force the app to store the configuration for the locations in the browser's local storage. In the desktop app this is enabled by default, but on the web based version it is turned off.

    window.ExtSaveLocationsInBrowser = true

:::tip
The use of this property is not recommended since saving access and secret access keys in the local storage of the browser is not a good practice from the security point of view. But there are some use-cases where this is useful and make sense.
:::

## Configuring custom tag library

With this feature TagSpaces can be deployed with a set of predefined tags distributed in tag groups. The configuration property responsible for this feature is called **ExtTagLibrary**.

The following code snipped shows how to define one tag group containing one tag as a predefined tag library

```js
window.ExtTagLibrary = [
  // an array containing one or many tag groups
  {
    uuid: "17882854-44a7-4b2d-a2b1-b022846ac41d", // an unique id of the tag group
    title: "Common Tags", // the name of the tag group
    color: "#008000", // the default background color of the tags in this group
    textcolor: "#ffffff", // the default text color of the tags in this group
    children: [
      // an array containing one or many tags
      {
        type: "plain", // the type of tag, just leave it plain
        title: "book", // the name of the tag
        description: "", // a optional description for a tag
        color: "#008000", // the background color of the tag
        textcolor: "#ffffff", // the text color of the tag
      },
    ],
    expanded: true, // should be true in order this tag group to be visible in the application
  },
];
```

### Including the tag library in the config

- Start the export process from the three dot menu of the tag library
- From the export dialog choose which tag groups you want to export
- Click the **Export** button and choose where the exported json file should be saved
- Open the exported json file in text or json editor. TagSpaces has an integrated [JSON editor](https://docs.tagspaces.org/extensions/editorJSON), which can be used too.
- Edit the json files if needed
- Copy the part shown in the next snipped, to the window.ExtTagLibrary array in the extconfig.js
- Save the changes in extconfig.js

Explanation which part of the code should be copied.

```js
{
  "appName": "TagSpaces",
  "appVersion": "3.1.5",
  "settingsVersion": 3,
  "tagGroups": [
    // Copy everything from here to window.ExtTagLibrary = [ here ]
  ]
}
```

:::tip
As soon as tags are defined in the `extconfig.js`, the tag library will rendered read-only in the application, so the user will not able to add, change or delete tags there.
:::

## Configuring custom search queries

TagSpaces Pro can be pre-configured with predefined search queries.

```js
window.ExtSearches = [
  // a list of search queries
  {
    uuid: "2123", // unique identifier
    title: "Some query name", // name of the search
    textQuery: "", // some free text query
    fileTypes: "", // possible values
    tagsAND: [
      // all of these tags should be attached to an entry
      {
        title: "tag1",
      },
      {
        title: "tag2",
      },
    ],
    tagsOR: [], // at least one of those tags should be attached to an entry
    tagsNOT: [
      // none of these tags should be attached to an entry
      {
        title: "tag3",
      },
    ],
    lastModified: "",
    fileSize: "",
    searchBoxing: "location", // other possible values are 'folder' or 'global'
    searchType: "fuzzy", // other possible values are 'semistrict' or 'strict'
    forceIndexing: true, // re-index the current location before performing the search
    currentDirectory: "/home/username/Documents",
    fileTypes: ["md", "mdown", "txt", "html"], // a list of file extensions
    lastModified: "past7Days", // TBD
    fileSize: "sizeVerySmall", // TBD
    tagTimePeriodFrom: 1622505600000, // TBD
    tagTimePeriodTo: 1625090399999, // TBD
    maxSearchResults: 100, // max number of search result
    showUnixHiddenEntries: true, // TBD
  },
];
```

## Configuring custom map tile servers

From version 3.10 TagSpaces can be pre-configured with custom map tile servers. The OpenStreetMap compatible tile servers can be even self hosted allowing you to work with maps without the need to be connect to the Internet.

```js
window.ExtMapTileServers = [
  // a list of one or more external map tile server with their attributes
  {
    uuid: "qer4123412ew", // an unique id of the map tile server
    name: "Stamen Watercolor",
    serverURL:
      "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
    serverInfo:
      "Map tiles by Stamen Design - http://stamen.com, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
  },
];
```

> Note: Some example map tile servers can be found in the [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Tile_servers). Please consider the terms of usage of any given map service provider!

## Configuring the format of the geo tags

    window.ExtGeoTaggingFormat = 'pluscodes';

Possible values: 'pluscodes', 'mgrs'

## User interface tweaks

### Show vertical panel on startup (deprecated)

    window.ExtDefaultVerticalPanel = 'none';

Possible values: 'none', 'taglibrary', 'search', 'locations'

### Show advanced search

    window.ExtShowAdvancedSearch = true

Possible values: true, false
Default value: true

### Show welcome panel

    window.ExtShowWelcomePanel = true

Possible values: true, false
Default value: true

### Show smart tags

    window.ExtShowSmartTags = true

Possible values: true, false
Default value: true

### Choose startup theme

    window.ExtTheme = 'dark';

Possible values: 'dark', 'light'

## Custom color for the default themes

### Set custom sidebar color

    window.ExtSidebarColor = '#2C001E'

Possible value: any css color

Default value: <span style={{color: '#2C001E'}}>'#2C001E'</span>

### Set custom sidebar selection color

    window.ExtSidebarSelectionColor = '#880E4F'

Possible value: any css color

Default value: <span style={{color: '#880E4F'}}>'#880E4F'</span>

### Set custom light color for the light theme

    window.ExtLightThemeLightColor = '#dcf3ec'

Possible value: any css color

Default value: <span style={{color: '#dcf3ec'}}>'#dcf3ec'</span>

### Set custom main color for the light theme

    window.ExtLightThemeLightColor = '#1dd19f'

Possible value: any css color

Default value: <span style={{color: '#1dd19f'}}>'#1dd19f'</span>

### Set custom light color for the dark theme

    window.ExtDarkThemeLightColor = '#56454e'

Possible value: any css color

Default value: <span style={{color: '#56454e'}}>'#56454e'</span>

### Set custom main color for the dark theme

    window.ExtDarkThemeMainColor = '#ff9abe'

Possible value: any css color

Default value: <span style={{color: '#ff9abe'}}>'#ff9abe'</span>

### Open app with predefined perspective

    window.ExtDefaultPerspective = 'gallery';

Possible values as of version 3.3.x are 'default', 'gallery', 'mapique'

## Modifying packages

- Unzip the packaged
- Copy in _resources/app_ folder the the file extconfig.js
- Copy in _resources/app_ folder the custom logo of the app. This is an optional step, for the case where you have specified the logo as a relative path.
- Zip the unzipped folder containing the tagspaces program files
- Distribute and/or deploy it

## Example configuration file

Here you will find the whole configuration file, so it can be easily copied and reused for your custom needs.

```json{2}
window.ExtLogoURL = "https://www.tagspaces.org/content/text-logo.svg";

window.ExtIsFirstRun = false;

window.ExtTheme = "dark";

window.ExtLocations = [
  {
    uuid: "10565f09-c7fd-2333-fc67-a75db27rt5ba",
    type: "1",
    name: "The name of the cloud location",
    path: "demo",
    accessKeyId: "your_access_key",
    secretAccessKey: "your_secret_key",
    bucketName: "demo-bucket",
    region: "eu-central-1",
    isDefault: false,
    isReadOnly: true,
    persistIndex: false,
    fullTextIndex: false,
    watchForChanges: false,
  },
  {
    uuid: "53453458-c7fd-2333-fc67-a75db27rt5ba",
    type: "0",
    name: "The name of the local location",
    path: "/var/mnt/data/",
    isDefault: true,
    isReadOnly: true,
    persistIndex: false,
    fullTextIndex: false,
    watchForChanges: false,
  },
];

window.ExtTagLibrary = [
  {
    uuid: "17882854-44a7-4b2d-a2b1-b022846ac41d",
    title: "Common Tags",
    color: "#008000",
    textcolor: "#ffffff",
    children: [
      {
        id: "ff47282f-a7cc-474c-951f-4636d60c0529",
        type: "plain",
        title: "book",
        description: "",
        color: "#008000",
        textcolor: "#ffffff",
      },
      {
        id: "c3fa72f5-afde-4d2e-af14-bdebb6782a71",
        type: "plain",
        title: "article",
        description: "",
        color: "#008000",
        textcolor: "#ffffff",
      },
    ],
  },
  {
    uuid: "e21711da-ee78-4c83-bae3-e0007fe426a3",
    title: "Priorities",
    color: "#008000",
    textcolor: "#ffffff",
    children: [
      {
        id: "dca64cf4-79e2-4450-a57b-b53d9d6b8ad3",
        type: "plain",
        title: "high",
        description: "",
        color: "#ff7537",
        textcolor: "#ffffff",
      },
      {
        id: "41dbf6ab-cf8f-4d88-bad1-f9baec83d48b",
        type: "plain",
        title: "medium",
        description: "",
        color: "#ffad46",
        textcolor: "#ffffff",
      },
      {
        id: "78fb6569-9970-4fdf-b6df-ec0daa6ea9b9",
        type: "plain",
        title: "low",
        description: "",
        color: "#7bd148",
        textcolor: "#ffffff",
      },
    ],
  },
];
```
