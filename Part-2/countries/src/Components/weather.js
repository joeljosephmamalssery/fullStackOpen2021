import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        setWeatherData(response.data.current);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weatherData.temperature} celsius</p>
      <img src={weatherData.weather_icons} alt="weather icon" />
      <p>
        Wind: {weatherData.wind_speed} mph direction {weatherData.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
