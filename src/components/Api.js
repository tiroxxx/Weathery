import axios from 'axios';

export async function searchByCity(city) {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(weather.data);
  } catch (error) {
    console.error(error);
  }
}

export async function searchByLatLon(lat, lon) {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(weather.data);
  } catch (error) {
    console.error(error);
  }
}