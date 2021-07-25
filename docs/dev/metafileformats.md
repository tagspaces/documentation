---
title: Specification of the meta file formats
---

In comparison to many other tools, TagSpaces uses external text files for saving the meta information for folders and files, instead of a database. Here you will find the specification of the formats used by these files and also some other useful information concerning these files.

## File meta description format

This file should be located in a folder called `.ts` located in the folder, where the tagged file is placed. The meta file should have exactly the same name as the tagged file, but in addition it should have the `.json` file extension. So at the end you should have similar structure as the following:

    ~ /some/TagSpaces/location/folder
    ├── subfolder_1
    │   ├── .ts
    │   │   ├── file1.jpg.json
    │   │   └── file2.pdf.json
    │   ├── file1.jpg
    │   └── file2.pdf
    ├── .ts
    │   ├── file3.png.json
    │   └── file4.docx.json
    ├── file3.png
    └── file4.docx

The meta information is saved in JSON format, which has the following format:

```json title="Example meta file in JSON format"
{
  "tags": [
    // A set containing the tags
    {
      "title": "tag1", // The name of the tag
      "type": "sidecar", // The type of the tag
      "style": "color: #ffffff !important; background-color: #FFCC24 !important;" // CSS used for styling of the tag
    },
    {
      "title": "tag2",
      "type": "sidecar",
      "style": "color: #ffffff !important; background-color: #FFCC24 !important;"
    }
  ],
  "description": "# Some description\n\nin *markdown* format", // \n can be used for adding new line
  "appVersionCreated": "2.4.1", // optional element, containing the version of tha app, created this file
  "appName": "TagSpaces", // optional element, containing the name of the app, created this files
  "appVersionUpdated": "2.4.1", // optional element, containing the version of the app, which last changed the file
  "lastUpdated": "2016-06-24T12:22:38.560Z" // optional element
}
```

## Folder meta description format

In the PRO version of the application you can add tags and description to every folder managed in TagSpaces. This meta information is persisted in a file called **tsm.json** located in `.ts` folder of the tagged folder. The following is an example folder structure of a tagged folder with one tagged subfolder.

    ~ /some/TagSpaces/location/folder
    ├── subfolder_2
    │   ├── .ts
    │   │   ├── tsm.json // a file containing the meta info for subfolder_2
    │   │   └── file2.pdf.json
    │   └── file2.pdf
    ├── .ts
    │   ├── tsm.json
    │   └── file4.docx.json
    └── file4.docx

The meta information is saved in JSON format, which has the following format:

```json title="Example tsm.json file"
{
  "id": "c6ee6a4d-d692-312r-9437-55d2d480ddc7", // id of folder
  "color": "#a47ae244", // the background color of the folder
  "description": "# Some description\n\nin *markdown* format", // \n can be used for adding new line
  "tags": [
    // the tags added to the folder
    {
      "title": "1926", // tag name
      "type": "sidecar", // tag type
      "color": "#cca6acff", // tag background color
      "textcolor": "white" // the color of the text in the tag
    },
    {
      "title": "3star",
      "type": "sidecar",
      "color": "#ffcc24",
      "textcolor": "#ffffff"
    }
  ],
  "appName": "TagSpaces", // the app name from which this file was generated
  "appVersion": "3.11.2", // the version of the app from which this files was generated
  "lastUpdated": "2021-07-21T13:37:38.475Z" // the last time, when this file was updated
}
```

> **Note** In the JSON examples on this page, you will find sometimes a description after the these characters `//`. These are not part of the format and are used only for clarification purposes.

## Format of the tag library export

All tag groups and tags can be exported from the settings of the application, as shown in the next screenshot.

![exporting the tag library](/media/taggroups-export.png)

The meta information is persisted in JSON format, which has the following format:

