// declare function

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 3000);
// }

// // execute function with a callback
// fetchData(function (data) {
//   console.log(data);
// });

// console.log("Data is being fetched...");

// function passes as an argument to the another function ----> callback
// basic structure of callback function
// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye");
// }

// function sayHello() {
//   console.log("Hello World");
// }

// greet("Alice", sayGoodbye);
// greet("Alice", sayGoodbye, sayHello);

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 3000);
// }

// // execute function with a callback
// fetchData(function (data) {
//   console.log(data);
// });

// console.log("Data is being fetched...");

// example according to the callback hell
// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task one completed");
//     callback();
//   });
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task two completed");
//     callback();
//   });
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task three completed");
//     callback();
//   });
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task four completed");
//     callback();
//   });
// }

// // callback hell | pyramid of doom
// task1(function () {
//   task2(function () {
//     task3(function () {
//       task4(function () {
//         console.log("All tasks completed");
//       });
//     });
//   });
// });

// function passes as an argument to another function
// function Hello(callback) {
//   console.log("Hello!");
//   callback();
//   //   return callback();
// }

// function goodbye() {
//   console.log("Goodbye!");
// }

// Hello(goodbye);

// // callback with array
// function forEachElement(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }
// // using the function
// forEachElement([1, 2, 3], (element, index) => {
//   console.log(`Element ${index}: ${element * 2}`);
// });

function myDisplayer(some) {
  document.getElementById("myText").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  //   myDisplayer(sum);
}

myCalculator(5, 5);
