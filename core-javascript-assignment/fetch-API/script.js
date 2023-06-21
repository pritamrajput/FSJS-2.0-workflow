const url = 'http://worldtimeapi.org/api/timezone/Europe/newyork';

async function getDate(){
 const response = await fetch(url);
 const data = await response.json();
 console.log(data);
}

getDate();