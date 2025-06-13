// IIFE (Immediately Invoked Function Expression)

(function () {
  // This is an IIFE that runs immediately when the script is loaded
  console.log("This code runs immediately!");

  // You can define variables and functions here that won't pollute the global scope
  var privateVariable = "I am private";

  function privateFunction() {
    console.log(privateVariable);
  }

  // Call the private function
  privateFunction();
})(); // The parentheses at the end invoke the function immediately

// Example of using an IIFE to create a private scope
(function () {
  var counter = 0;

  function increment() {
    counter++;
    console.log("Counter:", counter);
  }

  // Expose the increment function to the global scope
  window.incrementCounter = increment;
})();

// Now you can call incrementCounter() from the global scope
window.incrementCounter(); // Output: Counter: 1
// Call it again to see the counter increment
window.incrementCounter(); // Output: Counter: 2
// This demonstrates that the counter variable is private and cannot be accessed directly
// from the global scope, but the increment function is accessible.

// Example of an IIFE with parameters
(function (name) {
  console.log("Hello, " + name + "!");
})("Alice"); // Output: Hello, Alice!

// This IIFE takes a parameter and runs immediately with the provided argument
// You can also use IIFEs to avoid polluting the global scope with variables
(function () {
  var globalVariable = "I am global";

  function showGlobalVariable() {
    console.log(globalVariable);
  }
  // Call the function to show the global variable
  showGlobalVariable(); // Output: I am global
})(); // This IIFE runs immediately and defines its own scope

// The globalVariable and showGlobalVariable function are not accessible outside this IIFE
// This prevents them from polluting the global scope, keeping your code clean and modular.
