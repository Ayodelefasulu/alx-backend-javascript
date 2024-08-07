function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve('Success: Data fetched from API');
    } else {
      reject('Error: Failed to fetch data from API');
    }
  });
}

export default getResponseFromAPI;

