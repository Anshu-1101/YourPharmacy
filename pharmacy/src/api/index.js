import axios from 'axios';

axios.defaults.withCredentials = true;

export const logIn = (userData) => axios.post('http://localhost:5000/user/login', userData );
export const signUp = (userData) => axios.post('http://localhost:5000/user/signup', userData);
export const verifyUser = () => (axios.get(`http://localhost:5000/authentications/verify`))