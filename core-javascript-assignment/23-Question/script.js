//23. Write a program to check that the number given by the user is a prime number or not.
'use strict';

const number = Number(prompt("Enter a positive number"));
let isPrime;

if(number === 1){
    console.log('1 is neither prime nor a composite number');
}
else if(number > 1){
    for(let i = 2 ; i<number ; i++){
        if(number%i === 0){
          isPrime = 1;
          break;
        }
    }
    if(isPrime === 1){
        console.log("The number is not prime");
    }
    else{
        console.log("The number is  prime"); 
    }
}