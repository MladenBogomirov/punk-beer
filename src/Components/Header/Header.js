import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__wrapper']}>
        <h1 className={styles['header__logo']}>Punk Beer</h1>
        <Button
          className={styles['header__button']}
          type="link"
          text="Home"
        />
        <Button
          className={styles['header__button']}
          type="link"
          text="Favorites"
        />
      </div>
    </header>
  );
};

export default Header;
