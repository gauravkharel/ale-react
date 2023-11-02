import {store} from './app/store.js'
import { cakeActions } from "./features/cake/cakeSlice.js";
import { icecreamActions } from './features/icecream/icecreamSlice.js';
import { fetchUsers } from './features/user/userSlice.js';
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=> {
    console.log('updated state', store.getState())
})
store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(cakeActions.restocked(21))

// unsubscribe()