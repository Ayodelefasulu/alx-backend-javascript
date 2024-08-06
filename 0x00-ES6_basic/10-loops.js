// 10-loops.js

export default function appendToEachArrayValue(array, appendString) {
  // Use `let` to declare variables
  let index = 0;

  for (const value of array) {
    array[index] = appendString + value;
    index++;
  }

  return array;
}

