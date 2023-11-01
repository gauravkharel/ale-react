import { createStore } from 'redux'

const CAKE_ORDERED = 'CAKE_ORDER'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(){
  return{
    type: CAKE_ORDERED,
    payload: 1
  }
}

function restokeCake(qty=1){
  return{
    type: CAKE_RESTOCKED,
    payload: qty,
  }
}

const initialState ={
  numOfCakes: 10
}


function shopReducer(state = initialState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return { 
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case CAKE_RESTOCKED:
      return { 
        ...state,
        numOfCakes: state.numOfCakes + action.payload


      }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(shopReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

const unsubscribe = store.subscribe(() => console.log('update store',store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restokeCake(10))

unsubscribe()

