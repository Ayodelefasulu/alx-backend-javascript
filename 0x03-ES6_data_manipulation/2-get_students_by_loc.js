export default function getStudentByLocation(arr, city) {
  const b = arr.filter(ar => ar['location'] === city);
  return b;
}
