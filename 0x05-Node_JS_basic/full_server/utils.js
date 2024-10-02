// full_server/utils.js
import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = {};
    lines.forEach((line) => {
      const [firstName, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName.trim());
    });

    return students;
  } catch (error) {
    throw new Error('File not accessible');
  }
};

export default readDatabase;
