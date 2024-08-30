
import MobileHeader from "../../components/mobile/MobileHeader";
import { IProduct, ProductType } from "../../rest/productListService";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";
import ProductMobile from "../../components/mobile/ProductMobile";
import { FC } from "react";
import { ProductClasses } from "../../pages/products/productClasses";

type Props = {
  productList: ProductType;
};

const ProductListMobile: FC<Props> = ({ productList }) => {
  return (
    <div
      className={convertToTailwindClass(ProductClasses.productList.container)}
    >
      <MobileHeader />
      <div className="visible sm:invisible mt-[56px]"></div>
      {productList.map((product: IProduct) => (
        <ProductMobile fields={product} />
      ))}
    </div>
  );
};

export default ProductListMobile;
