import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const countryListEl = document.querySelector(`.country-list`);
const countryInfoEl = document.querySelector(`.country-info`);
const searchBoxEl = document.querySelector(`#search-box`);
searchBoxEl.addEventListener('input', event => {
  console.log(searchBoxEl.value);
});

// MOJE PRÓBY
// const searchBoxEl = document.querySelector(`#search-box`);
// const countryListEl = document.querySelector(`.country-list`);
// const countryInfoEl = document.querySelector(`.country-info`);

// let name = searchBoxEl.value;
// const API_URL_NAME = `https://restcountries.com/v3.1/name/${name}`;
// const API_URL_ALL = `https://restcountries.com/v3.1/all`;

// const fetchUsersBtn = document.querySelector('.btn');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchCountries()
//     .then(API_URL_ALL => renderCountryList(API_URL_ALL))
//     .catch(error => console.log(error));
// });

// searchBoxEl.addEventListener('input', event => {
//   console.log(searchBoxEl.value);
// });

// function fetchCountries(name) {
//   return fetch(API_URL_ALL).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderCountryList(name) {
//   const markup = name
//     .map(country => {
//       return `
//             <li>
//               <p><b>Name</b>: ${country.name.official}</p>
//               <p><b>Capital</b>: ${country.capital}</p>
//               <p><b>Population</b>: ${country.population}</p>
//               <p><b>Languages</b>: ${country.languages}</p>
//             </li>
//         `;
//     })
//     .join('');
//   countryListEl.innerHTML = markup;
// }
