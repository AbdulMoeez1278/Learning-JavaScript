// using async await to fetch data from an api
let apiData = async () => {
  try {
    let response = await fetch("https://api.github.com/users/octocat");
    // let responseTwo = await fetch("https://jsonplaceholder.typicode.com/todos/")
    // console.log(response)

    let data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

apiData();

// using an IIFE for fetching data through an api
// (async function () {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const json = await response.json();
//     if (json.userId == 1) {
//       json.completed == false;
//     } else {
//       json.completed == true;
//     }
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// async named function using fetch api
async function fetchData() {
  try {
    const fetchResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const dataFetch = await fetchResponse.json();
    console.log(dataFetch);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// async await using fetch api
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[7].type);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
