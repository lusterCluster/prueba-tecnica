import React,{ createContext, FC, useContext, useEffect, useState } from "react";
import { fetchProductList, IProduct, ProductType } from "../../rest/productListService";
import useMutation from "../reducer/useMutation";
import { ACTIONS } from "../reducer/interfaces";

const placeholder: ProductType = []


export const GlobalContext = createContext(placeholder)
const useProvideContext = () => useContext(GlobalContext)
export const useGlobalContext = () => {
    const { state, handleStateMutation } = useMutation<IProduct[]>(placeholder);  
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);
    useEffect(() => {            
        setloading(true)
        fetchProductList()
        .then((products) => {
              handleStateMutation([...products], ACTIONS.FETCH)
        }).finally(() => setloading(false))
        .catch((error) => {
          console.error("Error:", error);
          setError(true);
        })      
    }, []);
    return {state, handleStateMutation, error, setError, loading}
}
type ProviderProps = {
    children: React.ReactNode    
}
const ProvideGlobalContext:FC<ProviderProps> = ({children}) => {   
    const context = useProvideContext()
    return(
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}
export default ProvideGlobalContext