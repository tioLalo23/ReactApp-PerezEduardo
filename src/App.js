/*Pérez Rosales Eduardo - 420090601
30 de abril de 2022 */
import './App.css';
import resultado from './resultado.json';



function App() {
  
  //const axios = require('axios').default;

  const peticion = (codigoPostal) => {
         
  }

  const validar = () => {
    var objeto = document.getElementById("cp");
    if(objeto.value.length >5){
      objeto.value = objeto.value.substring(0,5);
    }
    var cp = document.getElementById("cp").value;
    var estado = document.getElementById("estado");
    var municipio = document.getElementById("municipio");
    var colonia = document.getElementById("colonia");
    estado.innerHTML = '<option>Seleccione</option>';
    municipio.innerHTML = '<option>Seleccione</option>';
    colonia.setAttribute("disabled", "true");
    colonia.innerHTML = '<option>Seleccione</option>';
    if(cp.length==5){
      console.log(cp);
      estado.innerHTML+='<option value='+resultado[0].idEstado+' selected> '+resultado[0].estado+'</option>';
      municipio.innerHTML+='<option value='+resultado[0].idMun+' selected> '+resultado[0].municipio+'</option>';
      colonia.removeAttribute("disabled");
      for(let i=0; i<resultado.length; i++){
        colonia.innerHTML +='<option value='+resultado[i].idColonia+'> '+resultado[i].colonia+'</option>';
      }
    }
      /*var resultados = JSON.parse(resultado[0]);
      console.log(resultados);*/
      //Se consume el API
      /*axios.post('http://api.masksoftco.mx/direcciones/codigo-postal', {
          cp: codigoPostal,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
    

  }
  //Retorno de la función principal App
  //Al hacer clic en el botón se ejecuta la funcion Incrementar
  return (
    <div className="App">
      <div class="container">
        <h1>Actividad 9</h1>
        <div class="row">
          <div class="col-md-3">
            <p>Ingresa tu código postal</p>
              <input type="number" id='cp' max={99999} onChange={validar}>
              </input>
          </div>
          <div class="col-md-3">
            <p>Ingresa tu estado</p>
              <select class="form-select" aria-label="Default select example" id='estado' disabled>
                <option>Seleccione</option>
              </select>
          </div>
          <div class="col-md-3">
            <p>Ingresa tu municipio</p>
              <select class="form-select" aria-label="Default select example" id='municipio' disabled>
                <option>Seleccione</option>
              </select>
          </div>
          <div class="col-md-3">
            <p>Ingresa tu colonia</p>
              <select class="form-select" aria-label="Default select example" id='colonia' disabled>
                <option selected>Seleccione</option>
              </select>
          </div>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
