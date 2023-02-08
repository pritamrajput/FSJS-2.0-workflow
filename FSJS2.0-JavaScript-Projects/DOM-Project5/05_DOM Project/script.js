"use strict";

//Recipes list
const tagCont = document.querySelector('.tags-container')
const tagContNext = tagCont.firstElementChild.nextElementSibling;
console.log(tagContNext);
const aElement = document.createElement('a')
aElement.innerText = "Chinese(7)"
aElement.href = "#"
tagContNext.appendChild(aElement)

// Navbar button
const proBTN = document.querySelector('.nav-center');
const lastChild = proBTN.lastElementChild;
const btnHref = document.createElement('a');
btnHref.innerText = "Pro Subscription";
btnHref.href = "#"
btnHref.classList.add('btn')
lastChild.appendChild(btnHref);
