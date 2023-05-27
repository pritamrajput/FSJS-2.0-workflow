'use strict';

const api_key = "77e1e7f99dc1336db2078a96a5b2434d";

/**
 * Fetch data from serve
 * @param {string} URL API url
 * @param {Function} callback callback
 */


export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res=>res.json())
    .then(data=>callback(data))
}