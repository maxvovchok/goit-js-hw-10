export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json().then(data => {
        return data.map(breed => {
          return {
            id: breed.id,
            name: breed.name,
          };
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
}
export function fetchCatByBreed(breedId) {
  const options = {
    headers: {
      'x-api-key':
        'live_AHSoBqLDStIWoZc8SULQ9OUsdQL09wU64Y70HD2JRskrFiUjCLJ5TAc5UxDzBZa6',
    },
  };

  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(catData => {
      const cat = catData[0];
      const breed = cat.breeds[0];

      return {
        breedName: breed.name,
        description: breed.description,
        temperament: breed.temperament,
        imageUrl: cat.url,
      };
    })
    .catch(error => {
      console.log(error);
    });
}
