// import logo from './logo.svg';
import './App.css';
// import Home from './BusTicket/Home';
// import Home from './DressingRoom/Home';
// import Home from './Ex1/home';
// import Databinding from './Components/databinding';
// import CarExercise from './Ex2/indexEx2';
// import FilmExercise from './Ex3/indexEx3';
// import Homes from './DemoProps/Home';
// import Home from './ShoppingCart/Home';
import Parent from './DemoLifeCycle/Parent';
// import ErrorBoundary from './DemoLifeCycle/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <Databinding></Databinding> */}
      {/* <CarExercise></CarExercise> */}
      {/* <FilmExercise></FilmExercise> */}
      {/* <Homes></Homes> */}
      {/* <Home></Home> */}
      {/* <ErrorBoundary> */}
        <h1>Catch Error</h1>
        <Parent></Parent>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
