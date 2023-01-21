//06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
'use strict';

const newString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(`The original string is "${newString}"`);

const splitString = newString.split(",");
console.log("The string split is")
console.log(splitString);