// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

'use script.js';

const companyEdtech = ["pw skills", "jybus","Ineuron","pw skills"];
const occurrence = companyEdtech.lastIndexOf("pw skills");
console.log(`The last occurence of "pw skills" is at index ${occurrence}`);

const companyEdtech1 = ["jybus","pw skills","Ineuron","Unicorn"];
const occurrence1 = companyEdtech1.lastIndexOf("pw skills");
console.log(`The first occurence of "pw skills" is at index ${occurrence1}`);