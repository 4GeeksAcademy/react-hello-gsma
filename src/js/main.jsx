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
let  activo = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <React.StrictMode>
    <Contador
    numero= {segundos}
    />
  </React.StrictMode>
  )
} 


render();

setInterval(() => {
  if (activo) {
    segundos++;
    render();
  }
}, 1000);

// Desde consola

window.stopCounter = () => (activo = false);


window.startCounter = () => (activo = true);

window.resetCounter = () => {
  segundos = 0;
  render();
};


render();