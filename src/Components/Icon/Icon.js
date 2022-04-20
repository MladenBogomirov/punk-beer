import { useState } from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import 'animate.css';
import styles from './Icon.module.css';

const Icon = ({ className, onIconClick, isBeerLiked }) => {
  const [isLiked, setIsLiked] = useState(isBeerLiked || false);
  const [animation, setAnimation] = useState('');
  const iconClickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLiked(!isLiked);
    isLiked
      ? setAnimation('')
      : setAnimation('animate__animated animate__heartBeat');
    onIconClick(!isLiked);
  };

  return (
    <span
      label={isLiked ? 'Remove from favorites!' : 'Add to favorites!'}
      aria-label={isLiked ? 'Remove from favorites!' : 'Add to favorites!'}
      className={`${styles[className]} ${animation}`}
      onClick={iconClickHandler}
    >
      {isLiked || isBeerLiked ? (
        <FavoriteOutlinedIcon fontSize="large" />
      ) : (
        <FavoriteBorderOutlinedIcon fontSize="large" />
      )}
    </span>
  );
};

export default Icon;
