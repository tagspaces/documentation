---
title: How to use AWS S3 buckets as locations
tags: [tutorial]
---

import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

<ProFeature />

TagSpaces Pro, Pro Web and Enterprise provide the ability to connect AWS S3 compatible object storage (buckets) as locations. This opens the app for many new capabilities and use cases. By enabling you to store files online, you can build and easily manage your own personal cloud storage.

## Step 1 - Create a bucket in AWS S3

In order to create a AWS S3 bucket you have to go the Amazon Web Services [website](https://aws.amazon.com/) and register an account there. Once you are register and logged in go the services section and choose from there the S3, as shown in the next screenshot

![Choose AWS S3](/media/aws/aws-s3-start.png)

And then in order to create a new bucket choose the _Create Bucket_ button.

![Create S3 bucket](/media/aws/aws-s3-create.png)

On the next screen you can choose the name of the bucket and the AWS region for the hosting. Be careful by choosing the name of the bucket, because a later rename is not possible.

![Create S3 bucket, choose name and region](/media/aws/aws-s3-create-name.png)

Activating the encryption is an optional, but recommended step.

> Note that this is a server side and not an end to end encryption.

![Create S3 bucket encryption](/media/aws/aws-s3-create-encryption.png)

Leave the default setting for access.

![Create S3 bucket access settings](/media/aws/aws-s3-create-access.png)

Review the settings and click the _Create bucket_ button.

![Review S3 bucket](/media/aws/aws-s3-create-overview.png)

Once you have successfully created the bucket you should see the following screen.

![Create S3 bucket success](/media/aws/aws-s3-create-success.png)

## Step 2 - Set the CORS settings of the bucket

This is an optional step, needed only if you want to access the bucket from [TagSpaces Enterprise](https://www.tagspaces.org/products/enterprise/) edition.

![Create S3 bucket](/media/aws/aws-s3-cors.png)

The JSON config, can be copied from the section bellow.

    [
        {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "PUT", "POST", "HEAD", "DELETE"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": ["ETag"]
       }
    ]

> You can remove the _PUT_ and _DELETE_ lines, if you want to disable the writing and deleting operation from TagSpaces Enterprise.

> It is recommended to put in the _AllowedOrigin_ line, the domain from which you will access this bucket. E.g.: https://example.com

## Step 3 - Create user for accessing the bucket.

Accessing the bucket with the credentials from your main account is not recommended. That's in this section we will guide through the process of user creation in the AWS IAM service. After successfully creating the user here, you will be able to use it for accessing the bucket from TagSpaces.

As first step the [AWS IAM](https://console.aws.amazon.com/iam/) service should be opened.
![Open IAM service](/media/aws/aws-iam-start.png)

Here you can click on the **Users** section, ash shown in the screenshot.
![IAM service overview](/media/aws/aws-iam-overview.png)

Then you have to click on the **Add user** button, in order to start the user creation process.
![IAM create user](/media/aws/aws-iam-create-user.png)

And enter the **name** and select the type of access for this user. In order to use this user for API call, you have to enable the **Programmatic access**.
![Set user name in IAM](/media/aws/aws-iam-user-name.png)

In the next steps you have to set the permission for this user, by creating a custom policy. Please select the **Attach existing policies directly** and then click on the **Create policy** button.
![Set user policy in IAM](/media/aws/aws-iam-user-policy.png)

In newly opened browser tab with the policy editor, click on the JSON section.
![Create user policy in IAM](/media/aws/aws-iam-policy-creation.png)

There you can enter and adjust your policies. The following JSON snipped, is a policy for a user who can just list and retrieve object (read-only user) from the **your-bucket-name** bucket. You should adjust the name of the bucket to suite your setup.

Policy for read-only user:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetObject"],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Sid": "VisualEditor1",
      "Effect": "Allow",
      "Action": "s3:GetAccountPublicAccessBlock",
      "Resource": "*"
    }
  ]
}
```

Policy for user with admin/write access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:ReplicateObject",
        "s3:GetObjectAcl",
        "s3:GetObjectVersionAcl",
        "s3:PutObjectTagging",
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
        "s3:GetObjectTagging",
        "s3:GetMetricsConfiguration",
        "s3:PutObjectAcl",
        "s3:GetBucketPublicAccessBlock",
        "s3:ListBucketMultipartUploads",
        "s3:PutObjectVersionTagging",
        "s3:GetBucketVersioning",
        "s3:GetBucketAcl",
        "s3:PutInventoryConfiguration",
        "s3:GetObjectTorrent",
        "s3:GetBucketCORS",
        "s3:GetBucketLocation",
        "s3:ReplicateDelete",
        "s3:GetObjectVersion"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Sid": "VisualEditor1",
      "Effect": "Allow",
      "Action": "s3:GetAccountPublicAccessBlock",
      "Resource": "*"
    }
  ]
}
```

:::caution
The list of allowed actions in the previous JSON file is only a suggestion. The actions can be reduced, to just those which are really needed for your use case.
:::

Once you are ready and have attached the newly created policy to the user, you can finalize the process. On the last screen you will see the **access key ID** and the **secret access key** of the just created user.
![User creation success IAM](/media/aws/aws-iam-user-success.png)

## Step 4 - Upload files to the bucket

The easies way to upload files to your bucket is to use the build upload functionality, as seen in the next screenshot. But first you should create a folder in the bucket, which will serve as a root folder. You can name if for example _rootfolder_.

![Create S3 bucket root folder](/media/aws/aws-s3-create-rootfolder.png)

Now you can upload files using the web interface.

![Create S3 bucket](/media/aws/aws-s3-upload.png)

Alternatively you can use the AWS CLI (command line tools), with the following command.

    aws s3 sync local-bucket-folder s3://your-bucket-name/rootfolder

This will sync all files and folder from your local folder called _local-bucket-folder_ to the sub folder with the name _rootfolder_ in the bucket your bucket _your-bucket-name_

You can find out how what is _AWS CLI_ and how to install it for your operating system from this [link](https://docs.aws.amazon.com/en_pv/cli/latest/userguide/cli-chap-welcome.html).

## Step 5 - Create cloud location in TagSpaces PRO

Start TagSpaces and click on the **Connect a location** button from the locations section. Then you should select the _AES S3 Object Store_ radio button, as shown in the following screenshot.

![Create S3 location](/media/aws/tagspaces-create-s3-location.png)

Here you should enter the following parameters:

- **Location Name** - this is a free text with which you will refer your location in this TagSpaces installation
- **Location Path** - is the name of the root folder from the location we have previously create
- **Access Key** - is the key of the IAM user
- **Secret Access Key** - is the secret key of the IAM user
- **Bucket Name** - self explaining ...
- **Region** - is the region of hosting for your bucket

Once you click **OK** the location will be create and its content should be listed in TagSpaces.

There are some advanced settings with can be useful for S3 locations.

- **Open this location in read-only mode** - this will switch the UI interface of TagSpaces in readonly mode. It is particularly useful for location to which the IAM user has only read-only access.
- **Switch to manual index creation with persistent index** - this option will disable the indexing of the location on its opening. Instead it will try to load the previously create index file. This is useful for large locations with many files, where the initial indexing could take a lot of time.
