import React, { useState } from "react";
import { IProduct } from "../../rest/productListService";
import { formatDate } from "../../util/date/dateParser";
import Modal from "../Modal";
import DropDown from "../dropdown/DropDown";
import Divider from "../divider/Divider";

type Props = {
  product: IProduct;
};

const ProductMobile: React.FC<Props> = ({ product }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeMenu = () => setShowMenu(false);
  const closeModal = () => setShowModal(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Modal
        onClose={closeModal}
        id={product.id}
        productName={product.name}
        isOpen={showModal}
      />
      <img
        className="bg-background w-[55px] h-[55px] m-[13px]  rounded-full object-cover"
        src={product.logo}
        alt="logo"
      />
      <section className="flex-col min-w-[300px] col-span-4">
        <p className="font-bold">{product.name}</p>
        <p className="text-xs">{product.description}</p>        
        <section className="flex justify-between my-[13px] col-start-2 col-span-2">
        <span className="flex-col">
          <p className="font-bold text-[14px]">Registrado</p>
          <p>{formatDate(product.date_release)}</p>
        </span>
        <span className="flex-col gap-3">
          <p className="font-bold text-[14px] ">Reestructurado</p>
          <p>{formatDate(product.date_revision)}</p>
        </span>
      </section>
      </section>      
      <section className="col-start-6 row-start-1" >
        <button
          onClick={toggleMenu}
          className="material-symbols-sharp  text-onSurface text-4xl"
        >
          more_vert
        </button>
      </section>
        <DropDown
          onClose={closeMenu}
          handleDelete={handleDelete}
          product={product}
          isOpen={showMenu}
        />
      
      
    </>
  );
};

export default ProductMobile;
