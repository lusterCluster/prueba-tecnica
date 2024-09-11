import { ChangeEvent, FC, useContext, useState } from "react";
import { ACTIONS, ActionTypes } from "../store/reducer/interfaces";
import {
  
  IProduct,
  ProductType,
} from "../rest/productListService";
import useProductService from "../hooks/service/useProductService";
import { GlobalContext } from "../store/context/Global";



const SearchBar  = () => {
  const Global = useContext(GlobalContext)
  const [inputValue, setInputValue] = useState("");
  const [showCloseButton, setShowCloseButton] = useState(false)
  const {fetchProductList} = useProductService()
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const searchTerm = event.target.value;
    Global!.dispatch(searchTerm, ACTIONS.FILTER);
  };
  const handleOnFocus = () => { console.log("on focus"); setShowCloseButton(true)}
  const handleCleanSearch = () => {
    setInputValue("");
    fetchProductList()
      .then((products) => {
        console.log("handleCleanSearch called");
        Global!.dispatch([...products], ACTIONS.FETCH); // Llenar el estado con los productos
      }).finally(() => setShowCloseButton(false))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div
        id="container"
        className="bg-background h-[32px] w-[181px] gap-[3px] flex p-[5px] rounded-[6px]"
      >
        <span className="material-symbols-outlined text-disabled">search</span>
        <input
          onFocus={handleOnFocus}
          onChange={handleInputChange}
          value={inputValue}
          className="bg-background focus:outline-none w-[114px]"
          placeholder="Search..."
        />
{ showCloseButton &&
        <button
          onClick={handleCleanSearch}          
          className="material-symbols-outlined text-md text-disabled"
        >
          close
        </button>}
      </div>
    </>
  );
};

export default SearchBar;
