const http = require('http');
const countStudents = require('./3-read_file_async'); // Reuse the function from 3-read_file_async.js

// Create the HTTP server
const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Extract the path to the CSV file from process arguments
    const databaseFilePath = process.argv[2];

    if (databaseFilePath) {
      // Use the function from 3-read_file_async.js to handle the CSV file asynchronously
      countStudents(databaseFilePath)
        .then((output) => {
          res.end(output); // Send the students' information after successful reading
        })
        .catch((err) => {
          res.end(err.message); // Send error if reading the file fails
        });
    } else {
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
