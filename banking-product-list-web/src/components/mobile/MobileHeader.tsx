import React from "react";
import useTailwindClassConverter from "../../hooks/tailwind/useTailwindConverter";
import { ProductClasses } from "../../pages/products/productClasses";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const MobileHeader = () => {  
  return (
    <div
      className={useTailwindClassConverter(
        ProductClasses.productList.mobileHeaderContainer
      )}
    >
      <SearchBar />
      <Link to={"/add-product"}>
        <p          
          className="material-symbols-sharp text-[24px] text-white stretc"
        >
          add_circle
        </p>
      </Link>
    </div>
  );
};

export default MobileHeader;
