'use strict';

import { fetchData } from "./api.js";
import * as module from "./module.js";

/**
 * Add event listener on multiple elements 
 * @param {Nodelist} elements  elements node array
 * @param {string} eventType  Event type e.g : "click", "mouseover"
 * @param {function} callback callback function 
 */

const addEventOnElements = function(elements, eventType, callback){
   for(const element of elements) element.addEventListener(eventType, callback);
}

/**
 * Toggle search
 */

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers,"click",toggleSearch);

/**
 * SEARCH INTEGRATION
 */