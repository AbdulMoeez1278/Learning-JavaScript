// Define three functions
function firstTask() {
  console.log("Task 1");
}

function secondTask() {
  console.log("Task 2");
}

function thirdTask() {
  console.log("Task 3");
}

// Execute the functions
firstTask();
secondTask();
thirdTask();

// synchronus programming example

// function someLongRunningFunction() {
//   let start = Date.now();
//   while (Date.now() - start < 5000) {
// do nothing
//   }
//   return "Hello";
// }

// console.log("Starting...");

// let result = someLongRunningFunction();
// console.log(result);

// console.log("...Finishing");

// asynchronous programming
console.log("Start of script");
setTimeout(() => {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");

//
// function syncFirstTask() {
//   console.log("Synchronous first task");
// }

// function syncSecondTask() {
//   console.log("Synchronous second task");
// }

// callback function to be executed on timeout
setTimeout(myFunction, 5000); // myFunction is passed to setTimeout as an argument

function myFunction() { // myFunction is used as a callback
  document.getElementById("myText").innerHTML = "Hello World!!";
}
