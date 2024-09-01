import React, { FC } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { IProduct } from "../../rest/productListService";
import { PATHS, PathTypes } from "../../routes/main";
import { PaginationTypes } from "../desktop/ProductFooterDesktop";

type Props = {
  isOpen: boolean;
  pagination: PaginationTypes;
  handleSelect: (pagination:PaginationTypes) => void;
  onClose: () => void;
};

const DropDownPagination: FC<Props> = ({
  isOpen,
  pagination,
  handleSelect,
  onClose,
}) => {
  const options = ["5", "10", "20"];
  const handleOnClick = (selectedOption:PaginationTypes) => {
    handleSelect(selectedOption)
    onClose()
  }
  return (
    <>
      {isOpen && (
        <div
          id="dropdown"
          className=" absolute  mr-[15%] z-10 text-white  bg-secondaryOnSurface divide-y divide-gray-100 rounded-lg shadow w-[55px] dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, i) => (
              <li key={i+""} >
                <button
                    key={i+""}
                  onClick={() => handleOnClick(option as PaginationTypes)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:bg-background hover:text-onSurface w-full"
                >
                  {option}
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDownPagination;
