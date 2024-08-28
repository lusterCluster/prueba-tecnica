import ProductListDesktop from "./pages/products/ProductListDesktop";
import ProductListMobile from "./pages/products/ProductListMobile";
import ProvideGlobalContext from "./store/context/Global";

function App() {
  return (
    <>
      <ProvideGlobalContext>
        <div className="mobile">
          <ProductListMobile />
        </div>
        <div className="desktop">
          <ProductListDesktop />
        </div>
      </ProvideGlobalContext>
    </>
  );
}

export default App;
