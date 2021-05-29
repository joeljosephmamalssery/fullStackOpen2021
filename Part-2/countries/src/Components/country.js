import Weather from './weather';
const Country = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Languages</h3>
      <p>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </p>
      <img src={flag} alt="flag" width="300" height="175" />
      <Weather capital={capital} />
    </div>
  );
};

export default Country;
