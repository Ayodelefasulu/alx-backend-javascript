/*function makeBed(x="Hello") {
  return new Promise((resolve, reject)=> {
    console.log("About to start something");

    const success = true;

    if (success) {
      resolve(console.log(`Cake is Ready ${x}`));
    } else {
      reject(console.log("No Cake today"));
    }
  });
};

makeBed().then("I have done it").catch("{}");
*/

function makeBed(x="Hello") {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log("About to start something");

      const success = true;

      if (success) {
        resolve(console.log(`Cake is Ready ${x}`));
      } else {
        reject(console.log("No Cake today"));
    }}, 3000)
  });
};

makeBed().then("I have done it").catch("{}");
