import pkg from '@reduxjs/toolkit';
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
    }
})

export const icecreamReducer =  icecreamSlice.reducer

export const icecreamActions = icecreamSlice.actions 