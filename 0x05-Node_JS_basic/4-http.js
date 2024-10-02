const http = require('http');

// Create a server that responds with "Hello Holberton School!" for any request
const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code for OK
  res.setHeader('Content-Type', 'text/plain'); // Set response content type as plain text
  res.end('Hello Holberton School!'); // Send response
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app; // Export the server
