// console.dir(); // displays an interactive list of an object's properties.

// WALKING THE DOM

// console.log(document.all); // ---> returns an HTMLAllCollection
// console.log(document.head); // ---> returns the head element
// console.log(document.body); // ---> returns the body element

// 1: ---> ACCESSING CHILDREN OF AN ELEMENT

// 1: firstElementChild ---> returns the first child of an element
// console.log(document.body.firstElementChild); // ---> returns the h1 element

// 2: lastElementChild ---> returns the last child of an element
// console.log(document.body.lastElementChild); // ---> returns the script element
// 3: children ---> returns an HTMLCollection
// console.log(document.body.children); // ---> returns an HTMLCollection

// 1: firstChild ---> returns the first child of an element
// console.log(document.body.firstChild); // ---> returns the text node

// 2: lastChild ---> returns the last child of an element
// console.log(document.body.lastChild); // ---> returns the script element

// 3: childNodes ---> returns a NodeList
// console.log(document.body.childNodes); // ---> returns a NodeList

// ---> following is always true:
// element.childNodes[0] === element.firstChild; // ---> returns true
// element.childNodes[element.childNodes.length - 1] === element.lastChild; // ---> returns true

// 2: ---> PARENT & SIBLING OF AN ELEMENT

// alert(document.documentElement.parentNode); // ---> returns the parent of the html element
// alert(document.documentElement.parentNode === document); // ---> returns true

// alert(document.documentElement.parentElement); // ---> returns the parent of the html element
// alert(document.documentElement.parentElement === document); // ---> returns true

// 1: parentNode ---> returns the parent of an element
// console.log(document.body.parentNode); // ---> returns the html element

// 2: nextSibling ---> returns the next sibling of an element
// console.log(document.body.nextSibling); // ---> returns null

// 3: previousSibling ---> returns the previous sibling of an element
// console.log(document.body.previousSibling); // ---> returns null

// ELEMENT ONLY NAVIGATION
// 1: parentElement ---> returns the parent of an element
// console.log(document.body.parentElement); // ---> returns the html element

// 2: nextElementSibling ---> returns the next sibling of an element
// console.log(document.body.nextElementSibling); // ---> returns null

// 3: previousElementSibling ---> returns the previous sibling of an element
// console.log(document.body.previousElementSibling); // ---> returns null

// 3: ---> Accessing Elements by ID
// ---> 3: Table Based Navigation

// 1: rows ---> returns a collection of all rows in a table
// console.log(document.getElementById("table").rows); // ---> returns an HTMLCollection

// // 2: cells ---> returns a collection of all cells in a row
// console.log(document.getElementById("row").cells); // ---> returns an HTMLCollection

// // 3: cellIndex ---> returns the index of a cell in a row
// console.log(document.getElementById("cell").cellIndex); // ---> returns 0

// // 4: rowIndex ---> returns the index of a row in a table
// console.log(document.getElementById("row").rowIndex); // ---> returns 0

// // 5: tBodies ---> returns a collection of all bodies in a table
// console.log(document.getElementById("table").tBodies); // ---> returns an HTMLCollection

// // 6: tFoot ---> returns the footer of a table
// console.log(document.getElementById("table").tFoot); // ---> returns null

// // 7: tHead ---> returns the header of a table
// console.log(document.getElementById("table").tHead); // ---> returns null

// // 8: caption ---> returns the caption of a table
// console.log(document.getElementById("table").caption); // ---> returns null

// traversing the nodes

const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// console.log(parent.firstChild); // text
// console.log(parent.firstElementChild); // first element

const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.nextElementSibling[2]); // undefined

// console.log("Nodes: ", parent.childNodes); // gives a node list

// function to add the list items to the parent element
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}

addLanguage("Python");
addLanguage("TypeScript");

// optimized approach to add | appendChild to the parent element
function addOptimizedLanguage(langName) {
  const li = document.createElement("li");
  const addText = document.createTextNode(langName);
  li.appendChild(document.createTextNode(langName));
  //   li.appendChild(addText);
  document.querySelector(".language").appendChild(li);
}

addOptimizedLanguage("Rust");

// edit an element using replaceWith method
const secondLanguage = document.querySelector("li:nth-child(2)");
// secondLanguage.innerHTML = "Mojo";
const newLi = document.createElement("li");
newLi.textContent = "Golang";
secondLanguage.replaceWith(newLi);

// edit another element
const firstLanguage = document.querySelector("li:first-child");
firstLanguage.outerHTML = "<li>ColdFusion</li>";

// remove an element
const lastLanguage = document.querySelector("li:last-child");
// lastLanguage.remove();

let heading = document.getElementById("myText");
let headingText = document.createTextNode("Adding the h1 tag");

heading.appendChild(headingText);

// if we get the element through the Class name it will return undefined
const ulItems = document.getElementsByClassName("language");
console.log(ulItems); // returns a single length html collection
console.log(ulItems.outerHTML); // undefined
console.log(ulItems.parentElement); // undefined
console.log(ulItems.children); // undefined

// if we get the element with the query selector than it returns the result
const ulItem = document.querySelector(".language");
console.log(ulItem);
console.log(ulItem.outerHTML);
console.log(ulItem.parentElement); // returns the parent element
console.log(ulItem.children); // returns HTMLCollection
console.log(ulItem.childNodes); // returns the nodeList

// Practiced Question
function addTwoNumbers() {
  const value1 = Number(document.getElementById("value1").value.trim());
  const value2 = Number(document.getElementById("value2").value.trim());
  const add = value1 + value2;
  document.getElementById("result").innerHTML = "Addition: " + add;
  document.getElementById("result").style.color = "red";
  console.log(add);
}

const formButton = document.getElementById("formButton");
formButton.addEventListener("click", function () {
  addTwoNumbers();
});
