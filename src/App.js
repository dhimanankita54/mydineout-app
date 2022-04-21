import logo from './logo.svg';
import './App.css';
import { Home } from "./Components/Home";
import { Details } from "./Components/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"./details/:name"} element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
