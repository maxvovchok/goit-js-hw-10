import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
  marking: document.querySelector('.cat-info'),
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  btn: document.querySelector('.btn'),
};

const { marking, breedSelect, loader, error, btn } = refs;

breedSelect.hidden = true;
error.hidden = true;
btn.hidden = true;

function showError() {
  Notiflix.Notify.failure(
    '❌ Oops! Something went wrong! Try reloading the page!'
  );
  breedSelect.hidden = true;
  btn.hidden = true;
}

function showLoader() {
  breedSelect.hidden = true;
  loader.hidden = false;
}

function hideLoader() {
  breedSelect.hidden = false;
  loader.hidden = true;
}

fetchBreeds()
  .then(breeds => {
    hideLoader();

    breeds.map(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    breedSelect.addEventListener('change', onClickOption);
  })
  .catch(() => {
    showError();
  });

function onClickOption() {
  showLoader();

  const selectedBreedId = breedSelect.value;
  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      renderCat(cat);
    })
    .catch(() => {
      showError();
    });
}

function renderCat({ breedName, description, imageUrl, temperament }) {
  marking.innerHTML = '';

  const catMarkup = `
    <img class="cat-img" src="${imageUrl}" alt="" />
    <div class="box">
      <h1 class="title-name">${breedName}</h1>
      <p class="text">${description}</p>
      <p class="text">
        <span class="text"><b>Temperament: </b></span>
        ${temperament}
      </p>
    </div>
  `;

  marking.insertAdjacentHTML('beforeend', catMarkup);

  hideLoader();
}

const postToAdd = {
  id: 1,
  author: 'Mango',
  content: 'CRUD is awesome',
};

const options = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));
