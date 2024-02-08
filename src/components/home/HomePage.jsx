import { useState, useEffect } from 'react';
import callToApi from '../../services/callToApi';
import Header from '../common/Header';
import CountriesList from '../countries/CountriesList';
import Footer from '../common/Footer';
import Spinner from '../Spinner';
import FavCountries from './FavCountries';

const HomePage = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectLang, setSelectLang] = useState('');
  const [selectRegion, setSelectRegion] = useState('');
  const [languages, setLanguages] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavCountries = (favCountry) => {
    const isFavorite = favorites.some((country) => country === favCountry);
    if (!isFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, favCountry]);
    } else {
      const updatedFavorites = favorites.filter(
        (country) => country !== favCountry
      );
      setFavorites(updatedFavorites);
    }
  };

  const handleRemoveFavorite = (countryName) => {
    const updatedFavorites = favorites.filter(
      (country) => country.name !== countryName
    );
    setFavorites(updatedFavorites);
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

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

  const handleSelectRegion = (value) => {
    setSelectRegion(value === 'All' ? '' : value);
  };

  const handleSelectLang = (value) => {
    setSelectLang(value === 'All' ? '' : value);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    setLoading(true);
    callToApi()
      .then((response) => {
        setCountriesList(response);
        const allLanguages = response.flatMap((country) =>
          Object.values(country.languages)
        );
        const uniqueSortedLanguages = [...new Set(allLanguages)].sort();
        setLanguages(uniqueSortedLanguages);
        const uniqueRegions = [
          ...new Set(response.map((country) => country.region)),
        ];
        const sortedRegions = uniqueRegions.sort();
        setRegions(sortedRegions);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home_page">
      <header>
        <Header />
      </header>
      <main>
        <FavCountries
          filteredCountries={filteredCountries}
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
          onClearFavorites={handleClearFavorites}
        />
        {loading ? (
          <Spinner />
        ) : (
          <CountriesList
            filteredCountries={filteredCountries}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            selectLang={selectLang}
            onSelectLang={handleSelectLang}
            selectRegion={selectRegion}
            onSelectRegion={handleSelectRegion}
            languages={languages}
            regions={regions}
            favorites={favorites}
            favCountries={handleFavCountries}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
