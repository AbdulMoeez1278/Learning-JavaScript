// map() // creates a new array by applying a provided function to each element of the original array. it transforms each element based on the logic defined in function

// multiplication the array elements using the map method
const mapNumbers = [1, 2, 3, 4];
const squaredNumbers = mapNumbers.map((number) => number * number);
console.log(squaredNumbers);

// adding the array elements using the map method
const numbers = [1, 2, 3, 4];
const sqrnumbers = numbers.map((number) => number + number);
console.log(sqrnumbers);

// filter() // creates a new array containing only the elements from the original array that passes a certain condition defined by the provided function

// getting the even numbers from an array
const filterNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// getting the odd numbers from an array
const filtersNumbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = filterNumbers.filter((number) => number % 2 === 1);
console.log(oddNumbers);

// reduce() // reduces an array to a single value by applying a function against an accumulator and each element of the array (from left to right). it takes a callback function and an optional initial value for the accumulator
const reduceNumbers = [1, 2, 3, 4];
const sum = reduceNumbers.reduce(
  (accumulator, number) => accumulator + number,
  0
);
