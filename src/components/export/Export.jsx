import React, { useState } from 'react'

const Export=({setData, data})=>{
    const[cedula, setCedula] = useState("")


    return(
        <div className="box">
            <p className=" has-text-weight-semibold">Buscar Cédula</p>
            <div className="field">
                <input id="switchExample" type="text" name="switchExample" className="input"/>
            </div>
            <button className = "button is-fullwidth is-blue">Buscar</button>
        </div>
    )
}
export default Export