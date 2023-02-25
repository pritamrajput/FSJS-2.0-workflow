let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName =document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
   event.preventDefault();
   if(!inputBox.value){
    alert("Please Enter the city name:");
    return
   }

   //
   const city = inputBox.value;

   //Fetch Details
   const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=df78dc8491864e89be791516232402&q=${city}`);

   const orgData = await fetchData.json();
   data = orgData;
   console.log(data); 

   // Displaying the data in HTML
    countryName.innerHTML = data.location.country;
};