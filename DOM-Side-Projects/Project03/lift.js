"use strict";

const getDiv = document.querySelector(".main__container")
const getFloors = localStorage.getItem('set-floors');
const getLifts = localStorage.getItem('set-lifts');
let btn;
let lifts = [];
let liftNumber;
const selectLift = document.getElementsByClassName("input__lift");
const goButton = document.getElementsByClassName("lift__select");

//Selecting lift out of available lifts
goButton[0].addEventListener("click",function(){
liftNumber = Number(selectLift[0].value - 1);
console.log(liftNumber);
if(liftNumber > getLifts - 1){
    alert(`Enter number less than or equal to ${getLifts}`);
}
else if(liftNumber === -1){
    alert('Please enter a value')
};
})

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
    lifts[i].style.transition = "bottom 2.5s";
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
        button[0].addEventListener("click",function(){
            lifts[liftNumber].style.bottom = `${(getFloors-1)*120}px`;
        })
        appendButton(innerDiv,button); 
    }
    else if(i !== 0 && i!== getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Up"),createButton("Down")];
        button[0].addEventListener("click",function(){
            lifts[liftNumber].style.bottom = `${(getFloors - i - 1)*120}px`
        })
        button[1].addEventListener("click",function(){
            lifts[liftNumber].style.bottom = `${(getFloors - i - 1)*120}px`
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
        button[0].addEventListener('click',function(){
            lifts[liftNumber].style.bottom = "0"+"px";
        })
        appendLifts(innerDiv,lifts) ;
        console.log(lifts);
    }
}