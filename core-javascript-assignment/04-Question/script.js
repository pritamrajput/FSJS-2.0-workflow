// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

'use strict';

const sentence = "The writer has written a beautiful  Script";

const word = "Script";

if(sentence.includes(word)){
    console.log(`The word "${word}" is present in the string "${sentence}"`)
}

else{
    console.log(`The word "${word}" is not present in the string "${sentence}"`)
}