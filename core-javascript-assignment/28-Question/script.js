// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

// a).

'use strict';
const n = 5;
let star = ""
for(let i=1;i<=n;i++){
    for(let j=1; j<=i; j++){
        star += "*";
    }
    star += "\n";
}
console.log(star);

//b).

'use strict';
const n1 = 5;
let star1 = ""
for(let i=1;i<=n1;i++){
    for(let j=1; j<=n1; j++){
        star1 += "*";
    }
    star1 += "\n";
}
console.log(star1);

//c).

const n2 = 5;
let star2 = "";

for(let i = 1; i<=n2 ; i++){
   for(let j = 1; j<= n2 - i; j++){
    star2 += " ";
   }
   for(let j = 1; j<=2*i - 1; j++){
    star2 += "*";
   }
   star2 += "\n";
}
console.log(star2);