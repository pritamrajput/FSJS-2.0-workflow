'use strict';

let list = document.querySelector('ul');
list.innerHTML = `<li><a href="./index.html">Home</a></li>
<li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>
<li><a href="./contact/contact.html">Hire Me</a></li>`;

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = "";