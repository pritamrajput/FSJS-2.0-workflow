'use strict';
const form = document.querySelector(".input__field");
const getFloors = document.querySelector(".input__floor");
console.log(getFloors);
const getLifts= document.querySelector(".input__lift");



form.addEventListener("submit", function(e){
  e.preventDefault();
  const myFloors = getFloors.value;
  const myLifts = getLifts.value;

  localStorage.setItem("set-floors",myFloors);
  localStorage.setItem("set-lifts",myLifts);

  window.location.href = "lift.html";

})

