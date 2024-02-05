import { useState, useEffect } from 'react';
import callToApi from '../../services/callToApi';
import Header from '../common/Header';
import SearchBar from './SearchBar';
import CountriesList from '../countries/CountriesList';
import Footer from '../common/Footer';
import FilterLanguage from '../filters/FilterLanguage';
import FilterRegion from '../filters/FilterRegion';

const HomePage = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const filteredCountries = countriesList.filter((country) =>
    country.name.official.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (value) => {
    setInputValue(value);
  };

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
    <div className="home_page">
      <header>
        <Header />
      </header>
      <main>
        <CountriesList filteredCountries={filteredCountries} />
        <SearchBar inputValue={inputValue} inputChange={handleInputChange} />
        <FilterLanguage />
        <FilterRegion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
