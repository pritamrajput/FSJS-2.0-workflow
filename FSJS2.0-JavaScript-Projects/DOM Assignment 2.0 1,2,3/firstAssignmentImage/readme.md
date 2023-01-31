# Task 1

## original page
![alt text](./original.PNG)
## Achieve the following with DOM manipulation
![alt text](./task1Output.png)

## javascript code
```js
'use strict';

let list = document.querySelector('ul');
list.innerHTML = `<li><a href="./index.html">Home</a></li>
<li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>
<li><a href="./contact/contact.html">Hire Me</a></li>`;

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = "";
```
# Task 2
## original page
![alt text](./original.PNG)
## Achieve the following with DOM manipulation
![alt text](./task2Output.png)

## javascript code
```js
'use strict';

let list = document.querySelector('ul');
list.innerHTML = `<li><a href="./index.html">Home</a></li>
 <li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>`

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = "";

let input = document.querySelector('.search-field');
input.innerHTML = ` <input type="text" placeholder="Search My Projects" />
<button>Search</button>`
```

# Task 3
## original page
![alt text](./original.PNG)
## Achieve the following with DOM manipulation
![alt text](./task3Output.png)

## javascript code
```js
'use strict';
let list = document.querySelector('ul');
let listInside = list.getElementsByTagName('li');
console.log(listInside);
listInside[2].innerText = "Projects";

let section = document.querySelector('.hero-left-section')
let para1 = section.getElementsByTagName('p');
let spanAll = para1[0].getElementsByTagName('span');
spanAll[1].innerText = "an employee"
spanAll[2].innerText = "iNeuron Intelligence Pvt Ltd"
```
# Task 4
## original page
![alt text](./original.PNG)
## Achieve the following with DOM manipulation
![alt text](./task4Output.png)

## javascript code
```js
'use strict';
let list = document.querySelector("ul");
let listInsiede = list.getElementsByTagName('li');
listInsiede[2].innerText = 'Projects';
let heroSection = document.querySelector('.hero-right-section');
let image = heroSection.getElementsByTagName('img');
image[0].src = "hitesh-sir.jpg";
```