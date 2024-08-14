// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export a function named queryAPI
export function queryAPI(endpoint) {
  // Ensure the endpoint is an object
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Get the current count from the WeakMap or initialize it to 0
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Check if the count is 5 or more and throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Optionally, you can return the count if needed
  return count;
}
