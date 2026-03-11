---
title: Contact Editor
description: TagSpaces Pro extension for displaying VCF vCard contact files with clickable email and phone fields and multi-contact support.
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Contact Editor

<ProFeature />

A TagSpaces extension for viewing and editing files in VCF format. A VCF (vCard File) is a standard file format used to store contact information such as names, phone numbers, email addresses, and other personal details. It is commonly used to exchange contacts between devices, email clients, and address book applications.

## Features

- Preview of VCF files
- Click on an email will open your default email program
- Click on a phone number will trigger the phone calling function of your device (if available)
- These files can contain one or many contact, all of them will be displayed
- Search in the contact's content

<CenteredImage
    caption="Screenshot of the contact viewer extension"
    src="/media/extensions/contact-viewer.avif"
    showCaption
    maxWidth="650px"
  />

## Used Libraries

This extension thankfully relies on the following great libraries:

- [vcf.js](https://codeberg.org/jhermsmeier/node-vcf) / [npm-package](https://www.npmjs.com/package/vcf)
- [dompurify](https://github.com/cure53/DOMPurify)
- [mark.js](https://markjs.io/)
- [bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)

## Installation

This extension is pre-installed in TagSpaces Pro.

## License

Proprietary
