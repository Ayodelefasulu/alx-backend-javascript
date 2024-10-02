const express = require('express');
const readFileAsync = require('./3-read_file_async');
// Import your async file reading function
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  const dbPath = process.argv[2]; // Get the database path from command line arguments
  if (!dbPath) {
    return res.status(500).send('No database provided'); // Return error if no database path is given
  }

  try {
    // Call the function that reads the CSV and gets the students
    const result = await readFileAsync(dbPath);
    return res.send(`This is the list of our students\n${result}`); // Ensure this return statement is consistent
  } catch (error) {
    return res.status(500).send('Cannot load the database'); // Return error if something goes wrong
  }
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
