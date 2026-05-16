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
| Windows (x64)         | `.exe` installer / `.zip` archive | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| Windows (arm64)       | `.exe` installer / `.zip` archive | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| macOS (Apple Silicon) | `.dmg` / `.pkg`                   | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| macOS (Intel)         | `.dmg` / `.pkg`                   | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| Linux (x64)           | `.deb` / `.AppImage` / `.tar.gz`  | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
| Linux (arm64)         | `.deb` / `.tar.gz`                | [Downloads page](https://www.tagspaces.org/downloads/)                                                                   |
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

:::info
FastSpring may display the version number from the time of your purchase, but the download links always point to the latest available version.
:::

The following downloads are typically available:

| Platform                           | Recommended download                      |
| ---------------------------------- | ----------------------------------------- |
| macOS (Apple Silicon M1/M2/M3/...) | `tagspaces-pro-mac-arm64-x.y.z.dmg`       |
| macOS (Intel)                      | `tagspaces-pro-mac-x64-x.y.z.dmg`         |
| Windows (x64)                      | `tagspaces-pro-win-x64-x.y.z.exe`         |
| Linux x64 (Debian/Ubuntu)          | `tagspaces-pro-linux-amd64-x.y.z.deb`     |
| Linux x64 (other distributions)    | `tagspaces-pro-linux-x86_64-x.y.z.tar.gz` |

<!-- | Windows (arm64) | `tagspaces-pro-win-arm64-x.y.z.exe` |
| Linux arm64 (Debian/Ubuntu) | `tagspaces-pro-linux-arm64-x.y.z.deb` |
| Linux arm64 (other distributions) | `tagspaces-pro-linux-arm64-x.y.z.tar.gz` | -->

Additional formats (`.pkg`, `.zip`, `.tar.gz`) are also available for each platform.

## Desktop Installation

### Windows

TagSpaces is published for both **x64** and **arm64** Windows. Pick the build that matches your processor:

- **x64** — Intel or AMD processors (the majority of desktops and laptops). File names end in `-win-x64-`.
- **arm64** — Windows on ARM devices such as Copilot+ PCs, Snapdragon-based Surface laptops, Windows-on-ARM VMs on Apple Silicon (UTM, Parallels, VMware Fusion), and Dev Kits. File names end in `-win-arm64-`.

Not sure which you have? Open **Settings → System → About** and check **System type** — it will say "64-bit operating system, x64-based processor" or "ARM-based processor".

:::tip
Windows 11 on ARM can transparently run x64 binaries under emulation, so the x64 build will start on an arm64 machine — but the native arm64 build runs noticeably faster and uses less battery. Prefer the arm64 download whenever available.
:::

Both architectures are distributed as an `.exe` installer or a `.zip` archive:

- **`.exe` installer** — double-click to run the installation wizard. The installer is signed with a software certificate. You can verify the signature by right-clicking the file, choosing **Properties**, and checking the **Digital Signatures** tab.
- **`.zip` archive** — extract to any folder and run `tagspaces.exe` from the unpacked directory.

<CenteredImage maxWidth={600} src="/media/signed-windows-installer.png" caption="Verifying the digital signature of the Windows installer" showCaption/>

### macOS

Download the `.dmg` file matching your processor — **Apple Silicon** (`arm64`) or **Intel** (`x64`) — from the [downloads page](https://www.tagspaces.org/downloads/). Double-click the `.dmg` file in Finder to mount it, then drag **TagSpaces.app** to your Applications folder.

:::tip
Use Finder to open the `.dmg` file. Some third-party archive utilities may not unpack it correctly.
:::

### Linux

TagSpaces is published for **x64** (`amd64` / `x86_64`) and **arm64** (`aarch64`) architectures. The available formats differ slightly between the two:

| Format      | x64 | arm64 |
| ----------- | --- | ----- |
| `.deb`      | ✓   | ✓     |
| `.tar.gz`   | ✓   | ✓     |
| `.AppImage` | ✓   | —     |

**`.deb` package** (Debian / Ubuntu — recommended) — install with `apt` so missing runtime dependencies (for example `libxss1`) are pulled in automatically:

```bash
sudo apt install ./tagspaces-linux-amd64-x.x.x.deb     # x64
sudo apt install ./tagspaces-linux-arm64-x.x.x.deb     # arm64
```

If you prefer `dpkg` and it reports missing dependencies, finish the install with `sudo apt install -f`.

**`.AppImage`** (x64 only) — make it executable, then double-click or run from terminal:

```bash
chmod +x tagspaces-linux-x86_64-x.x.x.AppImage
./tagspaces-linux-x86_64-x.x.x.AppImage
```

**`.tar.gz` archive** — extract to any folder and run the `tagspaces` executable.

:::tip
On recent Ubuntu / Debian releases the `.deb` path is the most reliable; it installs required dependencies via `apt` and sets the correct permissions on Chromium's sandbox helper. See [Linux troubleshooting](#linux-troubleshooting) below if you hit startup errors with the AppImage or tar.gz.
:::

#### Linux troubleshooting

Modern Linux distributions (for example Ubuntu 24.04+ and 25.10) ship fewer X11 / legacy libraries and disable some kernel features by default, which can cause errors when launching TagSpaces from the AppImage or tar.gz. If you see any of the messages below, apply the matching fix.

**`libxss1` missing when installing the `.deb`:**

```bash
sudo apt install -f
# or install the .deb directly via apt so deps are resolved:
sudo apt install ./tagspaces-linux-amd64-x.x.x.deb
```

**AppImage fails with `error while loading shared libraries: libz.so`:**

The AppImage runtime stub links against the unversioned `libz.so` (shipped by `zlib1g-dev`). Install the dev package or create the symlink:

```bash
sudo apt install zlib1g-dev
# or, without the dev package:
sudo ln -sf /lib/$(uname -m)-linux-gnu/libz.so.1 /usr/lib/$(uname -m)-linux-gnu/libz.so
```

**AppImage fails with `dlopen(): error loading libfuse.so.2`:**

Ubuntu 22.04+ ships `libfuse3` by default, but AppImage type 2 still needs `libfuse2`:

```bash
sudo apt install libfuse2t64     # Ubuntu 24.04+
sudo apt install libfuse2        # older Ubuntu / other distros
```

As a FUSE-less alternative, extract and run the payload directly:

```bash
./tagspaces-linux-x86_64-x.x.x.AppImage --appimage-extract-and-run
```

**`The SUID sandbox helper binary ... is not configured correctly` (Ubuntu 24.04+):**

Recent Ubuntu releases restrict unprivileged user namespaces via AppArmor, forcing Chromium's sandbox into setuid mode even when running an AppImage or extracted tar.gz. Permit unprivileged user namespaces so Electron can use the userns sandbox:

```bash
# Temporary (until reboot):
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0

# Permanent:
echo 'kernel.apparmor_restrict_unprivileged_userns=0' | sudo tee /etc/sysctl.d/60-apparmor-namespace.conf
sudo sysctl --system
```

When installing from `.tar.gz`, you can alternatively grant the embedded `chrome-sandbox` binary the required permissions manually:

```bash
cd /path/to/extracted/TagSpaces
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
```

:::caution
Do not run the app with `sudo`. Electron's sandbox refuses to start as root, and running desktop apps as root is a security risk.
:::

**Blank window or `libEGL` / `MESA` warnings (VMs and headless GPUs):**

If the window never paints — common in virtual machines without GPU passthrough — disable GPU acceleration:

```bash
tagspaces --disable-gpu
# or, if on Wayland:
tagspaces --ozone-platform=x11 --disable-gpu
```

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

### AppImage Portable Mode (Linux x64 only)

The AppImage format has its own [portable mode](https://docs.appimage.org/user-guide/portable-mode.html). AppImages are provided for x64 Linux only — on arm64, use the `.tar.gz` archive with the `tagspacesp` launcher described above. Create an empty folder with the same name as your AppImage file plus `.config`:

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
