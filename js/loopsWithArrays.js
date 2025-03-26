// LOOPS WITH ARRAYS

// classical for loop
let num = [2, 5, 7, 9];
for (let i = 0; i < num.length; i++) {
  //   console.log(num[i]);
}

// 1: forEach loop ---> calls a  function once for each array element
num.forEach((element) => {
  //   console.log(element * element);
});

// 2: Array.from loop ---> used to create an array from any other object
let name = "Moeez";
let arr = Array.from(name);
// console.log(arr);

// 3: for of loop ---> can be used to get the values from an array
for (let i of num) {
  //   console.log(i);
}

// 4: for in loop ---> can be used to get the keys from an array
for (let i in num) {
  // console.log(num[i]);
}

// HIGHER ORDER ARRAY METHODS

// 5: map() Method ---> creates a new array by performing some operations on each array element
let array = [23, 45, 55];
// console.log(array);
let a = array.map((value, index, array) => {
  //   console.log(value, index, array);
  return value + 1;
  return value + index;
});
// console.log(a);

// 6: filter() Method ---> filters an array with values that passes a test
let arr2 = [45, 0, 6, 24, 38];
arr2.filter((value) => {
  return value < 10;
});
// console.log(arr2);

// 7: reduce() Method ---> reduces an array to a single value
let arr3 = [1, 2, 3, 4, 5];
let newArr = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
// console.log(newArr);
