// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

'use strict';

const date = new Date();
const datePast = new Date('1970-01-01');

const elapsed = (date - datePast);
console.log(`Today's year : ${date.getFullYear()}`);
console.log(`Today's month : ${date.getMonth()}  (0-january to 11-December)`);
console.log(`Today's date : ${date.getDate()}`);
console.log(`Today's day : ${date.getDay()}  (0-Sunday to 6-Saturday)`);
console.log(`Hours now : ${date.getHours()}`);
console.log(`Minutes now : ${date.getMinutes()}`);
console.log(`Seconds elapsed between 1970-01-01 to 2022-01-16 is ${elapsed/1000} `)