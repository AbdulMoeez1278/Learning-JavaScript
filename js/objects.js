// object with the empty value
const person = {};
console.log(person);

// adding properties to the empty object
person.name = "Moeez";
person.age = 23;
person.isLoggedIn = true;
person.role = "Frontend Developer";

console.log(person);

// creating an object using the object literals
const personObject = {
  name: "Abdul Moeez",
  age: 23,
  city: "Pakistan",
};

console.log(personObject);

// console.log(personObject.name);
// console.log(personObject["age"]);

// object destructuring // Object destructuring in JavaScript is a feature that allows extracting values from objects and assigning them to variables in a concise way.
// const { name, age, city } = personObject; // destructuring
// console.log(personObject);

// console.log(name);
// console.log(age);
// console.log(city);

// greet function
// function greet() {
//   console.log(
//     `Hello, my name is ${personObject.name} and age is ${personObject.age}.`
//   );
//   //   console.log("Hello, my name is " + this.name); // The this keyword typically refers to the current object the code is being executed in.
// }

// greet(); // function call

// create an object with nesting objects inside it
const user = {
  name: "Abdul Moeez",
  age: 23,
  city: "Pakistan",
  //   nested objects in an object
  fullName: {
    userFullName: {
      firstName: "Abdul",
      middleName: "Moeez",
      lastName: "Tariq",
    },
  },
};

// console.log(user);
// console.log(user.fullName);
// console.log(user.fullName.userFullName);
console.log(user.fullName.userFullName.middleName);
// console.log(user.fullName?.userFullName.middleName);

// joining two objects in a single object variable
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign(obj1, obj2); // add two other objects in a single object
const obj5 = Object.assign({}, obj1, obj2); // same as the above it will also add two other objects in a single object

// console.log(obj4);
// console.log(obj5);

// using spread operator
const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj6);

// get the keys from objects
console.log(Object.keys(personObject));

// get the values from objects
console.log(Object.values(personObject));

// get the entries from the objects
console.log(Object.entries(personObject));

// another example for destructuring
const employee = {
  name: "Abdul Moeez",
  role: "Frontend Developer",
  age: 23,
  city: "Pakistan",
};

console.log(employee);
// console.log(employee.hasOwnProperty(age)); // output - false
console.log(employee.hasOwnProperty("age")); // output - true

// destructuring of an object
const { name, role, age, city } = employee;

console.log(name);
console.log(role);
console.log(age);
console.log(city);

// creating an array of objects
let cars = [
  { make: "Toyota", model: "Corolla", year: 2021 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Focus", year: 2022 },
];

// iterating over the array
cars.forEach((car) => {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);

  // Deleting the 'year' property from the 'car' object
  delete car.year;
});

// Verifying that the property has been deleted
console.log("Year property deleted:", !cars.hasOwnProperty("year"));
console.log("Updated Car:", cars);
