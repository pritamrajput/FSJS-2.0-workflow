"use strict";

// onclick event
const btnClick = document.querySelector(".calculate__BTN");
btnClick.addEventListener("click",function(){
    const yourMass = document.querySelector(".number__input");
    const getMass = yourMass.value;
    const planetName = document.querySelector(".select__planet");
    const getPlanet = planetName.value;

   if(getPlanet === "mercury"){
    console.log((getMass*3.61)/9.81);
    const innerBox = document.querySelector('.inner__box')
    innerBox.style.display = "none";
    console.log(innerBox);
    const innerBox1 = document.querySelector(".inner__box1")
    innerBox1.style.display = "flex";
    innerBox1.firstElementChild.src = "./assets/"+`${getPlanet}.png`
    console.log(innerBox1.firstElementChild);
   }
   else if(getPlanet === "venus"){
    console.log((getMass*8.83)/9.81);
   }
   else if(getPlanet === "earth"){
    console.log(getMass);
   }
   else if(getPlanet === "mars"){
    console.log((getMass*3.75)/9.81);
   }
   else if(getPlanet === "moon"){
    console.log((getMass*1.625)/9.81);
   }
   else if(getPlanet === "jupiter"){
    console.log((getMass*24.79)/9.81);
   }
   else if(getPlanet === "saturn"){
    console.log((getMass*11.2)/9.81);
   }
   else if(getPlanet === "uranus"){
    console.log((getMass*10.5)/9.81);
   }
   else if(getPlanet === "neptune"){
    console.log((getMass*13.3)/9.81);
   }
   else if(getPlanet === "pluto"){
    console.log((getMass*0.61)/9.81);
   }
})

const yourMass = document.querySelector(".number__input");
// console.log(yourMass);