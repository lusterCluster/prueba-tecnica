import { ProductClasses } from "../../pages/products/productClasses";
import { Link } from "react-router-dom";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";
import SearchBar from "../SearchBar";

const MobileHeader = () => {  
  return (
    <div
      className={convertToTailwindClass(
        ProductClasses.productList.mobileHeaderContainer
      )}
    >
      <SearchBar/>
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
