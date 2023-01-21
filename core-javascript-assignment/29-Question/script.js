// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

'use strict';
const filename1 = "system.php";
const filename2 = "script.js";

const extension1 = filename1.split('.').pop();
const extension2 = filename2.split('.').pop();

console.log(extension1);
console.log(extension2);