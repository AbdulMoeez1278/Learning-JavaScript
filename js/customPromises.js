// Using Promises
// let promise = new Promise((resolve, reject) => {
//   let res = fetch("https://jsonplaceholder.typicode.com/todos/");
//   resolve(res);
// });

// promise
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => {
//     try {
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // using custom promise to fetch data from an api
// let customPromise = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(resolve)
//     .catch(reject);
// });

// customPromise
//   .then((res) => res.json())
//   .then((data) => {
//     try {
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Using promise method to fetch data from an api
// setTimeout(() => {
//   let promise = fetch("https://jsonplaceholder.typicode.com/todos/");
//   // let promiseTwo = fetch("https://api.github.com/users/octocat");
//   promise
//     .then((res) => res.json())
//     .then((data) => {
//       try {
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, 3000);

// // another function using the promises
// function mydata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "Moeez", age: 23 };
//       resolve(data);
//       console.log(data);
//     }, 2000);
//   });
// }

// mydata()
//   .then((data) => {
//     console.log("User data is:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// promises that creates custom data in object form - with object
let promiseObject = new Promise((resolve, reject) => {
  let objectData = { name: "Moeez", age: 23 };
  resolve(objectData);
});

promiseObject
  .then((data) => {
    console.log(data);
    console.log(data.name);
    console.log(data.age);
    // console.log(data[0].name); // type error
  })
  .catch((error) => {
    console.log(error);
  });

// promise that creates custom data in array form - with array
let promiseArray = new Promise((resolve, reject) => {
  let arrayData = ["Moeez", 23, "Jr."];
  resolve(arrayData);
});

promiseArray
  .then((arrayData) => {
    console.log(arrayData);
    console.log(arrayData[0]);
    console.log(arrayData[1]);
    console.log(arrayData[2]);
  })
  .catch((error) => {
    console.log(error);
  });

// Simulate a failed promise and catch the error.
let promiseError = new Promise((resolve, reject) => {
  let errorOccured = true;

  if (errorOccured) {
    // resolve("Promise Succeeded");
    reject("Promise failed: Something went wrong");
  } else {
    resolve("Promise Succeeded");
    // reject("Promise failed: Something went wrong");
  }
});

promiseError
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // console.log("Promise finished (success or failure).");
  });

// Chain two .then() blocks: first returns a number, second multiplies it.
// let number = 5;
let promiseNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = 5;
    resolve(number);
    // resolve(5)
  }, 2000);
});

promiseNumber
  .then((number) => {
    console.log("Received number:", number);
    return number * 2;
  })
  .then((multiplied) => {
    console.log("Multiplied result:", multiplied);
  })
  .catch((error) => {
    console.log(error);
  });

// Example: Custom Promise with Custom Data
// Custom data (could be from database, API, etc.)
const userData = {
  id: 1,
  name: "Moeez",
  isVerified: true,
  //   isVerified: false,
};

// Create a promise that checks if the user is verified
const getUserData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userData.isVerified) {
      resolve(`Access granted to ${userData.name} (ID: ${userData.id})`);
    } else {
      reject("Access denied: User is not verified.");
    }
  }, 2000); // simulate network delay
});

// Consume the promise
getUserData
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Create a `fetchUser()` function that randomly resolves or rejects.
let fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();

    if (random > 0.5) {
      resolve(`Success! Random value: ${random}`);
    } else {
      reject(`Failed! Random value: ${random}`);
    }
  }, 3000);
});

fetchUser
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error)
  });
