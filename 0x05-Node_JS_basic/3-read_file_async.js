const fs = require('fs').promises;

function countStudents(path) {
  // Return a Promise
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          throw new Error('Cannot load the database');
        }

        const headers = lines[0].split(',');
        const studentRecords = lines.slice(1);

        const fieldMap = {};

        // Process each student record
        for (const line of studentRecords) {
          const student = line.split(',');

          // Only process valid rows with the correct number of fields
          if (student.length === headers.length) {
            const firstname = student[0];
            const field = student[3];

            if (!fieldMap[field]) {
              fieldMap[field] = [];
            }
            fieldMap[field].push(firstname);
          }
        }

        const totalStudents = studentRecords.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(fieldMap)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
