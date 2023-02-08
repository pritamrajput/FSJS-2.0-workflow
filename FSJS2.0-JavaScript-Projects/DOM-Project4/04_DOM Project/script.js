"use strict";

const callOneThird = function(myOneThird){
//  console.log(myOneThird);
for(let i = 0; i<myOneThird.length;i++){
        myOneThird[i].style.color = "#fff";
    }
}

const clearfixAll = document.querySelectorAll('.clearfix')
console.log(clearfixAll);
for(let i = 0; i<clearfixAll.length;i++){
    if(i === 0){
        clearfixAll[i].style.backgroundColor = "#ec9b3b"
       const oneThird = clearfixAll[i].querySelectorAll('.one-third');
       callOneThird(oneThird);
    }
    else if(i === 1){
        clearfixAll[i].style.backgroundColor = "#ee5487";
        const oneThird = clearfixAll[i].querySelectorAll('.one-third');
        callOneThird(oneThird);
    }
    else if( i === 2){
        clearfixAll[i].style.backgroundColor = "#f6901a";
        const oneThird = clearfixAll[i].querySelectorAll('.one-third');
        callOneThird(oneThird);
    }
    else if( i === 3){
        clearfixAll[i].style.backgroundColor = "#82bb30";
        const oneThird = clearfixAll[i].querySelectorAll('.one-third');
        callOneThird(oneThird);
    }
    else if( i === 4){
        clearfixAll[i].style.backgroundColor = "#4facff";
        const oneThird = clearfixAll[i].querySelectorAll('.one-third');
        callOneThird(oneThird);
    }
}



// const barbarian = document.querySelector('.clash-card__unit-stats--barbarian');
// barbarian.style.backgroundColor = "#ec9b3b";
// const oneThird = barbarian.querySelectorAll('.one-third');
// for(let i = 0; i<oneThird.length;i++){
//     oneThird[i].style.color = "#fff";
// }

// const archer = document.querySelector('.clash-card__unit-stats--archer');
// archer.style.backgroundColor = "#ee5487"

// const oneThird1 = archer.querySelectorAll('.one-third');
// for(let i = 0; i<oneThird1.length;i++){
//     oneThird1[i].style.color = "#fff";
// }