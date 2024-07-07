
import React, {useState} from "react"

import { creates } from "lib/peticiones/funcionariosBusqueda"

//Instancia de app de antd, para usar componentes si colocar manualmente la configuración
import { App } from 'antd';

const Buscar =({set})=>{

    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();

    const [inde, setInde] = useState(0)
    return(
        <div className="box box animate__animated animate__fadeInRight animate__faster">
            <div className="columns">
                <div className="column is-4">
                <div className="field mb-3">
                        <label className="label">Cédula</label>
                        <div className="field-body">
                            <div className="field has-addons" >
                                <div className="control">
                                    <div className="select">
                                        <select  name="letra">
                                        <option value="V">V</option>
                                        <option value="E">E</option>
                                        </select>
                                    </div>
                                </div> 

                                <p className="control is-expanded has-icons-right">
                                    <input className="input" type="number"   placeholder="Cédula" maxLength={10}  onChange={(e)=>(
                                    setInde(e.target.value) 
                                    )}/>
                                </p> 
                                <div className="control">
                                    <button className="button is-info" onClick={(e)=>(
                                        creates(inde, set, message)
                                    )}>
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Buscar