```json title="Example tag library export file in JSON format"
{
  "appName": "TagSpaces", // the app name from which this file was generated
  "appVersion": "3.11.2", // the version of the app from which this files was generated
  "settingsVersion": 3,
  "tagGroups": [
    // a list of one or more tag groups
    {
      "created_date": "2021-03-19T17:43:44.494Z", // the time when this tag group was created
      "uuid": "2e0c46f0-3a1b-4902-a930-58a0a1a170f8", //  an universally unique of the tag group
      "title": "TestTG", // the name of the tag group
      "color": "#fa573cff", // the default color of the tags in this tag group
      "textcolor": "white", // the default text color of the tags in this tag group
      "children": [
        // a list of one or more tags in the current tag group
        {
          "type": "sidecar",
          "title": "tag1", // the name of the tag
          "description": "", // maybe used in the future
          "color": "#fa573cff", // the color of the tag
          "textcolor": "white" // the text color of the tag
        },
        {
          "type": "sidecar",
          "title": "tag2",
          "color": "#fa573cff",
          "textcolor": "white"
        }
      ],
      "modified_date": "2021-06-05T08:26:47.598Z",
      "expanded": false
    },
    {
      "uuid": "e28bd828-c1e4-45ed-810a-c660609f9780",
      "title": "Another tag group", // the name of the second tag group in the list
      "color": "#cca6acff",
      "textcolor": "white",
      "children": [
        {
          "type": "sidecar",
          "title": "1920",
          "color": "#cca6acff",
          "textcolor": "white"
        }
      ],
      "created_date": "2021-06-05T15:58:24.760Z",
      "modified_date": "2021-06-05T15:58:24.760Z",
      "expanded": true
    }
  ]
}
```

## Format of the location export

<profeature />

The locations can be exported from one TagSpaces Pro installation and imported in another. The format of the exported file is presented in this section. The example bellow specified one local and two location pointing object storages. The second one is AWS S3 object storage, while the third one is pointing to MinIO server.

```json title="Example location export file in JSON format"
{
  "appName": "TagSpaces", // the app name from which this file was generated
  "appVersion": "3.11.2", // the version of the app from which this files was generated
  "locations": [
    // a list containing one or many locations
    {
      "uuid": "1fa528e7-92b4-3ew2-b4b9-3cd975d87fba",
      "type": "0", // 0 specifies a location pointing to a local folder
      "name": "Desktop", // name of the location
      "path": "/home/username/Desktop", // path pointing to a local folder, should not be empty on local locations
      "isDefault": true, // specifies if this location is the default one, which loads after starting the app
      "isReadOnly": false, // specified is the location should be in read-only mode
      "persistIndex": false, // if set to true the search index should be created manually or with external tools. The external index will be used in the search
      "creationDate": "2021-03-13T14:07:45.333Z", // the creation time of the location
      "fullTextIndex": false, // activated the full-text search for TXT, MD and HTML files
      "maxIndexAge": 660000, // time in milliseconds (10 minutes x 60 secs per minute x 1000 milliseconds per second) for which the index is valid
      "watchForChanges": true, // activates the watching for changed files in the current location
      "ignorePatternPaths": ["**/node_modules/**"], // list of path strings to ignore while indexing
      "persistTagsInSidecarFile": false // specifies the way files are tagged in this location
    },
    {
      "uuid": "681c60cc-67uz-4221-aebf-f35ce797cd0c",
      "type": "1", // 1 specifies a location from object storage type (cloud location)
      "name": "TS Pro Releases AWS",
      "endpointURL": "",
      "accessKeyId": "aws_access_key_id", // access key id
      "secretAccessKey": "some_secret_key", // secret key id
      "bucketName": "your_bucket_name", // the name of the bucket in the object storage
      "region": "eu-central-1", // AWS region
      "isDefault": false,
      "isReadOnly": true,
      "persistIndex": false,
      "fullTextIndex": false,
      "watchForChanges": false,
      "creationDate": "2021-03-16T19:22:52.132Z",
      "path": "an_optional_path"
    },
    {
      "uuid": "2762d4e6-559b-4421-3w12-e40c967160d8",
      "type": "1",
      "name": "MinIO Server on QNAP NAS",
      "path": "/",
      "paths": ["/"],
      "endpointURL": "http://192.168.178.12:7000", // a URL to the server (e.g. MinIO) providing the object storage
      "accessKeyId": "miniouser",
      "secretAccessKey": "secret_minio_password",
      "bucketName": "Photos",
      "region": "",
      "isDefault": false,
      "isReadOnly": false,
      "persistIndex": false,
      "fullTextIndex": false,
      "watchForChanges": false,
      "creationDate": "2021-04-03T20:04:11.301Z"
    }
  ]
}
```

