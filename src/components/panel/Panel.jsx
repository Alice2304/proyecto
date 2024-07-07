import Foot from './Foot'
import Content from './Content'
import logo from 'assets/logo2.png'
import Options from './Options';
import { getToken } from "helpers/auth/auth";
import { Link } from 'react-router-dom';
import Status from 'components/status/Status';


const Panel = ({title, subtitle, options, setEnteData,  ...rest}) =>{

    return (
        <div className="box pt-0 pb-0 pr-0 pl-0">
            <section className={`hero`}>
                <div className="hero-body ">
                    <div className="content is-pulled-right">
                        {!getToken()?
                                <Link to="/login" className="navbar-item ml-2 mr-2">
                                    <span className='navbar-item-hover'>
                                        <span className="icon is-small is-right mr-2">
                                            <i className="fa-solid fa-house"></i>
                                        </span>
                                    Inicio
                                    </span>
                                </Link>
                                
                        :null}
                        <Options
                            data={options?
                                {
                                    estatus:<Status setEnteData={setEnteData}/>
                                }
                            :null}
                        />
                    </div>
                    
                    <figure className="image is-48x48 is-pulled-left mr-3">
                        <img className="" src={logo} alt="marca"/>
                    </figure>
                    <p className="title">
                        {title}
                    </p>
                    <p className="subtitle">
                        {subtitle}
                    </p>
                    <Content {...rest}/>
                </div>

                <Foot {...rest}/>
            </section>
        </div>
    )
}

export default Panel