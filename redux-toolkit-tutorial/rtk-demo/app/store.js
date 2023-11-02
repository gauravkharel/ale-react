import { cakeReducer } from "../features/cake/cakeSlice.js";
import pkg from '@reduxjs/toolkit';
import { icecreamReducer } from "../features/icecream/icecreamSlice.js";
// import logPkg from 'redux-logger';
import { userReducer } from "../features/user/userSlice.js";

const { configureStore } = pkg;
const { getDefaultMiddleware } = pkg;
// const { logger } = logPkg;

export const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})