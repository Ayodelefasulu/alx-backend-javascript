import { readDatabase } from '../utils.js'; // Ensure proper export in utils.js

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = req.app.get('dbPath'); // Retrieve the db path set in the server
    try {
      const students = await readDatabase(dbPath);
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let response = 'This is the list of our students\n';
      fields.forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. `
                    + `List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbPath = req.app.get('dbPath');
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(dbPath);
      const studentsInMajor = students[major] || []; // This should retrieve the list of students for the specified major
      res.status(200).send(`List: ${studentsInMajor.join(', ')}`); // Send the formatted list
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
