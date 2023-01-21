//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

'use strict';

const num1 = 23;
const num2 = 12;

const operation = prompt('Enter the operation');

switch(operation){
    case '+':
        const sum = num1 + num2;
        console.log(sum);
        break;
    case '-':
        const sub = num1 - num2;
        console.log(sub);
        break;
    case '*':
        const mul = num1 * num2;
        console.log(mul);
        break;
    case '/':
        const divide = num1/num2;
        console.log(divide);
        break;
    case '%':
        const dividendo = num1%num2;
        console.log(dividendo);
        break;
    default:
        console.log(`Enter a valid operation`);
}