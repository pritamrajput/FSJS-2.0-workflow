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