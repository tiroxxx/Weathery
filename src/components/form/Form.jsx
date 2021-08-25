import './form.css';
import { useEffect } from 'react';
import { searchByCity, searchByLatLon } from '../Api';

export default function Form({ input, setInput, setWeather }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const weatherInfo = await searchByCity(input);
    console.log(weatherInfo);
    setWeather((prevWeather) => ({
      ...prevWeather,
      name: weatherInfo.name,
      currentTemp: weatherInfo.main.temp,
      feelsLikeTemp: weatherInfo.main.feels_like,
      currentWeather: weatherInfo.weather[0].description,
      minTemp: weatherInfo.main.temp_min,
      maxTemp: weatherInfo.main.temp_max,
      icon: weatherInfo.weather[0].icon,
    }));
  }
  //

  async function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const weatherInfo = await searchByLatLon(lat, lon);
    console.log(weatherInfo);
  }

  function error() {
    console.log('can retrieve location');
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Orlando, FL"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
