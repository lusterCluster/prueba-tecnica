import React, { FC, useContext, useState } from "react";
import DropDownPagination from "../dropdown/DropDownPagination";
import {
  ACTIONS,
  ActionTypes,
  StateType,
} from "../../store/reducer/interfaces";
import { IProduct } from "../../rest/productListService";
import { useNavigation } from "react-router-dom";
import { GlobalContext } from "../../store/context/Global";
import { BankingProductsStyles } from "../../pages/products/productClasses";

export type PaginationTypes = "5" | "10" | "20" | " ";

const ProductFooterDesktop = () => {
  const Global = useContext(GlobalContext);
  const [pagination, setPagination] = useState<PaginationTypes>(" ");
  const [showMenu, setshowMenu] = useState(false);
  const [persistedState, setPersistedState] = useState(Global!.state);
  const toggleMenu = () => setshowMenu(!showMenu);
  const closeMenu = () => setshowMenu(false);
  const handleSelect = (selectedOption: PaginationTypes) => {
    setPagination(selectedOption);
    const payload = { option: selectedOption, persistedState: persistedState };
    Global!.dispatch(payload, ACTIONS.PAGINATE);
  };
  return (
    <>
      <div
        id="desktop-productList-footer-container-flex-container"
        style={BankingProductsStyles.desktop.productList.footer.flexContainer}
      >
        <span>
          <p>{pagination} resultados</p>
        </span>
        <span className="flex pl-[13px] gap-[5px] border-[0.5px] border-primary">
          <p className="">{pagination}</p>
          <button onClick={toggleMenu} className="material-symbols-outlined">
            arrow_drop_down
          </button>
          <DropDownPagination
            handleSelect={handleSelect}
            isOpen={showMenu}
            onClose={closeMenu}
            pagination={pagination}
          />
        </span>
      </div>
    </>
  );
};

export default ProductFooterDesktop;
