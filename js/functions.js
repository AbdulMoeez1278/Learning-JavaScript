// FUNCTIONS

let a = 1;
let b = 2;
let c = 3;

// get an average
// console.log("Sum of a and b is "(a + b) / 2);
// console.log("Sum of a and b is "(b + c) / 2);
// console.log("Sum of a and b is "(a + c) / 2);

function onePlusAvg(a, b) {
  return 1 + (a + b) / 2;
}

onePlusAvg(a, b);
onePlusAvg(b, c);
onePlusAvg(a, c);

// function onePlusAvg(a, b) {
//   return Math.round(1 + (a + b) / 2);
// }

// sum function using arrow function
let x = 1;
let y = 2;
let z = 3;

const sum = (p, q) => {
  return p + q;
};

// console.log(sum(5, 5));

// greeting function
const hello = () => {
//   console.log("Hello");
};

hello();

// find a mean of 5 numbers
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

// console.log(mean(1, 2, 3, 4, 5));
