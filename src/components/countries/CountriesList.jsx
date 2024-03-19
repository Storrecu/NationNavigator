import CountriesCard from './CountriesCard';
import SearchBar from '../home/SearchBar';
import FilterLanguage from '../filters/FilterLanguage';
import FilterRegion from '../filters/FilterRegion';
import '../../styles/countries/CountriesList.scss';

const CountriesList = ({
  filteredCountries,
  inputValue,
  onInputChange,
  selectLang,
  onSelectLang,
  selectRegion,
  onSelectRegion,
  languages,
  regions,
  favorites,
  favCountries,
}) => {
  const noMatches = filteredCountries.length === 0;

  const renderedCountries = filteredCountries.map((country, i) => {
    return (
      <CountriesCard
        key={i}
        country={country}
        isFav={favorites.includes(country)}
        favCountries={favCountries}
      />
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main_content">
      <h4 className="main_content-title">Filter countries:</h4>
      <div className="all-filters">
        <div className="main_content-filters">
          <SearchBar inputValue={inputValue} onInputChange={onInputChange} />
        </div>
        <form onSubmit={handleFormSubmit} className="form">
          <FilterLanguage
            selectLang={selectLang}
            selectChange={onSelectLang}
            languages={languages}
          />
          <FilterRegion
            selectRegion={selectRegion}
            selectChange={onSelectRegion}
            regions={regions}
          />
        </form>
      </div>
      <div className="main_content_countries-list">
        {noMatches ? <p>No matches found</p> : renderedCountries}
      </div>
      <button className="main_content-btn">
        <a className="main_content-btn-text" href="#header">
          Go Up
        </a>
      </button>
    </div>
  );
};

export default CountriesList;
