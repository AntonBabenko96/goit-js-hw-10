import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { makeMarkup } from './murkup.js'
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector("#search-box");
const countryInfo = document.querySelector(".country-info");
const countryList = document.querySelector(".country-list");


textInput.addEventListener("input", debounce(() => { 
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
    if (textInput.value.trim() === '') {
        return
    }
  fetchCountries(textInput.value.trim()).then((data) => makeMarkup(data)).catch(() => {
        Notiflix.Notify.failure("Oops, there is no country with that name")
    })
  }, DEBOUNCE_DELAY)
);
