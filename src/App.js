/*Pérez Rosales Eduardo - 420090601
30 de abril de 2022 */
import './App.css';
import { useState } from 'react';

const axios = require('axios').default;


function App() {
  const [resultado, setResultado] = useState([]);
  const validar = async () => {
    try {
      const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";
      let res = await axios({
          url,
          method: 'GET',
          //dataType: 'json',
          //ContentType: 'application/json',
      });
      setResultado(res.data.clients);
      console.log(resultado);
    } catch (error) {
      //Imprime el error en caso de haber
      console.log(error);
    }
  }
  //Retorno de la función principal App
  //Al hacer clic en el botón se ejecuta la funcion Incrementar
  return (
    <div className="App">
      <div class="container">
        <h1 class="py-3">Actividad 10</h1>
        <div class="row">
          <div class="col-md-1 align-middle">
            <p>Clic aqui para consultar</p>
              <input type="button" id='boton' onClick={validar} value="Consultar"></input>
          </div>
          <div class="col-md-11">
            <div class="row fw-bold">
              <div class="col-md-2">
                <p>id</p>
              </div>
              <div class="col-md-2">
                <p>Nombre</p>
              </div>
              <div class="col-md-2">
                <p>Descripción</p>
              </div>
              <div class="col-md-2">
                <p>Correo</p>
              </div>
              <div class="col-md-2">
                <p>Regimen fiscal</p>
              </div>
              <div class="col-md-2">
                <p>RFC</p>
              </div>
            </div>
            {
              resultado.map((data) => (
                <div class="row" key={'cliente-'+ data.id_cliente}>
                  <div class="col-md-2">
                    {data.id_cliente}
                  </div>
                  <div class="col-md-2">
                    {data.nombre}
                  </div>
                  <div class="col-md-2">
                    {data.descripcion}
                  </div>
                  <div class="col-md-2">
                    {data.correo}
                  </div>
                  <div class="col-md-2">
                    {data.reg_fiscal}
                  </div>
                  <div class="col-md-2">
                    {data.rfc}
                  </div>
                </div>
              ))
            }          
          </div>
        </div>
        <div class="row py-5">
          <label>Hecho por: Pérez Rosales Eduardo  </label>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
