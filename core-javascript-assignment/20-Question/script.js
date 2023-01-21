// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

'use strict';

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(`'Meat' added at the beginning`);
shoppingCart.unshift('Meat')
console.log(shoppingCart);

console.log(`'Sugar' added at the end`);
shoppingCart.push('Sugar');
console.log(shoppingCart);

console.log(`'Honey' removed form the array`);
shoppingCart.splice(4,1);
console.log(shoppingCart);

console.log(`'Tea' removed form the array and 'Green tea' added`);
shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);