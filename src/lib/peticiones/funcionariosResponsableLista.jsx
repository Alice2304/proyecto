import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function responsables(id, setData) {
    const respuesta = await axios.get(`${rutaAxios}funcionarios/responsable/${id}`)
    return setData(respuesta.data.funcionariosResponsables)
}