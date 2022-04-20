import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import canOpenSound from '../../Sounds/Open_Can.mp3';
import Card from '../Card/Card';
import styles from './BeerList.module.css';

const BeerList = ({ beers, onBeerLike = undefined }) => {
  const [playOpen] = useSound(canOpenSound, { volume: 0.25 });
  const toggleIconHandler = (isLiked, beer) => {
    onBeerLike(isLiked, beer);
  };
  const displayBeers = () => {
    return beers.map((beer) => (
      <Link
        to={`/beers/${beer.id}`}
        key={beer.id}
        state={beer}
        onClick={playOpen}
      >
        <Card
          key={beer.id}
          beer={beer}
          shouldDisplayIcon={onBeerLike !== undefined}
          onIconToggle={toggleIconHandler}
        />
      </Link>
    ));
  };

  return beers.length > 0 ? (
    <ul
      className={`${styles['beer-list']} ${
        styles[beers.length < 4 ? 'beer-list--fit' : 'beer-list--fill']
      }`}
    >
      {beers && displayBeers()}
    </ul>
  ) : (
    <p className={styles['beer-list--no-match']}>Oops... We are out of this.</p>
  );
};

export default BeerList;
