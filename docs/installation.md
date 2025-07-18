---
title: Installing TagSpaces
---

Here you will learn how to install TagSpaces on different operating systems.

## Getting the Application

The free versions of TagSpaces are available for download from the [Downloads Section](https://www.tagspaces.org/downloads/) on the TagSpaces website. Here, you can quickly find the appropriate installer for your operating system (Windows, macOS, Linux, Android, Firefox, and Chrome).

:::tip
**Download the newest PRO release:** TagSpaces PRO customers should use the download links provided in their purchase confirmation email. These links will always point to the latest available PRO version.
:::

### New Version Notification

When a new version of the application is available, you will see a notification in the lower-left corner of the app. Clicking the **GET NOW** button will direct you to the TagSpaces website download page, where you can obtain the latest community version. PRO users should use the links in their order confirmation email to access the latest version.

![New version notification](/media/core/new-version-available.png)

:::tip
If you prefer not to have TagSpaces check automatically for new versions, you can disable this functionality in the [settings](/ui/settings).
:::

## Installation on Windows

The Windows version of TagSpaces is distributed as either an `.exe` installer or a `.zip` archive file. The `.exe` file can be directly executed to start the installation. The `.zip` archive must be unzipped into a folder on your system. In the unpacked folder, you will find a file named `tagspaces.exe`, which can be executed with a double-click.

The installer is signed with modern software certificates, ensuring authenticity. The screenshot below shows the certificate during installation on Windows.

![Screenshot showing signed installer under Windows](/media/signed-windows-installer.png)

:::tip
The **profile** folder under Windows is located here: `C:\Users\Your_User_Name\AppData\Roaming\TagSpaces`
:::

### Updating the Windows version

To update, replace the contents of your current installation with the contents from the zip file of a newer release. Your tag library and locations are stored in the user's home folder, so you won’t lose any data during the update process.

## Installation on macOS

For macOS, you can [download](https://www.tagspaces.org/downloads/) the 64-bit versions of TagSpaces for either Intel or Apple Silicon (ARM) processors. After downloading, double-click the zip file in Finder to properly unpack it. Some users have reported issues unpacking the app with third-party zip utilities, so it’s recommended to use Finder.

:::tip
The **profile** folder under macOS is located here: `~/Library/Application Support/TagSpaces`
:::

<!-- :::tip
Sometimes macOS may block TagSpaces from opening with a double-click. To bypass this, right-click on the TagSpaces.app folder and choose **Open**, then click **Open** in the dialog that appears. This step is only required once.
:::

![Install confirmation macOS](/media/mac-install-confirmation.jpg)

:::tip
Alternatively, you can run this command in Terminal to avoid the "quarantine" warning:
`xattr -d com.apple.quarantine /Applications/TagSpaces.app`
::: -->

### Updating the macOS version

To update, replace the contents of your current installation with the files from the zip archive of the new release. Your tag library and locations are stored in the user's home folder, ensuring no data loss during updates.

## Installation on Linux

The Linux version of TagSpaces is available as a `tar.gz` archive, an `AppImage`, and a `.deb` file for Debian-based distributions like Ubuntu. All versions are available for download [here](https://www.tagspaces.org/downloads/).

To install:

- For the `tar.gz` file, unpack it into a folder on your system. In the unpacked folder, you’ll find a `tagspaces` executable, which can be run with a double-click or via terminal.
- For the `.deb` package, double-click to install or use the following command:

```bash
sudo dpkg -i tagspaces-linux-amd64-x.x.x.deb
```

For the AppImage, make it executable first:

```bash
chmod +x tagspaces-linux-x86_64-x.x.x.AppImage
```

Then, you can launch it with a double-click.

:::tip
The **profile** folder under Linux/Ubuntu is located here: `~/.config/TagSpaces`
:::

### Updating the Linux version

To update the **tar.gz** version, replace the contents of your current installation with the files from the new release. Your tag library and locations are persisted in the user's home folder. For distribution packages, simply reinstall over the current version.

## Installation on Android

:::caution
The Android version is meanwhile **deprecated**, we still are still releasing new versions, but we are not actively developing the app anymore.
:::

A version of the Android app is available as an [APK file](https://www.tagspaces.org/downloads/) in the download section of our website.

To install the APK file, follow these steps on your Android phone:

1. Go to **Settings**.
2. Open the **Security & privacy** option.
3. Scroll down and find **Install from unknown apps**. If it’s not there, try looking under **More**.
4. You should see a list of apps. Find your browser (e.g., Firefox or Chrome).
5. Tap on your browser and choose **Allow from this source**.

If the above steps do not work, try the following:

1. Go to **Settings**.
2. Open **Apps & Notifications** and select **Configure apps**.
3. Scroll down and tap on **Advanced options** or **Special app access**.
4. Scroll to the bottom and find the **Install unknown apps** option.
5. Select your browser, tap on it, and enable **Allow from this source**.

Once these steps are done, download and install the APK from our [download section](https://www.tagspaces.org/downloads) using your configured browser.

:::caution
**Risks of installing apps outside the Play Store:** Installing apps from outside the Google Play Store can expose your phone to potential security risks, including viruses. Always ensure you are downloading from trusted sources.
:::

## Installing the Firefox Browser Extension

Download the [TagSpaces Add-on for Firefox](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/). Open the **Add-ons tab** in Firefox from the main menu by clicking on the puzzle icon, or simply type `Ctrl+Shift+A` (or `Command+Shift+A` on macOS). In the new tab, go to the settings dropdown next to the search bar and select **Install Add-on From File...**. Choose the downloaded file and follow the instructions.

Once installed, you can start the add-on from the TagSpaces icon in the top-right corner of your browser or through **Tools > TagSpaces** in the main menu.

> **Updating the Firefox Add-on:** Once a newer version of the Firefox add-on is approved by Mozilla, it will automatically be installed on your Firefox browser.

## Installing the Chrome Browser Extension

You can install the Chrome extension directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk).

> **Updating the Chrome Extension:** Once a new version of the Chrome extension is published on the Chrome Web Store, it will be automatically installed on your Chrome browser.

## Running in Portable Mode

The Windows, macOS and Linux versions of TagSpaces can run in "portable mode," allowing you to use the application from a USB stick or other portable devices. In this mode, all configuration data (such as tags, tag groups, and location connections) is stored in a folder called `_tsprofile_` within the same directory where the application is started, rather than in the home directory of the operating system.

### On Windows and Linux

To start the portable mode, use the `tagspacesp.cmd` script on Windows or `tagspacesp` on Linux. These scripts are usually found in the unpacked application folder. On Linux, you may need to make the script executable by running:

```bash
chmod +x tagspacesp
```

If the files are not included in the distributed packages, they can be downloaded from the following locations:

- [tagspacesp (Linux)](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp)
- [tagspacesp.cmd (Windows)](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp.cmd)

Once downloaded, place these files in the same directory where the TagSpaces executable is located.

### On macOS

Extract the content of the DMG files, to the place where you want to have the portable version, e.g. a USB stick. Open the command line for this folder and run:

```bash
./TagSpaces.app/Contents/MacOS/TagSpaces -p
```

This will start the app in portable mode and create the `_tsprofile_` folder in the current folder. All the setting for the portable version will be stored in this folder.

### Updating the Portable Version

To update a portable version of TagSpaces (e.g., on a USB stick), you simply need to replace the existing files and directories with the updated ones from the new installation package. Since the tag library and locations are stored in the `_tsprofile_` folder during portable mode, special care should be taken to preserve this folder during the update. Follow these steps to upgrade:

1. Rename your existing `tagspaces` folder (e.g., to `tagspaces_old`).
2. Extract the new TagSpaces zip file, which will create a fresh `tagspaces` folder.
3. Copy or move the `_tsprofile_` folder from the old `tagspaces_old` directory into the newly created `tagspaces` folder.

:::tip
**Important:** Do **not** delete the `_tsprofile_` folder as it contains crucial data for your portable TagSpaces setup.
:::

### Portable Mode with the AppImage Package (Linux Only)

The AppImage package offers another way to run TagSpaces in portable mode. AppImages are a distribution format that allows applications to run on various Linux distributions. This package format has its own [portable mode](https://docs.appimage.org/user-guide/portable-mode.html), which can be activated by creating an empty folder with the same name as your AppImage file, followed by `.config`.

For example, if your AppImage file is named `tagspaces-linux-x86_64-6.0.2.AppImage`, create an empty folder called `tagspaces-linux-x86_64-6.0.2.AppImage.config` in the same directory. This structure would look like:

```bash
tagspaces-linux-x86_64-6.0.2.AppImage
tagspaces-linux-x86_64-6.0.2.AppImage.config
```

From this point on, TagSpaces will store all configuration information in the `.config` folder instead of the default config folder in the user’s home directory. This setup allows you to run the application from, for example, a USB stick with the same configuration on different computers.

## TagSpaces Command Line Tool

This section has been moved [here](/dev/command-line-tools).
