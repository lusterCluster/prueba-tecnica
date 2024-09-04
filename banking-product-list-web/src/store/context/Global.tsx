import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import {  
  IProduct,
  ProductType,
} from "../../rest/productListService";
import useMutation from "../reducer/useMutation";
import { ACTIONS } from "../reducer/interfaces";
import useSnackbar from "../../hooks/snackbar/useSnackbar";
import { AUTHORS } from "../../hooks/service/interfaces";
import useProductService from "../../hooks/service/useProductService";

const placeholder: ProductType = [];

export const GlobalContext = createContext(placeholder);
const useProvideContext = () => useContext(GlobalContext);
export const useGlobalContext = () => {
  const { state, handleStateMutation } = useMutation<IProduct[]>(placeholder);
  const [loading, setloading] = useState(false);
  const {handleSnackbar} = useSnackbar()
const {fetchProductList} = useProductService()

useEffect(() => {
      setloading(true);
      console.log(localStorage.getItem("authorId"))
      // setAuthor(localStorage.getItem("authorId") as AuthorTypes)
      fetchProductList()
        .then((products) => {          
          handleStateMutation([...products], ACTIONS.FETCH);
        })
        .finally(() => {
          setloading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          handleSnackbar("GET", true);
        });
    
  }, []);
  return {
    state,  
    handleStateMutation,    
    loading,
    setloading
  };
};
type ProviderProps = {
  children: React.ReactNode;
};
const ProvideGlobalContext: FC<ProviderProps> = ({ children }) => {
  const context = useProvideContext();
  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
export default ProvideGlobalContext;
