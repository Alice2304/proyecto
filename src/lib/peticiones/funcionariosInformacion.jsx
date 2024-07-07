import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function creates(cedula, setData) {
    const respuesta = await axios.get(`${rutaAxios}funcionarios/unico/${cedula}/2`)
    setData(respuesta.data)
}
export async function encuesta(id, setData) {
    const respuesta = await axios.get(`${rutaAxios}encuesta/byPresFunc/2/${id}/1/100`)
    const array = respuesta.data.EncuestaFiltroPregFuncs
    let arr = []
      for (let index = 0; index < array.length; index++) {
        arr.push({
            title:array[index].pregunta,
            description:array[index].respuesta
        })
        
      }
    setData(arr)
}