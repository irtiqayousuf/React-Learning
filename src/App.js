import './App.css';
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
          <Route path="Home" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />          
          
      </Routes>
    </BrowserRouter>
  );
}
export default App;
