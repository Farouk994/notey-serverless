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
  try {
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

module.exports.getNoteById = async (event) => {
  let id = event.pathParameters.id; // Get the id from the path
  const params = {
    TableName: 'notes',
    Key: {
      notesId: id,
    },
  };

  try {
    const data = await documentClient.get(params).promise();
    if (!data.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Note not found' }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify(data.Item),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

module.exports.getAllNotes = async (event) => {
  try {
    const params = {
      TableName: 'notes',
    };
    const data = await documentClient.scan(params).promise();
    if (data.Items.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'No notes found' }),
      };
    } else {
      return { statusCode: 200, body: JSON.stringify(data.Items) };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
