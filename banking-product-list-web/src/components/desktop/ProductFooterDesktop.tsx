import React, { FC, useState } from "react";
import DropDownPagination from "../DropDown/DropDownPagination";
import { ACTIONS, ActionTypes } from "../../store/reducer/interfaces";

export type PaginationTypes = "5" |"10" |"20" 
type Props = {
    handleStateMutation:  (payload: string, type: ActionTypes) => void
};

const ProductFooterDesktop:FC<Props> = ({handleStateMutation}) => {
    const [pagination, setPagination] = useState<PaginationTypes>("5")
    const [showMenu, setshowMenu] = useState(false)
    const toggleMenu = () => setshowMenu(!showMenu)
    const closeMenu = () => setshowMenu(false)
    const handleSelect = (selectedOption: PaginationTypes) => {
        setPagination(selectedOption); 
        handleStateMutation(selectedOption, ACTIONS.PAGINATE)
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
