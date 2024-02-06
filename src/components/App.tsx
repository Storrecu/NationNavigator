import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import '../styles/Reset.scss';
import CountriesDetails from './countries/CountriesDetails';
import FilterLanguage from './filters/FilterLanguage';
import FilterRegion from './filters/FilterRegion';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/name/:name" element={<CountriesDetails />}></Route>
        <Route path="/lang/:lang" element={<FilterLanguage />}></Route>
        <Route path="/region/region" element={<FilterRegion />}></Route>
      </Routes>
    </div>
  );
};

export default App;
