"use strict";

const getLanguages = document.querySelector(".main__languages");
const getChildren = getLanguages.children;
console.log(getChildren);

for(let i = 3 ; i<getChildren.length; i = i + 1){
    getChildren[i].remove();
}   