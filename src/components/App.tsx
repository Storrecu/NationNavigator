import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import CountriesDetails from './countries/CountriesDetails';
import NotFoundPage from './common/NotFoundPage';
import '../styles/Reset.scss';
import '../styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/name/:name" element={<CountriesDetails />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
