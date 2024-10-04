/*
const http = require('http');
const countStudents = require('./3-read_file_async'); // Reuse 3-read_file_async.js

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
*/
const http = require('http');
const fs = require('fs');
// const path = require('path');

// Function to read the CSV file asynchronously
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split data into lines and filter out empty lines
      const lines = data.trim().split('\n').filter((line) => line.length > 0);

      // Parse the CSV content (skip header)
      const students = lines.slice(1);

      // Count the number of students and group them by field
      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Create result message
      let result = `Number of students: ${students.length}\n`;
      for (const [field, firstnames] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
      }
      resolve(result.trim());
    });
  });
}

// Create HTTP server
const app = http.createServer((req, res) => {
  const { url } = req;
  const databaseFile = process.argv[2]; // File passed as an argument

  if (url === '/') {
    // Root URL: return "Hello Holberton School!"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    // /students URL: read the file and return student information
    countStudents(databaseFile)
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(result);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    // Handle unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
