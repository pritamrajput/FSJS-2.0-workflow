# Task 1
## Original Page
### Task 1
![Image](./ass8.1-before.png)
### Task 2
![Image](./ass8.2-before.png)
### Task 3
![Image](./ass8.3-before.png)
## Achieve the following with DOM manipulation
### Task1 output required
![Image](./ass8.1-after.png)
### Task2 output required
![Image](./ass8.2-after.png)
### Task3 output required
![Image](./ass8.3-after.png)
## JavaScript code to achieve the required output
```js
'use strict';

// Task 1
const getAside = document.querySelector('.col-lg-4');
getAside.style.overflowY = "auto"
console.log(getAside);

const createH2 = document.createElement('h2');
createH2.classList.add("new-head");
createH2.innerText = "New h2 added";

const createPtag = document.createElement('p');
createPtag.classList.add("new-p");
createPtag.innerText = "New P tag is added here using DOM manipulation."

const createHr = document.createElement('hr');
createHr.classList.add("hr-line");

getAside.appendChild(createHr);
getAside.appendChild(createH2);
getAside.appendChild(createPtag);


//Task 2

const getBody = document.querySelector("body");
getBody.style.backgroundImage = "url('')";

// Task 3
const getButton = document.querySelector(".navbar-toggler");
console.log(getButton);
getButton.addEventListener("click",function(){
    document.querySelector(".navbar-collapse").classList.toggle("d-flex")
})
```