import Header from '../common/Header';
import SearchBar from './SearchBar';
import CountriesList from '../countries/CountriesList';
import Footer from '../common/Footer';
import FilterLanguage from '../filters/FilterLanguage';
import FilterRegion from '../filters/FilterRegion';

const HomePage = () => {
  return (
    <div className="home_page">
      <Header />
      <FilterLanguage />
      <FilterRegion />
      <SearchBar />
      <CountriesList />
      <Footer />
    </div>
  );
};

export default HomePage;
