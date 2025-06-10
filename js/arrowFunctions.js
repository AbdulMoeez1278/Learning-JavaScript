// arrow functions are a special type of function in JavaScript that do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope. This means that when you use an arrow function, it will not create its own 'this', but will use the 'this' value from the context in which it was defined.
// This is particularly useful in scenarios where you want to maintain the context of 'this' from the surrounding code, such as in event handlers or callbacks.

// Arrow functions are a concise way to write functions in JavaScript. They have a shorter syntax and do not have their own 'this' context, which makes them useful in certain situations, such as when you want to preserve the 'this' value from the surrounding scope.

// Arrow functions can be defined using the arrow syntax (=>) and can be used in various contexts, such as callbacks, event handlers, and more.

// Example of an arrow function
const add = (a, b) => a + b;

// Example of using an arrow function as a callback
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example of an arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

// Example of an arrow function with a single parameter
const square = (x) => x * x;
console.log(square(5)); // Output: 25

// Example of an arrow function with multiple parameters
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // Output: 12

// Example of an arrow function with a block body
const factorial = (n) => {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5)); // Output: 120

// Example of an arrow function with implicit return
const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // Output: true

// Example of an arrow function with a default parameter
const greetUser = (name = "Guest") => console.log(`Hello, ${name}!`);
greetUser(); // Output: Hello, Guest

greetUser("Alice"); // Output: Hello, Alice!

// Example of an arrow function with rest parameters
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Example of an arrow function with destructuring
const person = { name: "Bob", age: 30 };
const greetPerson = ({ name, age }) =>
  console.log(`Hello, ${name}! You are ${age} years old.`);
greetPerson(person); // Output: Hello, Bob! You are 30 years old.

// Example of an arrow function with a method
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15
console.log(calculator.divide(5, 3)); // Output: 1.6666666666666667

// Example of an arrow function with a promise
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData().then((data) => console.log(data)); // Output after 2 seconds: Data fetched successfully!

// Example of an arrow function with a class method
class Counter {
  constructor() {
    this.count = 0;
  }

  increment = () => {
    this.count++;
    console.log(`Count: ${this.count}`);
  };
}
const counter = new Counter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2

// Example of an arrow function with a higher-order function
const filterEvenNumbers = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers); // Output: [2, 4, 6]

// Example of an arrow function with a callback
const fetchUserData = (callback) => {
  setTimeout(() => {
    const userData = { id: 1, name: "John Doe" };
    callback(userData);
  }, 1000);
};
fetchUserData((data) => {
  console.log("User Data:", data); // Output after 1 second: User Data: { id: 1, name: "John Doe" }
});

// Example of an arrow function with a timeout
const delayedGreeting = (name) => {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 1500); // Output after 1.5 seconds: Hello, Alice!
};
delayedGreeting("Alice");
