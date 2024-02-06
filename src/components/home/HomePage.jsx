import { useState, useEffect } from 'react';
import callToApi from '../../services/callToApi';
import Header from '../common/Header';
import CountriesList from '../countries/CountriesList';
import Footer from '../common/Footer';

const HomePage = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectLang, setSelectLang] = useState('');
  const [selectRegion, setSelectRegion] = useState('');

  const filteredCountries = countriesList.filter((country) =>
    country.name.official.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectChange = (value) => {
    setSelectLang(value);
    setSelectRegion(value);
  };

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
        <CountriesList
          filteredCountries={filteredCountries}
          inputValue={inputValue}
          inputChange={handleInputChange}
          selectLang={selectLang}
          selectRegion={selectRegion}
          selectChange={handleSelectChange}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
