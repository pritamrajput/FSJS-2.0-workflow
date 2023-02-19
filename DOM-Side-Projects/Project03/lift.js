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

//Function to create lifts inside floor
function createLifts(){
    const lift = document.createElement("div");
    lift.classList.add("lifts");
    return lift;
}

let lifts = []

for(let i = 0; i<getLifts; i++){
    lifts[i] = createLifts();
 }

//  console.log(lifts);


function appendLifts(parent,children){
  for(let i = 0;i<children.length;i++){
    parent.appendChild(children[i]);
  }
}



for(let i = 0 ; i < getFloors ;i++){
    if(i === 0){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Down")];
        appendButton(innerDiv,button); 
        appendLifts(innerDiv,lifts) ;
    }
    else if(i !== 0 && i!== getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Up"),createButton("Down")];
        appendButton(innerDiv,button);   
    }
    else if(i === getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("up")];
        appendButton(innerDiv,button);
    }
}









