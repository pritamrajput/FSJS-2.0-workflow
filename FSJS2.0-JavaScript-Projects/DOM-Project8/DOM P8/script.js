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