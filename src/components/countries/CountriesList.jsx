import { v4 as uuidv4 } from 'uuid';
import CountriesCard from './CountriesCard';
import '../../styles/countries/CountriesList.scss';

const CountriesList = ({ filteredCountries }) => {
  const noMatches = filteredCountries.length === 0;

  const renderedCountries = filteredCountries.map((country) => {
    return <CountriesCard key={uuidv4()} country={country} />;
  });

  return (
    <div className="countries_list">
      {noMatches ? <p>No matches found</p> : renderedCountries}
    </div>
  );
};

export default CountriesList;
