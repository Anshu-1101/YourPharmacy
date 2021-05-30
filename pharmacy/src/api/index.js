import axios from 'axios';

axios.defaults.withCredentials = true;
const url = 'http://localhost:5000'
export const logIn = (userData) => axios.post(`${url}/user/login`, userData );
export const signUp = (userData) => axios.post(`${url}/user/signup`, userData);
export const logOut = () => axios.get(`${url}/user/logout`);
export const getNavbar = () => axios.get(`${url}/user/getnavbar`);
export const verifyUser = () => (axios.get(`${url}/authentications/verify`))
export const getProducts = () => axios.get(`${url}/products/getproducts`)
export const getDoctors = () => axios.get(`${url}/doctors/getdoctors`)
export const getCart = () => axios.get(`${url}/user/getcart`)
export const addToCart = (id) => axios.post(`${url}/user/addtocart`, id)
export const removeFromCart = (id) => axios.post(`${url}/user/removefromcart`, id)

export const addAppointment = (id) => axios.post(`${url}/appointment/addappointment`, id)
export const getAppointment = () => axios.get(`${url}/appointment/getappointment`)