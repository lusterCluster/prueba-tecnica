import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,  
  useEffect,  
  useState,
} from "react";
import {  
  fetchProductList,
  IProduct,
  ProductType,
} from "../../rest/productListService";
import useMutation from "../reducer/useMutation";
import { ACTIONS, ActionTypes, StateType } from "../reducer/interfaces";
import useProductService from "../../hooks/service/useProductService";
import useSnackbar from "../../hooks/snackbar/useSnackbar";


const placeholder: ProductType = [];


export const GlobalDispatchContext = createContext(null);

type ProviderProps = {
  children: React.ReactNode;
};
type GlobalType = {
  state: StateType<IProduct>
  dispatch: (payload: IProduct[] | any, type: ActionTypes) => void,
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>,
  handleFetchProductList: () => void
}

export const GlobalContext = createContext<GlobalType|null>(null);
const ProvideGlobalContext: FC<ProviderProps> = ({ children }) => {
  const { state, handleStateMutation } = useMutation<IProduct[]>(placeholder);
  const [loading, setloading] = useState(false);
  const {fetchProductList} = useProductService()
  const {handleSnackbar} = useSnackbar()
  const handleFetchProductList = () => {
    Global!.setLoading(true)
    console.log(localStorage.getItem("authorId"))      
    fetchProductList()
    .then((products) => {          
      Global!.dispatch([...products], ACTIONS.FETCH);
    })
    .finally(() => {
      Global!.setLoading(false);
    })
    .catch((error) => {
      console.error("Error:", error);
      handleSnackbar("GET", true);
    });
  }
  const Global:GlobalType = {
    state: state,
    dispatch: handleStateMutation,
    loading: loading,
    setLoading: setloading,
    handleFetchProductList: handleFetchProductList
  }
useEffect(() => {
  handleFetchProductList()
  
}, [])
  if ( Global === null || Global.loading) {
    return <>Loading ...</>;
  }
  return (
    <GlobalContext.Provider value={Global}>{children}</GlobalContext.Provider>
  );
};
export default ProvideGlobalContext;
