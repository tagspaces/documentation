# Installation and Setup

## Installing Windows version {#windows}
The Windows version of TagSpaces is distributed as `zip` file, which can be downloaded for [32bit]({{ site.downloadWin32 }}) and for [64bit]({{ site.downloadWin64 }}) versions of Windows, depending on your system. Then you have to just unzip the downloaded file in a folder of your choice somewhere on your system. In the unpacked folder you will find a file called `tagspaces.exe`, which can be executed with double click.

## Installing OS X version {#osx}
For OSX 10.9 or later you have to download the [64bit]({{ site.downloadOSX64 }}) of the application. Then you have to double click the downloaded zip file in Finder to unpack it properly. Some users are reporting issues with unpacking the app with some 3th-party zip utils.

**Note**: By default Mac OSX does not allow TagSpaces to be executed with a simple double click, because it is currently not digitally signed. To work around this, right-click the TagSpaces.app folder and choose Open, then click **Open** on the dialog that appears. You need to do this just once.

## Installing Linux version {#linux}
The Linux version of TagSpaces is distributed as `tar.gz` file, which can be downloaded for [32bit]({{ site.downloadLinux32 }}) and for [64bit]({{ site.downloadLinux64 }}) Linux versions, depending on your system. Then you have to just unpack the downloaded file in a folder of your choice somewhere on your system. In the unpacked folder you will find a file called `tagspaces`, which can be executed with double click or in a terminal.

## Installing the Firefox Addon {#firefox}
Download the [Add-on for Firefox](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/). Open the **Add-on tab** in Firefox from the main menu and then click on the **Add-on** puzzle icon, or simply type `ctrl+shift+a` or `command+shift+a`. In the opened new tab, go to the settings dropdown on the left of the search field and select **Install Add-on From File...**. Then choose the downloaded file and follow the instructions.

You can also find TagSpaces in the Mozilla's addon store, but consider that the version there could be some months old due to their slow approval process.

Once installed the add-on can be started from the TagSpaces icon in the right upped corner of the browser or from the  browser's main menu **Tools > TagSpaces**.

## Installing the Chrome Extension
You can install the Chrome extension directly from the [Google Chrome Store]({{ site.linkChromeStore}}).

An alternative way is get the extension directly from [our download page]({{ site.downloadChrome }}). If you do so, please consider the following instructions:

* Download the extension file from the link above and save it to your computer.
* Click the settings icon on the browser toolbar.
* Select **Tools &gt; Extensions**.
* Locate the extension file on your computer and drag the file onto the Extensions page.
* Review the list of permissions in the dialog that appears and click **Install**.

Once installed the TagSpaces extension can be started from the TagSpaces icon in the right upper corner of the browser.

## Installing WebDAV version
TODO check https://www.tagspaces.org/blog/webdav-edition/

## Installing TagSpaces PRO
Here are the steps needed for installing the PRO version on your system.

* Save the installer file to a location on your hard/SSD drive.
* Locate the installer and double-click to start the install process.
* The Windows installer allows you to specify a custom install location.

## Updating existing installation
tbd

## Updating the PRO version
tbd

## Running TagSpaces in portable mode {#portable-mode}
The Windows and Linux versions of TagSpaces can be started in the so called portable mode, allowing the use of the application from an USB-stick or other portable devices. In this mode all the configuration information such as tags, tag groups and connection to locations is stored in the folder from where the application is started and not in the home user folder on current operating systems. The portable mode can be started with the `tagspacesp.cmd` script under Windows or the `tagspacesp` under Linux. These scripts are located in the unzipped application folder. Under Linux you have eventually to make this script executable with this command `chmod +x tagspacesp`.
