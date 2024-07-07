
import { useState } from "react"
import { Link } from "react-router-dom"

import logo from 'assets/logo.png'

import { deleteToken } from "helpers/auth/auth"

const NavBar = () =>{
    const [menu, setMenu] = useState(false) 

    const menuChange = (e) =>{
        const icon = document.getElementById('menu')
        const menuS = document.getElementById('menu-activation')
        if (menu ===false) {
            icon.classList.add('is-active')
            menuS.classList.add('is-active')
            setMenu(true)
        }else{
            icon.classList.remove('is-active')
            menuS.classList.remove('is-active')
            setMenu(false)
        }
    }

    return(
        <nav className="navbar has-background-red is-sticky top-px-1 mb-5" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ml-5">
            <div className="navbar-item">
                <figure className="image is-pulled-left mr-3">
                    <img className="" src={logo} alt="marca"/>
                </figure>
            </div>

            <p role="button" id="menu" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={menuChange}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </p>
        </div>

        <div className="navbar-menu" id="menu-activation">
            <div className="navbar-start">
                <Link to="/funcionarios/dashboard" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fas fa-chart-pie"></i>
                        </span>
                        Dashboard
                    </span>
                </Link>
                <Link to="/funcionarios" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fa-solid fa-list"></i>
                        </span>
                        Lista Funcionarios
                    </span>
                </Link>
                <Link to="/" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fa-solid fa-list"></i>
                        </span>
                        Registrar Voto
                    </span>
                </Link>
                <Link to="/funcionarios/crear" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fa-solid fa-list"></i>
                        </span>
                        Registrar Funcionario
                    </span>
                </Link>
            </div>
            <div className="navbar-end">
            <div className="navbar-item has-dropdown is-right is-hoverable is-radius ">

                <a className="navbar-link has-background-transparent">
                    <span className="icon is-small is-right mr-2">
                        <span className="fa-solid fa-user">
                        </span>
                    </span>
                    Usuario
                </a>

                <div className="navbar-dropdown is-right is-radius">
{/*                 <a className="navbar-item">
                    Perfil
                </a> */}
                <hr className="navbar-divider"/>
                    <a className="navbar-item" onClick={async(e)=>(deleteToken())}>
                        Salir
                    </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar