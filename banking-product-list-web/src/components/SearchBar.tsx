import React, { useState } from "react";
import { useGlobalContext } from "../store/context/Global";
import { ACTIONS } from "../store/reducer/interfaces";

type Props = {};

const SearchBar = (props: Props) => {
  const { state, handleStateMutation } = useGlobalContext();
  function isMatching(event: React.ChangeEvent<HTMLInputElement>, searchString: string): boolean {
    return event.target.value === searchString;
  }
  const [inputValue, setInputValue] = useState('');


  
  if (state.length === 0) {
    return (
      <div
        id="container"
        className="bg-background h-[32px] w-[181px] flex gap-2 p-1 rounded-[6px] "
      >
        <span className="material-symbols-outlined">search</span>
        <input
          className="bg-background focus:outline-none h-[27px] w-[114px]"
          placeholder="Search..."
        />
      </div>
    );
  } else {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);    
        handleStateMutation(inputValue, ACTIONS.SEARCH)
      
    };
    
      return (
        <>
          <div    
            id="container"
            className="bg-background h-[32px] w-[181px] flex gap-2 p-1 rounded-[6px] "
          >
            <span className="material-symbols-outlined">search</span>
            <input
              // onChange={(e) => handleChange(e)}
              className="bg-background focus:outline-none h-[27px] w-[114px]"
              placeholder="Search..."
            />
          </div>
        </>
      );
  }
 
};

export default SearchBar;
