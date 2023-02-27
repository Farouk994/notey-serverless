'use strict';

module.exports.createNote = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'A new note has been created',
        // input: event,
      },
      null,
      2
    ),
  };
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
