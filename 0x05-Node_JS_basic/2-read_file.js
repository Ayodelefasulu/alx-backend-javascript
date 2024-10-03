const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split data into lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line.length > 0);

    // Parse the CSV content (skip header)
    const students = lines.slice(1);

    // Log the number of students
    console.log(`Number of students: ${students.length}`);

    // Create a dictionary to group students by field
    const fields = {};

    // Loop through the students, split each line by the CSV delimiter, and group by field
    students.forEach((student) => {
      const [firstname, , , field] = student.split(','); // Destructuring without unused variables

      // Check if the field already exists in the dictionary
      if (!fields[field]) {
        fields[field] = [];
      }

      // Add the student's first name to the appropriate field group
      fields[field].push(firstname);
    });

    // Log the number of students in each field and list their first names
    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
