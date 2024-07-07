import axios from "axios"
import Cookies from 'js-cookie';
import { rutaAxios } from "helpers/variablesGoblales";
import {setToken, deleteToken} from 'helpers/auth/auth'


export async function login (data, message) {
    const res = await new Promise((resolve, reject) => {
      axios.post(`${rutaAxios}auth/user/authentication`, {...data})
      .then(res=>{
        message.success('Bienvenido', 2)
        setToken(res.data.token)
        resolve(true)
      })
      .catch(error=>{
        message.error('Credenciales incorrectas', 2)
        reject(false)
      })
    });
    
    return res
}