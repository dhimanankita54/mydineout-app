import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./Components/Navbar";
import ActionAreaCard from './Components/Offers';
import NearMeCarousel from './Components/Nearme';
import { Footer } from './Components/Footer';
import { Links } from './Components/Links';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ActionAreaCard />
      <Links />
      <NearMeCarousel />
      <Footer />
    </div>
  );
}

export default App;
