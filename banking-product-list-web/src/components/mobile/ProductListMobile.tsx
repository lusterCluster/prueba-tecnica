
import MobileHeader from "../../components/mobile/MobileHeader";
import { IProduct, ProductType } from "../../rest/productListService";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";
import ProductMobile from "../../components/mobile/ProductMobile";
import { FC, useContext } from "react";
import { ProductClasses } from "../../pages/products/productClasses";
import { GlobalContext } from "../../store/context/Global";


const ProductListMobile = () => {
  const Global = useContext(GlobalContext)
  return (
    <div
      className={convertToTailwindClass(ProductClasses.productList.container)}
    >
      <MobileHeader />
      <div className="visible sm:invisible mt-[56px]"></div>
      {Global!.state.map((product: IProduct) => (
        <div key={product.id} className="visible sm:invisible mb-2 min-w-[620px] bg-white pt-[8px] px-4 grid  grid-cols-6 place-items-center">
          
          <ProductMobile product={product} />
          </div>
      ))}
    </div>
  );
};

export default ProductListMobile;
