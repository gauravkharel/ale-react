
import { createStore, bindActionCreators, combineReducers, applyMiddleware } from "redux";
import pkg from 'redux-logger';
const { logger } = pkg;
// now we have two reducers
const CAKE_ORDERED = "CAKE_ORDER";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDER";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}


function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function restokeIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIce: 10,
// };


const initialCakeState = {
  numOfCakes: 10
}

const initialIcecreamState = {
  numOfIce: 20
}

function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
}

function iceReducer(state = initialIcecreamState, action) {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIce: state.numOfIce - action.payload,
      };``
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIce: state.numOfIce + action.payload,
      };
    default:
      return state;
  }
}

const combined = combineReducers({cakeReducer, iceReducer})
// here we used the third part package with the help of applyMiddleware 
let store = createStore(combined, applyMiddleware(logger))

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.[]

const unsubscribe = store.subscribe(() =>{})

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCake(10))

//bindActionCreator just bind the actions with dispact function
//which is not really necessary as of now but, used to be useful back in the days.
const action = bindActionCreators(
  { orderCake, restokeCake, orderIcecream, restokeIcecream },
  store.dispatch
);
action.orderCake();
action.orderCake();
action.orderCake();
action.restokeCake(3);
action.orderIcecream(10);
action.restokeIcecream(43);

unsubscribe();
