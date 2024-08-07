function bakeCake(){
  return new Promise((resolve, reject)=>{
    console.log("Preparing to bake");

    setTimeout(()=>{
      let success = true;

      // Try with or without console.log()
      if (success) {
        resolve("The cake is READY!");
      } else {
        reject(console.log("The cake is NOT READY!"));
      }
    }, 2000)
  });
}

//const b = bakeCake();
//console.log(b instanceof Promise);
//var [message, error] = ["Good", "Bad"];

bakeCake()
  .then((message="good")=>{
    console.log(message);
  })
  .catch((error="bad")=>{
      console.log(error);
    });
