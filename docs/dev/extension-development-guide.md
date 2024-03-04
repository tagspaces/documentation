---
title: Extension development guide
---

:::caution
This guide is outdated, please use it with caution.
:::

This is an initial version of a guide intended to clarify the process of extension development for TagSpaces.

## Prerequisites

Cloning the TagSpaces repository from Github

    git clone https://github.com/tagspaces/tagspaces.git

## Setting up the development environment

Using the script `checkoutextensions.sh` or `checkoutextensions.cmd` respectively for Linux and Windows.

For Windows users, please open your Command Prompt and execute the following command: checkoutextensions.cmd
For Linux users, please open your Terminal and execute the following command: sh checkoutextensions.sh

## Directory structure

After running the checkout script your dev environment should have the following directory structure:

```
~ tagspaces-github-location
├── data
│   ├── assets
│   │   └── ubuntu-font
│   ├── chromium
│   ├── cordova
│   │   └── fastclick
│   ├── electron - Electron framework core
│   ├── ext
│   │   ├── editorHTML -> tagspaces-github-location/extensions/editorHTML
│   │   ├── ...
│   │   ├── perspectiveGraph -> tagspaces-github-location/extensions/perspectiveGraph
│   │   ├── ...
│   │   ├── viewerAudioVideo -> tagspaces-github-location/extensions/viewerAudioVideo
│   │   └── ...
│   ├── js
│   ├── libs
│   │   ├── bootstrap
│   │   ├── ...
│   │   └── underscore
│   ├── locales
│   │   ├── de
│   │   ├── ...
│   │   └── zh_TW
│   ├── _locales
│   │   ├── de
│   │   ├── ..
│   │   └── zh_TW
│   ├── mozilla
│   ├── node_modules
│   │   └── fs-extra
│   ├── node-webkit
│	   ├── locales
│	   └── node_modules
│	   	├── fs-extra
│	   	└── trash
├── docs
├── extensions
│   ├── editorHTML
│   ├── ...
│   ├── perspectiveGraph
│   ├── ...
│   ├── viewerAudioVideo
│   └── ...
└── node_modules
```

Please note that after running the script all extension folders in `data/ext` are connected by symlinks to the extensions in the `extensions`. In this folder you will find cloned the repositories of all supported TagSpaces extension. This way you can make changes in for e.g. `extensions/viewerImage`, which will be immediately testable after running the application, because of the symlink.

## Extension initialization

On application loading TagSpaces is scanning the extension folder (e.g. `data/ext`) for available extensions. So basically it is searching every sub folder for a bower file. From the bower file TagSpaces is extractiong the id and the name of the extension, which are needed later. Currently on Firefox and Chrome the available extensions are fixed in settings and not resolved at runtime.

When a given extension is needed, TagSpaces is loading a file called `extension.js` from the folder of the extension. So this file is mandatory for every extension. It loads later with _requirejs_ further javascript, css or other types of files if needed.

In the most extensions like [viewerImage] or [viewerMD] the `extension.js` is creating dynamically a new IFRAME elements which loads a file called `index.html`, where the image or markdown content is displayed or manipulated.

## Messaging API

In order the extension to communication with TagSpaces the _Messaging API_ can be used. It is currently in definition phase and can be found unter [data/js/ext.api.js](https://github.com/tagspaces/tagspaces/blob/master/data/js/ext.api.js)

## Structure of the extension

The following is the structure of a typical extension.

    .
    ├── bower.json - A mandatory file
    ├── .bowerrc - An optional file for specifying the location of the libraries (e.g. ./libs folder)
    ├── extension.css
    ├── extension.js - the app is searching on extension loading js file with this name.
    ├── main.js -
    ├── index.html
    ├── libs
    │   ├── exif-js
    │   │   ├── bower.json
    │   │   ├── ...
    │   │   └── exif.js
    │   ├── jquery
    │   │   ├── bower.json
    │   │   ├── dist
    │   │   │   ├── jquery.js
    │   │   │   └── jquery.min.js
    │   │   └── MIT-LICENSE.txt
    │   └── jquery.panzoom
    │       ├── bower.json
    │       ├── ...
    │       └── dist
    │           ├── ...
    │           └── jquery.panzoom.min.js
    ├── LICENSE.txt
    ├── locales - location of the translated files from Transifex
    │   ├── de_DE
    │   │   └── ns.viewerImage.json
    │   ├── ...
    │   └── en_US
    │       └── ns.viewerImage.json
    └── README.md

## Recommended structure of the bower.json

TagSpaces uses Bower as a management tool for its extension. In this section you will find out how the mandatory bower.json should look like.

```js {2}
    {
      "name": "The Cool Name", <- The name of the extension, can contain spaces
      "id": "viewerHTML", <- The id of the extension, should be the same as the folder where your ext. is located
      "description": "A TagSpaces extension for ...", <- Short description of your extension
      "type": "viewer", <- The type of your extension, could be: viewer, editor or perspective
      "version": "1.0.0", <- The version of the extension
      "dependencies": {
        "jquery.panzoom": "~2.0.5"
      },
      "devDependencies": {},
      "authors": [
        "Your Name Here - http://your-optional-website-or-email.com"
      ],
      "keywords": [
        "html",
        "viewer"
      ],
      "license": "MIT",
      "main": [
        "extension.js"
      ],
      "ignore": [
        "Gruntfile.js"
      ],
      "private": true
    }
```

## Internationalization

For the internationalization of the extensions we use [Transifex](https://www.transifex.com/tagspaces/tagspaces/). For some extension we have already created translation file, like for [viewerImage](https://www.transifex.com/tagspaces/tagspaces/nsviewerimagejson/)
