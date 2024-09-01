import { useGlobalContext } from "../../store/context/Global";
import ProductListDesktop from "../../components/desktop/ProductListDesktop";
import { createPortal } from "react-dom";
import SearchBar from "../../components/SearchBar";
import ProductListMobile from "../../components/mobile/ProductListMobile";
import Divider from "../../components/divider/Divider";
import ProductFooterDesktop from "../../components/desktop/ProductFooterDesktop";

const BankingProducts = () => {
  const { state, handleStateMutation, loading } = useGlobalContext();
  if (loading) {
    return <>Loading ...</>;
  }
  return (
    <>
      <div className="mobile">
        {createPortal(
          <SearchBar state={state} handleStateMutation={handleStateMutation} />,
          document.getElementById("searchbar-portal-mobile") ?? document.body
        )}
        <ProductListMobile productList={state} />
      </div>
      <div className="desktop">
        {createPortal(
          <SearchBar state={state} handleStateMutation={handleStateMutation} />,
          document.getElementById("searchbar-portal") ?? document.body
        )}
        <div
          id="container"
          className="p-6 bg-white rounded-[16px] my-[15%] w-fit col-span-5"
        >
          <ProductListDesktop productList={state} />
          <div className="col-span-5 my-[21px]">
            <Divider fullWidht={true} isActive="active" vertical={false} />
            <ProductFooterDesktop state={state} handleStateMutation={handleStateMutation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingProducts;
