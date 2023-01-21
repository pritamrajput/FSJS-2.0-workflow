//24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

const even = [];
const odd = [];

for(let i = 0; i<=100; i= i = i+2 ){
    if(i%2 === 0){
        even[i/2]=i;
    }
}
for(let i = 1; i<=100; i= i = i+2 ){
    if(i%2 !== 0){
        odd[i/2 - 0.5]=i;
    }
}

console.log(even);
console.log(odd);