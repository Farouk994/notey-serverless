# Notey-serverless

1. Notey-serverless is a NodeJS-based serverless framework for deploying and managing Lambda functions on AWS. It allows users to create and deploy Lambda functions easily, with minimal configuration.

## Prerequisites

- Before getting started with <strong>notey-serverless</strong>, there are a few prerequisites you need to meet:

### Install serverless framework 
- `npm i serverless`

### Login to your AWS account.
- Create an <strong>IAM user</strong> with appropriate permissions, and get its credentials to configure with the serverless CLI.
- Getting started
- Follow these steps to get started with <strong>notey-serverless:</strong>

### Communicate with AWS CLI locally: 
- Run the following command in your terminal from serverless to configure the default profile, replacing key and secret with your AWS credentials:
`serverless config credentials --provider aws --key <AWS_ACCESS_KEY> --secret <AWS_SECRET_KEY>`
- Create a new serverless project with NodeJS: Run the following command:
`serverless create -t aws-nodejs`
- Create a new Lambda function in the serverless.yml file, and add a handler and events array.

### Deploy the serverless application to AWS:
`serverless deploy`

### Issues while deploying
- If you encounter issues while deploying notey-serverless, try the following solutions:
- Make sure your AWS CLI is linked with your local environment. To check this, run the following command in your terminal:
`aws s3 ls`
- The command above lists the S3 buckets in your AWS account. If the account is not added or returns an error, add your account using the aws configure command. Add your AWS access key, then secret key and region. For Default output format [None]:, you can skip it. To review your input, paste the following command in your terminal:

sh
Copy code
aws sts get-caller-identity
Try the endpoint in Postman to see if the Lambda function works. The example endpoint is as follows:

`POST https://<random_string>.execute-api.<region>.amazonaws.com/dev/notes`
Configuring CloudFormation resources
To configure CloudFormation resources, follow these steps:

Review the documentation for setting up DynamoDB with AWS CloudFormation. The link is as follows:

SetUp DynamoDB with AWS Cloudformation

Since YAML is being used, copy the information from the documentation in YAML configuration. Required properties include:

KeySchema
TableName
Configuring Lambda functions with DynamoDB
To configure Lambda functions with DynamoDB, follow these steps:

Review the DynamoDB Javascript SDK Docs.
The Document Client simplifies working with items in Amazon DynamoDB by abstracting away the notion of attribute values. This abstraction annotates native JavaScript types supplied as input parameters, as well as converts annotated response data to native JavaScript types.
Install the aws-sdk package.
Add permission to add data inside the DynamoDB table.
Consider using Cloud Formation Intrinsic functions or a Serverless plugin, such as serverless-iam-roles-per-function.
