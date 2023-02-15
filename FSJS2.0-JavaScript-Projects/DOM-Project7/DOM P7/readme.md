# Task 1
## Original Page
### Task 1
![Image](./ass7.1-before.png)
### Task 2
![Image](./ass7.2-before.png)
## Achieve the following with DOM manipulation
### Task1 output required
![Image](./ass7.1-after.png)
### Task2 output required
![Image](./ass7.2-after.png)
## JavaScript code to achieve the required output
```js
// Task 1
"use strict";

const getLanguages = document.querySelector(".main__languages");
const getChildren = getLanguages.children;
console.log(getChildren);

for(let i = 3 ; i<getChildren.length; i = i + 1){
    getChildren[i].remove();
}

//Task 2

const getButton = document.querySelector(".main__form-btn");
const getInput = document.querySelector(".main__form-input");

console.log(getButton);
getButton.removeAttribute("disabled")
getInput.removeAttribute("disabled")

getInput.placeholder = "iNeuron";



const languages = document.querySelector('.main__languages').children;
console.log(languages);


for(let i = 3 ; i<languages.length; i = i + 2){
        languages[i].style.display = 'none';
    }

getButton.addEventListener("click", function(){
    for(let i = 3 ; i<languages.length; i = i + 2){
        languages[i].style.display = 'inline';
    }  
})
```