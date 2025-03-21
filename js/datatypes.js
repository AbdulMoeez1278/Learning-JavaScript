// "use strict"; // treat all the javascript code as newer version

// alert("Hello World"); // print an alert box on the windows screen

// tc39 // ecmascript website

// DATATYPES // Total seven types of datatypes are available which is called as primitive datatypes

// 1: NUMBER
// let age = 22;
// console.log(age);

// 2: BOOLEAN
// let number = true;
// let age = false;
// console.log(age, number);

// 3: STRING
// let name = "Abdul Moeez";
// console.log(name);

// 4: NULL // standalone value
// let number = null;
// console.log(null);

// 5: BIGINT
// let number2 = BigInt(1234567890123456789012345);
// console.log(number2);

// 6: UNDEFINED
// let value = undefined;
// console.log(value);

// 7: SYMBOL
// unique 

/* IMPORTANT NOTE
 // if you want to know the type of any datatype, so you can use the typeof method:
 // 1: UNDEFINED
 // let value = undefined;
// console.log(typeof value);

// 2: NULL 
// let number = null;
// console.log(typeof null);

the main difference in undefined or null if you're finding the type of these two datatypes is:
typeof undefined ----> undefined type
typeof null  ----> object type
*/

// There are some other kinds of datatupes which is called as reference datatypes

// 1: OBJECT ---> key-values pairs 
// let obj = { 
//     name: "Moeez",
//     age: 22,
// }
// console.log(obj);

// 2: ARRAYS ---> starts with the 0 index and so on
// let arr = ["Ahmad", "Moeez", "Hamza"];
// console.log(arr);
// console.log(Array.[2]);

// 3: FUNCTIONS
// const myFunction = function(){
//     console.log("Hello World");
// }

// 4: DATES
// 5: COLLECTIONS
// ---> Other types of objects

// Interesting Facts about Data Types
// 1. Dynamically Typed : // JavaScript Variables are not bound to a specific data type. Mainly data type is stored with value (not with variable name) and is decided & checked at run time.

// let x = 42;   
// console.log(x)

// x = "hello";  
// console.log(x)

// x = [1, 2, 3]
// console.log(x)

// Output
// 42
// hello
// [ 1, 2, 3 ]

// 2. Everything is an Object (Sort of): // In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.

// let s = "hello";
// console.log(s.length);  

// // Example with a number
// let x = 42;
// console.log(x.toString()); 

// // Example with a boolean
// let y = true;
// console.log(y.toString());

// /* Internal Working of primitives
//    to be treeated as objects
   
// // Temporary wrapper object
// let temp = new String("hello"); 

// console.log(temp.length); // 5

// // The wrapper is discarded after use
// temp = null; */

// Output
// 5
// 42
// true

// 3. NaN is not equal to itself: // NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.

// console.log(typeof NaN);
// console.log(NaN === NaN);

// Output
// number
// false

// 4. A Symbol is Never Equal to Another One : // Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.

// let s1 = Symbol("abc");
// let s2 = Symbol("abc");
// console.log(s1 === s2);

// Output
// false

// 5. Undefined and Null: // undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.

// 6. Integers are Floating are Numbers only. // There is only one type number that covers both integers and floating point numbers.

// let x = 42;     // Integer
// let y = 42.5;   // Floating-point

// console.log(typeof x); 
// console.log(typeof y);

// Output
// number
// number

// 7. A character is also a string. // There is no separate type for characters. A single character is also a string.