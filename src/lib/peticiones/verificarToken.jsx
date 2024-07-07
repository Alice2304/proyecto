import axios from "axios"
import { deleteToken } from "helpers/auth/auth"
import { rutaAxios } from "helpers/variablesGoblales"

export async function verificacionToken() {
    axios.get(`${rutaAxios}auth/token/authentication`)
    .catch(err => (
       deleteToken()
    ))
}