import { useReducer } from "react"
import { productMutation } from "./mutationReducer"
import { ActionTypes } from "./interfaces"


function useMutation<T>(initialState:any)  {
  
  const [state, dispatch] = useReducer(productMutation.stateReducer, initialState)
  
  const handleStateMutation = (payload:T | any, type:ActionTypes) => {
    dispatch(
      {
        type:type,
        payload:payload
      }
    )
  };
  return {state, handleStateMutation}
  
}
export default useMutation;