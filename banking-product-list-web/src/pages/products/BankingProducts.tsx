import ProductListDesktop from "../../components/desktop/ProductListDesktop";
import ProductListMobile from "../../components/mobile/ProductListMobile";
import Divider from "../../components/divider/Divider";
import ProductFooterDesktop from "../../components/desktop/ProductFooterDesktop";
import { BankingProductsStyles } from "./productClasses";

const BankingProducts = () => {
  
  return (
    <>
      <div className="mobile">
        <ProductListMobile />
      </div>
      <div className="desktop">
        <div
          id="container"
          className="p-6 bg-white rounded-[16px] my-[15%] w-fit col-span-5"
        >
          <ProductListDesktop />
          <div className="" style={BankingProductsStyles.desktop.productList.footer.container} >
            <Divider fullWidht={true} isActive="active" vertical={false} />
            <ProductFooterDesktop />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingProducts;
