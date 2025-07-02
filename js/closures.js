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

console.log(createCounter); // returns a incomplete function as it is written

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

console.log(getName); // returns a complete function as an output
console.log(getName()); // returns undefined also
