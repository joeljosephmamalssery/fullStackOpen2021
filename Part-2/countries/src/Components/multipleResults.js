import { useState } from 'react';
import Country from './country';

const MultipleResults = ({ name, capital, population, languages, flag }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);
  return (
    <div style={{ display: 'flex' }}>
      <div>{name}</div>

      {showDetails ? (
        <Country
          name={name}
          capital={capital}
          population={population}
          languages={languages}
          flag={flag}
        />
      ) : (
        <button onClick={() => setShowDetails(!showDetails)}>show</button>
      )}
    </div>
  );
};

export default MultipleResults;
