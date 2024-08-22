import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import Produtos from './Produtos/index';
import Oferta from './Oferta/index';
import './globals.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/ofertas" element={<Oferta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




