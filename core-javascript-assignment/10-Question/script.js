// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

'use strict';

const pythonString = "python";
const jargonString = "jargon";


console.log(`01. The value of 4 > 3 is true`);
console.log(`02. The value of 4 >= 3 is true`);
console.log(`03. The value of 4 < 3 is false`);
console.log(`04. The value of 4 <= 3 is false`);
console.log(`05. The value of 4 == 4 is true`);
console.log(`06. The value of 4 === 4 is true`);
console.log(`07. The value of 4 != 4 is false`);
console.log(`08. The value of 4 !== 4 is false`);
console.log(`09. The value of 4 != '4' is false`);
console.log(`10. The value of 4 == '4' is true`);
console.log(`11. The value of 4 === '4' is false`);
console.log("-----------------------------------");
console.log(`01. The value of 4 > 3 with "console.log" ${4 > 3}`);
console.log(`02. The value of 4 >= 3 with "console.log" ${4 >= 3}`);
console.log(`03. The value of 4 < 3 with "console.log" ${4 < 3}`);
console.log(`04. The value of 4 <= 3 with "console.log" ${4 <= 3}`);
console.log(`05. The value of 4 == 4 with "console.log" ${4 == 4}`);
console.log(`06. The value of 4 === 4 with "console.log" ${4 === 4}`);
console.log(`07. The value of 4 != 4 with "console.log" ${4 != 4}`);
console.log(`08. The value of 4 !== 4 with "console.log" ${4 !== 4}`);
console.log(`09. The value of 4 != '4' with "console.log" ${4 != '4'}`);
console.log(`10. The value of 4 == '4' with "console.log" ${4 == '4'}`);
console.log(`11. The value of 4 === '4' with "console.log" ${4 === '4'}`);

console.log(`The lenght of python string is ${pythonString.length}`);
console.log(`The lenght of jargon string is ${jargonString.length}`);

if(pythonString.length !== jargonString.length){
    console.log("This is a truthy comparison");
}
else{
    console.log("This is a falsy comparison");
}

