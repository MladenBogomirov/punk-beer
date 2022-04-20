import { useEffect, useState } from 'react';

import BeerList from './Components/BeerList/BeerList';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';

import { fetchBeers, fetchRandomBeer } from './Utils/apiCalls';
import { useStickyState } from './Utils/useStickyState';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [likedBeers, setLikedBeers] = useStickyState([], 'likedBeers');
  const filterQueryChangehandler = (filterQuery) => {
    if (beers.length <= 1) {
      fetchBeers().then((beers) => {
        setBeers(beers);
      });
    }
    setFilter(filterQuery);
  };
  const randomButtonClickHandler = () => {
    fetchRandomBeer().then((beer) => {
      setBeers([...beer]);
    });
  };
  const beerLikeHandler = (isLiked, beer) => {
    if (isLiked) {
      beer.isLiked = true;
      setLikedBeers([...likedBeers, beer]);
    } else {
      beer.isLiked = false;
      setLikedBeers(likedBeers.filter((likedBeer) => likedBeer.id !== beer.id));
    }
  };

  // Fetch full list of beers
  useEffect(() => {
    fetchBeers().then((beers) => {
      const tmp = [...beers];

      if (likedBeers.length > 0) {
        for (let i = 0; i < tmp.length; i++) {
          for (let j = 0; j < likedBeers.length; j++) {
            if (tmp[i].id === likedBeers[j].id) {
              tmp[i].isLiked = likedBeers[j].isLiked;
            }
          }
        }
      }

      setBeers(tmp);
    });
  }, []);

  // Filter beers
  useEffect(() => {
    const filterBeers = () => {
      let beersCopy = filter
        ? beers.filter((beer) => {
            return beer.name.toLowerCase().includes(filter.toLowerCase());
          })
        : beers;

      setFilteredBeers(beersCopy);
    };

    filterBeers();
  }, [filter, beers, setFilteredBeers]);

  return (
    <>
      <Header />
      <SearchBar
        onFilterQueryChange={filterQueryChangehandler}
        onRandomButtonClick={randomButtonClickHandler}
      />
      <BeerList
        beers={filteredBeers}
        onBeerLike={beerLikeHandler}
      />
    </>
  );
}

export default App;
