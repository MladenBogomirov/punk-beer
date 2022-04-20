import { useEffect, useState } from 'react';
import BeerList from '../Components/BeerList/BeerList';
import Header from '../Components/Header/Header';

const Favorites = () => {
  const [likedBeers, setLikedBeers] = useState([]);

  useEffect(() => {
    setLikedBeers(JSON.parse(localStorage.getItem('likedBeers')));
  }, []);

  return (
    <>
      <Header />
      <BeerList beers={likedBeers} />
    </>
  );
};

export default Favorites;
