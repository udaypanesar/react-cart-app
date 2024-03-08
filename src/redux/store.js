import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/slice/product.slice";
import cartReducer from '../pages/slice/cart.slice';

export const store = configureStore({
    reducer:{
        productReducer,
        cartReducer
    }
})