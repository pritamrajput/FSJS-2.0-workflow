'use strict';

// Prime Number Logic
const isPrime = function(number){
if(number === 1 || number === 0){
    return false;
}
for(let i = 2 ; i < number ; i++){
    if(number % i === 0){
        return false;
    }
}
return true;
}


// number Generator Logic
const numberGenerate = function(){
const num1 = Number(document.querySelector('.number-value').value);
    for(let i = 0; i <= num1; i++){
        if(i % 2 == 0){
            if(isPrime(i)){
                let element = document.createElement('div');
                main.appendChild(element);
                element.classList.add('prime');
                element.innerText = i;
            }
            else{
                let element = document.createElement('div');
                 main.appendChild(element);
                 element.classList.add('even');
                 element.innerText = i;
        }
            } 
        else {
            
            if(isPrime(i)){
                let element = document.createElement('div');
                main.appendChild(element);
                element.classList.add('prime');
                element.innerText = i;
            }
            else{
                let element = document.createElement('div');
                main.appendChild(element) ;
                element.classList.add('odd');
                element.innerText = i;
            }
    
        }
        }
}


// Reset Logic
const numberRemove = function(){
document.querySelector('.main').innerHTML = '';
document.querySelector('.number-value').value = ''
}


const btn = document.querySelector('.input-btn');
const reset = document.querySelector('.btn-reset');

btn.addEventListener('click', numberGenerate);
reset.addEventListener('click',numberRemove);

let main = document.querySelector('.main ');
// let element = document.createElement('div');





   