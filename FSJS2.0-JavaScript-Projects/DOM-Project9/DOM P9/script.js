'use strict';

// Task 1
const getTitle = document.querySelectorAll(".title");
getTitle[1].style.color = "#e63946"

const getButtonCart = document.querySelectorAll(".add-to-cart");
getButtonCart[0].firstElementChild.src = "./images/icon-cart.svg"

// Task 2
getButtonCart[0].addEventListener("mouseover",function(){
    getButtonCart[0].style.backgroundColor = "#e63946"
})
getButtonCart[0].addEventListener("mouseout",function(){
    getButtonCart[0].style.backgroundColor = "hsl(158, 36%, 37%)"
})
