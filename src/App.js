import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./Components/Navbar";
import ActionAreaCard from './Components/Offers';
import NearMeCarousel from './Components/Nearme';
import { Footer } from './Components/Footer';
import { Links } from './Components/Links';
import Featured from './Components/Featured';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ActionAreaCard />
      <NearMeCarousel />
      <Featured />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
