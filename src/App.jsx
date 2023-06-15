import React from 'react';
import './App.css';
import Navegacion from './assets/componentes/Navegacion';
import Nosotros from './assets/componentes/Nosotros';
import Datos from './assets/componentes/Datos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <div>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/datos" element={<Datos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

  
  

