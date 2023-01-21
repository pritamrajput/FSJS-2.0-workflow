// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

'use strict';

const score = prompt("Enter your score to know your grades 😁");

if(score>=80 && score<=100){
    console.log("You have A Grade");
}
else if(score>=70 && score<=79){
    console.log("You have B Grade");
}
else if(score>=60 && score<=69){
    console.log("You have C Grade");
}
else if(score>=50 && score<=59){
    console.log("You have D Grade");
}
else if(score>=0 && score<=49){
    console.log("You have F Grade");
}
else{
    console.log("Enter a valid score PLEASE.");
}