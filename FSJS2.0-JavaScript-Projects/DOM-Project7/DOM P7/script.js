// Task 1
"use strict";

// const getLanguages = document.querySelector(".main__languages");
// const getChildren = getLanguages.children;
// console.log(getChildren);

// for(let i = 3 ; i<getChildren.length; i = i + 1){
//     getChildren[i].remove();
// }

//Task 2

const getButton = document.querySelector(".main__form-btn");
const getInput = document.querySelector(".main__form-input");

console.log(getButton);
getButton.removeAttribute("disabled")
getInput.removeAttribute("disabled")



const languages = document.querySelector('.main__languages').children;
console.log(languages);
const name1 = Array.from(languages);
console.log(name1);
const names = Object.assign({},name1);
console.log(names);

localStorage.setItem("names1",JSON.stringify(names));

console.log(localStorage.getItem(name1));
for(let i = 3 ; i<getChildren.length; i = i + 2){
    getChildren[i].style.display = "none";
} 



if(localStorage.getItem("visible")==='0'){
    for(let i = 3 ; i<getChildren.length; i = i + 2){
        getChildren[i].style.display = "inline";
    }  
}

getButton.addEventListener("click", ()=>{
    localStorage.setItem('visible',0)
})