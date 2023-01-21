// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

'use strict';

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let max = 0;
let sum = 0;
console.log(`The original array is`);
console.log(ages);
for(let i = 0; i<=ages.length-1; i++){
 for(let j = 0; j<(ages.length-i-1); j++){
    if(ages[j]>ages[j+1]){
        let temp = ages[j];
        ages[j] = ages[j+1];
        ages[j+1] = temp;
    }
 }
}
console.log("The sorted array is")
console.log(ages);
console.log(`Min: ${ages[0]} and Max: ${ages[ages.length-1]}`)

if(ages.length%2 === 0){
    console.log(`The median are ${ages[(ages.length/2)-1]} and ${ages[ages.length/2]}`);
}
else{
    console.log(`The median is ${ages[ages.length/2]}`); 
}

for(let i = 0;i<=ages.length-1;i++){
    sum = sum + ages[i];
}

console.log(`The average is ${sum/ages.length}`);

console.log(`The range of ages is ${ages[ages.length-1] - ages[0]}`);

const calcDifference = (a,b) => {
  return Math.abs(a-b);
}

const differenceOne = calcDifference(ages[0], sum/ages.length);
const differenceTwo = calcDifference(ages[ages.length-1], sum/ages.length);

console.log(`The first difference between Min and average is ${differenceOne}`)
console.log(`The first difference between Max and average is ${differenceTwo}`)