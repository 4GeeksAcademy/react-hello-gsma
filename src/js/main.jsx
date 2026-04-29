import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { Contador } from './components/Contador';



let segundos = 0;
let activo = true;
let cuentaAtras = false;

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <React.StrictMode>
      <Contador numero={segundos} />
    </React.StrictMode>
  );
};

render();

setInterval(() => {
  if (activo) {
    if (cuentaAtras) {
      if (segundos > 0) {
        segundos--;
      }
    } else {
      segundos++;
    }
    render();
  }
}, 1000);



window.stopCounter = () => {
  activo = false;
   cuentaAtras = false;
};

window.startCounter = () => {
  activo = true;
   cuentaAtras = false;
};

window.resetCounter = () => {
  segundos = 0;
  cuentaAtras = false;
  render();
};

window.startCountdown = (numeroInicial) => {
  segundos = numeroInicial;
  cuentaAtras = true;
  activo = true;
  render();
};
