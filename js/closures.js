// closures
// counter function using closures
function createCounter() {
  let count = 0; // 'count' is a variable in the outer function's scope

  function increment() {
    count++; // The inner function 'increment' accesses 'count'
    return count;
  }

  return increment; // The outer function returns the inner function
}

createCounter();

const counter = createCounter(); // 'counter' now holds the 'increment' function
console.log(counter()); // Output: 1 (increment was called, and it still accessed 'count')
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// console.log(createCounter); // returns a incomplete function as it is written

// display the name using the closures
function getName() {
  let name = "Abdul Moeez";

  function displayName() {
    console.log(name);
  }
  displayName();
}

getName();

let fetchName = getName();
console.log(fetchName); // returns undefined

// console.log(getName); // returns a complete function as an output
// console.log(getName()); // returns undefined also

// closures
function makeFunc() {
  const name = "Moeez";
  function displayName() {
    console.log(name); // prints the name if functions runs accurately

    // return name;
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
// console.log(myFunc); // returns a function as it is

// another closures example
function outer() {
  const message = "Hello World!";
  const message2 = "Good Morning!";

  function inner() {
    console.log(message); // prints the first message
    console.log(message2); // prints the second message
  }
  return inner;
}

outer(); // does'nt print anything

const greet = outer();
greet();

// how js scope works using closures - JS scope
let globalVariable = "I am global"; // global scope

// When functions are nested each other, the inner function can access variables from the outer function.
function outerFunction() {
  let outerVariable = "I am an outer"; // local scope

  function innerFunction() {
    let innerVariable = "I am inner"; // local scope
    console.log(globalVariable); // if a function is inside another function, it can access variables from the outer function

    console.log(outerVariable); // Accessible (outer function scope)
    console.log(innerVariable); // Accessible (own scope)
  }

  innerFunction();
}

outerFunction();

// closure with setTimeout
function delayedMessage(message, delay) {
  return function () {
    setTimeout(() => {
      console.log(message);
    }, delay);
  };
}

const showMessage = delayedMessage(
  "This message appears after 2 seconds!",
  2000
);
showMessage();

// // Nested Functions
// outer function
function greetFunc(name) {
  // inner function
  function displayName() {
    console.log("Hi" + " " + name); // this will print the following value
  }

  // calling inner function | function invokation
  displayName();
}

// calling outer function | outer function invokation
greetFunc("Moeez");
