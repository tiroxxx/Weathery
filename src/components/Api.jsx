import axios from 'axios';

export default function Search(city) {
  async function apiCall() {
    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(weather.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={apiCall}>CALL ME</button>
    </div>
  );
}
