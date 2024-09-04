import { useState } from "react";
import { ProductRequestMessageType } from "./interfaces";
import { HTTPMethods } from "../../rest/productListService";
import { buildProductRequestMessage } from "./snackbarPipelines";

type Props = {};
const productRequestMessageInitialState: ProductRequestMessageType = {
  error: false,
  isOpen: false,
  requestMessage: " ",
};
function useSnackbar() {
  const [productRequestMessage, setProductRequestError] =
    useState<ProductRequestMessageType>(productRequestMessageInitialState);
  const handleSnackbar = (method: HTTPMethods, error: boolean) => {
    setProductRequestError({
      error: error,
      isOpen: true,
      requestMessage: buildProductRequestMessage(method, error),
    });
  };
  const handldeCloseSnackBar = () =>
    setProductRequestError(productRequestMessageInitialState);
  return { handleSnackbar, handldeCloseSnackBar, productRequestMessage };
}

export default useSnackbar;
