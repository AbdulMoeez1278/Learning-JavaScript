// Higher Order Array Loops
const numbers = [1, 2, 3, 4, 5];
// Using forEach to iterate over the array and log each number
numbers.forEach((number) => {
  console.log("Number:", number);
}); // Output: Number: 1, Number: 2, etc.

// Using forEach to log each number with its index
numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Number: ${number}`);
}); // Output: Index: 0, Number: 1, etc.

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map((number) => number * number);
console.log("Squared Numbers:", squaredNumbers); // Output: Squared Numbers: [1, 4, 9, 16, 25]

// Using map to create a new array with each number incremented by 1
const incrementedNumbers = numbers.map((number) => number + 1);
console.log("Incremented Numbers:", incrementedNumbers); // Output: Incremented Numbers: [2, 3, 4, 5, 6]

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: Even Numbers: [2, 4]

// Using filter to create a new array with numbers greater than 2
const greaterThanTwo = numbers.filter((number) => number > 2);
console.log("Numbers Greater Than 2:", greaterThanTwo); // Output: Numbers Greater Than 2: [3, 4, 5]

// Using reduce to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sum); // Output: Sum of Numbers: 15

// Using reduce to calculate the product of all numbers in the array
const product = numbers.reduce(
  (accumulator, current) => accumulator * current,
  1
);
console.log("Product of Numbers:", product); // Output: Product of Numbers: 120

// Using find to get the first number greater than 3
const firstGreaterThanThree = numbers.find((number) => number > 3);
console.log("First Number Greater Than 3:", firstGreaterThanThree); // Output: First Number Greater Than 3: 4

// Using findIndex to get the index of the first number greater than 3
const indexOfFirstGreaterThanThree = numbers.findIndex((number) => number > 3);
console.log(
  "Index of First Number Greater Than 3:",
  indexOfFirstGreaterThanThree
); // Output: Index of First Number Greater Than 3: 3

// Using some to check if there is any number greater than 5
const hasNumberGreaterThanFive = numbers.some((number) => number > 5);
console.log("Has Number Greater Than 5:", hasNumberGreaterThanFive); // Output: Has Number Greater Than 5: false

// Using some to check if there is any even number
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log("Has Even Number:", hasEvenNumber); // Output: Has Even Number: true

// Using every to check if all numbers are less than 10
const allLessThanTen = numbers.every((number) => number < 10);
console.log("All Numbers Less Than 10:", allLessThanTen); // Output: All Numbers Less Than 10: true

// Using every to check if all numbers are greater than 0
const allGreaterThanZero = numbers.every((number) => number > 0);
console.log("All Numbers Greater Than 0:", allGreaterThanZero); // Output: All Numbers Greater Than 0: true
