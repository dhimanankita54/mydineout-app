import logo from './logo.svg';
import './App.css';
import { Home } from "./Components/Home";
import { Details } from "./Components/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PureComponent } from 'react';
import { Buffet } from './Components/Buffet';
import { Pocket } from "./Components/Pocket";
import { MustVisit } from "./Components/MustVisit";
import { New } from "./Components/New";
import { BuffetDetails } from "./Components/BuffetDetails"
import { Checkout } from './Components/Checkout';
import { Login } from "./Components/Login";
import { Signup } from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/details/:id"} element={<Details />}></Route>
          <Route path={"/buffetdetails/:id"} element={<BuffetDetails />}></Route>
          <Route path={'/buffet'} element={<Buffet />}></Route>
          <Route path={'/pocket'} element={<Pocket />}></Route>
          <Route path={'/mustVisit'} element={<MustVisit />}></Route>
          <Route path={'/new'} element={<New />}></Route>
          <Route path={'/checkout'} element={<Checkout />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/signup'} element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
