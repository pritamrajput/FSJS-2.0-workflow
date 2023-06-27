let str = 'Good Morning';
console.log(str);
setTimeout(function(){
  alert("Hello, I am alert called asynchronously...");
},5000)
console.log("Have a nice day");