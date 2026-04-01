---
title: Installing TagSpaces
description: Step-by-step installation guide for TagSpaces on Windows, macOS, and Linux covering the free Lite edition and Pro versions for desktop and web deployments.
---

import { ProFeature, CenteredImage } from '@site/src/components/CommonBlocks';
import { TechArticleStructuredData } from '@site/src/components/StructuredData';

<TechArticleStructuredData />

## Quick Reference

| Platform              | Format                            | Download                                                                                                                 |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Windows               | `.exe` installer / `.zip` archive | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| macOS (Apple Silicon) | `.dmg` / `.pkg`                   | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| macOS (Intel)         | `.dmg` / `.pkg`                   | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| Linux                 | `.deb` / `.AppImage` / `.tar.gz`  | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| Chrome                | Browser extension                 | [Chrome Web Store](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk)     |
| Edge                  | Browser extension                 | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tagspaces-web-clipper/dinjgbhjngaockabnagbonbfinanjpdn) |
| Firefox               | Browser add-on                    | [Firefox Add-ons](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/)                                             |

## Downloading TagSpaces

### TagSpaces Lite (Free)

The free version of TagSpaces is available from the [Downloads section](https://www.tagspaces.org/downloads/) on the TagSpaces website. Choose the appropriate installer for your operating system and follow the platform-specific instructions below.

#### New version notification

When a new version is available, a notification appears in the lower-left corner of the app. Clicking **Get It Now** will take you to the [download page](https://www.tagspaces.org/downloads/).

<CenteredImage maxWidth={500} src="/media/core/new-version-available.png" caption="New version notification" showCaption/>

:::tip
You can disable the automatic update check in [Settings > General](/ui/settings/#general).
:::

### TagSpaces Pro

TagSpaces Pro users can download the latest version through their FastSpring account at https://tagspacesstore.onfastspring.com/account, or by using the link in their order confirmation email.

<CenteredImage maxWidth={600} src="/media/setup/fastspring-email.avif" caption="Enter the email used for your purchase" showCaption/>

<CenteredImage maxWidth={600} src="/media/setup/fastspring-email-send.avif" caption="Confirmation that the email was sent" showCaption/>

After receiving the email from FastSpring, click the link to view your subscriptions.

<CenteredImage maxWidth={600} src="/media/setup/fastspring-subscriptions.avif" caption="Subscriptions overview" showCaption/>

Click **Orders** to access the download links for the latest TagSpaces Pro version.

<CenteredImage maxWidth={600} src="/media/setup/fastspring-download-links.avif" caption="Download links for TagSpaces Pro" showCaption/>

The following downloads are typically available:

| Platform                           | Recommended download                        |
| ---------------------------------- | ------------------------------------------- |
| macOS (Apple Silicon M1/M2/M3/...) | `tagspaces-pro-mac-arm64-x.y.z.dmg`         |
| macOS (Intel)                      | `tagspaces-pro-mac-x64-x.y.z.dmg`           |
| Windows                            | `tagspaces-pro-win-x64-x.y.z.exe`           |
| Linux (Debian/Ubuntu)              | `tagspaces-pro-linux-amd64-x.y.z.deb`       |
| Linux (other distributions)        | `tagspaces-pro-linux-x86_64-x.y.z.appimage` |

Additional formats (`.pkg`, `.zip`, `.tar.gz`) are also available for each platform.

:::warning
FastSpring may display the version number from the time of your purchase, but the download links always point to the latest available version.
:::

## Desktop Installation

### Windows

The Windows version is distributed as an `.exe` installer or a `.zip` archive.

- **`.exe` installer** — double-click to run the installation wizard. The installer is signed with a software certificate. You can verify the signature by right-clicking the file, choosing **Properties**, and checking the **Digital Signatures** tab.
- **`.zip` archive** — extract to any folder and run `tagspaces.exe` from the unpacked directory.

<CenteredImage maxWidth={600} src="/media/signed-windows-installer.png" caption="Verifying the digital signature of the Windows installer" showCaption/>

### macOS

Download the `.dmg` file matching your processor — **Apple Silicon** (`arm64`) or **Intel** (`x64`) — from the [downloads page](https://www.tagspaces.org/downloads/). Double-click the `.dmg` file in Finder to mount it, then drag **TagSpaces.app** to your Applications folder.

:::tip
Use Finder to open the `.dmg` file. Some third-party archive utilities may not unpack it correctly.
:::

### Linux

The Linux version is available in three formats:

**`.deb` package** (Debian/Ubuntu) — install with:

```bash
sudo dpkg -i tagspaces-linux-amd64-x.x.x.deb
```

**`.AppImage`** — make it executable, then double-click or run from terminal:

```bash
chmod +x tagspaces-linux-x86_64-x.x.x.AppImage
./tagspaces-linux-x86_64-x.x.x.AppImage
```

**`.tar.gz` archive** — extract to any folder and run the `tagspaces` executable.

## Updating the Desktop App

Your tag library and location configurations are stored in the [profile folder](#profile-folder-locations), so they are preserved across updates. No data is lost during the update process.

### Windows

- **`.exe` installer** — run the new installer; it will update the existing installation.
- **`.zip` archive** — replace the contents of your current installation folder with the files from the new zip.

### macOS

Replace the existing `TagSpaces.app` in your Applications folder with the new version from the `.dmg` file.

### Linux

- **`.deb` package** — reinstall with `sudo dpkg -i` using the new package file.
- **`.AppImage`** — replace the old `.AppImage` file with the new one (remember to `chmod +x` it).
- **`.tar.gz` archive** — replace the contents of your current installation folder with the files from the new archive.

## Profile Folder Locations

The profile folder stores your tag library, location configurations, and application settings.

| Operating System | Path                                            |
| ---------------- | ----------------------------------------------- |
| Windows          | `C:\Users\<username>\AppData\Roaming\TagSpaces` |
| macOS            | `~/Library/Application Support/TagSpaces`       |
| Linux            | `~/.config/TagSpaces`                           |

## Browser Extensions

TagSpaces offers browser extensions for clipping web content. For detailed usage instructions, see the [Web Clipper documentation](/web-clipper).

### Chrome

Install the [TagSpaces Web Clipper](https://chrome.google.com/webstore/detail/tagspaces-web-clipper/ldalmgifdlgpiiadeccbcjojljeanhjk) from the Chrome Web Store. Updates are installed automatically.

### Edge

Install the [TagSpaces Web Clipper](https://microsoftedge.microsoft.com/addons/detail/tagspaces-web-clipper/bfcjlplgoigofgpaecmepefaikhanaok) from the Edge Add-ons store. Once installed, launch it from the TagSpaces icon in the toolbar. Updates are installed automatically.

### Firefox

Install the [TagSpaces Add-on](https://addons.mozilla.org/en-us/firefox/addon/tagspaces/) from Firefox Add-ons. Once installed, launch it from the TagSpaces icon in the toolbar or via **Tools > TagSpaces**. Updates are installed automatically once approved by Mozilla.

## Portable Mode

The Windows, macOS, and Linux versions of TagSpaces can run in portable mode, storing all configuration in a `tsprofile` folder next to the application instead of in the system profile folder. This is useful for running TagSpaces from a USB stick or other portable devices.

### Windows and Linux

Use the portable launcher script included in the application folder:

- **Windows:** `tagspacesp.cmd`
- **Linux:** `tagspacesp` (you may need to run `chmod +x tagspacesp` first)

If the scripts are not included in your package, download them here:

- [tagspacesp (Linux)](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp)
- [tagspacesp.cmd (Windows)](https://raw.githubusercontent.com/tagspaces/tagspaces/develop/resources/tagspacesp.cmd)

Place the downloaded script in the same directory as the TagSpaces executable.

### macOS

Extract the `.dmg` contents to your desired location (e.g. a USB stick), then run:

```bash
./TagSpaces.app/Contents/MacOS/TagSpaces -p
```

This starts the app in portable mode and creates the `tsprofile` folder in the current directory.

### Updating a Portable Installation

1. Rename your existing `tagspaces` folder (e.g. to `tagspaces_old`).
2. Extract the new TagSpaces package, creating a fresh `tagspaces` folder.
3. Copy the `tsprofile` folder from the old directory into the new one.

:::caution
Do **not** delete the `tsprofile` folder — it contains all your configuration data for the portable installation.
:::

### AppImage Portable Mode (Linux)

The AppImage format has its own [portable mode](https://docs.appimage.org/user-guide/portable-mode.html). Create an empty folder with the same name as your AppImage file plus `.config`:

```bash
tagspaces-linux-x86_64-6.0.2.AppImage
tagspaces-linux-x86_64-6.0.2.AppImage.config
```

TagSpaces will then store all configuration in the `.config` folder instead of `~/.config/TagSpaces`, allowing you to carry the app and its settings together on portable media.

## Android (Deprecated)

:::caution
The Android version is **deprecated**. New versions are still released, but the app is no longer actively developed.
:::

An APK file is available in the [download section](https://www.tagspaces.org/downloads/) of the TagSpaces website.

To install the APK, you need to allow installation from unknown sources:

1. Go to **Settings > Security & privacy**.
2. Find **Install from unknown apps** (may be under **Advanced** or **Special app access**).
3. Select your browser and enable **Allow from this source**.

Then download and install the APK using your browser.

:::caution
**Risks of installing apps outside the Play Store:** Installing APKs from outside the Google Play Store can expose your device to security risks. Only install from trusted sources.
:::
