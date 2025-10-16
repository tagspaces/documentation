---
title: How to use Garage buckets as locations
tags: [tutorial]
draft: false
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

[Garage](https://garagehq.deuxfleurs.fr/) is an open-source distributed object storage system compatible with the **S3 API**.  
It allows you to **self-host your own S3-compatible storage**, either on a personal server, a NAS, or even across multiple devices.

This makes Garage a perfect solution for **privacy-focused users** or teams who want to keep their data local while still benefiting from a modern, S3-compatible setup.  
In this tutorial, we’ll show how to connect a Garage bucket as a **TagSpaces location**, enabling you to browse and manage files directly from your own Garage instance.

You can find Garage’s full setup guide here: 👉 [Garage Quick Start Documentation](https://garagehq.deuxfleurs.fr/documentation/quick-start/)

Below is a condensed version of the essential setup steps.

## Creating the config file

First, create a Garage configuration file `garage.toml` on macOS or Linux.

```toml
cat > garage.toml <<EOF
metadata_dir = "/var/lib/garage/meta"
data_dir = "/var/lib/garage/data"
db_engine = "sqlite"

replication_factor = 1

rpc_bind_addr = "[::]:3901"
rpc_public_addr = "127.0.0.1:3901"
rpc_secret = "$(openssl rand -hex 32)"

[s3_api]
s3_region = "garage"
api_bind_addr = "[::]:3900"
root_domain = ".s3.garage.localhost"

[s3_web]
bind_addr = "[::]:3902"
root_domain = ".web.garage.localhost"
index = "index.html"

[k2v_api]
api_bind_addr = "[::]:3904"

[admin]
api_bind_addr = "[::]:3903"
admin_token = "$(openssl rand -base64 32)"
metrics_token = "$(openssl rand -base64 32)"
EOF
```

This configuration will create a single-node Garage instance, suitable for local use or testing on your NAS.

## Running the docker image

Next, start Garage using Docker:

```
docker run \
 -d \
 --name garaged \
 -p 3900:3900 -p 3901:3901 -p 3902:3902 -p 3903:3903 \
 -v /Users/username/garage/garage.toml:/etc/garage.toml \
 -v /Users/username/garage/meta:/var/lib/garage/meta \
 -v /Users/username/garage/data:/var/lib/garage/data \
 dxflrs/garage:v2.1.0
```

This command launches Garage with your configuration and exposes the S3 and admin API ports on your local machine.

You can create a convenient alias to use the garage CLI inside the Docker container:

```
alias garage="docker exec -ti dxflrs/garage:v2.1.0 /garage"
```

The garage status command will show your node ID — you’ll need it for the next step.

```
garage status
```

## Configuring the storage and creating a bucket

Once Garage is running, you can set up your layout, create an access key, and define a bucket for TagSpaces.

```
garage layout assign -z dc1 -c 1G 3f60ed4a538fa8ac

garage layout apply --version 1

garage bucket create tstest

garage key create ts-app-key

garage bucket allow \
 --read \
 --write \
 --owner \
 tstest \
 --key ts-app-key
```

This sequence:

- Defines your storage layout
- Applies it
- Creates a bucket named tstest
- Generates a key named ts-app-key
- Grants full permissions (read, write, owner) for that key on the bucket

Example output for the access key:

```
==== ACCESS KEY INFORMATION ====
Key ID: GKbff9ae1cf0f8433b7d797538
Key name: ts-app-key
Secret key: b9b14b9c548c4e4b912c8b3355b7f6a4b9b14b9c548c4e4b912c8b3355b7f6a4
Created: 2025-10-06 20:12:31.237 +00:00
Validity: valid
Expiration: never
```

## Connecting the bucket to TagSpaces

Now it’s time to connect your Garage bucket to **TagSpaces**.

1. Open **TagSpaces**.
2. Click the **New** button and select **New Location**.
3. In the dialog, set the **Location Type** to **Object Storage**.
4. Fill in the required fields:
   - **Location name** – any name you prefer
   - **Bucket name** – your Garage bucket name (tstest in our example)
   - **Access key** and **Secret key** – as created earlier
   - **Endpoint URL** – your Garage endpoint with port number as set in the `garage.toml`, e.g. `127.0.0.1:3901`
   - **Region** - the field should matches the value defined in your garage.toml file — in our case: **garage**

Once everything is set, click **OK** to create the location.

<CenteredImage src="/media/locations/create-garage-s3-location.avif" caption="Screenshot of the dialog to connecting Garage locations in TagSpaces" showCaption/>

You can now browse and tag files stored in your Garage bucket directly from TagSpaces.

## Conclusion

By integrating Garage with TagSpaces, you can create your own fully self-hosted, S3-compatible file system — perfect for privacy-conscious users, home servers, or offline NAS setups.

This setup allows you to enjoy the flexibility of TagSpaces’ metadata and tagging features while keeping your data under your control — no external cloud providers needed.

Garage + TagSpaces = your personal, private cloud. ☁️🔐
