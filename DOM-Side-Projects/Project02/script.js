"use strict";

// onclick event
const btnClick = document.querySelector(".calculate__BTN");
btnClick.addEventListener("click",function(){
    const yourMass = document.querySelector(".number__input");
    const getMass = yourMass.value;
    console.log(getMass);
    const planetName = document.querySelector(".select__planet");
    const getPlanet = planetName.value;
    console.log(getPlanet);

    function doMagic(getPlanet, gValue){
        const innerBox = document.querySelector('.inner__box')
        innerBox.style.display = "none";

        document.querySelector(".inner__box2").style.display = "none";
        document.querySelector(".inner__box3").style.display = "none";
    
        const innerBox1 = document.querySelector(".inner__box1")
        innerBox1.style.display = "flex";
        innerBox1.firstElementChild.src = "./assets/"+`${getPlanet}.png`
    
        document.querySelector(".inner__span").innerText =`${getPlanet}`.toUpperCase();
        document.querySelector(".circle").innerText = `${(getMass*gValue)/9.81}kg`
    }

   if(getPlanet === "mercury"){
     const gValue = 3.61;
     doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "venus"){
    const gValue = 8.83;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "earth"){
    console.log(getMass);
    const innerBox = document.querySelector('.inner__box')
    innerBox.style.display = "none";

    document.querySelector(".inner__box2").style.display = "none";
    document.querySelector(".inner__box3").style.display = "none";

    const innerBox1 = document.querySelector(".inner__box1")
    innerBox1.style.display = "flex";
    innerBox1.firstElementChild.src = "./assets/"+`${getPlanet}.png`
    
    document.querySelector(".inner__span").innerText =`${getPlanet}`.toUpperCase();
    document.querySelector(".circle").innerText = `${getMass}kg`
   }
   else if(getPlanet === "mars"){
    const gValue = 3.75;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "moon"){
    const gValue =1.625;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "jupiter"){
    const gValue =24.79;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "saturn"){
    const gValue =11.2;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "uranus"){
    const gValue =10.5;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "neptune"){
    const gValue =13.3;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "pluto"){
    const gValue =0.61;
    doMagic(getPlanet,gValue);
   }
   else if(getPlanet === "" && getMass === ""){
    const innerBox = document.querySelector('.inner__box')
    innerBox.style.display = "none";
    document.querySelector(".inner__box2").style.display = "block";

    document.querySelector(".inner__box1").style.display = "none";

    document.querySelector(".inner__box3").style.display = "none";
   }
   else if(getPlanet === ""){
    const innerBox = document.querySelector('.inner__box')
    innerBox.style.display = "none";
    document.querySelector(".inner__box3").style.display = "block";
    document.querySelector(".inner__box1").style.display = "none";
    document.querySelector(".inner__box2").style.display = "none";
   }
})

const yourMass = document.querySelector(".number__input");
// console.log(yourMass);