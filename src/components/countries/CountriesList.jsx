import { v4 as uuidv4 } from 'uuid';
import CountriesCard from './CountriesCard';
import SearchBar from '../home/SearchBar';
import FilterLanguage from '../filters/FilterLanguage';
import FilterRegion from '../filters/FilterRegion';
import '../../styles/countries/CountriesList.scss';

const CountriesList = ({
  countriesList,
  filteredCountries,
  inputValue,
  inputChange,
  selectLang,
  selectRegion,
  selectChange,
  languages,
  regions,
}) => {
  const noMatches = filteredCountries.length === 0;

  const renderedCountries = filteredCountries.map((country) => {
    return <CountriesCard key={uuidv4()} country={country} />;
  });

  return (
    <div className="main_content">
      <div className="main_content-filters">
        <SearchBar inputValue={inputValue} inputChange={inputChange} />
        <FilterLanguage
          selectLang={selectLang}
          selectChange={selectChange}
          languages={languages}
        />
        <FilterRegion
          selectRegion={selectRegion}
          selectChange={selectChange}
          regions={regions}
        />
      </div>
      <div className="main_content_countries-list">
        {noMatches ? <p>No matches found</p> : renderedCountries}
      </div>
    </div>
  );
};

export default CountriesList;
