import userReducer from "../features/user/userSlice.js";
import cakeReducer from "../features/cake/cakeSlice.js";
import { configureStore } from '@reduxjs/toolkit';
import icecreamReducer from "../features/icecream/icecreamSlice.js";


 const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store