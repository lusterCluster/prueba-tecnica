import { ProductClasses } from "../../pages/products/productClasses";
import { Link } from "react-router-dom";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";

const MobileHeader = () => {  
  return (
    <div
      className={convertToTailwindClass(
        ProductClasses.productList.mobileHeaderContainer
      )}
    >
      <div id="searchbar-portal-mobile"></div>
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
