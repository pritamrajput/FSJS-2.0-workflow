// 05. Declare a varibale and assign string value to it and then split it into an array using split() method
'use strict';
const newString = "I like to read articles on freecodecamp";
const splitString = newString.split(" ");

console.log("The original string is")
console.log(newString);
console.log("The string splits into array of words")
console.log(splitString);

const splitString1 = newString.split("");
console.log("The string splits into array of letters and blank space");
console.log(splitString1);