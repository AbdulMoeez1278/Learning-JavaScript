// XMLHttpRequest

// Create a new XMLHttpRequest object
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
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open("GET", "data.txt");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function () {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    console.log(
      (document.getElementById("myText").innerHTML = "Error: " + this.status)
    );
  } else {
    // show the result
    console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
    console.log(
      (document.getElementById("myText").innerHTML = this.responseText)
    );
  }
};

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function () {
  console.log("Request failed");
};
