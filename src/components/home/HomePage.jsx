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
  const [languages, setLanguages] = useState([]);

  const filteredCountries = countriesList.filter((country) => {
    const nameMatches = country.name.official
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const langMatches =
      selectLang === '' ||
      Object.values(country.languages).includes(selectLang);
    return nameMatches && langMatches;
  });

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
        const langs = response.reduce((acc, country) => {
          Object.values(country.languages).forEach((lang) => {
            if (!acc.includes(lang)) {
              acc.push(lang);
            }
          });
          return acc;
        }, []);
        setLanguages(langs);
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
          languages={languages}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
