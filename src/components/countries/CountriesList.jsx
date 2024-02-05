import { useState, useEffect } from 'react';
import callToApi from '../../services/callToApi';
import CountriesCard from './CountriesCard';

const CountriesList = () => {
  const [countriesList, setCountriesList] = useState([]);

  const renderedCountries = countriesList.map((country, index) => {
    console.log(country);
    return <CountriesCard key={country.index} country={country} />;
  });

  useEffect(() => {
    callToApi()
      .then((response) => {
        setCountriesList(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <p>{renderedCountries}</p>
    </div>
  );
};

export default CountriesList;
