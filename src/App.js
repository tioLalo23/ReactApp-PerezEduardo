/*Pérez Rosales Eduardo - 420090601
30 de abril de 2022 */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  //state contador inicializado en 0
  const [contador, updateContador] = useState(0);
  //Funcion que actualiza el contador. Se ejecuta al presionar el botón
  const incrementar = () =>{
    try {
      updateContador(contador+1);
    } catch (error) {
      alert("Algo salió mal. Intenta de nuevo.")
    }
  }
  //Retorno de la función principal App
  //Al hacer clic en el botón se ejecuta la funcion Incrementar
  return (
    <div className="App">
      <header className="App-header">
        <p>Actividad 8</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador: {contador}
        </p>
        <button onClick={incrementar}>Incrementar</button>
        <p>Hecho por: Pérez Rosales Eduardo - 420090601</p>
      </header>
    </div>
  );
}

export default App;
