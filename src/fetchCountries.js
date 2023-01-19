const countryInfo = document.querySelector(".country-info");
const countryList = document.querySelector(".country-list");
import Notiflix from 'notiflix';
export function fetchCountries(name) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    if (name === '') {
        return
    }
    
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,languages,flags`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.message)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
          
            if (data.length >= 10) {
              Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
          } 
          else if (data.length >= 2 && data.length < 10) {
              const markupList = data.map((country) =>
                  `<li>
                    <img class="flag-little" src="${country.flags.png}" alt="" />
                    <p class="country-name-little">${country.name}</p>
                    </li>`
              ).join('');
              countryList.insertAdjacentHTML('beforeend', markupList);
            } else {
              const markupInfo = data.flatMap((country) =>
                  `<li class="item">
                    <div class="container">
                    <img class="flag" src="${country.flags.png}" alt="" />
                    <p class="country-name">${country.name}</p>
                    </div>
                    <p class="capital">Capital: ${country.capital}</p>
                    <p class="language">Language: ${country.languages[0].name}</p>
                    <p class="population">Population: ${country.population}</p>
                    </li>`).join('');
                countryInfo.insertAdjacentHTML('beforeend', markupInfo)
                
          }
          
        })
        .catch(() => {
        Notiflix.Notify.failure("Oops, there is no country with that name")
    })
};
