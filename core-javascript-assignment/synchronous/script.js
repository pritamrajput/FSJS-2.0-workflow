'use strict';
let Helloworld = function(){
    console.log('Hello, world!');
}

let greetings = function(){
    console.log("Good morning");
    Helloworld();
    console.log('Have a good day!');  
}

greetings();

let str = "Hello, how are you ?";
console.log(str);
alert("Hello I am alert box");
console.log("Alert gone");