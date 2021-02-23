---
title: Installation overview
---

Here you will learn how to install TagSpaces on different operating systems.

## Download TagSpaces

The community version of TagSpaces can be downloaded for Windows, macOS and Linux from the official [download page](https://www.tagspaces.org/downloads)

### Downloads

The community versions of TagSpaces are available for download from the official [Downloads Page](https://www.tagspaces.org/downloads/), where you can quickly find the appropriate installer for your operating system (Windows, macOS, Linux, Android, Firefox and Chrome).

## New Version Notification

Once a new version of the application is available, you will see a green present icon near the TagSpaces logo. Clicking on this icon will lead your to the what's new webpage on the TagSpaces website. Here you can download the new version of the application.

![New version notification](/media/new-version-available.png)

If you do not want to TagSpaces to check for the availability of new version, disable this functionality in the [settings](ui/settings)

## Installation on Windows

The Windows version of TagSpaces is distributed as `zip` file, which can be downloaded for [64bit](https://www.tagspaces.org/downloads/tagspaces-win64.zip) versions of Windows, depending on your system. Then you have to just unzip the downloaded file in a folder of your choice somewhere on your system. In the unpacked folder you will find a file called `tagspaces.exe`, which can be executed with double click.

> **Updating the Windows version:** Just exchange the content of your current installation, with the content from the zip-file of a newer release. You don't have to worry about your tag library and locations since they are persisted in the users home folder.

## Installation on macOS

For macOS 10.10 or later you have to download the [64bit](https://www.tagspaces.org/downloads/tagspaces-osx64.zip) of the application. Then you have to double click the downloaded zip file in Finder to unpack it properly. Some users are reporting issues with unpacking the app with some 3th-party zip utils.

:::tip
By default macOS does not allow TagSpaces to be executed with a simple double click, because it is currently not digitally signed. To work around this, right-click the TagSpaces.app folder and choose Open, then click **Open** on the dialog that appears. You need to do this just once.
:::

> **Updating the macOS version:** Just exchange the content of your current installation, with the content from the zip-file of a newer release. You don't have to worry about your tag library and locations since they are persisted in the users home folder.

## Installation on Linux

The Linux version of TagSpaces is distributed as `tar.gz` file, which can be downloaded for [64bit](https://www.tagspaces.org/downloads/tagspaces-linux64.tar.gz) Linux versions, depending on your system. Then you have to just unpack the downloaded file in a folder of your choice somewhere on your system. In the unpacked folder you will find a file called `tagspaces`, which can be executed with double click or in a terminal. We also offer 64bit [deb](https://www.tagspaces.org/downloads/tagspaces-amd64.deb) package for Debian/Ubuntu based distributions.

> **Updating the Linux version:** Just exchange the content of your current installation, with the content from the tar.gz-file of a newer release. You don't have to worry about your tag library and locations since they are persisted in the users home folder.

## Installation on Android

### From Google Play

You can install the Android app from the [Google Play Store](https://play.google.com/store/apps/details?id=org.tagspaces.mobile).

> **Updating the Android app:** Once we publish a newer version of the Android app, it will be automatically installed on your mobile device within the following days.

### From our web site

A version of the Android app is available as a [APK file](https://www.tagspaces.org/downloads/tagspaces-android.apk) in download section of our web site.

In order to install the APK file you have to perform the following steps on your Android phone.

- Go to Settings.
- Open the Security & privacy option.
- Scroll down and find 'install from unknown apps'. If it's not there, try under 'more'.
- You should be presented with a list of apps. Find your browser for example Firefox or Chrome.
- Tap on it and then choose **'Allow from this source'**.

If the above steps doesn't work for you, try the following:

- Go to Settings.
- Open Apps & Notifications and then select configure apps.
- Scroll down. Find and tap advanced options or special app access.
- Scroll to the bottom of the special app access menu, where you can find the **"Install unknown apps"** option
- Find your browser, tap on it and select **'Allow from this source'**.

Once these steps are done you can download and install with the previously configured browser the app from our [download section](https://www.tagspaces.org/downloads)

> **Risks of installing apps outside the Play Store** - Installing an app outside of Google Play sore is risky as you may be subjecting your phone to viruses that come along with these apps, so please be very careful and check your download sources.

## Installing the Firefox Browser Extension

Download the [Add-on for Firefox](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/). Open the **Add-on tab** in Firefox from the main menu and then click on the **Add-on** puzzle icon, or simply type `ctrl+shift+a` or `command+shift+a`. In the opened new tab, go to the settings dropdown on the left of the search field and select **Install Add-on From File...**. Then choose the downloaded file and follow the instructions.

You can also find TagSpaces in the Mozilla's addon store, but consider that the version there could be some months old due to their slow approval process.

Once installed the add-on can be started from the TagSpaces icon in the right upped corner of the browser or from the browser's main menu **Tools > TagSpaces**.

> **Updating the Firefox addon:** Once a newer version of the Firefox addon is approved for the Mozilla store, it will be automatically installed on your Firefox browser within the following days.

## Installing the Chrome Browser Extension

You can install the Chrome extension directly from the [Google Chrome Store](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk).

### Installation from the TagSpaces webpage

An alternative way is get the extension directly from [our download page](https://www.tagspaces.org/downloads/). If you do so, please consider the following instructions:

- Download the extension file from the link above and save it to your computer.
- Click the settings icon on the browser toolbar.
- Select **Tools &gt; Extensions**.
- Locate the extension file on your computer and drag the file onto the Extensions page.
- Review the list of permissions in the dialog that appears and click **Install**.

After the installation, the TagSpaces extension can be started from the TagSpaces icon in the right upper corner of the browser.

> **Updating the Chrome extension:** Once we publish a newer version of the Chrome extensions on the Chrome store, it will be automatically installed on your Chrome browser within the following days.

## Installing TagSpaces PRO

For Windows we are providing installers for TagSpaces PRO, which are signed with modern software certificates. The following screenshot show this certificate in action during the installation under Windows.

![Screenshot showing signed installer under Windows](/media/signed-windows-installer.png)

Here are the steps needed for installing the PRO version on your system.

- Save the installer file to a location on your hard drive.
- Locate the installer and double-click to start the install process.
- The Windows installer allows you to specify a custom install location.

> **Updating the PRO version:** Just run the installer from a newer version of TagSpaces. It will automatically update your installation.

## Running in portable mode

The Windows and Linux versions of TagSpaces can be started in the so called portable mode, allowing the use of the application from an USB-stick or other portable devices. In this mode all the configuration information such as tags, tag groups and connection to locations is stored in a folder called _tsprofile_. This folder is located in the from where the application is started and not in the home user folder on current operating systems. The portable mode can be started with the `tagspacesp.cmd` script under Windows or the `tagspacesp` under Linux. These scripts are usually located in the unzipped application folder. Under Linux you have eventually to make this script executable with this command `chmod +x tagspacesp`. if the files are not in the distributed packages they can be downloaded from the following places: [tagspacesp](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp) and [tagspacesp.cmd](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp.cmd). The downloaded file should be placed in the same directory where the tagspaces executable is located.

### Updating the portable version

In order to update a version of TagSpaces used in portable mode for example on USB stick you have just to exchange the files and directories with the new ones, coming from the installation package of the new application version. As mentioned before in the portable mode, the tag library and locations are stored in the _tsprofile_ folder. So to upgrade to a newer version of tagspaces, we have to take special care for this folder, please follow these steps for the upgrade:

- Rename your existing _tagspaces_ folder to e.g. _tagspaces_old_
- Extract the downloaded tagspaces zip-file, this will create a new _tagspaces_ folder.
- Copy/move the _tsprofile_ folder from the _tagspaces_old_ folder to the newly created _tagspaces_ folder.

:::tip
Important: Be careful not to delete the `tsprofile` sub folder, it contains valuable information for your portable TagSpaces instance.
:::
