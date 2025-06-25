// getting data with fetch api using promises constructor
// setTimeout(() => {
let promise = new Promise((resolve, reject) => {
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  )
    .then(resolve)
    .catch(reject);
});

promise
  //   .then((result) => result.json()) // also correct to write
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    try {
      console.log(data);
      console.log(data[3]); // 4th index complete object
      console.log(data.length); // 12
    } catch (error) {
      console.log(`Could not get products: ${error}`);
    }
  })
  .catch((error) => {
    console.log(`Could not get products: ${error}`);
  });
// }, 5000);

// getting data with fetch api without the promises constructor
let myPromise = fetch("https://jsonplaceholder.typicode.com/users");

myPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });

// using fetch with POST (sending data)
const postData = {
  title: "Hello World",
  body: "This is a post.",
  userId: 1,
};

// fetch("https://jsonplaceholder.typicode.com/comments")
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Post created:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// combining multiple promises
// promise.all
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// promise.any
const fetchPromiseOne = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromiseTwo = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store"
);
const fetchPromiseThree = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromiseOne, fetchPromiseTwo, fetchPromiseThree])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// promise.race
const fetchPromise4 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store"
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.race([fetchPromise4, fetchPromise5, fetchPromise6])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
