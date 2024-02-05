import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import '../styles/Reset.scss';
import CountriesDetails from './countries/CountriesDetails';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/name/:name" element={<CountriesDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
