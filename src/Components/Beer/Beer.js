import Ingredients from '../Ingredients/Ingredients';
import styles from './Beer.module.css';
import { BeerColor } from './BeerColor';
import defaultBeerImage from '../../Images/beer.png';

const Beer = ({ beerData }) => {
  return (
    <main className={styles['beer-info__container']}>
      <h1 className={styles['beer-info__name']}>{beerData.name}</h1>
      <p className={styles['beer-info__tagline']}>/{beerData.tagline}/</p>
      <section className={styles['beer-info__trivia']}>
        <div>
          <p>
            <span>First brewed:</span>
            <span className={styles['trivia__value']}>
              {beerData.first_brewed}
            </span>
          </p>
          <p>
            <span>Alcohol by volume:</span>
            <span className={styles['trivia__value']}>{beerData.abv}</span>
          </p>
          <p>
            <span>International Bitterness Units:</span>
            <span className={styles['trivia__value']}>{beerData.ibu}</span>
          </p>
        </div>
        <div>
          <p>
            <span>Standard Reference Method:</span>
            <span className={styles['trivia__value']}>{beerData.srm}</span>
          </p>
          <p>
            <span>Color Units Ebc:</span>
            <span
              className={`${styles['trivia__value']} ${styles['trivia__value--color']}`}
            >
              {beerData.ebc}
            </span>
            <BeerColor colorIndex={beerData.ebc} />
          </p>
          <p>
            <span>Ph:</span>
            <span className={styles['trivia__value']}>{beerData.ph}</span>
          </p>
        </div>
      </section>
      <section className={styles['beer-info__details']}>
        <div className={styles['details__img-container']}>
          <img
            className={styles['beer-info__image']}
            alt={beerData.name}
            src={
              beerData.image_url === null
                ? defaultBeerImage
                : beerData.image_url
            }
          />
        </div>
        <div className={styles['details__container']}>
          {/* Ingredients */}
          <div className={styles['details__col']}>
            <h3>Ingredients:</h3>
            <Ingredients
              ingredientType="Hops"
              ingredientsList={beerData.ingredients.hops}
            />
            <Ingredients
              ingredientType="Malt"
              ingredientsList={beerData.ingredients.malt}
            />
            <Ingredients
              ingredientType="Yeast"
              ingredientsList={beerData.ingredients.yeast}
            />
          </div>
          {/* Food pairing */}
          <div className={styles['details__col']}>
            <h3>We drink it with:</h3>
            <ul className={styles['foods']}>
              {beerData.food_pairing.map((food, i, arr) => {
                return i + 1 === arr.length ? (
                  <li key={`${i}`}>{food} </li>
                ) : (
                  <li key={`${i}`}>{food},&nbsp;</li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <article className={styles['details__text']}>
        <h3 className={styles['details__text__heading']}>Desription:</h3>
        <p>{beerData.description}</p>
        <h3 className={styles['details__text__heading']}>Brewers Tips:</h3>
        <p>{beerData.brewers_tips}</p>
      </article>
    </main>
  );
};

export default Beer;
