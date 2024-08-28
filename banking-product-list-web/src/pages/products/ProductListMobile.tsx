import { ProductClasses } from "./productClasses";
import MobileHeader from "../../components/mobile/MobileHeader";
import {
  IProduct,
  
} from "../../rest/productListService";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";
import ProductMobile from "../../components/mobile/ProductMobile";
import { useGlobalContext } from "../../store/context/Global";


const ProductListMobile = () => {  
const {state} = useGlobalContext()
  if (state.length === 0) {
    return <>Loading ...</>;
  }
  return (
    <div
      className={convertToTailwindClass(ProductClasses.productList.container)}
    >
      <MobileHeader />
      <div className="visible sm:invisible mt-[56px]"></div>
      {state[0].map((product: IProduct) => (
        <ProductMobile fields={product} />
      ))}
    </div>
  );
};

export default ProductListMobile;
