import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix, { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;
const countryListEl = document.querySelector(`.country-list`);
const countryInfoEl = document.querySelector(`.country-info`);
const searchBoxEl = document.querySelector(`#search-box`);

searchBoxEl.addEventListener(
  'input',
  _.debounce(async event => {
    const countryName = event.target.value.trim();

    if (countryName === '') {
      countryInfoEl.innerHTML = '';
      countryListEl.innerHTML = '';
      return;
    }
    const countries = await fetchCountries(countryName);

    if (countries.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
    } else {
      countryListEl.innerHTML = countries
        .map(
          country =>
            `<li><img class="flag" src="${country.flags.png}">${country.name.common.toUpperCase()}</li>`
        )
        .join('');
    }

    if (countries.length === 1) {
      countryInfoEl.innerHTML = `
      <p>Capital: ${countries[0].capital}</p>
      <p>Population: ${countries[0].population}</p>
      <p>Langueages: ${Object.values(countries[0].languages).join(', ')}</p>`;
    }
  }, DEBOUNCE_DELAY)
);
