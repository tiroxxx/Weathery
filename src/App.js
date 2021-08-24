import './App.css';
import Api from './components/Api.jsx';
import Jumbotron from './components/jumbotron/Jumbotron';
import Forecast from './components/forecast/Forecast';

function App() {

  return (
    <div className="App">
      {/* HELLO
      <Api /> */}
      <Jumbotron />
      <Forecast />
    </div>
  );
}

export default App;
