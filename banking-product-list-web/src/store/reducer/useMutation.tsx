import { useReducer } from "react"
import { stateMutation } from "./mutationReducer"
import { ActionTypes } from "./interfaces"

function useMutation<T>(initialState:any)  {
  
  const [state, dispatch] = useReducer(stateMutation.stateReducer, initialState)
  
  const handleStateMutation = (payload:T | string, type:ActionTypes) => {
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