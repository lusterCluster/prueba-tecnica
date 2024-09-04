import React, { FC } from "react";
import { ProductRequestMessageType } from "../hooks/snackbar/interfaces";

type Props = {
  productRequestMessage: ProductRequestMessageType;
  onClose: () => void;
};

const Snackbar: FC<Props> = ({ productRequestMessage, onClose }) => {
  const bgColor = productRequestMessage.error
    ? " bg-onError "
    : " bg-secondaryOnSurface ";
  return (
    <>
      {productRequestMessage.isOpen && (
        <div
          className={` ${bgColor} text-white gap-[21px] mt-1 rounded-[5px] absolute px-[13px] py-[8px] flex top-0 right-0`}
        >
          <p className="">{productRequestMessage.requestMessage}</p>
          <div className="flex justify-end">
            <button
              onClick={() => onClose()}
              className="material-symbols-outlined text-[21px] "
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
