import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function creates(cedula, setDatos, alert) {
    axios.get(`${rutaAxios}funcionarios/unico/${cedula}/1`)
    .then(res=>{
        if (res.data.error === "Encuesta respondida") {
            alert.error('Funcionario con cedula '+cedula+ ' ya respondio la encuesta', 2)
        }else{
            alert.success('Funcionario '+res.data.apellidos_nombres+' encotrado', 2)
            return setDatos(res.data)
        }
    })
    .catch(err=>(
        alert.error('Funcionario con cedula '+cedula+ ' no encontrado', 2)
    ))
    
}
