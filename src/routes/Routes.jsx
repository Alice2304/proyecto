import { useEffect, useState } from 'react';

import {App} from 'antd';

//router-dom
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

//components
import Container from 'components/container/Container'
import Home from 'pages/Home'
import Login from 'pages/login/Login'
import Dashboard from 'pages/funcionarios/dashboard/dashboard'
import PrivateRoute from './PrivateRouter';
import { getToken } from "helpers/auth/auth";
import NavBar from 'components/navbar/Navbar';
import Funcionarios from 'pages/funcionarios/page';
import Form from 'pages/funcionarios/crear/Crear';
import InformacionFuncionario from 'pages/funcionarios/informacion/page';

const RoutesMain = () =>{
    return (
				<App  message={{
					maxCount: 1
				}}>
					<BrowserRouter>
						{getToken()?
							<NavBar/>
						:null}
						<Container>
							<Routes>
								<Route exact path="/" element={<Home/>}/>
								<Route exact path="/login" element={<Login/>}/>
								<Route exact path="/funcionarios/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
								<Route exact path="/funcionarios" element={<PrivateRoute><Funcionarios/></PrivateRoute>}/>
								<Route exact path="/funcionarios/:id/:cedula" element={<PrivateRoute><InformacionFuncionario/></PrivateRoute>}/>
								<Route exact path="/funcionarios/crear" element={<PrivateRoute><Form/></PrivateRoute>}/>
							</Routes>
						</Container>
					</BrowserRouter>
				</App>
			)
}


export default RoutesMain