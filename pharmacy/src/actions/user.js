import * as api from '../api/index.js';
import {actionType} from '../constants/constants.js';

export const getNavbarAction = () => api.getNavbar();
export const getCartAction = () => api.getCart();
export const addToCartAction = (id) => api.addToCart(id);
export const removeFromCartAction = (id) => api.removeFromCart(id);
export const addAppointment = (id) => api.addAppointment(id);
export const getAppointment = () => api.getAppointment();