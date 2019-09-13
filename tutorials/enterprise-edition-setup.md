# Enterprise Version

## Setup data hosting bucket

* Create a private S3 bucket
* Set the CORS setting

`
    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>HEAD</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    </CORSConfiguration>
`

* Create a user for accessing this bucket in AWS IAM
* Install AWS CLI
* Upload the data

    aws s3 sync local-bucket s3://your-bucket-name

## Create S3 location in TagSpaces PRO
This is a optional step.


## Setup web portal hosting bucket

## Hosting the web portal on a webserver