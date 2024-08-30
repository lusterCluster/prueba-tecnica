import { ChangeEvent, FC, useState } from "react";
import { ACTIONS, ActionTypes } from "../store/reducer/interfaces";
import { fetchProductList, IProduct, ProductType } from "../rest/productListService";

type Props = {
  state: ProductType;
  handleStateMutation: (
    payload: string | IProduct[],
    type: ActionTypes
  ) => void;
};

const SearchBar: FC<Props> = ({ handleStateMutation }) => {
  
const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    const searchTerm = event.target.value;
    handleStateMutation(searchTerm, ACTIONS.FILTER);
  };
  
  const handleCleanSearch = () => {
    setInputValue("")
    fetchProductList()
      .then((products) => {
        console.log("handleCleanSearch called");
        handleStateMutation([...products], ACTIONS.FETCH); // Llenar el estado con los productos
      })
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
          onChange={handleInputChange}          
          value={inputValue}
          className="bg-background focus:outline-none w-[114px]"
          placeholder="Search..."
        />
        
          <button
            onClick={handleCleanSearch}
            className="material-symbols-outlined text-md text-disabled"
          >
            close
          </button>
        
      </div>
    </>
  );
};

export default SearchBar;