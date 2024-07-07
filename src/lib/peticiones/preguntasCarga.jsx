import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function creates(respuestas, id, message,setNumeroStep) {
    let array = []
    for (const property in respuestas) {
        array.push({
            "id_funcionario":id,
            "respuesta":respuestas[property],
            "id_pregunta":property
        })
    }
    if (array.length>0) {
        axios.post(`${rutaAxios}encuesta`, {...array})
        .then(res=>{
            setNumeroStep(3)
            message.success('Se cargado la información correctamente', 2)
        })
        .catch(err=>(
            message.error('Ups... Ha ocurrido un error, intente mas tarde', 2)
        ))
    }else{
        setNumeroStep(3)
    }
    
}