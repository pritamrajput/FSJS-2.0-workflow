"use strict";

const barbarian = document.querySelector('.clash-card__unit-stats--barbarian');
barbarian.style.backgroundColor = "#ec9b3b";
const oneThird = barbarian.querySelectorAll('.one-third');
for(let i = 0; i<oneThird.length;i++){
    oneThird[i].style.color = "#fff";
}