## Format of the exported search queries

<profeature />

Version 3.10 offers the possibility to export previously saved search queries.

![export search queries](/media/import-export-searches.png)

```json title="Example files with exported search queries in JSON format"
{
  "appName": "TagSpaces",
  "appVersion": "3.11.3",
  "searches": [
    {
      "uuid": "b6a6eb2a-3e84-4c93-bc31-42b8980d9d94",
      "title": "testquery +1920 -article |5star",
      "textQuery": "testquery",
      "tagsAND": [
        {
          "type": "sidecar",
          "title": "1920",
          "color": "#cca6acff",
          "textcolor": "white"
        }
      ],
      "tagsOR": [
        {
          "type": "plain",
          "title": "5star",
          "color": "#ffcc24",
          "textcolor": "#ffffff"
        }
      ],
      "tagsNOT": [
        {
          "type": "plain",
          "title": "article",
          "color": "#008000",
          "textcolor": "#ffffff"
        }
      ],
      "searchBoxing": "location",
      "searchType": "fussy",
      "fileTypes": ["md", "mdown", "txt", "html"],
      "lastModified": "past7Days",
      "fileSize": "sizeVerySmall",
      "tagTimePeriodFrom": 1622505600000,
      "tagTimePeriodTo": 1625090399999,
      "maxSearchResults": 1000,
      "forceIndexing": false
    }
  ]
}
```

## Format of the location specific tag groups

<profeature />

Since version 3.11 TagSpaces supports tags which are specific for a given location. The tags resides in a file called `tsl.json`, which should be located in the `.ts` folder of the current location.

```{5}
    ~ /some7TagSpaces/location/folder
    ├── subfolder_2
    ├── .ts
    │   ├── tsm.json
    │   ├── tsl.json // file containing the tag groups of this location
    │   └── file4.docx.json
    └── file4.docx
```

The format of these files is similar to the format of the produced by exporting your [tag library](#format-of-the-tag-library-export). So basically you can take such exports rename them to tsl.json and put them in .ts folder. After reloading them by clicking the "Reload Location Tags"-menuitem the tag-groups should appear in the Tag Library. Tag groups imported from locations will have the location name in brackets as seen the following screenshot.

![reloading location from locations](/media/location-taggroups.png)

```json title="Example tsl.json file"
{
  "appName": "TagSpaces", // the app name from which this file was generated
  "appVersion": "3.11.2", // the version of the app from which this files was generated
  "tagGroups": [
    // a list of one or more tag groups
    {
      "created_date": "2021-03-19T17:43:44.494Z", // the time when this tag group was created
      "uuid": "2e0c46f0-3a1b-4902-a930-58a0a1a170f8", //  an universally unique of the tag group
      "title": "TestTG", // the name of the tag group
      "color": "#fa573cff", // the default color of the tags in this tag group
      "textcolor": "white", // the default text color of the tags in this tag group
      "children": [
        // a list of one or more tags in the current tag group
        {
          "type": "sidecar",
          "title": "tag1", // the name of the tag
          "color": "#fa573cff", // the color of the tag
          "textcolor": "white" // the text color of the tag
        },
        {
          "type": "sidecar",
          "title": "tag2",
          "color": "#fa573cff",
          "textcolor": "white"
        }
      ],
      "modified_date": "2021-06-05T08:26:47.598Z",
      "expanded": false
    }
  ]
}
```
