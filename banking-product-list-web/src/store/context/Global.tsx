import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchProductList,
  HTTPMethods,
  IProduct,
  ProductType,
} from "../../rest/productListService";
import useMutation from "../reducer/useMutation";
import { ACTIONS } from "../reducer/interfaces";

const placeholder: ProductType = [];
const REQUEST_ACTIONS = {
  agregar: "agregar",
  obtener: "obtener",
  editar: "editar",
  eliminar: "eliminar",
  agregado: "agregado",  
  editado: "editado",
  eliminado: "eliminado",
} as const;
type RequestActionTypes = keyof typeof REQUEST_ACTIONS;
const getRequestAction = (
  method: HTTPMethods,
  error:boolean
): RequestActionTypes | undefined => {
    if(error) {
        return method === "GET"
          ? "obtener"
          : method === "POST"
          ? "agregar"
          : method === "PUT"
          ? "editar"
          : method === "DELETE"
          ? "eliminar"
          : undefined;
    } else {
      return method === "POST"
    ? "agregado"
    : method === "PUT"
    ? "editado"
    : method === "DELETE"
    ? "eliminado"
    : undefined;
    }
}
const buildProductRequestMessage = (method: HTTPMethods, error: boolean) => {
  if (error) {
    return "Ocurrio un error al " + getRequestAction(method, error) + " el producto.";
  } else {
    return "El producto fue " + getRequestAction(method, error) + " correctamente." 
  }
};
export type ProductRequestMessageType = {
  error: boolean;
  isOpen: boolean
  requestMessage: string;
};

const productRequestMessageInitialState: ProductRequestMessageType = {
  error: false,
  isOpen:false,
  requestMessage: " ",
};
export const GlobalContext = createContext(placeholder);
const useProvideContext = () => useContext(GlobalContext);
export const useGlobalContext = () => {
  const { state, handleStateMutation } = useMutation<IProduct[]>(placeholder);
  const [productRequestMessage, setProductRequestError] =
    useState<ProductRequestMessageType>(productRequestMessageInitialState);
  const handleProductRequestMessage = (method: HTTPMethods , error:boolean) => {    
    setProductRequestError({
      error: error,
      isOpen:true,
      requestMessage: buildProductRequestMessage(method, error),
    });            
  };
  const handldeCloseSnackBar = () => setProductRequestError(productRequestMessageInitialState)
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetchProductList()
      .then((products) => {
        handleStateMutation([...products], ACTIONS.FETCH);
      })
      .finally(() => {
        setloading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        handleProductRequestMessage("GET", true);
      });
  }, []);
  return {
    state,
    handleStateMutation,
    handleProductRequestMessage,
    handldeCloseSnackBar,
    productRequestMessage,
    loading,
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
