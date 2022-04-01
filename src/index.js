import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/details/:id" element={<Details/>}></Route>
  </Routes>  
  </BrowserRouter>,
  document.getElementById('root')
);


