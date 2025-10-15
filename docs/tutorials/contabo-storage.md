---
title: How to use Contabo to store your files
tags: [tutorial]
draft: false
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

[Contabo](https://contabo.com/de/object-storage/) offers affordable cloud infrastructure and storage solutions hosted in Germany and other EU locations. Currently (October 2025) they are offering 250 GB for roughly 3 € per month, which sound very reasonable. For users in the European Union or those concerned about **GDPR compliance**, Contabo provides a strong alternative to US-based cloud providers by keeping your data under strict EU privacy and data protection laws.

In this tutorial, we’ll walk through how to set up **Contabo Object Storage** as a location in **TagSpaces**, allowing you to manage, tag, and browse your files directly from Contabo’s S3-compatible storage.

---

## Creating a bucket

1. **Create a Contabo account** at [contabo.com](https://contabo.com) and log in.
2. Navigate to **Storage → Object Storage**.
3. Click **Create bucket** to make a new storage bucket.

<CenteredImage src="/media/contabo/create-bucket.avif" caption="Creating a bucket" showCaption/>

Once created, you’ll see your bucket appear in the **bucket list**:

<CenteredImage src="/media/contabo/buckets-list.avif" caption="Get the bucket URL from the bucket list" showCaption/>

You can optionally adjust the **bucket properties** such as name purchase space, auto-scaling, and other options:

<CenteredImage src="/media/contabo/bucket-settings.avif" caption="The settings of the new bucket" showCaption/>

---

## Getting the access tokens

To connect your bucket with external tools like TagSpaces, you’ll need API access with **S3 credentials**.

1. Go to your **Account → Security & Access** section.
2. Scroll down to find the **S3 Object Storage Credentials** area.
3. There, you’ll find your **Access Key** and **Secret Key** — these will be required later.

<CenteredImage src="/media/contabo/access-keys.avif" caption="The access key for your bucket in the account area" showCaption/>

---

## Connecting the bucket to TagSpaces

Now it’s time to connect your Contabo storage to **TagSpaces**.

1. Open **TagSpaces**.
2. Click the **New** button and select **New Location**.
3. In the dialog, set the **Location Type** to **Object Storage**.
4. Fill in the required fields:
   - **Location name** – any name you prefer
   - **Bucket name** – the name of your Contabo bucket
   - **Access key** and **Secret key** – from the previous step
   - **URL** – the endpoint from your bucket list

:::important
Remove the **bucket name** from the URL when entering it into TagSpaces, e.g.: https://eu2.contabostorage.com/.
:::

Once everything is set, click **OK** to create the location.

<CenteredImage src="/media/contabo/connect-contabo-location.avif" caption="Connecting the bucket as a location in TagSpaces" showCaption/>

You can now browse, tag, and organize your Contabo files directly in TagSpaces!

---

## Creating additional users with restricted rights

If you want to give others limited access to your buckets, Contabo allows creating **additional user accounts**.

1. Go to **Account → User Management**.
2. Click **Create User**.
3. Enter the email address of the user who should have access.
4. Choose the appropriate permission level:
   - **Full access**
   - **Read only**
   - **Read and write**

:::warning
These permissions apply **globally to all buckets** — per-bucket permissions are not yet supported.
:::

Click **Create** to finalize the new user.

<CenteredImage src="/media/contabo/create-additional-account.avif" caption="Creating an additional user with restricted rights" showCaption/>

The new user can log into the Contabo admin console, navigate to  
**Account → Security & Access → S3 Object Storage Credentials**, and obtain their own access and secret keys.

---

## Conclusion

By connecting **Contabo Object Storage** with **TagSpaces**, you can build your own privacy-respecting, self-managed cloud system — a personal alternative to Dropbox or Evernote.  
You maintain **full control** over your data, stored safely under **EU GDPR standards**.

While Contabo’s management tools are still developing (for example, limited per-bucket permissions), it remains an excellent choice for users who value **data sovereignty**, **cost efficiency**, and **GDPR compliance**.

---

:::info Congrats
You now have your own cloud-based TagSpaces location hosted in the EU!
:::
