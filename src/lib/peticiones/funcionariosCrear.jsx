import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"


export async function crear(values, message, redirect) {
    values.entidad_principal = values.ente_principal
    delete values.ente_principal
    axios.post(`${rutaAxios}funcionarios/create`, {...values})
    .then(res=>{
        message.success('Se cargado la informacion correctamente', 2)
        return  redirect('/funcionarios')
    })
    .catch(err=>{
        message.error('Ups... Ha ocurrido un error, intente mas tarde', 2)
        return false
    })
}