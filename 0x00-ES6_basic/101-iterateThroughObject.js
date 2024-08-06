// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  // Use Array.from to convert the iterator into an array, then join the array elements with ' | '
  return Array.from(reportWithIterator).join(' | ');
}

