// WALKING THE DOM

console.log(document.all); // ---> returns an HTMLAllCollection
console.log(document.head); // ---> returns the head element
console.log(document.body); // ---> returns the body element

// 1: ---> ACCESSING CHILDREN OF AN ELEMENT

// 1: firstElementChild ---> returns the first child of an element
console.log(document.body.firstElementChild); // ---> returns the h1 element

// 2: lastElementChild ---> returns the last child of an element
console.log(document.body.lastElementChild); // ---> returns the script element
// 3: children ---> returns an HTMLCollection
console.log(document.body.children); // ---> returns an HTMLCollection

// 1: firstChild ---> returns the first child of an element
console.log(document.body.firstChild);

// 2: lastChild ---> returns the last child of an element
console.log(document.body.lastChild);

// 3: childNodes ---> returns a NodeList
console.log(document.body.childNodes);

// ---> following is always true:
element.childNodes[0] === element.firstChild;
element.childNodes[element.childNodes.length - 1] === element.lastChild;

// 2: ---> PARENT & SIBLING OF AN ELEMENT

alert(document.documentElement.parentNode); // ---> returns the parent of the html element
alert(document.documentElement.parentNode === document); // ---> returns true

alert(document.documentElement.parentElement); // ---> returns the parent of the html element
alert(document.documentElement.parentElement === document); // ---> returns true

// 1: parentNode ---> returns the parent of an element
console.log(document.body.parentNode); // ---> returns the html element

// 2: nextSibling ---> returns the next sibling of an element
console.log(document.body.nextSibling); // ---> returns null

// 3: previousSibling ---> returns the previous sibling of an element
console.log(document.body.previousSibling); // ---> returns null

// ELEMENT ONLY NAVIGATION
// 1: parentElement ---> returns the parent of an element
console.log(document.body.parentElement); // ---> returns the html element

// 2: nextElementSibling ---> returns the next sibling of an element
console.log(document.body.nextElementSibling); // ---> returns null

// 3: previousElementSibling ---> returns the previous sibling of an element
console.log(document.body.previousElementSibling); // ---> returns null

// 3: ---> Accessing Elements by ID
// ---> 3: Table Based Navigation

// 1: rows ---> returns a collection of all rows in a table
console.log(document.getElementById("table").rows); // ---> returns an HTMLCollection

// 2: cells ---> returns a collection of all cells in a row
console.log(document.getElementById("row").cells); // ---> returns an HTMLCollection

// 3: cellIndex ---> returns the index of a cell in a row
console.log(document.getElementById("cell").cellIndex); // ---> returns 0

// 4: rowIndex ---> returns the index of a row in a table
console.log(document.getElementById("row").rowIndex); // ---> returns 0

// 5: tBodies ---> returns a collection of all bodies in a table
console.log(document.getElementById("table").tBodies); // ---> returns an HTMLCollection

// 6: tFoot ---> returns the footer of a table
console.log(document.getElementById("table").tFoot); // ---> returns null

// 7: tHead ---> returns the header of a table
console.log(document.getElementById("table").tHead); // ---> returns null

// 8: caption ---> returns the caption of a table
console.log(document.getElementById("table").caption); // ---> returns null
