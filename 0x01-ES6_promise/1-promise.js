//var success = true;
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, such as fetching data from an API
    //success = true; // Change this to false to simulate a rejection

    if (success) {
      resolve({"status": "200", "body": "Success"});
    } else {
      reject('Error: The fake API is not working currently');
    }
  });
}

export default getFullResponseFromAPI;
