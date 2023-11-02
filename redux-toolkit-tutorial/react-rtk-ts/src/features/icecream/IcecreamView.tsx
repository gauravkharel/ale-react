import { useAppDispatch, useAppSelector } from "../../app/hooks.ts"
import { ordered, restocked } from "./icecreamSlice.ts"
import { useState } from "react"

const IcecreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of icecream - {numOfIcecream} </h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(restocked(value))}>Restoke icecreams</button>
    </div>
  )
}

export default IcecreamView