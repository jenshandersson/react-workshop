// https://reactwork.shop/Objects

// Strings have a new multiline and template syntax:
let name = "Anna";
const nameMessage = `Hello, ${name}`;
console.log(nameMessage);

// var, const, let
// const and let are scoped. Stop using var :)
var message = "Good to go";
var age = 10;
if (age < 13) {
  var infoMessage = "Not so fast";
  // message can be accessed
  message = infoMessage;
}
console.log(infoMessage);

name = "Anna";
// const person = { name: name };
const person = { name };
console.log(person);

// ./deconstructing.js
