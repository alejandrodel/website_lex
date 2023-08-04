import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from "./components/Header";
import React from "react";
import {BrowserRouter,Navigate, Route,Routes} from "react-router-dom"; 
import Home from "./pages/Home";
import Alex from "./pages/Alex";
import Deleo from "./pages/Deleo";
import Contacto from "./pages/Contacto";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path='/Alex' element={<Alex />}></Route>
            <Route path='/DeLeo' element={<Deleo />}></Route>
            <Route path='/Contacto' element={<Contacto />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
