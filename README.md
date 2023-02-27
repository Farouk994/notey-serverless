# notey-serverless

- Install serverless framework - npm i serverless
- login AWS account 
- Create IAM user(To use the credentials in local env) to configure with serverless CLI then get credential 

* Communicating with AWS CLI locally  
- `serverless config credentials --provider aws --key 1234 --secret 5678` (in terminal from serverless to configure default profile, replace key and secret with aws credentials)

* Creating new serverless project with nodeJS 
- `serverless create -t aws-nodejs`