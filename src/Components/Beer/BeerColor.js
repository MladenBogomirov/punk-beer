import { colors } from './beerColors';

export const BeerColor = ({ colorIndex }) => {
  return (
    colors[colorIndex] && (
      <span
        style={{
          display: 'inline-block',
          marginLeft: '.5rem',
          width: '3rem',
          height: '1.8rem',
          backgroundColor: `${
            colorIndex > 40 ? '#1D0204' : colors[colorIndex].beerColor
          }`,
        }}
      >
        &nbsp;
      </span>
    )
  );
};
