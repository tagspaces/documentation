---
title: Accessibility
description: Overview of the accessibility features of TagSpaces, including keyboard access, interface zoom, color themes, screen reader compatibility and how to report accessibility issues.
---

import { WebPageStructuredData } from '@site/src/components/StructuredData';

<WebPageStructuredData />

# Accessibility

TagSpaces aims to be usable by everyone, including people who rely on keyboards, screen readers or other assistive technologies. This page summarizes the accessibility and compatibility features of the desktop application and explains how to get help or report issues.

## Keyboard access

Most common actions in TagSpaces can be performed with the keyboard, including navigating the file list with the arrow keys, opening, renaming and deleting files, and starting a search. All keyboard shortcuts can be viewed and remapped in the application settings — see [Key Bindings](/ui/keybindings/) for the full list of default shortcuts and how to change them.

## Interface zoom

The entire user interface can be zoomed in and out with the keyboard (<kbd>CTRL</kbd>/<kbd>CMD</kbd> + <kbd>+</kbd> / <kbd>-</kbd>) or from the application menu. The chosen zoom level is remembered across sessions.

## Color themes

TagSpaces ships with several light and dark color themes. The application can also follow your operating system's light/dark preference automatically. Theme settings are described in the [Settings](/ui/settings/) section.

## Screen reader compatibility

TagSpaces is built with standard user interface components, which are exposed to the accessibility frameworks of the underlying platforms (UI Automation on Windows, VoiceOver/NSAccessibility on macOS, AT-SPI on Linux). We are continuously improving accessible names, structure and focus visibility throughout the application.

<!-- ## Conformance reporting

An Accessibility Conformance Report (based on the VPAT®, Revised Section 508 edition) for TagSpaces Lite and TagSpaces Pro is available upon request — please contact us at [contact@tagspaces.org](mailto:contact@tagspaces.org). -->

## Feedback and support

If you encounter an accessibility problem or have a suggestion, please report it in the [issue tracker](https://github.com/tagspaces/tagspaces/issues) or ask in the [community forum](https://tagspaces.discourse.group). Support is provided through text-based channels (email, forum and issue tracker), accommodating different communication needs.
