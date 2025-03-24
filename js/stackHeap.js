// Types of Memory:
// 1: Stack Memory // Primitive Datatype
// 2: Heap Memory // Reference Datatype

// 1: STACK MEMORY  ---> Used for storing the primitive datatype values

let name = "Moeez";
let age = 23;
let isLoggedIn = false;
let state = null;

// Number  ---> range is upto 2 to power 53
// BigInt  ---> for bigger numbers
// String  ---> value in single quote '' | double quote ""
// Boolean  ---> true / false
// Null  ---> standalone value // a representation of empty value
// Undefined  ---> gives undefined value
// Symbol ---> mostly used for uniqueness

// CODE
let n1 = 10;
let n2 = n1;
n2 = 20;
// console.log(n1);

// 2: HEAP MEMORY  ---> Used for reference datatypes ---> Allocated dynamically & accessed via reference

// Object ---> use typeof value to get the type on any value
let actualAge = 23;
// console.log(typeof age); // ---> type of age is number

let stateRef = null;
// console.log(typeof null); //  ---> type of null is object

let name2;
// console.log(typeof name2); // ---> type of name is undefined

// CODE
let obj1 = {
  name: "Moeez",
};
let obj2 = obj1;
obj2.name = "Hamza";
// console.log(obj1);

let myName = "Moeez";
myName = "Tariq";

let anotherName = "myName";
// console.log(anotherName);

// console.log(myName);
