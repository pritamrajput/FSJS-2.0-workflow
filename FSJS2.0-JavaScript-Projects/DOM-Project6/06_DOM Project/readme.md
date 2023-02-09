# Task 1
## Original Page
![Image](./assets/originalpage1.PNG)
![Image](./assets/originalpage2.PNG)
## Achieve the following with DOM manipulation
![Image](./Output/DOM%20P3%20SS-1.png)
![Image](./Output/DOM%20P3%20SS-2.png)
## JavaScript code to achive the required output
```js
"use strict";
// Ineuron Logo
const topImage = document.querySelector(".top_img")
const nextTopImage = topImage.nextElementSibling.firstElementChild;
nextTopImage.src = "./assets/ineuron-logo.png";

// Price
const appPrice = document.querySelector(".app_price");
appPrice.firstElementChild.innerText = "$10";

//Linkedin logo
const catchFooter = document.querySelector(".footer_social");
const divElem = document.createElement("div");
divElem.classList.add("footer_social_ico");
divElem.innerHTML = `<i class="fa-brands fa-linkedin">`;
catchFooter.appendChild(divElem);
console.log(catchFooter);
```