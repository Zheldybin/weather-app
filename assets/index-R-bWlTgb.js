(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=o(e);fetch(e.href,c)}})();const d="5c9ee4132816460883d92445240403",u=document.querySelector(".form"),l=document.querySelector(".input"),a=document.querySelector(".header");function i(){const t=document.querySelector(".card");t&&t.remove()}function f(){a.insertAdjacentHTML("afterend",'<div class="card">Такого города нет<div>')}function p(t,r,o,n){const e=`
  <div class="card">
  <h2 class="card-city">${t}<span>${r}</span></h2>
  <div class="card-weather">
    <div class="card-value">${o}<sup>°c</sup></div>
    <img class="card-img" src="/src/img/example.png" alt="">
  </div>
  <div class="card-descr">${n}</div>
  </div>
  `;a.insertAdjacentHTML("afterend",e)}async function m(t){try{const o=await(await fetch(t)).json();i(),p(o.location.name,o.location.country,o.current.temp_c,o.current.condition.text)}catch{i(),f()}}u.addEventListener("submit",async function(t){t.preventDefault();let r=l.value.trim();const o=`http://api.weatherapi.com/v1/current.json?key=${d}&q=${r}`;await h(),await m(o)});async function h(){const r=await(await fetch("https://www.weatherapi.com/docs/conditions.json")).json();console.log(r)}
