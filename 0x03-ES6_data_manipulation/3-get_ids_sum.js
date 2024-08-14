export default function getStudentIdsSum(students) {
  const sum = students.reduce((n, student) => n + student.id, 0);
  return sum;
}
