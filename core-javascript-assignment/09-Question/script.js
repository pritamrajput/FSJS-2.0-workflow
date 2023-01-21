//09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

'use strict';

const falsy01 = 0; // 0 is a falsy value.
const falsy02 = ''; //empty string is a falsy value
let falsy03;  //undefined variable is a falsy value

const truthy01 = [];
const truthy02 = "False";
let truthy03 = '0';

console.log(`Falsy value gives false when they are converted to Boolean`);
console.log(Boolean(falsy01));
console.log(Boolean(falsy02));
console.log(Boolean(falsy03));

console.log(`Truthy value gives true when they are converted to Boolean`);
console.log(Boolean(truthy01));
console.log(Boolean(truthy02));
console.log(Boolean(truthy03));