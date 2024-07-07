import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function entes(setData) {
    const respuesta = await axios.get(`${rutaAxios}roles/adscripciones`)
    setData(respuesta.data.adscripcioness)
}