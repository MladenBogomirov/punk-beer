import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import styles from './Header.module.css';

const Header = ({ likedBeers }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header__wrapper']}>
        <h1 className={styles['header__logo']}>Punk Beer</h1>
        <Link to="/home">
          <Button
            className={styles['header__button']}
            type="route"
            text="Home"
          />
        </Link>
        <Link to="/favorites">
          <Button
            className={styles['header__button']}
            type="route"
            text="Favorites"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
