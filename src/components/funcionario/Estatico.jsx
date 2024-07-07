import { Fragment } from "react"
const Static = ({values}) => {
    return (
        <Fragment>
            <div className="column is-6">
                <label className="label">Identificación<span className="has-text-danger-dark">*</span></label>
                <div className="field mb-2" >
                    <p className="control is-expanded has-icons-right">
                        <input className="input" type="text" placeholder="Identificación" value={values.cedula} name="identification" readOnly/>
                        <span className="icon is-small is-right">
                            <i className="fas fa-passport"></i>
                        </span>
                    </p>
                </div>
            </div>
            <div className="column is-6">
                <label className="label">Nombre<span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4 is-expanded">
                    <input className="input" type="text" placeholder="Nombres" value={values.apellidos_nombres} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>
{/*             <div className="column is-6">
                <label className="label">Correo electrónico <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Correo electrónico" required name="agent_email" value={values.correo} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div> */}
            <div className="column is-6">
                <label className="label">Teléfono <span className="has-text-danger-dark">*</span></label>
                <div className="field " >
                    <div className="control is-expanded has-icons-right pb-4 mb-2" >
                        <input className="input" type="text" placeholder="Teléfono" value={values.telefono} readOnly/>
                        <span className="icon is-small is-right">
                            <i className="fas fa-phone"></i>
                        </span>
                    </div>
                </div>
            </div>
{/*             <div className="column is-6">
                <label className="label">Serial Patria <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Serial Patria" required name="agent_email" value={values.serial_carnet} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div className="column is-6">
                <label className="label">Codigo patria <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Codigo patria" required name="agent_email" value={values.codigo_carnet} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div> */}
            <div className="column is-6">
                <label className="label">Estado <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Estado" required name="agent_email" value={values.estado} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div className="column is-6">
                <label className="label">Municipio <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Municipio" required name="agent_email" value={values.municipio} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div className="column is-6">
                <label className="label">Parroquia <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Parroquia" required name="agent_email" value={values.localidad} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div className="column is-12">
                <label className="label">Centro de votación <span className="has-text-danger-dark">*</span></label>
                <div className="control has-icons-right pb-4" >
                    <input className="input" type="email"  placeholder="Centro de votación" required name="agent_email" value={values.nombre_centro_votacion} readOnly/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Static