import { useAppSelector, useAppDispatch } from "../../app/hooks.ts"
import { ordered, restocked } from "./cakeSlice.ts"
const CakeView = () => {
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
    const dispatch = useAppDispatch()
    return (
    <div>
        <h2>Number of cake - {numOfCakes} </h2>
        {/* @gauravkharel */}
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(2))}>Restoke Cakes</button>
    </div>
  )
}

export default CakeView