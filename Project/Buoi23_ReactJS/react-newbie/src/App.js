import logo from './logo.svg';
import './App.css';
import Home from './Ex1/home';
import Databinding from './Components/databinding';
import CarExercise from './Ex2/indexEx2';
import FilmExercise from './Ex3/indexEx3';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}     {/* <Home></Home> */}
      {/* <Databinding></Databinding> */}
      {/* <CarExercise></CarExercise> */}
      <FilmExercise></FilmExercise>
    </div>
  );
}

export default App;
