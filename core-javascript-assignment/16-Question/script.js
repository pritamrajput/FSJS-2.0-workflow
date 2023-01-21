// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

'use strict';

const month = prompt("Please enter the month");

if(month === 'September' || month === 'October' || month === 'November'){
    console.log(`The season is Autumn`);
}
else if(month === 'December' || month === 'January' || month === 'February'){
    console.log(`The season is Winter`); 
}
else if(month === 'March' || month === 'April' || month === 'May'){
    console.log(`The season is Spring`); 
}
else if(month === 'June' || month === 'July' || month === 'August'){
    console.log(`The season is Summer`);
}
else{
    console.log(`Please enter a valid month`);
}