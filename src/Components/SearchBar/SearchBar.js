import Button from '../Button/Button';
import styles from './SearchBar.module.css';

const SearchBar = ({ onFilterQueryChange, onRandomButtonClick }) => {
  let filterTimeout;
  const inputChangeHandler = (event) => {
    const currentInput = event.target.value;

    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(() => {
      onFilterQueryChange(currentInput);
    }, 500);
  };
  const randomButtonClickHandler = (event) => {
    onRandomButtonClick();
  };

  return (
    <section className={styles['search-bar__wrapper']}>
      <h1 className={styles['search-bar__heading']}>Search for a beer</h1>
      <form className={styles['search-bar']}>
        <input
          type="text"
          placeholder="Enter beer name"
          className={styles['search-bar__input']}
          onChange={inputChangeHandler}
        />
      </form>
      <p className={styles['search-bar__text']}>
        Or let us
        <Button
          type="basic"
          text="&nbsp;Pick a random one&nbsp;"
          className={styles['search-bar__button']}
          onButtonClick={randomButtonClickHandler}
        ></Button>
        for you
      </p>
    </section>
  );
};

export default SearchBar;
