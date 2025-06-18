// exmaple:
// let p = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation successful */) {
//         resolve(value); // Fulfill the promise with a value
//     } else {
//         reject(error); // Reject the promise with an error
//     }
// });

let p = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

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

// third promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Moeez", email: "moeez@gmail.com" });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// fourth promise
const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true;
    if (!error) {
      resolve({ username: "Moeez", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFourth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
    // return user.username;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is eihter resolved or rejected"));

// promise five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
