
import { useState, useEffect } from "react";
import Panel from "components/panel/Panel";
import Steps from 'components/steps/Steps'
import Buscar from "components/buscar/Buscar";
import Funcionario from "components/funcionario/Funcionario";
import Encuesta from "components/encuesta/Encuesta";
import Aprobado from "components/aprobado/Aprobado";
import axios from "axios"

//peticiones API
import { creates } from "lib/peticiones/encuestaPreguntas";

import { filterComponents } from "helpers/filterComponents";

 const Form =()=> {
  const [numeroStep, setNumeroStep]= useState(1)
  const [preguntasEncuesta, setPreguntasEncuesta] = useState([])
  const [datosFuncionario, setDatosFuncionarios] = useState({
    id: 0,
    cedula: "",
    apellidos_nombres: "",
    telefono: "",
    correo: "",
    serial_carnet: "",
    codigo_carnet: "",
    estado: "",
    municipio: "",
    localidad: "",
    nombre_centro_votacion: "",
    id_estatus: 0,
  })

  async function login () {
    const x = await new Promise((resolve, reject) => {
      
      axios.get(`http://172.16.0.47:5000/api/recibos`)
      .then(
        rss=>console.log(rss)
      ).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
})}

  //Obtenemos el numero en el que se encuentra el Step
  const StepNumero=(numero)=>{
    setNumeroStep(numero)
  }

  //Renderizamos el componente que se necesita, segun el numero de la Step
  const Render = ({...rest}) =>{
    return (filterComponents(
      {
          1: <Funcionario {...rest}/>,
          2: <Encuesta {...rest}/>,
          3: <Aprobado {...rest}/>
      }, numeroStep))
  }

  useEffect(() => {
    creates(setPreguntasEncuesta)
    login()
  }, [])
  
  return (
    <div className="container mt-4">
      <div className="columns is-multiline is-centered">
        <div className="column is-10">
          <Panel title='Centro de Datos' subtitle={`Encuesta`}/>
        </div>
        {numeroStep !=3?
          <div className="column is-10">
            <div className="box">
              <Steps 
                number={2}  
                numeroStep={numeroStep}
                titles={{title1:'Información Funcionario',title2:'Encuesta'}}
                stepNumero={StepNumero}
              />
            </div>
          </div>
        :null
        }
        {numeroStep<=1?
          <div className="column is-10">
            <Buscar set={setDatosFuncionarios}/>
          </div>
        :null}
        
        <div className="column is-10">
          <div className="box">
            <Render values={datosFuncionario} preguntasEncuesta={preguntasEncuesta} setNumeroStep={setNumeroStep} setDatosFuncionarios={setDatosFuncionarios}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Form
