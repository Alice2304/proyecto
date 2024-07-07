import { Fragment, useState, useEffect } from "react"

import { App } from "antd"

import { validateNumber } from "helpers/validator/validateNumber"
import { validateLetter } from "helpers/validator/validateForm"

import { estados } from "lib/data/estados"

import { entes } from 'lib/peticiones/entes';

const NoStatic = ({setData, data}) => {

    const {message} = App.useApp();
    
    const [values, setValues] = useState({
        cedula: "",
        apellidos_nombres: "",
        telefono: "",
        correo: "x@gmail.com",
        serial_carnet: 0,
        codigo_carnet: 0,
        estado: "",
        municipio: "",
        localidad: "",
        responsable: "",
        departamento:"",
        entidad_principal:"",
        entidad_adscripcion:"",
        nombre_centro_votacion: "",
      })

      const [entesData, setEntesData] = useState([])

      const textChange = (e) =>{
        const  valid = validateLetter(e, message)
        if (valid) {
            setValues({
                ...values,
                [e.target.name]:e.target.value
            })
        }
        
      }

      const numberChange = (e) =>{
        const valid = validateNumber(e.target.value, 8, message)
        if (valid) {
            setValues({
                ...values,
                [e.target.name]:e.target.value
            })
        }
      }
      const numberSerialChange = (e) =>{
        const valid = validateNumber(e.target.value, 10, message)
        if (valid) {
            setValues({
                ...values,
                [e.target.name]:e.target.value
            })
        }
      }
      const numberPhoneChange = (e) =>{
        const valid = validateNumber(e.target.value, 11, message)
        if (valid) {
            setValues({
                ...values,
                [e.target.name]:e.target.value
            })
        }
      }

      useEffect(() => {
        setValues({
            ...data
        })

        entes(setEntesData)
      }, [])
      
     
    return (
        <Fragment>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}> 
                <div className="columns is-multiline">
                    <div className="column is-6">
                        <label className="label">Identificación<span className="has-text-danger-dark">*</span></label>
                        <div className="field mb-2" >
                            <p className="control is-expanded has-icons-right">
                                <input className="input" type="text" placeholder="Identificación" required value={values.cedula} name="cedula" onChange={numberChange}/>
                            </p>
                        </div>
                    </div>
                    <div className="column is-6">
                        <label className="label">Nombre<span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4 is-expanded">
                            <input className="input" type="text" placeholder="Nombres" value={values.apellidos_nombres} required name='apellidos_nombres' onChange={textChange}/>
                        </div>
                    </div>
{/*                     <div className="column is-6">
                        <label className="label">Correo electrónico <span className="has-text-danger-dark"></span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="email"  placeholder="Correo electrónico"name="correo" value={values.correo} onChange={(e)=>(
                                setValues({
                                    ...values,
                                    [e.target.name]:e.target.value
                                })
                            )}/>
                        </div>
                    </div> */}
                    <div className="column is-12">
                        <label className="label">Teléfono <span className="has-text-danger-dark"></span></label>
                        <div className="field " >
                            <div className="control is-expanded has-icons-right pb-4 mb-2" >
                                <input className="input" type="text" placeholder="Teléfono" name="telefono" value={values.telefono} onChange={numberPhoneChange}/>
                            </div>
                        </div>
                    </div>
{/*                     <div className="column is-6">
                        <label className="label">Serial Patria <span className="has-text-danger-dark"></span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="number"  placeholder="Serial Patria" name="serial_carnet" value={values.serial_carnet} onChange={numberSerialChange}/>
                        </div>
                    </div>
                    <div className="column is-6">
                        <label className="label">Código patria <span className="has-text-danger-dark"></span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="number"  placeholder="Código patria" name="codigo_carnet" value={values.codigo_carnet} onChange={numberSerialChange}/>
                        </div>
                    </div> */}
                    <div className="column is-4">
                        <div className="field pb-4 mb-2" >
                            <label className="label">Ente principal<span className="has-text-danger-dark">*</span></label>
                            <p className="control" >
                                <input type="text" className="input" value={entesData.length>0?entesData[0].ente_principal:""} readOnly/>
                            </p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="field pb-4 mb-2" >
                            <label className="label">Ente adscrito<span className="has-text-danger-dark">*</span></label>
                            <p className="control" >
                                <span className="select">
                                <select name="entidad_adscripcion" value={values.entidad_adscripcion} required onChange={(e)=>(
                                setValues({
                                        ...values,
                                        [e.target.name]:e.target.value,
                                        "ente_principal":entesData[0].ente_principal
                                    })
                                )}>
                                    <option value="0">---Seleccione un ente---</option>
                                    {entesData.map((es, index)=>(
                                        <option key={index} value={es.ente}>{es.ente}</option>
                                    ))}
                                </select>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <label className="label">Departamento<span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4 is-expanded">
                            <input className="input" type="text" placeholder="Departamento" value={values.departamento} required name='departamento' onChange={(e)=>(
                                setValues({
                                    ...values,
                                    [e.target.name]:e.target.value
                                })
                            )}/>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="field pb-4 mb-2" >
                            <label className="label">Estado <span className="has-text-danger-dark">*</span></label>
                            <p className="control" >
                                <span className="select">
                                <select name="estado" value={values.estado} required onChange={(e)=>(
                                setValues({
                                        ...values,
                                        [e.target.name]:e.target.value
                                    })
                                )}>
                                    <option value="0">---Seleccione un estado---</option>
                                    {estados.map((es, index)=>(
                                        <option key={index} value={es.estado}>{es.estado}</option>
                                    ))}
                                </select>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <label className="label">Municipio <span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="text"  placeholder="Municipio" required name="municipio" value={values.municipio} onChange={textChange}/>
                        </div>
                    </div>
                    <div className="column is-4">
                        <label className="label">Parroquia <span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="text"  placeholder="Parroquia" required name="localidad" value={values.localidad} onChange={textChange}/>
                        </div>
                    </div>
                    <div className="column is-6">
                        <label className="label">Centro de votación <span className="has-text-danger-dark">*</span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="text"  placeholder="Centro de votación" required name="nombre_centro_votacion" value={values.nombre_centro_votacion} onChange={textChange}/>
                        </div>
                    </div>
                    <div className="column is-6">
                        <label className="label">Identificación Jefe 1x10 <span className="has-text-danger-dark"></span></label>
                        <div className="control has-icons-right pb-4" >
                            <input className="input" type="text"  placeholder="Identificación Jefe 1x10" name="responsable" value={values.responsable} onChange={numberChange}/>
                        </div>
                    </div>
                    <div className="column is-12">
                        <button className="button is-primary is-dark is-fullwidth" onClick={(e)=>{
                            setData({...values})
                        }}>Agregar</button>
                    </div>
                </div>
            </form>
            
        </Fragment>
    )
}

export default NoStatic