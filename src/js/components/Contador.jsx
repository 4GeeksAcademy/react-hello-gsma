import React from "react";
import propTypes from 'prop-types';

export const Contador = (props) => {
  const numero = props.numero;

  const digitos = numero.toString().padStart(6, "0").split("");

  return (
    <div className="d-flex justify-content-center bg-dark p-4 m-5">

   
      <div className="text-white fs-3 me-2 my-3">
        <i className="fa-solid fa-clock"></i>
      </div>

    
      {digitos.map((digito, index) => (
        <div
          key={index}
          className="bg-secondary text-white fs-2 mx-1 px-3 py-2 rounded"
        >
          {digito}
        </div>
      ))}
      
    </div>
  );
};


Contador.propTypes= {
    numero: propTypes.number
}