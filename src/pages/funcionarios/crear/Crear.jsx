import {useState} from 'react'
import Panel from "components/panel/Panel";
import NoStatic from "components/funcionario/NoEstatico";
import { crear } from 'lib/peticiones/funcionariosCrear';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//Instancia de app de antd, para usar componentes si colocar manualmente la configuración
import { App } from 'antd';
const Form =()=> {
   const navigate = useNavigate();

    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();
    
  const [values, setValues] = useState({
    cedula: "",
    apellidos_nombres: "",
    telefono: "",
    correo: "x@gmail.com",
    serial_carnet: 0,
    codigo_carnet: 0,
    estado: "",
    municipio: "",
    localidad: "",
    responsable: "",
    departamento:"",
    entidad_principal:"",
    entidad_adscripcion:"",
    nombre_centro_votacion: "",
  })

  const crearFuncionario = async (values) =>{
    setValues(values)
    const val = await crear(values, message, navigate)
  }

  return (
    <div className="container mt-4">
      <div className="columns is-multiline is-centered">
        <div className="column is-10">
          <Panel title='Centro de Datos' subtitle={`Creación de Funcionario`}/>
        </div>        
        <div className="column is-10">
          <div className="box">
            <NoStatic setData={crearFuncionario} data={values}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Form
