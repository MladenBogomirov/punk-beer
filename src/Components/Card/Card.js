import Icon from '../Icon/Icon';

import styles from './Card.module.css';

import defaultBeerImage from '../../Images/beer.png';

const Card = ({ beer, onIconToggle, shouldDisplayIcon }) => {
  const handleIconClickHandler = (isLiked) => {
    onIconToggle(isLiked, beer);
  };

  return (
    <li className={styles['card']}>
      {shouldDisplayIcon && (
        <Icon
          isBeerLiked={beer.isLiked}
          className="card__icon-wrapper"
          onIconClick={handleIconClickHandler}
        />
      )}
      <h3 className={styles['card__headding']}>{beer.name}</h3>
      <img
        className={styles['card__image']}
        alt={beer.name}
        src={beer.image_url === null ? defaultBeerImage : beer.image_url}
      />
      <p className={styles['card__tagline']}>{beer.tagline}</p>
    </li>
  );
};

export default Card;
