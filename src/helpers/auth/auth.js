import Axios from "axios";
import Cookies from 'js-cookie';
import { redirect } from "react-router-dom";
const TOKEN_KEY ='access';
const TOKEN_NAME = 'name_user';
const TOKEN_ROLE = 'sr';
const TOKEN_USER = 'su';

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getName() {
  return localStorage.getItem(TOKEN_NAME);
}
export function getRole() {
  return localStorage.getItem(TOKEN_ROLE);
}
export function getUser() {
  return localStorage.getItem(TOKEN_USER);
}

export function deleteName(e) {
  localStorage.removeItem(TOKEN_NAME);
}
export function deleteRole(e) {
  localStorage.removeItem(TOKEN_ROLE);
}
export function deleteUser(e) {
  localStorage.removeItem(TOKEN_USER);
}
export function deleteToken(e) {
  localStorage.removeItem(TOKEN_KEY);
  if (getToken() === null) {
    window.location.href = "/login"
  }
  
}

export async function getCurrentUser() {
  if (!getToken()) return false;
  try {
    let response = await Axios.get("/api/v1/auth/current");
    return response.data;
  } catch (error) {
    return false;
  }
}

export function initAxiosInterceptors() {
 const token = getToken()
  Axios.defaults.headers.post['Content-Type'] = 'application/json'
  Axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  });

  Axios.interceptors.response.use(
    response => response,
  );
}