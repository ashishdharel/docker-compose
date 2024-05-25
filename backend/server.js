// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Specify a port number for the server
const port = 2000;

// Define a route that responds with "OK"
app.get('/', (req, res) => {
  res.send('OK Guys Backend is running hai!!!');
});

// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port} and your API backend is up`);
});
