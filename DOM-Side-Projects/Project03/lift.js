"use strict";

const getDiv = document.querySelector(".main__container")
const getFloors = localStorage.getItem('set-floors');
const getLifts = localStorage.getItem('set-lifts');
let btn;
let lifts = [];

// function to create button
function createButton(text){
    btn = document.createElement("button");
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
function createLifts(liftIndex){
    const lift = document.createElement("div");
    lift.classList.add("lifts",`lift__${liftIndex}`);
    return lift;
}



// creating lifts
for(let i = 0; i<getLifts; i++){
    lifts[i] = createLifts(i);
 }

// function for appending lifts
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
    }
    else if(i !== 0 && i!== getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Up"),createButton("Down")];
        button[0].addEventListener("click",function(){
            const liftZero = document.querySelector(".lift__0");
            liftZero.style.transition = "bottom 2s";
            if(i===3){
              liftZero.style.bottom = "120"+"px";
            } 
            else if(i===2){
                liftZero.style.bottom = "240"+"px";
            }
            else if(i===1){
                liftZero.style.bottom = "360"+"px";
            }
        })
        appendButton(innerDiv,button);   
    }
    else if(i === getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("up")];
        appendButton(innerDiv,button);
        // Appending lifts to the innerDiv
        appendLifts(innerDiv,lifts) ;
        console.log(lifts);
    }
}










