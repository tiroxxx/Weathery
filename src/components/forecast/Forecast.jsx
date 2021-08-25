import './forecast.css';

export default function Forecast({weather}) {
  return (
    <div className="forecast">
      <div className="card">
        <div className="info">
          <h3>{weather.name}</h3>
          <h5>min: {weather.minTemp} max: {weather.maxTemp}</h5>
          <h1>{weather.currentTemp}</h1>
          <h4>{weather.currentWeather}</h4>
        </div>
        <div className="icon">
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
