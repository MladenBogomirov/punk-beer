import Header from '../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import Beer from '../Components/Beer/Beer';

const Beers = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <Header />
      <Beer beerData={data} />
    </>
  );
};

export default Beers;
