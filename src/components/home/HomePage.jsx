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
  const [regions, setRegions] = useState([]);

  const filteredCountries = countriesList.filter((country) => {
    const nameMatches = country.name.official
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const langMatches =
      selectLang === '' ||
      Object.values(country.languages).includes(selectLang);
    const regionMatches =
      selectRegion === '' || country.region === selectRegion;
    return nameMatches && langMatches && regionMatches;
  });

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    callToApi()
      .then((response) => {
        setCountriesList(response);
        // idiomas
        const allLanguages = response.flatMap((country) =>
          Object.values(country.languages)
        );
        const uniqueSortedLanguages = [...new Set(allLanguages)].sort();
        setLanguages(uniqueSortedLanguages);
        //regiones
        const uniqueRegions = [
          ...new Set(response.map((country) => country.region)),
        ];
        const sortedRegions = uniqueRegions.sort();
        setRegions(sortedRegions);
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
          onSelectLang={(value) => {
            setSelectLang(value === 'All' ? '' : value);
          }}
          onSelectRegion={(value) => {
            setSelectRegion(value === 'All' ? '' : value);
          }}
          languages={languages}
          regions={regions}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
