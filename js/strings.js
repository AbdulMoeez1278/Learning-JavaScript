// | **Method**                     | **Description**                                                  | **Return Type** | **Loop-Friendly**     | **Example**                                    |
// | ------------------------------ | ---------------------------------------------------------------- | --------------- | --------------------- | ---------------------------------------------- |

// | `.length`                      | Returns the length (number of characters) in a string            | `Number`        | ✅ Yes (for loops)     | `"hello".length → 5`                           |

// | `.charAt(index)`               | Returns character at specified index                             | `String`        | ✅ Yes                 | `"hello".charAt(1) → 'e'"`                     |

// | `.charCodeAt(index)`           | Returns UTF-16 code of character at index                        | `Number`        | ✅ Yes                 | `"A".charCodeAt(0) → 65`                       |

// | `.at(index)`                   | Returns char at index, supports negative indexes                 | `String`        | ✅ Yes                 | `"abc".at(-1) → 'c'"`                          |

// | `.concat(str)`                 | Joins multiple strings                                           | `String`        | ✅ Yes                 | `"a".concat("b") → 'ab'"`                      |

// | `.includes(str)`               | Checks if substring exists in string                             | `Boolean`       | ✅ Yes (searching)     | `"hello".includes("ell") → true`               |

// | `.indexOf(str)`                | Returns first index of substring, or -1                          | `Number`        | ✅ Yes                 | `"hello".indexOf("l") → 2`                     |

// | `.lastIndexOf(str)`            | Returns last index of substring, or -1                           | `Number`        | ✅ Yes                 | `"hello".lastIndexOf("l") → 3`                 |

// | `.startsWith(str)`             | Checks if string starts with substring                           | `Boolean`       | ✅ Yes                 | `"hello".startsWith("he") → true`              |

// | `.endsWith(str)`               | Checks if string ends with substring                             | `Boolean`       | ✅ Yes                 | `"hello".endsWith("lo") → true`                |

// | `.slice(start, end)`           | Extracts part of string (supports negative index)                | `String`        | ✅ Yes                 | `"hello".slice(1, 4) → 'ell'"`                 |

// | `.substring(start, end)`       | Extracts part of string (no negative indexes)                    | `String`        | ✅ Yes                 | `"hello".substring(1, 4) → 'ell'"`             |

// | `.substr(start, length)`       | Extracts substring by length from start (deprecated)             | `String`        | ✅ Yes                 | `"hello".substr(1, 3) → 'ell'"`                |

// | `.replace(str, newStr)`        | Replaces **first** occurrence of a match                         | `String`        | ✅ Yes                 | `"hi hi".replace("hi", "hello") → 'hello hi'"` |

// | `.replaceAll(str, newStr)`     | Replaces **all** matches                                         | `String`        | ✅ Yes                 | `"hi hi".replaceAll("hi", "hey") → 'hey hey'"` |

// | `.toUpperCase()`               | Converts string to all uppercase                                 | `String`        | ✅ Yes                 | `"hello".toUpperCase() → 'HELLO'"`             |

// | `.toLowerCase()`               | Converts string to all lowercase                                 | `String`        | ✅ Yes                 | `"HELLO".toLowerCase() → 'hello'"`             |

// | `.trim()`                      | Removes whitespace from both ends                                | `String`        | ✅ Yes                 | `"  hi  ".trim() → 'hi'"`                      |

// | `.trimStart()` / `.trimLeft()` | Removes leading whitespace                                       | `String`        | ✅ Yes                 | `"  hi".trimStart() → 'hi'"`                   |

// | `.trimEnd()` / `.trimRight()`  | Removes trailing whitespace                                      | `String`        | ✅ Yes                 | `"hi  ".trimEnd() → 'hi'"`                     |

// | `.split(separator)`            | Splits string into array by separator                            | `Array`         | ✅ Yes (iterate array) | `"a,b,c".split(",") → ['a','b','c']"`          |

// | `.join(separator)`             | (Array method) Joins array into string with separator            | `String`        | ❌ No (array method)   | `['a','b'].join("-") → 'a-b'`                  |

// | `.repeat(count)`               | Repeats string n times                                           | `String`        | ✅ Yes                 | `"ha".repeat(3) → 'hahaha'"`                   |

// | `.padStart(length, str)`       | Pads string at start to reach given length                       | `String`        | ✅ Yes                 | `"5".padStart(3, "0") → '005'"`                |

