function greet() {
  console.log("Hello !!");
}

greet();
greet();
greet();

function greet(username, message) {
  console.log("Hello " + username + ". Your message is - " + message);
}

greet("Ram", "2026 is your year !!");

function sendLog(logMessage = "Default Log Message") {
  console.log(logMessage);
}

sendLog();
sendLog("Data fetching complete !!");

function add(a, b) {
  return a + b;
}

let result = add(10, 2);
console.log(result);

result = add("He", "llo !!");
console.log(result);

// Arrow Function / Annonymous Function

const f1 = function () {
  console.log("I am a annonymous function!!");
};

export default (username, message) => {
  console.log("Hello " + username + ". Your message is - " + message);
  return username + message;
};

// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

/*
Instead of

(userName) => { ... }
you could write

userName => { ... }

*/

// If your function takes no parameters, parentheses must not be omitted - () => { ... }
// is the only correct form in that case.
