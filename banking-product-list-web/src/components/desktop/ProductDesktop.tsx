import React, { useState } from "react";
import { IProduct } from "../../rest/productListService";
import { formatDate } from "../../util/date/dateParser";
import DropDown from "../DropDown/DropDown";
import Modal from "../Modal";
type Props = {
  product: IProduct;
};
const ProductDesktop: React.FC<Props> = ({ product }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => setShowMenu(false)
  const closeModal = () => setShowModal(false)
  const handleDelete = () => {
    setShowModal(true)
  }
  return (

    
    <div className="grid grid-cols-12 col-span-6 place-items-center border-[0.5px] border-solid border-onSurface">
      <Modal onClose={closeModal} id={product.id} productName={product.name} isOpen={showModal}/>
      <img
        className="bg-background my-2 col-span-3 w-[72px] h-[72px] rounded-full object-cover col-start-1"
        src={product.logo}
        alt="logo"
      />
      <div>{product.name}</div>
      <div className="col-start-6 col-span-2">{product.description}</div>
      <p className="col-start-9 ">{formatDate(product.date_release)}</p>
      <p className="col-start-11">{formatDate(product.date_revision)}</p>
      <div className="relative inline-block">
        <button
          onClick={toggleMenu}
          className="material-symbols-outlined text-onSurface text-4xl"
        >
          more_vert
        </button>
        <DropDown onClose={closeMenu}  handleDelete={handleDelete}  product={product} isOpen={showMenu} />
      </div>
    </div>
  );
};

export default ProductDesktop;
