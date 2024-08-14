import './App.css';

import { useState } from 'react';
import { Search } from './Search';
import { WeatherContainer } from './WeatherContainer';

function App() {
  const [weatherData, setWeatherData] = useState([])

  const getWeather = async (cityName) => {
    const API_KEY = '0c38a1e7737dfd01e8cb9126e4b9e105';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`

    try {
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData([...data.list]);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>Weather forecasting application</h1>

      <Search getWeather={getWeather} />

      <WeatherContainer weatherData={weatherData}/>
    </div>
  );
}

export default App;
