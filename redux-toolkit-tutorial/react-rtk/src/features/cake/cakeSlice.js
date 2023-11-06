import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}
//createSlice uses immer uner the hood
// also, createSlice create action creators on its own
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer

export const {ordered, restocked} = cakeSlice.actions 