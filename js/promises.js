// exmaple:
// let p = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation successful */) {
//         resolve(value); // Fulfill the promise with a value
//     } else {
//         reject(error); // Reject the promise with an error
//     }
// });

// let p = new Promise((resolve, reject) => {
//   let isTrue = true;
//   if (isTrue) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });

// storing promise in variable
// const promise = new Promise(function (resolve, reject) {
//   // async tasks
//   // DB calls
//   setTimeout(function () {
//     console.log("Asyn task is complete");
//     resolve();
//   }, 2000);
// });

// without storing it in variable
// promise.then(function () {
//   console.log("Promise resolved");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Another async task is completed");
//     resolve();
//   }, 3000);
// }).then(function () {
//   console.log("Another async task resolved");
// });

// // third promise
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Moeez", email: "moeez@gmail.com" });
//   }, 2000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// fourth promise
// const promiseFourth = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     // let error = true;
//     if (!error) {
//       resolve({ username: "Moeez", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 2000);
// });

// promiseFourth
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//     // return user.username;
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is eihter resolved or rejected"));

// promise five
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// // sixth promise
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 300);
// });

// myPromise.then((greet) => {
//   console.log(greet);
// });
//   .catch((error) => {
//     console.log(error);
//   });

// Seventh promise
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
  //   resolve("Hello World");
});

promiseA.then((value) => console.log("asynchronus logging has value:", value));
// promiseA.then((data) => console.log("asynchronus logging has Text:", data));

console.log("immediate logging");

// promise related to the promise success
const myPromiseP = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 250);
});

myPromiseP.then((successMessage) => {
  console.log(`Yay! ${successMessage}`);
});

// promise chaining
// // Promise practice using promise chaining
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds");
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("We are done");
//     return 2;
//   })
//   .then((value) => {
//     console.log("We are done again");
//   });

// load script function using promises
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let loadScriptPromise = loadScript("http://localhost:5500");
loadScriptPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// promise methods
let newPromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

let newPromiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Another promise resolved");
  }, 3000);
});

let newPromiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 4000);
});

// Promise.all // waits for all promises to resolve
// If any promise is rejected, it will reject the entire Promise.all
// It returns an array of resolved values in the same order as the promises were passed
// It is useful when you want to wait for multiple asynchronous operations to complete before proceeding
// It will reject if any promise is rejected, otherwise it will resolve with an array of values

Promise.all([newPromiseOne, newPromiseTwo, newPromiseThree])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.log("Error in one of the promises:", error);
  });

// Promise
// .allSettled //  waits for all promises to settle (either resolved or rejected)
// It returns an array of objects with the status and value or reason of each promise
// It does not reject if any promise is rejected
// It is useful when you want to know the outcome of all promises, regardless of whether they were resolved or rejected

Promise.allSettled([newPromiseOne, newPromiseTwo, newPromiseThree])
  .then((results) => {
    console.log("All promises settled:", results);
  })
  .catch((error) => {
    console.log("Error in one of the promises:", error);
  });

// Promise
// .race // returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects
// It returns the value of the first settled promise
// It is useful when you want to wait for the first completed operation among multiple promises
// It will reject if the first promise is rejected, otherwise it will resolve with the value of the first resolved promise

Promise.race([newPromiseOne, newPromiseTwo, newPromiseThree])
  .then((value) => {
    console.log("First promise resolved:", value);
  })
  .catch((error) => {
    console.log("Error in the first promise:", error);
  });

// Promise
// .any // returns a promise that resolves as soon as one of the promises in the array resolves
// If all promises are rejected, it rejects with an AggregateError containing all rejection reasons
// It is similar to Promise.race, but it ignores rejections and only resolves with the first fulfilled promise
// It is useful when you want to wait for the first successful operation among multiple promises

Promise.any([newPromiseOne, newPromiseTwo, newPromiseThree])
  .then((value) => {
    console.log("First fulfilled promise:", value);
  })
  .catch((error) => {
    console.log("All promises were rejected:", error);
  });
