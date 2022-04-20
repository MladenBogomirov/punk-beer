import { renderIngredients } from './renderIngredients';
import styles from './Ingredients.module.css';

const Ingredients = ({ ingredientType, ingredientsList }) => {
  let layout;

  if (ingredientsList.length === 0) {
    return;
  }

  if (ingredientType === 'Hops') {
    const startHops = ingredientsList.filter((hop) => hop.add === 'start');
    const middleHops = ingredientsList.filter((hop) => hop.add === 'middle');
    const endHops = ingredientsList.filter((hop) => hop.add === 'end');

    layout = (
      <>
        {startHops.length > 0 &&
          renderIngredients({
            ingredientType: ingredientType,
            ingredients: startHops,
            hopsPosition: 'start',
            styles: styles,
          })}
        {middleHops.length > 0 &&
          renderIngredients({
            ingredientType: ingredientType,
            ingredients: middleHops,
            hopsPosition: 'middle',
            styles: styles,
          })}
        {endHops.length > 0 &&
          renderIngredients({
            ingredientType: ingredientType,
            ingredients: endHops,
            hopsPosition: 'end',
            styles: styles,
          })}
      </>
    );
  }

  if (ingredientType === 'Malt') {
    layout = renderIngredients({
      ingredientType: ingredientType,
      ingredients: ingredientsList,
      styles: styles,
    });
  }

  if (ingredientType === 'Yeast') {
    layout = (
      <div className={styles['ingredients']}>
        <span className={styles['ingredients__name']}>Yeast:&nbsp;</span>
        <span>{ingredientsList}</span>
      </div>
    );
  }

  return layout;
};

export default Ingredients;
