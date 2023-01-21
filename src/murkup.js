const countryInfo = document.querySelector(".country-info");
const countryList = document.querySelector(".country-list");
export function makeMarkup(data) {
  if (data.length >= 10) {
    return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
  }
  else if (data.length >= 2 && data.length < 10) {
    const markupList = data.map((country) => {
     return `<li>
                    <img class="flag-little" src="${country.flags.png}" alt="" />
                    <p class="country-name-little">${country.name}</p>
                    </li>`
    }).join('');
  
    countryList.insertAdjacentHTML('beforeend', markupList);
  
            } else {
      const markupInfo = data.map((country) => {
          const arrName = [];
          country.languages.forEach(element => {
              arrName.push(element.name) 
          });
     return `<li class="item">
                    <div class="container">
                    <img class="flag" src="${country.flags.png}" alt="" />
                    <p class="country-name">${country.name}</p>
                    </div>
                    <p class="capital">Capital: ${country.capital}</p>
                    <p class="language">Language: ${arrName}</p>
                    <p class="population">Population: ${country.population}</p>
                    </li>`}).join('');
                countryInfo.insertAdjacentHTML('beforeend', markupInfo)
                
          }
};





