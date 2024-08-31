import React, { useState } from "react";
import { IProduct } from "../../rest/productListService";
import { formatDate } from "../../util/date/dateParser";
import Modal from "../Modal";
import DropDown from "../DropDown/DropDown";

type Props = {
  product: IProduct;
};

const ProductMobile: React.FC<Props> = ({ product }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeMenu = () => setShowMenu(false)
  const closeModal = () => setShowModal(false)
  const handleDelete = () => {
    setShowModal(true)
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="visible sm:invisible mb-2 bg-white px-4 grid gap-6 grid-cols-6 h-[100px] w-full place-items-center">
      <Modal onClose={closeModal} id={product.id} productName={product.name} isOpen={showModal}/>
      <img
        className="bg-background w-24 h-24 rounded-full object-cover"
        src={product.logo}
        alt="logo"
      />
      <section className="flex-col gap-3 col-span-2">
        <p className="font-bold">{product.name}</p>
        <p>{product.description}</p>
      </section>
      <section className="flex-col col-span-2">
        <span className="flex-col">
          <p className="font-bold">Registrado</p>
          <p>{formatDate(product.date_release)}</p>
        </span>
        <span className="flex-col gap-3">
          <p className="font-bold">Reestructurado</p>
          <p>{formatDate(product.date_revision)}</p>
        </span>
      </section>
      <button
       onClick={toggleMenu}
      className="material-symbols-sharp  text-onSurface text-4xl">more_vert</button>
      <DropDown onClose={closeMenu}  handleDelete={handleDelete}  product={product} isOpen={showMenu} />
    </div>
  );
};

export default ProductMobile;
