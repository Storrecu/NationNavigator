import { useContext } from 'react';
import CountryContext from '../context/countries';

const useCountriesContext = () => {
  return useContext(CountryContext);
};

export default useCountriesContext;
