import './App.css';
import Api from './components/Api.jsx';
import Jumbotron from './components/jumbotron/Jumbotron';
import Forecast from './components/forecast/Forecast';
import Form from './components/form/Form';

function App() {

  return (
    <div className="App">
      <Form />
      <Jumbotron />
      <Forecast />
    </div>
  );
}

export default App;
