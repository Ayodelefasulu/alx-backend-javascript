export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    //return [];
    const a = arr.map(ar => ar.id);
    return a;
  } else {
    //const a = arr.map(ar => ar.id);
    //return a;
    return [];
  }
}
