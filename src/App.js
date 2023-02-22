import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import { Home } from './Components/sabul-components/Home';
import {About} from './Components/sabul-components/About';
import {NavBar} from './Components/sabul-components/NavBar';
import { OrderSummary } from './Components/sabul-components/OrderSummary';
import { NoMatch } from './Components/sabul-components/NoMatch';
import { Products } from './Components/sabul-components/Products';
import { FeaturedProduct } from './Components/sabul-components/FeaturedProduct';
import { NewProduct } from './Components/sabul-components/NewProduct';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='OrderSummary' element={<OrderSummary/>} />
    <Route path='*' element={<NoMatch/>} />
    <Route path='Products' element={<Products/>}>
      <Route index element={<FeaturedProduct/>} />
      <Route path='FeaturedProducts' element={<FeaturedProduct/>} />
      <Route path='NewProducts' element={<NewProduct/>} />
    </Route>
   </Routes></>
  );
}

export default App;
