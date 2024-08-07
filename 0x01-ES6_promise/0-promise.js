function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Success: Data fetched from API');
    } else {
      reject('Error: Failed to fetch data from API');
    }
  });
}

export default getResponseFromAPI;

