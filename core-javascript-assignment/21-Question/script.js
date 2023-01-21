// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

'use strict';

const countries = ['Africa','Australia','India','France','Ethiopia'];

let count = 0;
for(let i = 0; i<=countries.length-1; i++){
if(countries[i] === 'Ethiopia'){
    console.log('ETHIOPIA');
}
else if(countries[i] !== 'Ethiopia'){
 count++;
}
}

if(count === countries.length){
  countries.push('Ethiopia');
}

console.log(countries);