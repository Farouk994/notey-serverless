'use strict';
const DynamoDB = require('aws-sdk/clients/dynamodb');
const documentClient = new DynamoDB.DocumentClient({ region: 'us-east-1' });

// if API Gateway calls this lambda function it is passing in the event object, and the context object then we can use the context object to get the function name
module.exports.createNote = async (event, context, cb) => {
  let data = JSON.parse(event.body); // Get the data from the body
  try {
    const params = {
      TableName: 'notes',
      Item: {
        notesId: data.id,
        title: data.title,
        body: data.body,
      },
      ConditionExpression: 'attribute_not_exists(notesId)', // Check if the id already exists
    };
    await documentClient.put(params).promise(); // Put the data into the database in the notes table
    cb(null, {
      statusCode: 201, // Created status code for the response
      body: JSON.stringify(data),
    });
  } catch (error) {
    cb(null, {
      statusCode: 500, // error message
      body: JSON.stringify({ message: error.message }),
    });
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.updateNote = async (event) => {
  let noteId = event.pathParameters.id; // Get the id from the path
  return {
    statusCode: 200,
    body: JSON.stringify(`Note ${noteId} has been updated`),
  };
};

module.exports.deleteNote = async (event) => {
  let noteId = event.pathParameters.id; // Get the id from the path
  return {
    statusCode: 200,
    body: JSON.stringify(`Note ${noteId} has been deleted`),
  };
};

module.exports.getAllNotes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(`All notes are fetched`),
  };
};
