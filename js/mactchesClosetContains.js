// Closest, Contains, and Matches
// 1: Matches: Returns true if the element matches the specified selector(s).
// The matches() method is used to check if an element matches a specific CSS selector or a group of selectors.

// It returns true if the element matches the specified selector(s), or false if it does not match.

// The matches() method is useful for checking if an element matches a specific CSS selector or a group of selectors.

// It is often used in event delegation to check if an element matches a specific selector before performing an action.

// The matches() method is not supported in Internet Explorer 11 and earlier versions.

// The matches() method is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

// The matches() method is not a standard DOM method, but it is a common pattern used in JavaScript to check if an element matches a specific selector.

// The matches() method is not a standard DOM method, but it is a common pattern used in JavaScript to check if an element matches a specific selector.

idOne = document.getElementById("idOne");
console.log(idOne);
console.log(idOne.matches(".class"));
console.log(idOne.matches(".box"));

idTwo = document.getElementById("idTwo").value;

// 2: Closest: Returns the closest ancestor of the current element (or the /current element itself) that matches the specified selector(s).

// If there is no such ancestor, it returns null.

// If the selector is not a string, it throws a TypeError exception.

// The closest() method traverses the element and its parents in the DOM tree until it finds a match for the selector string.

// If no match is found, it returns null. The closest() method does not check the element itself.

// The closest() method is useful for finding the nearest ancestor of an element that matches a specific selector.

// It is often used in event delegation to find the closest ancestor of an element that matches a specific selector.

// The closest() method is not supported in Internet Explorer 11 and earlier versions.

// The closest() method is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

console.log(idOne.closest(".box")); // Returns the closest ancestor of the current element (or the current element itself) that matches the specified selector(s).
console.log(idTwo.closest(".box")); // Returns the closest ancestor of the current element (or the current element itself) that matches the specified selector(s).

// 3: Contains: Returns true if the element is a descendant of the specified element, or if it is the same element.

// The contains() method is used to check if an element is a descendant of another element or if it is the same element.

// It returns true if the element is a descendant of the specified element, or if it is the same element. Otherwise, it returns false.
// The contains() method is useful for checking if an element is inside another element in the DOM tree.

// It is often used in event delegation to check if an element is inside a specific container element.

// The contains() method is not supported in Internet Explorer 11 and earlier versions.

// The contains() method is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

// The contains() method is not a standard DOM method, but it is a common pattern used in JavaScript to check if an element is inside another element.

// The contains() method is not a standard DOM method, but it is a common pattern used in JavaScript to check if an element is inside another element.

console.log(idOne.contains(idTwo)); // Returns true if the element is a descendant of the specified element, or if it is the same element.
console.log(idTwo.contains(idOne)); // Returns true if the element is a descendant of the specified element, or if it is the same element.
console.log(idOne.contains(idOne)); // Returns true if the element is a descendant of the specified element, or if it is the same element.
console.log(idTwo.contains(idTwo)); // Returns true if the element is a descendant of the specified element, or if it is the same element.
