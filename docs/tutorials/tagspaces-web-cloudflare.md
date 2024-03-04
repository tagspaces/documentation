---
title: Install on Cloudflare
tags: [tutorial]
---

# Install TagSpaces Web on Cloudflare

In this tutorial you will learn how to install TagSpaces Web or TagSpaces Pro Web on a **Cloudflare Pages**.

**Cloudflare** is a cloud provider, offering with their [**Pages**](https://pages.cloudflare.com/) product a completely free way for hosting static web pages, with https support and unlimited bandwidth.

## Register a free account on Cloudflare

Go to [Cloudflare Pages](https://pages.cloudflare.com/) and sign up for a new account.

## Install Wrangler 2.0 CLI

Wrangler is command line application offered by Cloudflare for managing the deployments. Install it globally with the following command:

```
npm install -g wrangler
```

:::info
You will need **node.js®** on your computer in order to user the **npm** command. You can get it from here: https://nodejs.org/en/download/
:::

## Authenticate Wrangler with your Cloudflare account

Open the terminal or command prompt and execute the following command to connect wrangler to your Cloudflare account.

```
wrangler login
```

## Unzip tagspaces-web package

Extract the content of the **TagSpaces Web** or **TagSpaces Pro Web** package to a folder from which you will later manage the deployments and open a terminal / command line prompt there.

## Create new deployment

Execute the following command and follow the instruction to create a new Cloudflare deployment.

```
CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID_HERE npx wrangler pages publish web
```

Here **web** is the folder of the unzipped tagspaces' package.

:::info
Replace the YOUR_ACCOUNT_ID_HERE with the account which you will get from Cloudflare.

![Cloudflare account ID](/media/cloudflare-account-id.png)
:::

**That's it!**

Go to https://your-project-name.pages.dev and you should be able to access TagSpaces Web.

## Some further optional steps

### Setup a sub-domain to the deployment

The needed steps are described in here: https://developers.cloudflare.com/pages/platform/custom-domains/

### Restrict the access with password

You can follow this tutorial to achieve this: https://dev.to/charca/password-protection-for-cloudflare-pages-8ma

:::info
If you need a solution, where the files are behind a login, you may take a look on [**TagSpaces Enterprise**](https://www.tagspaces.org/products/enterprise/),
where we offer a setup based on AWS services supporting user management, 2FA, automatic indexing and countless customization possibilities.
:::
