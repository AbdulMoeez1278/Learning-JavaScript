// XMLHttpRequest

// // Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest(); // this constructor has no arguments | parameters

// // Define the callback function to handle the response
// xhr.onreadystatechange = function () {
//   // Check if the request is complete and successful
//   if (this.readyState === 4 && this.status === 200) {
//     // Access the response data and update the HTML element
//     document.getElementById("myText").innerHTML = this.responseText;
//     console.log(xhr.responseText);
//   } else if (this.readyState === 4 && this.status !== 200) {
//     // Handle errors if the request was not successful
//     document.getElementById("myText").innerHTML = "Error: " + this.status;
//     // console.log(xhr.status);
//   }
//   //   console.log(xhr.status);
// };

// xhr.onprogress = function (event) {
//   // triggers periodically
//   // event.loaded - how many bytes downloaded
//   // event.lengthComputable = true if the server sent Content-Length header
//   // event.total - total number of bytes (if lengthComputable)
//   console.log(`Received ${event.loaded} of ${event.total}`);
// };

// // Open the request: specify HTTP method (GET), URL, and asynchronous flag (true)
// xhr.open("GET", "data.txt", true);
// // xhr.open("GET", "data.txt", false); // still shows the data to the console if it is false
// // xhr.open("GET", "customAPI.json", true);
// // xhr.open("POST", "data.txt", true); // method is not allowed
// // xhr.open("POST", "data.txt", false) // this method is also not allowed

// // Send the request
// xhr.send();

// another XMLHttpRequest example
// 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();

// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open("GET", "data.txt");

// // 3. Send the request over the network
// xhr.send();

// // 4. This will be called after the response is received
// xhr.onload = function () {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//     console.log(
//       (document.getElementById("myText").innerHTML = "Error: " + this.status)
//     );
//   } else {
//     // show the result
//     console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
//     console.log(
//       (document.getElementById("myText").innerHTML = this.responseText)
//     );
//   }
// };

// xhr.onprogress = function (event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };

// xhr.onerror = function () {
//   console.log("Request failed");
// };

// // synchronous XMLHttpRequest
// let xhrequest = new XMLHttpRequest();

// xhrequest.open("GET", "data.txt", false);

// try {
//   xhrequest.send();
//   if (xhrequest.status != 200) {
//     console.log(`Error ${xhrequest.status}: ${xhrequest.statusText}`);
//   } else {
//     console.log(xhrequest.response);
//   }
// } catch (err) {
//   // instead of onerror
//   console.log("Request failed");
// }

// POST Method, FormData
let xhrPostData = new XMLHttpRequest();

let json = JSON.stringify({
  name: "Abdul Moeez",
  surname: "Tariq",
});

xhrPostData.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhrPostData.setRequestHeader("Content-type", "application/json; charset=utf-8");

xhrPostData.onerror = function (error) {
  console.log("Request failed", error);
};

xhrPostData.send(json);
console.log(xhrPostData);

let bodyJson = (document.getElementById("myText").innerHTML = json);
console.log(bodyJson);

// demonstrating methods of XMLHTTPRequest
var xmlObj = $.ajax({
  // Our sample url to make request
  url: "https://jsonplaceholder.typicode.com/todos/1",

  // type of Request
  type: "GET",
});

xmlObj.then(function () {
  console.log("Then is resolved");
  //   console.log(xmlObj);
});

xmlObj.fail(function () {
  console.log("Fail is resolved");
});

xmlObj.always(function () {
  console.log("Always is resolved");
});

xmlObj.done(function () {
  console.log("Done is resolved");
  //   console.log(xmlObj);
});

// console.log(xmlObj);
console.log(xmlObj.url); // undefined

// Get xmlHttpRequest example
const xhrRequest = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

xhrRequest.open("GET", url, true);
xhrRequest.onload = function () {
  if (this.status >= 200 && this.status < 300) {
    console.log("Response:", JSON.parse(this.responseText));
  } else {
    console.error("Error:", this.status);
  }
};
xhrRequest.onerror = function () {
  console.error("Network Error");
};
xhrRequest.send();

// Post xmlHttpRequest example
const xhr = new XMLHttpRequest();
const urlData = "https://jsonplaceholder.typicode.com/posts"; // Example API
// Open the request
xhr.open("POST", urlData, true);
// Set request headers (optional)
xhr.setRequestHeader("Content-Type", "application/json");
// Set up the response handler
xhr.onload = function () {
  if (this.status >= 200 && this.status < 300) {
    console.log("Response:", JSON.parse(this.responseText));
  } else {
    console.error("Error:", this.status);
  }
};
// Handle network errors
xhr.onerror = function () {
  console.error("Network Error");
};
// Send the request with data
const data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});
xhr.send(data);

// Put XMLHttpRequest example
const xhrPut = new XMLHttpRequest();
const urlPut = "https://jsonplaceholder.typicode.com/posts/1"; // Example API
// Open the request
xhrPut.open("PUT", url, true);
// Set request headers (optional)
xhrPut.setRequestHeader("Content-Type", "application/json");
// Set up the response handler
xhrPut.onload = function () {
  if (this.status >= 200 && this.status < 300) {
    console.log("Response:", JSON.parse(this.responseText));
  } else {
    console.error("Error:", this.status);
  }
};
// Handle network errors
xhrPut.onerror = function () {
  console.error("Network Error");
};
// Send the request with updated data
const dataPut = JSON.stringify({
  id: 1,
  title: "foo updated",
  body: "bar updated",
  userId: 1,
});
xhrPut.send(dataPut);

// Delete XMLHttpRequest example
const xhrDel = new XMLHttpRequest();
const urlDel = "https://jsonplaceholder.typicode.com/posts/1"; // Example API
// Open the request
xhrDel.open("DELETE", url, true);
// Set up the response handler
xhrDel.onload = function () {
  if (this.status >= 200 && this.status < 300) {
    console.log("Data deleted successfully");
  } else {
    console.error("Error:", this.status);
  }
};
// Handle network errors
xhrDel.onerror = function () {
  console.error("Network Error");
};
// Send the request
xhrDel.send();
