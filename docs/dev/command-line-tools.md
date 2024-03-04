---
title: Command Line Tools
---

This is a set of command line tools which can create search index and thumbnails for folders used in the TagSpaces Desktop and Web apps. The source code for the tools is available on [GitHub](https://github.com/tagspaces/tagspaces-common/tree/develop/packages/tagspaces-shell)

## Installation

```
npm install -global @tagspaces/shell
```

## Search index generation

This tool will create a search index for a given folder with all its sub folders.

Run node script:

```
tscmd -m indexer /some/folder/
```

This command can be used for automation e.g. in CRON jobs.

## Thumbnail generation

This script will recursively create thumbnails for a specified folder with all its sub folders.

You have to install [sharp](https://sharp.pixelplumbing.com/install) package globally with the following command:

```
npm i sharp -g
```

Set NODE_PATH environment points to global npm folder:

```
export NODE_PATH=$(npm root --quiet -g)
```

Run node script:

```
tscmd -m thumbgen /some/folder/
```

This command can be used for automation e.g. in CRON jobs.
Don't forget to put the trailing slash after the folder name.

## Cleaning obsolete thumbnails and sidecar files.

Running this command will analyze the specified folder:

```
tscmd -m metacleaner /some/folder
```

Where `-m` is for mode, which here is metacleaner. The metacleaner will analyse first the specified folder and deliver a list with files which are not needed or connected anymore. You can review the list and confirm the deletion by setting the `-a`, which is for analyse with `false` as parameter. So this command will finally perform the cleaning.

```
tscmd -m metacleaner -a false /some/folder
```

## Third party tools

Here you will find a list of projects which provides tooling compatible with TagSpaces. These projects are not affiliated with TagSpaces.

- [TSS](https://github.com/nahoj/tss) - a command-line tool to manage files with tags, with completion provided for zsh.
