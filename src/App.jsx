import React, {useEffect} from 'react';
import {getToken, initAxiosInterceptors} from './helpers/auth/auth'

//style
import 'css/index.css'
import 'css/style2.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@creativebulma/bulma-divider/dist/bulma-divider.min.css'
import 'animate.css'
import { verificacionToken } from 'lib/peticiones/verificarToken';

//Routes
import Routes from 'routes/Routes'

//necesario para agregar automaticamente al axios, el token de authenticacion (se agrega a todas las peticiones que se hagan por http)
initAxiosInterceptors()
console.error('Something bad happened.');

function App() {
  useEffect(() => {
    if (getToken()) {
      verificacionToken()
    }
  }, [])
  
  return (    
        <Routes/>
  );
}

export default App;
