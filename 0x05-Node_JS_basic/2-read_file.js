const fs = require('fs'); // Import the 'fs' module for file operations

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the content by new lines, filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database'); // If no valid data, throw an error
    }

    // Extract the header and data rows
    const headers = lines[0].split(','); // The first line is the header
    const studentRecords = lines.slice(1); // All other lines are student records

    // Initialize a map to store students by field
    const fieldMap = {};

    // Process each student record
    for (const line of studentRecords) {
      const student = line.split(',');
      if (student.length !== headers.length) continue; // Skip incomplete/invalid rows

      const firstname = student[0];
      const field = student[3];

      // Group students by field
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    }

    // Calculate the total number of students
    const totalStudents = studentRecords.length;
    console.log(`Number of students: ${totalStudents}`);

    // Display the number of students and their first names in each field
    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Catch and display errors if the file can't be read or processed
    console.error('Cannot load the database');
  }
}

// Export the function for use in other files
module.exports = countStudents;
