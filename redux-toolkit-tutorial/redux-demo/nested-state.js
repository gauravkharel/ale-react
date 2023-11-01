import { createStore } from "redux"
import { produce } from "immer"

const initialState = {
    name: 'Vladimur',
    address: {
        street: '132 Main st.',
        city: 'Boston',
        state: 'MA',
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            //without immer
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload
            //     }
            // }

            //with immer and, produce is a immer functionality
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}

let store = createStore(reducer)

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

store.dispatch(updateStreet('212 Ktm St'))

unsubscribe()