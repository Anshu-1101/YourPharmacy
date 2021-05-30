import * as api from '../api/index.js';
import {actionType} from '../constants/constants.js';

export const getNavbarAction = () => api.getNavbar();
export const getCartAction = () => api.getCart();
export const addToCartAction = (id) => api.addToCart(id);