import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    
      <div className="navbar">
        <div className="logo">
         
        </div>
        <div className="links">  
        <Link to="/Nosotros">NOSOTROS</Link> 
          <Link to="/Datos"> DATOS </Link>
        </div>
       
      </div>
    );
  };
export default Navegacion;
