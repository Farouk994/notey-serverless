# notey-serverless

- Install serverless framework - `npm i serverless`
- login AWS account 
- Create IAM user(To use the credentials in local env) to configure with serverless CLI then get credential 

* Communicating with AWS CLI locally  
- `serverless config credentials --provider aws --key 1234 --secret 5678` (in terminal from serverless to configure default profile, replace key and secret with aws credentials)

* Creating new serverless project with nodeJS 
- `serverless create -t aws-nodejs`

* Create a new lambda function in the serverless yml file and add a handler and events array

* Then after all that do a serverless deploy
- `serverless deploy` - will package the service and deploy it on aws 

### Issues while Deploying
- Make sure your AWS cli is linked with your local environment 
  - To check this you can type this in terminal `aws s3 ls` (lists s3 buckets in your AWS account)
- If account not added or returns error then add account `aws configure` 
  - Add your account aws access key, then secret key and region, for `Default output format [None]:` you can skip it 
- To review your input paste this in terminal `aws sts get-caller-identity`

### After deploying
- Try the endpoint in postman to see if the lambda function works 
  - Example endpoint: POST - `https://6oxo1lmitg.execute-api.us-east-1.amazonaws.com/dev/notes`

### Configuring CloudFormation resource
- Documentation [SetUp DynamoDB with AWS Cloudformation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)
- Since yml is being used copy info from the documentation in yml configuration
  - Required properties include 
    - KeySchema
    - TableName

### Configuring lambda functions with dynamoDB 