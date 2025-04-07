// console.dir
console.dir // returns the DOM element as a JavaScript object, which can be used to access its properties and methods.
// console.dir(idOne);

// NODE NAME | TAG NAME

//nodeName
nodeName = document.getElementById("idOne").nodeName; // Returns the name of the node (e.g., "DIV", "SPAN", "P", etc.).
console.log(nodeName); // Returns the name of the node (e.g., "DIV", "SPAN", "P", etc.).

// TagName 
tagName = document.getElementById("idOne").tagName; // Returns the name of the tag (e.g., "DIV", "SPAN", "P", etc.).
console.log(tagName); // Returns the name of the tag (e.g., "DIV", "SPAN", "P", etc.).

// innerHTML | outerHtML

// innerHTML
innerHTML = document.getElementById("idOne").innerHTML; // Returns the HTML content inside the element. 
console.log(innerHTML); // Returns the HTML content inside the element.

// outerHTML
outerHTML = document.getElementById("idOne").outerHTML; // Returns the HTML content of the element, including the element itself.
console.log(outerHTML); // Returns the HTML content of the element, including the element itself.

// textContent
textContent = document.getElementById("idOne").textContent; // Returns the text content of the element, including all child elements.
console.log(textContent); // Returns the text content of the element, including all child elements.

// hidden Property 
hidden = document.getElementById("idOne").hidden; // Returns true if the element is hidden, false otherwise.
console.log(hidden); // Returns true if the element is hidden, false otherwise.

// hidden = document.getElementById("idOne").hidden = true; // Hides the element by setting the hidden property to true.
console.log(hidden); // Returns true if the element is hidden, false otherwise.

// hidden = document.getElementById("idOne").hidden = false; // Shows the element by setting the hidden property to false.
console.log(hidden); // Returns true if the element is hidden, false otherwise.

