import BankingProducts from "./pages/products/BankingProducts";
import ProvideGlobalContext from "./store/context/Global";

function App() {
  return (
    <>
      <ProvideGlobalContext>
        <BankingProducts/>
      </ProvideGlobalContext>
    </>
  );
}

export default App;
