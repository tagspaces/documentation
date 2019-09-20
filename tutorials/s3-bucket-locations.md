# Cloud Locations in TagSpaces PRO based on AWS S3

## Motivation

TagSpaces PRO provides the ability to connect AWS S3 compatible buckets as locations. This offers many new capabilities and use cases.

## Create a bucket in AWS S3
In order to create a AWS S3 bucket you have to go the Amazon Web Services [website](https://aws.amazon.com/) and register an account there. Once you are register and logged in go the services section and choose from there the S3, as shown in the next screenshot

![Choose AWS S3](/media/aws/aws-s3-start.png)

And then in order to create a new bucket choose the *Create Bucket* button.

![Create S3 bucket](/media/aws/aws-s3-create.png)

On the next screen you can choose the name of the bucket and the AWS region for the hosting. Be careful by choosing the name of the bucket, because a later rename is not possible.

![Create S3 bucket, choose name and region](/media/aws/aws-s3-create-name.png)

Activating the encryption is an optional, but recommended step.

> Note that this is a server side and not an end to end encryption.

![Create S3 bucket encryption](/media/aws/aws-s3-create-encryption.png)

Leave the default setting for access.

![Create S3 bucket access settings](/media/aws/aws-s3-create-access.png)

Review the settings and click the *Create bucket* button.

![Review S3 bucket](/media/aws/aws-s3-create-overview.png)

Once you have successfully created the bucket you should see the following screen.

![Create S3 bucket success](/media/aws/aws-s3-create-success.png)

## Set the CORS setting of the bucket
This is an optional step, needed only if you want to access the bucket from TagSpaces Enterprise edition.

![Create S3 bucket](/media/aws/aws-s3-cors.png)

The XML config, can be copied from the section bellow.


    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>HEAD</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    </CORSConfiguration>


> You can remove the *PUT* and *DELETE* lines, if you want to disable the writing and deleting operation from TagSpaces Enterprise.

> It is recommended to put in the *AllowedOrigin* line, the domain from which you will access this bucket. E.g.: https://example.com

## Create user for the access of the bucket.
Accessing the bucket with your account is not recommended.
Create a user for accessing this bucket in AWS IAM

## Upload files to your bucket
The easies way to upload files to your bucket is to use the build upload functionality, as seen in the next screenshot. But first you should create a folder in the bucket, which will serve as a root folder. You can name if for example *rootfolder*.

![Create S3 bucket root folder](/media/aws/aws-s3-create-rootfolder.png)

Now you can upload files using the web interface.

![Create S3 bucket](/media/aws/aws-s3-upload.png)

Alternatively you can use the AWS CLI (command line tools), with the following command.

    aws s3 sync local-bucket-folder s3://your-bucket-name/rootfolder

This will sync all files and folder from your local folder called *local-bucket-folder* to the subfolder with the name *rootfolder* in the bucket your bucket *your-bucket-name*

You can find out how what is *AWS CLI* and how to install it for your operating system from this [link](https://docs.aws.amazon.com/en_pv/cli/latest/userguide/cli-chap-welcome.html).

## Create S3 location in TagSpaces PRO

Start TagSpace and click on the **Connect a location** button from the locations section. Then you should select the *AES S3 Object Store* radion button, as shown in the following screenshot.

![Create S3 location](/media/aws/tagspaces-create-s3-location.png)

Here you should enter the following parameters:

* **Location Name** - this is a free text with which you will refer your location in this TagSpaces installation
* **Location Path** - is the name of the root folder from the location we have previously create
* **Access Key** - is the key of the IAM user
* **Secret Access Key** - is the secret key of the IAM user
* **Bucket Name** - self explaining ...
* **Region** - is the region of hosting for your bucket

Once you click **OK** the location will be create and its content should be listed in TagSpaces.

There are some advanced settings with can be useful for S3 locations.

* **Open this location in read-only mode** - this will switch the UI interface of TagSpaces in readonly mode. It is particularly useful for location to which the IAM user has only read-only access.
* **Switch to manual index creation with persistend index** - this option will disable the indexing of the location on its opening. Instead it will try to load the previously create index file. This is useful for large locations with many files, where the initial indexing could take a lot of time.

