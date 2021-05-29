import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Components/search';

const App = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountryData(response.data);
    });
  }, []);
  return (
    <div>
      <Search countryData={countryData} />
    </div>
  );
};

export default App;
