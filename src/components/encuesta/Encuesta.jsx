import { useState } from "react"

import { creates } from "lib/peticiones/preguntasCarga"

import { App, TimePicker } from "antd"

//configuracion de colores antd componentes
import Configure from "components/antd/Configure";

const Encuesta = ({preguntasEncuesta, values, setNumeroStep}) =>{

    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();

    const [respuestas, setRespuestas] = useState([])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        creates(respuestas, values.id, message,setNumeroStep)
        //update(values, message, setNumeroStep)

    }

    const onChange = (time) => {
        setRespuestas({
            ...respuestas, ["1"]:time.$H+':'+time.$m
        })
    };

    const format = 'HH:mm';

    return(
        <div className="columns is-multiline">
            {preguntasEncuesta.map((preguntas, index)=>(
                preguntas.id>2?
                    <div className="column is-12" key={index}>
                        <label className="label">{'¿'+preguntas.pregunta+'?'}<span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="email"  placeholder={'¿'+preguntas.pregunta+'?'} required name={preguntas.id} onChange={(e)=>(
                                setRespuestas({
                                    ...respuestas,
                                    [e.target.name]:e.target.value
                                })
                            )}/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                :null
            ))}
            <div className="column is-12" >
                <label className="label">TIEMPO DE VOTACION<span className="has-text-danger-dark"> La informacion esta representadas en hh:mm</span></label>
                <div className="control has-icons-right pb-4" >
                    <Configure>
                        <TimePicker format={format} name="1" onChange={onChange}/>
                    </Configure>
                </div>
            </div>
            <div className="column is-12" >
                <label className="label">ALGUNA INCIDENCIA<span className="has-text-danger-dark">*</span></label>
                <p className="control" >
                    <span className="select">
                    <select name="2" value={respuestas['2']} required onChange={(e)=>(
                    setRespuestas({
                            ...respuestas,
                            [e.target.name]:e.target.value
                        })
                    )}>
                        <option value="0">---SELECCIONE UNA INCIDENCIA---</option>
                        <option value="CENTRO DE VOTACION CERRADO">CENTRO DE VOTACION CERRADO</option>
                        <option value="FALLOS DE TRANSPORTE">FALLOS DE TRANSPORTE</option>
                    </select>
                    </span>
                </p>
            </div>
            <div className="column is-12">
              <button className="button is-primary is-fullwidth" onClick={handleSubmit}>Continuar</button>
            </div>
        </div>
    )
}

export default Encuesta