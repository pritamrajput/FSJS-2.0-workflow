"use strict";

const getDiv = document.querySelector(".main__container")
const getFloors = localStorage.getItem('set-floors');
const getLifts = localStorage.getItem('set-lifts');

getDiv.textContent = getFloors;
getDiv.textContent = getLifts;