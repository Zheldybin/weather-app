import "/src/style/style.css";
import { GET } from "./services/request";
import { getTranslates, translate } from "./translate-api";

const apiKey = "5c9ee4132816460883d92445240403";
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const header = document.querySelector(".header");

(async function () {
  await getTranslates();
})();

function removeCard() {
  const prevCard = document.querySelector(".card");
  if (prevCard) prevCard.remove();
}

function showError(error) {
  const html = `<div class="card">${error}<div>`;
  header.insertAdjacentHTML("afterend", html);
}

function showCard({ name, country, temp, icon, code, isDay }) {
  const html = `
  <div class="card">
  <h2 class="card-city">${name}<span>${country}</span></h2>
  <div class="card-weather">
    <div class="card-value">${temp}<sup>°c</sup></div>
    <img class="card-img" src=${icon} alt="">
  </div>
  <div class="card-descr">${translate(code, isDay)}</div>
  </div>
  `;
  header.insertAdjacentHTML("afterend", html);
}

const fetchWeather = async (url) => {
  try {
    const response = await GET(url);
    const params = {
      name: response.location.name,
      country: response.location.country,
      temp: response.current.temp_c,
      text: response.current.condition.text,
      code: response.current.condition.code,
      isDay: response.current.is_day,
      icon: response.current.condition.icon,
    };
    removeCard();
    showCard(params);
    return response;
  } catch (e) {
    removeCard();
    showError(e.message);
  }
};

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let city = input.value.trim();
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  fetchWeather(url);
});
