"use strict";

const getDiv = document.querySelector(".main__container")
const getFloors = localStorage.getItem('set-floors');
const getLifts = localStorage.getItem('set-lifts');

// function to create button
function createButton(text){
    const btn  = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = text;
    return btn;
}

// function to append button to innerDiv

function appendButton(parent, children){
    for(let i = 0; i<children.length; i++){
        parent.appendChild(children[i]);
    }
}

const button = [createButton("Up"),createButton("Down")];

for(let i = 0 ; i < getFloors ;i++){
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("inner_container");
  getDiv.appendChild(innerDiv);
  appendButton(innerDiv,button);
}









