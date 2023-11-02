import userReducer from "../features/user/userSlice.ts";
import cakeReducer from "../features/cake/cakeSlice.ts";
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
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch