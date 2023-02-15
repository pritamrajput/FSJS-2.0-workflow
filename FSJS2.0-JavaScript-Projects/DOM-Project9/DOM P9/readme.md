# Task 1
## Original Page
### Task 1
![Image](./ass9.1-before.png)
### Task 2
![Image](./ass9.2-before.png)
## Achieve the following with DOM manipulation
### Task1 output required
![Image](./ass9.1-after.png)
### Task2 output required
![Image](./ass9.2-after.png)
## JavaScript code to achieve the required output
```js
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

```