// | `.padEnd(length, str)`         | Pads string at end to reach given length                         | `String`        | ✅ Yes                 | `"5".padEnd(3, "0") → '500'"`                  |

// | `.match(regex)`                | Returns result of matching regex (1st match or array of matches) | `Array / null`  | ✅ Yes                 | `"abc123".match(/\d+/) → ['123']"`             |

// | `.matchAll(regex)`             | Returns all regex matches (use `...spread` to access)            | `Iterator`      | ✅ Yes (with loops)    | `[..."1a2b".matchAll(/\d/g)] → ['1', '2']`     |

// | `.search(regex)`               | Searches with regex, returns index or -1                         | `Number`        | ✅ Yes                 | `"hello123".search(/\d/) → 5`                  |

// | `.toString()`                  | Returns string itself (useful with numbers or conversions)       | `String`        | ✅ Yes                 | `123.toString() → '123'`                       |

// | `.valueOf()`                   | Returns the primitive value of a string object                   | `String`        | ✅ Yes                 | `new String("hi").valueOf() → 'hi'`            |

// | `.normalize()`                 | Normalizes Unicode text (e.g., é)                                | `String`        | ✅ Yes                 | `"é".normalize() → 'é'`                        |

// | `.localeCompare(str)`          | Compares two strings based on locale rules (-1, 0, 1)            | `Number`        | ✅ Yes                 | `"a".localeCompare("b") → -1`                  |

// STRINGS ---> A string is a sequence of characters intended to represrent the text. Strings can contain any kind of characters, like letter, numbers or special characters.

// declaring strings
const name = "Abdul Moeez";
const repoCount = 18;

// Embeding javascript using template literals
console.log(name + repoCount + " Value");

// TEMPLATE LITERALS (` `)
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// another method for declaring a string
const gameName = new String("Abdul-Moeezoo-Game");
console.log(gameName[5]);
// console.log(gameName.__proto__);

// STRING METHODS ---> Most used methods of strings
// 1: length METHOD
console.log(gameName.length);

// 2: toUpperCase METHOD
console.log(gameName.toUpperCase); // it does't change the original string

// 3: charAt METHOD
console.log(gameName.charAt(3));

// 4: indexOf METHOD
// console.log(gameName.indexOf(l));

// 5: substring METHOD
const newString = gameName.substring(0, 5);
console.log(newString);

// 6: slice METHOD
const anotherString = gameName.slice(6, 11);
console.log(anotherString);

// 7: trim METHOD
const newStringOne = " Abdul Moeez   ";
console.log(newStringOne);
console.log(newStringOne.trim());

// 8: replace METHOD
const url = "https://google.com";
console.log(url.replace("google", "facebook"));

// 9: split METHOD
console.log(gameName.split("-"));

// check if the string is startsWith the following string ("zilla")
const browserType = "google chrome";

if (browserType.startsWith("chrome")) {
  console.log("Found chrome!");
} else {
  console.log("No chrome here!");
}

// check if the string is endsWith the following string ("zilla")
const browserType2 = "google chrome";

if (browserType2.endsWith("chrome")) {
  console.log("Found chrome!");
} else {
  console.log("No chrome here!");
}

// 10: concat METHOD
console.log(name.concat(" ", gameName));

// 11: lastIndexOf METHOD
const lastIndex = gameName.lastIndexOf("o");
console.log(lastIndex);

// 12: join METHOD
const array = ["Abdul", "Moeez", "Tariq"];
const joinedString = array.join("-");
console.log(joinedString); // Output: "Abdul-Moeez-Tariq"

// 13: repeat METHOD
const repeatedString = "Abdul ".repeat(3);
console.log(repeatedString); // Output: "Abdul Abdul Abdul"

let str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // Output: h e l l o
}

let sentence2 = "JavaScript is fun";
let words = sentence2.split(" "); // splits converts the string into an array
console.log(words); // Output: ["JavaScript", "is", "fun"]
words.forEach((word) => console.log(word.toUpperCase())); // forEach loop works with arrays

// Array Sort Method
// const numbers = [5, 2, 8, 1, 9, 4, 7];
// const sortedNumbers = numbers.sort((a, b) => a - b);

// console.log("Ascending:", sortedNumbers); // Output: [1, 2, 4, 5, 7, 8, 9] // Ascending Order

// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log("Descending:", sortedNumbers); // Output: [1, 2, 4, 5, 7, 8, 9] // Descending Order
