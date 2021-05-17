import axios from 'axios';

axios.defaults.withCredentials = true;
// url = 'http://localhost:5000'
export const logIn = (userData) => axios.post('http://localhost:5000/user/login', userData );
export const signUp = (userData) => axios.post('http://localhost:5000/user/signup', userData);
export const logOut = () => axios.get('http://localhost:5000/user/logout');
export const getNavbar = () => axios.get('http://localhost:5000/user/getnavbar');
export const verifyUser = () => (axios.get(`http://localhost:5000/authentications/verify`))
export const getProducts = () => axios.get(`http://localhost:5000/products/getproducts`)
export const getDoctors = () => axios.get(`http://localhost:5000/doctors/getdoctors`)
