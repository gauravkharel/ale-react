import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice.js';

type InitialIcecreamState = {
    numOfIcecream: number
}

const initialState: InitialIcecreamState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numOfIcecream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecream--
        })
    }
})

export default icecreamSlice.reducer

export const {ordered, restocked} = icecreamSlice.actions 