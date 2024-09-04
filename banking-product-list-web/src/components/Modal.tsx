import { FC } from "react";
import Button from "./buttons/Button";
import { deleteProduct } from "../rest/productListService";

import Snackbar from "./Snackbar";
import useSnackbar from "../hooks/snackbar/useSnackbar";

type Props = {
  isOpen: boolean;
  productName: string;
  id: string;
  onClose: () => void;
};

const Modal: FC<Props> = ({ isOpen, productName, onClose, id }) => {
  const { handleSnackbar, handldeCloseSnackBar, productRequestMessage } =
    useSnackbar();
  const handleDelete = async () => {
    try {
      await deleteProduct(id).then(() => {
        handleSnackbar("DELETE", false);
        onClose();
      });
    } catch (error) {
      handleSnackbar("DELETE", true);
      onClose();
    }
  };
  return (
    <>
      <Snackbar
        onClose={handldeCloseSnackBar}
        productRequestMessage={productRequestMessage}
      />
      {isOpen && (
        <div className="fixed z-[1] left-0 top-0 w-full h-full bg-[rgb(0,0,0)] bg-[rgb(0,0,0,0.4)] ">
          <div className="bg-primary max-w-[1020px] h-[210px] mt-[15%] mx-[21%] p-[20px] border-solid border-[1px] border-background">
            <span className="flex-col justify-center  ">
              <p className="text-[16px] mb-[55px] text-center text-white">
                ¿Estás seguro de eliminar el producto {productName}{" "}
              </p>
              <div className="flex justify-center ">
                <Button
                  onClick={onClose}
                  color="primary"
                  text="Cancelar"
                  type="button"
                />
                <Button
                  onClick={handleDelete}
                  color="secondary"
                  text="Confirmar"
                  type="button"
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
