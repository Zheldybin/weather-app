import '/src/style/style.css'

const apiKey = '5c9ee4132816460883d92445240403';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const header = document.querySelector('.header');

function removeCard(){
  const prevCard = document.querySelector('.card');
  if(prevCard) prevCard.remove();
}

function showError(){
  const html = `<div class="card">Такого города нет<div>`
  header.insertAdjacentHTML('afterend', html);
}

function showCard(name, country, temp, text){
  const html = `
  <div class="card">
  <h2 class="card-city">${name}<span>${country}</span></h2>
  <div class="card-weather">
    <div class="card-value">${temp}<sup>°c</sup></div>
    <img class="card-img" src="/src/img/example.png" alt="">
  </div>
  <div class="card-descr">${text}</div>
  </div>
  `
  header.insertAdjacentHTML('afterend', html);
}

async function fetchWeather (url) {
  try{
    const responce = await fetch(url);
    const weatherObj = await responce.json();
    removeCard();
    showCard(weatherObj.location.name, weatherObj.location.country, weatherObj.current.temp_c, weatherObj.current.condition.text);
  }
  catch(e){
    removeCard();
    showError();
  }
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  let city = input.value.trim();
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  await condition();
  await fetchWeather(url);
})

async function condition(){
  const responce = await fetch('https://www.weatherapi.com/docs/conditions.json');
  const lengObj = await responce.json();
  console.log(lengObj)
  
}
