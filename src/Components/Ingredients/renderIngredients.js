export const renderIngredients = ({
  ingredientType,
  ingredients,
  hopsPosition = '',
  styles,
}) => {
  return (
    <div className={styles['ingredients']}>
      <span className={styles['ingredients__name']}>
        {hopsPosition
          ? `${ingredientType} at ${hopsPosition}:`
          : `${ingredientType}:`}
        &nbsp;
      </span>
      <ul className={styles['ingredients__list']}>
        {ingredients.map((hop, i, arr) => {
          return i + 1 === arr.length ? (
            <li
              className={styles['ingredients__list-item']}
              key={`${hop.name}[${hop.position}]`}
            >
              {hop.name}{' '}
            </li>
          ) : (
            <li
              className={styles['ingredients__list-item']}
              key={`${hop.name}[${hop.position}]`}
            >
              {hop.name},&nbsp;
            </li>
          );
        })}
      </ul>
    </div>
  );
};
