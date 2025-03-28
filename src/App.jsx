import './App.css';
import data from './data';
import CardList from './components/CardList';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CardList data={data} />} />
        <Route path='/city-details/:ID/*' element={<CityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
