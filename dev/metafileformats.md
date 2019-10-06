# Specification of the meta file formats

**Table of Contents**
<!-- toc -->

In comparison to many other tools, TagSpaces uses external text files for saving the meta information for folders and files, instead of a database. Here you will find the specification of the formats used by these files and also some other useful information concerning these files.

## File meta description format

This file should be located in a folder called `.ts` located in the folder, where the tagged file is placed. The meta file should have exactly the same name as the tagged file, but in addition it should have the `.json` file extension. So at the end you should have similar structure as the following:

    ~ some TagSpaces location folder
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

    {
      "tags": [  // A set containing the tags
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
      "appVersionCreated": "2.4.1", // optional element, containing the version of tha app, created this file
      "appName": "TagSpaces", // optional element, containing the name of the app, created this files
      "appVersionUpdated": "2.4.1", // optional element, containing the version of the app, which last changed the file
      "lastUpdated": "2016-06-24T12:22:38.560Z" // optional element
    }

## Folder meta description format
In the PRO version of the application you can add tags and description to every folder managed in TagSpaces. This meta information is persisted in a file called **tsm.json** located in `.ts` folder of the tagged folder. The following is an example folder structure of a tagged folder with one tagged subfolder.

    ~ some TagSpaces location folder
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

    {
      "appName": "TagSpaces", // optional element, containing the name of the app, created this files
      "tags": [ // the tags with which the folder is tagged
        {
          "title": "tag1",
          "type": "plain"
        }
      ],
      "tagGroups": [ // optional list used when the folder is selected as a location in TagSpaces, it contains the tag groups specific to the location, which are imported in the tagging area after loading this location
        {
          "title": "TagGroup Name",
          "key": "29814",
          "expanded": true, // if false the tag group will be shown closed, hiding all the contained tags
          "children": [ // the list containing the tags of the tag group
            {
              "type": "plain", // the type of the tag
              "title": "tag1", // the name of the tag
              "description": "tag1", // not supported element
              "icon": "", // the name of the icon class from font-awesome
              "style": "" // css styling information for the tag
            },
          ]
        },
      ]
      "appVersionUpdated": "2.4.1", // optional element, containing the version of tha app, created this file
      "lastUpdated": "2016-04-05T17:12:02.237Z", // the late date and time, when the file was updated
      "description:": "Some folder description '\n' can be used for adding a new line"
    }

## Exported tags description format
All tag groups and tags can be exported from the settings of the application, as shown in the next screenshot.

![exporting the tag library](/media/taggroups-export.png)

The meta information is persisted in JSON format, which has the following format:

    {
      "appName": "TagSpaces",
      "appVersion": "2.4",
      "appBuild": "2",
      "settingsVersion": 2,
      "tagGroups": [ // A list of all tag groups exported from the application
        {
          "title": "Common Tags", // the name of the tag group
          "isFolder": "true",
          "key": "OTB", // the key of the tag group
          "expanded": "true", // if false the tag group will be shown closed, hiding all the contained tags
          "children": [ the list containing the tags of the tag group
            {
              "type": "plain", // the type of the tag
              "title": "book", // the name of the tag
              "description": "tag1", // not supported element
              "icon": "", // the name of the icon class from font-awesome
              "style": "" // css styling information for the tag
            },
            {
              "title": "paper",
              "type": "plain",
              "description": "paper",
              "icon": "",
              "style": ""
            }
          ],
        },
        {
          "title": "Getting Things Done",
          "isFolder": "true",
          "key": "GTD",
          "expanded": "true",
          "children": [...] // tags removed
        },
        {
          "title": "Smart Tags",
          "key": "SMR",
          "expanded": true,
          "children": [...] // tags removed
        },
        {
          "title": "Priorities",
          "key": "PRI",
          "expanded": true,
          "children": [...] // tags removed
        }
      ]
    }



> **Note** In the JSON examples above, you will find sometimes a description after the these characters `//`. Please note that this is not part of the format and is used only for clarification purposes.


