import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./Components/Navbar";
import ActionAreaCard from './Components/Offers';
import  NearMeCarousel  from './Components/Nearme';

function App() {
  return (
    <div className="App">
     <ButtonAppBar/>
     <ActionAreaCard/>
    </div>
  );
}

export default App;
