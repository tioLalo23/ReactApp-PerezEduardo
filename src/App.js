/*Pérez Rosales Eduardo - 420090601
30 de abril de 2022 */
import './App.css';
import swal from 'sweetalert';
//import resultado from './resultado.json';
const axios = require('axios').default;


function App() {
  
  const validar = async () => {
    try {
      //Inicia los inputs en sus estados por default
      var objeto = document.getElementById("cp");
      var cp = document.getElementById("cp").value;
      var estado = document.getElementById("estado");
      var municipio = document.getElementById("municipio");
      var colonia = document.getElementById("colonia");
      estado.innerHTML = '<option>Seleccione</option>';
      municipio.innerHTML = '<option>Seleccione</option>';
      colonia.setAttribute("disabled", "true");
      colonia.innerHTML = '<option>Seleccione</option>';
      //Recorta el numero a 5 cifras
      if(objeto.value.length >5){
        objeto.value = objeto.value.substring(0,5);
      }
      //Cuando tiene 5 cifras, evalúa el cp
      if(cp.length==5){
        console.log(cp);
        //Si es negativo, escapa de la función
        if(cp<=0){
          swal("Número inválido","Ingrese un entero positivo de 5 cifras", "error");
          return 0;
        }
        //Crea un nuevo formdata y lo envía al API
        let formData = new FormData();
        formData.append("cp", cp);
        const url = "http://api.masksoftco.mx/direcciones/codigo-postal";
        let res = await axios({
            url,
            method: 'POST',
            dataType: 'json',
            ContentType: 'application/json',
            data: formData
        });
        let resultado = res.data;
        //Evalua si existe el cp
        if(resultado==0){
          swal("Error","El codigo postal no existe","error");
        }
        else {
          //Si existe, agrega sus valores a los input
          estado.innerHTML+='<option value='+resultado[0].idEstado+' selected> '+resultado[0].estado+'</option>';
          municipio.innerHTML+='<option value='+resultado[0].idMun+' selected> '+resultado[0].municipio+'</option>';
          colonia.removeAttribute("disabled");
          for(let i=0; i<resultado.length; i++){
              colonia.innerHTML +='<option value='+resultado[i].idColonia+'> '+resultado[i].colonia+'</option>';
          }
        }
        
      }
      
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
        <h1 class="py-3">Actividad 9</h1>
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
        <div class="row py-5">
          <label>Hecho por: Pérez Rosales Eduardo  </label>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
