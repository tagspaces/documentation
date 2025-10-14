---
title: How to use Wasabi buckets as locations
tags: [tutorial]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

TagSpaces offers a way to connect S3 compatible object storage. Recently we figured out that this functionality works pretty well with the Wasabi cloud storage service and so I decided to write the following tutorial showing the steps needed to use TagSpaces with this service. [Wasabi](https://wasabi.com/cloud-storage-pricing/#three-info) is a affordable and reliable alternative to object storage offered by Amazon's AWS. By the time of writing the price is 5.99 $ per TB storage per month and they are not charging for download traffic(egress) or API calls. Which makes their offer in my opinion very attractive.

In order to follow this tutorial you will need a Wasabi account. Luckily they offer a 30 days [trial period](https://wasabi.com/sign-up/), so you can test the service for free.

## Creating a bucket

After creating the account and successful login, you need to create your first bucket. The buckets are places where you can store later your files. The creation is pretty easy, go to the bucket section and click on the "CREATE BUCKET" button. In the next screenshot you will see the bucket creation dialog, where you can define the bucket name (please don't use space there) and the region, which the physical location of the data center storing your files. I was pleased to see that since March 2022 there is the eu-central-2 region which located in Germany and GDPR compliant.

![Create a bucket in wasabi](wasabi-locations/create-bucket.png)

After clicking the "NEXT" button you will see the a page where you can enable some optional feature such logging or object locking.

![Set options for the wasabi bucket](wasabi-locations/create-bucket-properties.png)

When finish the bucket creation wizard the newly created bucket will appear in the bucket section.

## Create an access policy

Policies are needed to grand certain users or user groups access to the specific buckets. In order to create a policy you have to open the policy section and click on the "CREATE POLICY" button, visible in the next screenshot.

![Listing the existing policies](wasabi-locations/policy-list.png)

In the policy generation form which will appear you can give the policy a suitable name and description. Bellow you will find two policy templates in JSON format for read-only and for read-write access to the bucket. You can copy and paste them in the "Policy document" section visible in the following screenshot. You should adjust the bucket's name in the Resource section (highlighted) and optionally add or remove some actions.

![Creating a new policy](wasabi-locations/create-policy.png)

:::tip
From a security perspective it makes sense to have a separate policy for every bucket you want to make accessible in TagSpaces or other external tools.
:::

### Read-write policy for a bucket

The following policy gives you a full access on the bucket.

:::note
In the policy bellow you have to replace `<BucketName>` with the name of your bucket.
:::

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListBucket",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::<BucketName>"
    },
    {
      "Sid": "AllowReadWriteObjects",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": "arn:aws:s3:::<BucketName>/*"
    }
  ]
}
```

<!-- ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:GetObjectAcl",
        "s3:GetObjectVersionAcl",
        "s3:DeleteObject",
        "s3:GetBucketWebsite",
        "s3:GetBucketNotification",
        "s3:GetReplicationConfiguration",
        "s3:ListMultipartUploadParts",
        "s3:PutObject",
        "s3:GetObject",
        "s3:RestoreObject",
        "s3:ListBucket",
        "s3:GetBucketPolicy",
        "s3:GetObjectVersionTorrent",
        "s3:AbortMultipartUpload",
        "s3:GetBucketRequestPayment",
        "s3:PutObjectAcl",
        "s3:ListBucketMultipartUploads",
        "s3:GetBucketVersioning",
        "s3:GetBucketAcl",
        "s3:GetObjectTorrent",
        "s3:GetBucketCORS",
        "s3:GetBucketLocation",
        "s3:GetObjectVersion"
      ],
      "Resource": ["arn:aws:s3:::<BucketName>", "arn:aws:s3:::<BucketName>/*"]
    }
  ]
}
``` -->

:::caution
The list of allowed actions in the previous JSON file is only a suggestion. The actions can be reduced, to just those which are really needed for your use case.
:::

### Read-only policy for a bucket

Depending on your use-case you may want to access the bucket in a read-only mode, with the following policy you can achieve this.

<!-- ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetObject"],
      "Resource": ["arn:aws:s3:::<BucketName>", "arn:aws:s3:::<BucketName>/*"]
    }
  ]
}
``` -->

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListBucket",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::<BucketName>"
    },
    {
      "Sid": "AllowReadObjects",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:GetObjectAcl"],
      "Resource": "arn:aws:s3:::<BucketName>/*"
    }
  ]
}
```

:::note
In the policy above you have to replace `<BucketName>` with the name of your bucket.
:::

### Policy with read-only access for a folder

Sometimes you want to share just a folder or sub-folder and not the whole bucket with someone. For this use case you can use the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListObjectsInFolder",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::<BucketName>",
      "Condition": {
        "StringLike": {
          "s3:prefix": ["<FolderName>", "<FolderName>/*"]
        }
      }
    },
    {
      "Sid": "AllowReadObjectsInFolder",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:GetObjectVersion", "s3:GetObjectAcl"],
      "Resource": "arn:aws:s3:::<BucketName>/<FolderName>/*"
    }
  ]
}
```

<!-- ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": ["arn:aws:s3:::<BucketName>", "arn:aws:s3:::<BucketName>/*"],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["<FolderName>", "<FolderName>/*"]
        }
      }
    },
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:GetObjectAcl",
        "s3:GetObjectVersionAcl",
        "s3:DeleteObject",
        "s3:GetBucketWebsite",
        "s3:GetBucketNotification",
        "s3:GetReplicationConfiguration",
        "s3:ListMultipartUploadParts",
        "s3:PutObject",
        "s3:GetObject",
        "s3:RestoreObject",
        "s3:ListBucket",
        "s3:GetBucketPolicy",
        "s3:GetObjectVersionTorrent",
        "s3:AbortMultipartUpload",
        "s3:GetBucketRequestPayment",
        "s3:PutObjectAcl",
        "s3:ListBucketMultipartUploads",
        "s3:GetBucketVersioning",
        "s3:GetBucketAcl",
        "s3:GetObjectTorrent",
        "s3:GetBucketCORS",
        "s3:GetBucketLocation",
        "s3:GetObjectVersion"
      ],
      "Resource": [
        "arn:aws:s3:::<BucketName>/<FolderName>",
        "arn:aws:s3:::<BucketName>/<FolderName>/*"
      ]
    }
  ]
}
``` -->

:::note
In the policy above you have to replace `<BucketName>` with the name of your bucket and `<FolderName>` with the path of your folder or sub-folder.
:::

## Create a user

So now you may want to create some users which are going to have access to the bucket created previously.

In order to do this, you have to open the user's section in Wasabi console and click on the "CREATE USER" button shown in the next screenshot.

![Creating a new user](wasabi-locations/create-user.png)

In the dialog which wll appear, you have to enter the user's name, click on the "Programmatic (create API key)" checkbox and press "NEXT". In the following section you can add the user to a group, which goes beyond the scope of this tutorial. So clicking one more time on the "NEXT" button will give you the ability to select the policy we have create in the previous section. This is very important step, since without a policy the user will have no rights on the bucket.

![Select policy](wasabi-locations/select-policy.png)

In the next section the API access key and the secret key will be automatically generated.

![Copy the user's credential](wasabi-locations/copy-user-credentials.png)

You can press the copy button in order to save the keys in for example the password manager of your choice.

## Connect the bucket as location in TagSpaces

So now we are ready to connect the Wasabi bucket in TagSpaces. You should choose the **New location** menu item from the menu which will be opened after clicking the **New**-Button, visible on the next screenshot.

![Connect the bucket in TagSpaces Pro](wasabi-locations/connect-bucket.avif)

Now you will be able to enter additional parameters needed for the connection:

- **Type** - please choose here Object Storage from the dropdown
- **Location Name** - a free text for the name of the location in TagSpaces
- **Location Path** - optional parameter, where you can specify a sub-folder of the bucket as root folder for the location
- **Access Key** - generated in the user creation step of this tutorial
- **Secret Access Key** - generated in the user creation step
- **Bucket Name** - as entered in the bucket creation step of this tutorial
- **Endpoint URL** - as select in the bucket creation step (e.g., https://s3.eu-central-1.wasabisys.com/ for the eu-central-1 region of Wasabi,)

Once you confirm the dialog, TagSpaces will try to connect to the bucket and show the files and folders in the bucket.

## Conclusion

In this tutorial we learned how using **TagSpaces** in combination with object storage service providers such as **Wasabi** will allows you to easily create and manage you own **scalable Dropbox like** application.
