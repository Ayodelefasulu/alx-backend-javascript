function bakeCake(){
  return new Promise((resolve, reject)=>{
    console.log("Preparing to bake");

    setTimeout(()=>{
      let success = true;

      if (success) {
        resolve(console.log("The cake is READY!"));
      } else {
        reject(console.log("The cake is NOT READY!"));
      }
    }, 2000)
  });
}

//var [message, error] = ["Good", "Bad"];
bakeCake()
  .then((message="good")=>{
    //const message = "good";
    console.log(message);
  })
  .catch((error="bad")=>{
    //const error = "bad";
      console.log(error);
    });
