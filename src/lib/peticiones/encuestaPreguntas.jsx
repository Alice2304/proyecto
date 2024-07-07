import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function creates(setDatos) {
    const respuesta = await axios.get(`${rutaAxios}preguntas`)
    setDatos(respuesta.data.preguntass)
}