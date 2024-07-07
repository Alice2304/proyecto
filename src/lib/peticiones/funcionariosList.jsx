import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function creates() {
    const respuesta = await axios.get(`${rutaAxios}funcionarios`)
    return respuesta.data.funcionarioss
}