import { useState, useEffect, useMemo, useCallback } from 'react';
// import { useCountriesContext } from '../../hooks/use-countries-context';
import callToApi from '../../services/callToApi';
import Header from '../common/Header';
import CountriesList from '../countries/CountriesList';
import Footer from '../common/Footer';
import Spinner from '../Spinner';
import FavCountries from './FavCountries';
import ls from '../../services/ls';

const HomePage = () => {
  // const { filteredCountries } = useCountriesContext();

  const [countriesList, setCountriesList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectLang, setSelectLang] = useState('');
  const [selectRegion, setSelectRegion] = useState('');
  const [languages, setLanguages] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavCountries = useCallback(
    (favCountry) => {
      const isFavorite = favorites.some((country) => country === favCountry);
      let updatedFavorites;
      if (!isFavorite) {
        updatedFavorites = [...favorites, favCountry];
      } else {
        updatedFavorites = favorites.filter(
          (country) => country !== favCountry
        );
      }
      setFavorites(updatedFavorites);
      ls.set('favoriteCountries', updatedFavorites);
    },
    [favorites]
  );

  const handleRemoveFavorite = useCallback(
    (countryFav) => {
      const updatedFavorites = favorites.filter(
        (country) => country !== countryFav
      );
      console.log(updatedFavorites);
      setFavorites(updatedFavorites);
      ls.set('favoriteCountries', updatedFavorites);
    },
    [favorites]
  );

  const handleClearFavorites = useCallback(() => {
    setFavorites([]);
    ls.clear('favoriteCountries');
  }, []);

  const filteredCountries = useMemo(() => {
    return countriesList.filter((country) => {
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
  }, [countriesList, inputValue, selectLang, selectRegion]);

  const handleSelectRegion = useCallback((value) => {
    setSelectRegion(value === 'All' ? '' : value);
  }, []);

  const handleSelectLang = useCallback((value) => {
    setSelectLang(value === 'All' ? '' : value);
  }, []);

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  useEffect(() => {
    const storedFavorites = ls.get('favoriteCountries', []);
    setFavorites(storedFavorites);
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
      <header id="header">
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
