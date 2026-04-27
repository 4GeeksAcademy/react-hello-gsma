import React, { useState } from "react";
import propTypes from "prop-types";

export const Contador = (props) => {
  const numero = props.numero;
  const digitos = numero.toString().padStart(6, "0").split("");


  const [valorInput, setValorInput] = useState("");

  return (
    <div className="container text-center">

      <div className="d-flex justify-content-center bg-dark p-4 m-5 rounded">
        <div className="text-white fs-3 me-3 my-3">
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


      <div className="mb-3">
        <input
          type="number"
          className="form-control w-25 mx-auto"
          placeholder="Introduce número"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-center gap-3 flex-wrap">

        <button
          className="btn btn-danger"
          onClick={() => window.stopCounter()}
        >
          Stop
        </button>

        <button
          className="btn btn-success"
          onClick={() => window.startCounter()}
        >
          Start
        </button>

        <button
          className="btn btn-warning"
          onClick={() => window.resetCounter()}
        >
          Reset
        </button>

     
        <button
          className="btn btn-primary"
          onClick={() => window.startCountdown(Number(valorInput))}
        >
          Countdown
        </button>

      </div>
    </div>
  );
};

Contador.propTypes = {
  numero: propTypes.number
};
