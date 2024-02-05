import { Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomePage from '../components/home/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path=""></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
