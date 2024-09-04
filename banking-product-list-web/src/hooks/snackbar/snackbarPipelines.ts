import { HTTPMethods } from "../../rest/productListService";
import {  RequestActionTypes } from "./interfaces";

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
  export const buildProductRequestMessage = (method: HTTPMethods, error: boolean) => {
    if (error) {
      return "Ocurrio un error al " + getRequestAction(method, error) + " el producto.";
    } else {
      return "El producto fue " + getRequestAction(method, error) + " correctamente." 
    }
  };
  
  
  