'use strict';

// let list = document.querySelector('ul');
// list.innerHTML = `<li><a href="./index.html">Home</a></li>
// <li> <a href="./about/about.html">About</a> </li>
// <li><a href="./contact/contact.html">Projects</a></li>
// <li><a href="./contact/contact.html">Hire Me</a></li>`;

// let list2 = document.querySelectorAll('ul');
// list2[1].innerHTML = "";

// let list = document.querySelector('ul');
// list.innerHTML = `<li><a href="./index.html">Home</a></li>
//  <li> <a href="./about/about.html">About</a> </li>
// <li><a href="./contact/contact.html">Projects</a></li>`

// let list2 = document.querySelectorAll('ul');
// list2[1].innerHTML = "";

// let input = document.querySelector('.search-field');
// input.innerHTML = ` <input type="text" placeholder="Search My Projects" />
// <button>Search</button>`
// let list = document.querySelector('ul');
// let listInside = list.getElementsByTagName('li');
// console.log(listInside);
// listInside[2].innerText = "Projects";

// let section = document.querySelector('.hero-left-section')
// let para1 = section.getElementsByTagName('p');
// let spanAll = para1[0].getElementsByTagName('span');
// spanAll[1].innerText = "an employee"
// spanAll[2].innerText = "iNeuron Intelligence Pvt Ltd"

// let list = document.querySelector("ul");
// let listInsiede = list.getElementsByTagName('li');
// listInsiede[2].innerText = 'Projects';
// let heroSection = document.querySelector('.hero-right-section');
// let image = heroSection.getElementsByTagName('img');
// image[0].src = "hitesh-sir.jpg";

// let newBTN = document.querySelector('.hero-right-section-btns');
// let newBTN1 = document.createElement('button');
// newBTN1.innerText = "Support Me"
// // console.log(newBTN1);
// // console.log(newBTN);
// newBTN.appendChild(newBTN1)
// let list = document.querySelector("ul");
// let listInsiede = list.getElementsByTagName('li');
// listInsiede[2].innerText = 'Projects';

let leftInputField = document.querySelector('.mainLeftDetails')
console.log(leftInputField[0]);
leftInputField[0].value = "FSJS 2.0"
leftInputField[1].value = "fsjs@ineuron.ai"
leftInputField[2].value = "Hello World"

let rightDiv = document.querySelector('.mainRight')
let rightHeading = rightDiv.firstElementChild;
let rightInputFiled = rightHeading.nextElementSibling;
rightInputFiled[0].value = "FSJS 2.0";
rightInputFiled[1].value = "fsjs@ineuron.ai";
rightInputFiled[2].value = "Hello World";
