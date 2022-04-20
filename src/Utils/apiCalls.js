export const fetchBeers = () => {
  return fetch('https://api.punkapi.com/v2/beers')
    .then((response) => {
      return response.json();
    })
    .then((beers) => {
      return beers;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const fetchRandomBeer = () => {
  return fetch('https://api.punkapi.com/v2/beers/random')
    .then((response) => {
      return response.json();
    })
    .then((beer) => {
      return beer;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
