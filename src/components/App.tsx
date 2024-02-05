import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import '../styles/Reset.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path=""></Route>
      </Routes>
    </div>
  );
};

export default App;
