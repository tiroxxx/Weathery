import './App.css';
import { useState } from 'react';
import Jumbotron from './components/jumbotron/Jumbotron';
import Forecast from './components/forecast/Forecast';
import Form from './components/form/Form';

function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    currentTemp: '',
    feelsLikeTemp: '',
    currentWeather: '',
  });

  return (
    <div className="App">
      <Form input={input} setInput={setInput} />
      <Jumbotron />
      <Forecast />
    </div>
  );
}

export default App;
