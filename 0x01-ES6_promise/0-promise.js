// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, such as fetching data from an API
    const success = true; // Change this to false to simulate a rejection

    if (success) {
      resolve('Success: Data fetched from API');
    } else {
      reject('Error: Failed to fetch data from API');
    }
  });
}

export default getResponseFromAPI;

