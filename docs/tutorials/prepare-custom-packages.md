---
title: Prepare custom packages
tags: [tutorial]
---

## Introduction

get zip or tag.gz package

unpack the tagspaces package

install asar

```
npm install -g asar
```

go to resources folder
create app subfolder

and extract the content of the asar file to the app folder

```
asar extract-file app.asar app
```

delete the app.asar files

edit the app.html in the main folder

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>TagSpaces Desktop</title>
    <meta
      http-equiv="Content-Security-Policy"
      content="connect-src file: *; style-src 'self' 'unsafe-inline' data:  blob: ; media-src *; img-src * data: content:;"
    />
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta
      name="viewport"
      content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
    />
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
    <script type="text/javascript" src="https://your-website.com/somepath/extconfig.js"></script>
    <script defer type="text/javascript" src="./dist/renderer.prod.js"></script>
  </head>
  <body style="overflow: hidden; margin: 0; padding: 0;">
    <div id="root">
      <div
        style="text-align: center; width: 100%; height: 100%; font-size: 1.4em; position:absolute; z-index: 999999; background-color: #F5F5F5; user-select: none; -webkit-user-select: none; -moz-user-select: none; -webkit-app-region: drag"
        class="appBackgroundTile"
      >
        <div
          style="top:45%; width: 100%; text-align: center; position:absolute;"
        >
          <svg
            style="vertical-align: middle"
```

Detailed configuration about what you can configure in the extconfig.js files can be found in [here](/dev/external-config)
