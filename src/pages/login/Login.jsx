'use client'
import {Fragment, useState} from 'react'
import { login } from 'lib/peticiones/login'

//Instancia de app de antd, para usar componentes si colocar manualmente la configuración
import { App } from 'antd';
import logo from 'assets/logo.png'

const Login=()=>{
    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();
    
    const [credenciales, setCredenciales] = useState({
        user:"",
        pass:""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await login(credenciales, message)
        if (res===true) {
            window.location.href = "/funcionarios/dashboard"
        }
    }
    return (
    <Fragment>
        <div className='has-background-login scrool'>
            <div className="has-blur vh-min100">
                <div className="columns mt-0 is-vcentered">
                    <div className="column is-7 pt-0 pb-0 pr-0 is-hidden-touch">
                        <div className="columns is-centered is-multiline">
                            <div className="column is-12">
                                <div className="author-quote-wrap">
                                    <input className="toggle-quote" type="radio" id="AQ-1" name="quote" checked readOnly/>
                                    <div className="author-quote">
                                        <div className="is-pulled-left author-photo photo-a animated bounceInLeft">

                                        </div>
                                        <div className="is-pulled-right quote-content">
                                            <div className="clearfix animated zoomIn"><div className="quote-like pull-right"></div></div>
                                            <div className="quote-text animated rotateInDownRight">Nuestra vida no es otra cosa que la herencia de nuestro país</div>
                                            <div className="quote-author animated lightSpeedIn">Simon Bolivar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5-fullhd is-5-widescreen is-5-desktop pt-0 pb-0 pr-0 pl-0 is-12-mobile is-12-tablet">
                        <div className="box is-radiusless vh-min100 is-flex is-justify-content-center is-align-items-center">
                            <form className="field pl-7 pr-7"> 
                                <figure className="image container is-width-65 image mb-5">
                                    <img className="" src={logo} alt="marca"/>
                                </figure>
                                <div className='mb-5'>
                                    <p className='is-size-7 has-text-centered'>Ingrese los datos solicitados para continuar con el proceso</p>
                                </div>
                            
                                <div className="control has-icons-right mb-4">
                                    <input className="input" type="text" placeholder="Usuario" value={credenciales.user} name="user" onChange={(e)=>(setCredenciales({...credenciales, [e.target.name]:e.target.value}))} />
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>

                                <div className="control has-icons-right mb-4">
                                    <input className="input" type="password" placeholder="Contraseña" value={credenciales.pass} name="pass" onChange={(e)=>(setCredenciales({...credenciales, [e.target.name]:e.target.value}))} />
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                                
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <button className="button is-primary is-fullwidth" onClick={handleSubmit}>
                                            Ingresar
                                        </button>
                                    </p>
                                </div>
                                <div className='mb-4'>
                                    <p className='is-size-8 has-text-centered has-text-grey'>2024 | Empresa</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    </Fragment>
        
    )
}

export default Login