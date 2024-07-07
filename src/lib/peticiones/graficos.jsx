import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function estatus(val) {
    const respuesta = await axios.get(`${rutaAxios}dashboard/funcionariosByEstatus${val!=="TODOS"?'/'+val:""}`)
    return respuesta.data.funcionariosByEstatus
}

export async function estados(val) {
    const respuesta = await axios.get(`${rutaAxios}dashboard/funcionariosByEstados/1${val!=="TODOS"?'/'+val:""}`)
    return respuesta.data.funcionariosByEstado
}