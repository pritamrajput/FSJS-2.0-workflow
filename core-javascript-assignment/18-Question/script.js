// 18. Write a program which tells the number of days in a month, now consider leap year.
'use strict';

const month = prompt('Enter the month');

if(month === "january" || month === "march" || month === "may" || month === "july" || month === "august" ||month === "october" || month==="december"){
    console.log("The number of days are 31");
}
else if(month==="spril" || month==="june" || month === "september" || month==="november"){
    console.log("The number of days are 30");
}
else if(month==="february"){
    console.log("The number of days are 29");

}
else{
    console.log("Enter a valid month");
}