import { combineReducers } from 'redux';
import userReducer from './users/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
})