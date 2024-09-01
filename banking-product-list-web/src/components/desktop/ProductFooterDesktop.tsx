import React, { FC, useState } from "react";
import DropDownPagination from "../DropDown/DropDownPagination";
import { ACTIONS, ActionTypes, StateType } from "../../store/reducer/interfaces";
import { IProduct } from "../../rest/productListService";
import { useNavigation } from "react-router-dom";

export type PaginationTypes = "5" |"10" |"20" | " "
type Props = {
    handleStateMutation:  (payload: any, type: ActionTypes) => void
    state: StateType<IProduct>
};

const ProductFooterDesktop:FC<Props> = ({handleStateMutation, state}) => {
    const [pagination, setPagination] = useState<PaginationTypes>(" ")
    const [showMenu, setshowMenu] = useState(false)
    const [persistedState, setPersistedState] = useState(state)
    const toggleMenu = () => setshowMenu(!showMenu)
    const closeMenu = () => setshowMenu(false)
    const handleSelect = (selectedOption: PaginationTypes) => {
        setPagination(selectedOption); 
        const payload = {option: selectedOption, persistedState: persistedState}
        handleStateMutation(payload, ACTIONS.PAGINATE)
      };
  return (
    <>
      <div className=" col-span-5 flex justify-between">
        <span>
          <p>{pagination} resultados</p>
        </span>
        <span className="flex pl-[13px] gap-[5px] border-[0.5px] border-primary">
          <p className="">{pagination}</p>
          <button onClick={toggleMenu} className="material-symbols-outlined">arrow_drop_down</button>
          <DropDownPagination handleSelect={handleSelect} isOpen={showMenu} onClose={closeMenu} pagination={pagination}/>
        </span>
      </div>
    </>
  );
};

export default ProductFooterDesktop;
