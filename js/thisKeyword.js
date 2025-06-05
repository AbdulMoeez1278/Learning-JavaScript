// this keyword in JavaScript
// 1. In the global context, 'this' refers to the global object
console.log(this); // In browsers, this will log the Window object

// 2. In a function, 'this' refers to the object that called the function
function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode, this will log the global object (Window in browsers)

// 3. In an object method, 'this' refers to the object itself
const obj = {
  name: "Object",
  showThis: function () {
    console.log(this);
  },
};
obj.showThis(); // Logs the obj object

// 4. In a constructor function, 'this' refers to the newly created object
function Person(name) {
  this.name = name;
  this.showThis = function () {
    console.log(this);
  };
}
const person = new Person("Alice");
person.showThis(); // Logs the person object

// 5. In an arrow function, 'this' is lexically bound, meaning it refers to the context in which the arrow function was defined
const arrowFunction = () => {
  console.log(this);
};
arrowFunction(); // In the global context, this will log the global object (Window in browsers)

// 6. In an event handler, 'this' refers to the element that triggered the event
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Logs the button element that was clicked
});

// 7. In strict mode, 'this' in a function refers to undefined
("use strict");
function strictShowThis() {
  console.log(this);
}
strictShowThis(); // Logs undefined in strict mode

// 8. In a class method, 'this' refers to the instance of the class
class MyClass {
  constructor(name) {
    this.name = name;
  }

  showThis() {
    console.log(this);
  }
}
const myInstance = new MyClass("My Instance");
myInstance.showThis(); // Logs the myInstance object

