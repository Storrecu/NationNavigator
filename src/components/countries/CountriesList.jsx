import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import callToApi from '../../services/callToApi';
import CountriesCard from './CountriesCard';
import '../../styles/countries/CountriesList.scss';

const CountriesList = () => {
  const [countriesList, setCountriesList] = useState([]);

  const renderedCountries = countriesList.map((country) => {
    console.log(country);
    return <CountriesCard key={uuidv4()} country={country} />;
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

  return <div className="countries_list">{renderedCountries}</div>;
};

export default CountriesList;
