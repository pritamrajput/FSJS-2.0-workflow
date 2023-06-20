const url = 'http://worldtimeapi.org/api/timezone/Europe/London';

async function getDate(){
 const response = await fetch(url);
 const data = await response.json();
 console.log(data);
}

getDate();