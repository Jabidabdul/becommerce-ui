import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import { Home } from './Components/sabul-components/Home';
import {About} from './Components/sabul-components/About';
import {NavBar} from './Components/sabul-components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
   </Routes></>
  );
}

export default App;
