import { cakeReducer } from "../features/cake/cakeSlice.js";
import pkg from '@reduxjs/toolkit';
import { icecreamReducer } from "../features/icecream/icecreamSlice.js";
const { configureStore } = pkg;

export const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})