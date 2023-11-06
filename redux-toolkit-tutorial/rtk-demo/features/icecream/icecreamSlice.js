import pkg from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice.js';
const {createSlice} = pkg;

const initialState = {
    numOfIcecream: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, action) => {
            state.numOfIcecream += action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecream--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecream--
        })
    }
})

export const icecreamReducer =  icecreamSlice.reducer

export const icecreamActions = icecreamSlice.actions 