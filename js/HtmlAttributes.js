// Attribute Methods
// This file contains methods for manipulating HTML attributes
// The methods are used to get, set, and remove attributes from HTML elements
// The methods are used to get, set, and remove attributes from HTML elements

// 1: hasAttribute
// The hasAttribute() method checks if an element has a specific attribute.
// It returns true if the attribute exists, and false if it does not exist.
// The hasAttribute() method is useful for checking if an element has a specific attribute before performing an action on it.
// It is often used in event delegation to check if an element has a specific attribute before performing an action.

console.log("hasAttribute");
var idOne = document.getElementById("idOne"); // Get the element with id "idOne"
console.log(idOne); // Log the element to the console
console.log(idOne.hasAttribute("id")); // Check if the element has the attribute "id"
console.log(idOne.hasAttribute("class")); // Check if the element has the attribute "class"
console.log(idOne.hasAttribute("style")); // Check if the element has the attribute "style"
console.log(idOne.hasAttribute("data")); // Check if the element has the attribute "data"
console.log(idOne.hasAttribute("title")); // Check if the element has the attribute "title"
console.log(idOne.hasAttribute("href")); // Check if the element has the attribute "href"
console.log(idOne.hasAttribute("src")); // Check if the element has the attribute "src"

// 2: getAttribute
// The getAttribute() method returns the value of a specific attribute of an element.
// If the attribute does not exist, it returns null.
// The getAttribute() method is useful for getting the value of a specific attribute before performing an action on it.
// It is often used in event delegation to get the value of a specific attribute before performing an action.

console.log("getAttribute");
console.log(idOne.getAttribute("id")); // Get the value of the attribute "id"
console.log(idOne.getAttribute("class")); // Get the value of the attribute "class"
console.log(idOne.getAttribute("style")); // Get the value of the attribute "style"
console.log(idOne.getAttribute("data")); // Get the value of the attribute "data"
console.log(idOne.getAttribute("title")); // Get the value of the attribute "title"
console.log(idOne.getAttribute("href")); // Get the value of the attribute "href"
console.log(idOne.getAttribute("src")); // Get the value of the attribute "src"
console.log(idOne.getAttribute("alt")); // Get the value of the attribute "alt"

// 3: setAttribute
// The setAttribute() method sets the value of a specific attribute of an element.
// If the attribute does not exist, it creates a new attribute with the specified value.
// The setAttribute() method is useful for setting the value of a specific attribute before performing an action on it.
// It is often used in event delegation to set the value of a specific attribute before performing an action.

console.log("setAttribute");
idOne.setAttribute("id", "newId"); // Set the value of the attribute "id" to "newId"
console.log(idOne.getAttribute("id")); // Get the value of the attribute "id"
idOne.setAttribute("class", "newClass"); // Set the value of the attribute "class" to "newClass"
console.log(idOne.getAttribute("class")); // Get the value of the attribute "class"
idOne.setAttribute("style", "newStyle"); // Set the value of the attribute "style" to "newStyle"
console.log(idOne.getAttribute("style")); // Get the value of the attribute "style"
idOne.setAttribute("data", "newData"); // Set the value of the attribute "data" to "newData"
console.log(idOne.getAttribute("data")); // Get the value of the attribute "data"
idOne.setAttribute("title", "newTitle"); // Set the value of the attribute "title" to "newTitle"
console.log(idOne.getAttribute("title")); // Get the value of the attribute "title"
idOne.setAttribute("href", "newHref"); // Set the value of the attribute "href" to "newHref"
console.log(idOne.getAttribute("href")); // Get the value of the attribute "href"

// 4: removeAttribute
// The removeAttribute() method removes a specific attribute from an element.
// If the attribute does not exist, it does nothing.
// The removeAttribute() method is useful for removing a specific attribute before performing an action on it.
// It is often used in event delegation to remove a specific attribute before performing an action.

console.log("removeAttribute");
idOne.removeAttribute("id"); // Remove the attribute "id"
console.log(idOne.getAttribute("id")); // Get the value of the attribute "id"
idOne.removeAttribute("class"); // Remove the attribute "class"
console.log(idOne.getAttribute("class")); // Get the value of the attribute "class"
idOne.removeAttribute("style"); // Remove the attribute "style"
console.log(idOne.getAttribute("style")); // Get the value of the attribute "style"
idOne.removeAttribute("data"); // Remove the attribute "data"
console.log(idOne.getAttribute("data")); // Get the value of the attribute "data"
idOne.removeAttribute("title"); // Remove the attribute "title"
console.log(idOne.getAttribute("title")); // Get the value of the attribute "title"
idOne.removeAttribute("href"); // Remove the attribute "href"
console.log(idOne.getAttribute("href")); // Get the value of the attribute "href"
idOne.removeAttribute("src"); // Remove the attribute "src"
console.log(idOne.getAttribute("src")); // Get the value of the attribute "src"
idOne.removeAttribute("alt"); // Remove the attribute "alt"
console.log(idOne.getAttribute("alt")); // Get the value of the attribute "alt"

// 5: attributes
// The attributes property returns a NamedNodeMap of the attributes of an element.
// The NamedNodeMap is a collection of nodes that represent the attributes of the element.
// The attributes property is useful for getting all the attributes of an element before performing an action on it.
// It is often used in event delegation to get all the attributes of an element before performing an action.

// 6: data-*attribute
// The data-* attributes are used to store custom data on an element.
// The data-* attributes are useful for storing custom data on an element before performing an action on it.
// They are often used in event delegation to store custom data on an element before performing an action.
// The data-* attributes are not standard HTML attributes, but they are a common pattern used in JavaScript to store custom data on an element.
// The data-* attributes are not standard HTML attributes, but they are a common pattern used in JavaScript to store custom data on an element.

console.log("data-*attribute");
console.log(idOne.dataset); // Get the dataset of the element
console.log(idOne.dataset.id); // Get the value of the data-id attribute
console.log(idOne.dataset.class); // Get the value of the data-class attribute
console.log(idOne.dataset.style); // Get the value of the data-style attribute
console.log(idOne.dataset.data); // Get the value of the data-data attribute
console.log(idOne.dataset.title); // Get the value of the data-title attribute
console.log(idOne.dataset.href); // Get the value of the data-href attribute
console.log(idOne.dataset.src); // Get the value of the data-src attribute
console.log(idOne.dataset.alt); // Get the value of the data-alt attribute
console.log(idOne.dataset.custom); // Get the value of the data-custom attribute
console.log(idOne.dataset.customAttribute); // Get the value of the data-custom-attribute attribute
