import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector("#search-box");

textInput.addEventListener("input", debounce(() => {
fetchCountries(textInput.value.trim())
  }, DEBOUNCE_DELAY)
);





