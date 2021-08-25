import './form.css';
import { useEffect } from 'react';
import {searchByCity, searchByLatLon} from '../Api';

export default function Form({input, setInput}) {

  function handleSubmit(e) {
    e.preventDefault();
    searchByCity(input);
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    searchByLatLon(lat,lon)
  }

  function error() {
      console.log("can retrieve location");
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
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
