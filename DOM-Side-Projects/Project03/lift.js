"use strict";

const getDiv = document.querySelector(".main__container")
const getFloors = localStorage.getItem('set-floors');
const getLifts = localStorage.getItem('set-lifts');
let btn;
let lifts = [];
let liftNumber;
let liftOrder = 0;
let freeLift;


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
    lift.setAttribute("data-state","free");
    lift.setAttribute("data-floor",1);
    lift.textContent = `lift ${liftIndex + 1}`
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

//Finding free lift
function activeLift(){
   for(let i = 0;i<lifts.length;i++){
    if(lifts[i].getAttribute("data-state")==="free"){
        return lifts[i];
    }
   }
}



for(let i = 0 ; i < getFloors ;i++){
    if(i === 0){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Down")];
        button[0].addEventListener("click",function(){
            console.log(getFloors);
            const liftActive =  activeLift();
            liftActive.setAttribute("data-state","busy");
            setTimeout(()=>{
             liftActive.setAttribute("data-state","free");
            },2500);
            liftActive.style.bottom = `${(getFloors-1)*120}px`;          
        })
        appendButton(innerDiv,button); 
    }
    else if(i !== 0 && i!== getFloors - 1){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner_container");
        getDiv.appendChild(innerDiv);
        const button = [createButton("Up"),createButton("Down")];
        button[0].addEventListener("click",function(){
            console.log(getFloors - i);
           const liftActive =  activeLift();
           liftActive.setAttribute("data-state","busy");
           setTimeout(()=>{
            liftActive.setAttribute("data-state","free");
           },2500);
           liftActive.style.bottom = `${(getFloors-i-1)*120}px`; 
        })
        button[1].addEventListener("click",function(){
            console.log(getFloors - i);
            const liftActive =  activeLift();
            liftActive.setAttribute("data-state","busy");
            setTimeout(()=>{
             liftActive.setAttribute("data-state","free");
            },2500);
            liftActive.style.bottom = `${(getFloors-i-1)*120}px`;
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
            console.log(1);
            const liftActive =  activeLift();
            liftActive.setAttribute("data-state","busy");
            setTimeout(()=>{
             liftActive.setAttribute("data-state","free");
            },2500);
            liftActive.style.bottom = `${0}px`;
        })
        appendLifts(innerDiv,lifts) ;
        console.log(lifts);
    }
}