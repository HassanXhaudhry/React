import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Login from './pages/Login';

function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    
      

    </>
  );
}

export default App;
