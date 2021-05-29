import { useState } from 'react';
import Country from './country';
import MultipleResults from './multipleResults';

const Search = ({ countryData }) => {
  const [result, setResult] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [tooMany, setTooMany] = useState(false);
  const [onlyOne, setOnlyOne] = useState(false);
  const handleSearchFunction = (event) => {
    setSearchName(event.target.value);
  };
  const searchCountry = (event) => {
    event.preventDefault();
    const found = countryData.filter((country) =>
      country.name.toString().toLowerCase().includes(searchName.toLowerCase())
    );

    if (found.length > 10) {
      setTooMany(true);
    }
    if (found.length === 1) {
      setTooMany(false);
      setOnlyOne(true);
      const tempo = [];
      for (let i = 0; i < found.length; i++) {
        tempo.push(found[i]);
      }
      setResult(tempo);
    }
    if (found.length > 1 && found.length < 10) {
      setTooMany(false);
      const tempo = [];
      for (let i = 0; i < found.length; i++) {
        tempo.push(found[i]);
      }
      setResult(tempo);
    }
  };
  return (
    <form onSubmit={searchCountry}>
      Filter shown with
      <input value={searchName} onChange={handleSearchFunction} />
      <div>
        <button>Search</button>
        <h3>
          {tooMany ? 'Too many matches specify another filter' : 'Results'}
        </h3>
        <div>
          {onlyOne
            ? result.map((country, index) => (
                <Country
                  key={index}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  languages={country.languages}
                  flag={country.flag}
                />
              ))
            : result.map((country, index) => (
                <MultipleResults
                  key={index}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  languages={country.languages}
                  flag={country.flag}
                />
              ))}
        </div>
      </div>
    </form>
  );
};

export default Search;
