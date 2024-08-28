
import {
  IProduct,
} from "../../rest/productListService";
import ProductDesktop from "../../components/desktop/ProductDesktop";
import SearchBar from "../../components/SearchBar";
import { useGlobalContext } from "../../store/context/Global";


const ListBar = () => {
  return (
    <>
      <div className="col-span-6 w-full flex justify-between">
        <SearchBar />
        <span className="material-symbols-sharp text-4xl">add_circle</span>
      </div>
    </>
  );
};
export const HEADINGS = {
  ID: "ID",
  Logo: "Logo",
  Nombre: "Nombre",
  Descripción: "Descripción",
  "Fecha de Registro": "Fecha de Registro",
  "Fecha de Reestructuración": "Fecha de Reestructuración",
} as const;
export type HeadingTypes = keyof typeof HEADINGS;
const Header = () => {
  return (
    <div className="bg-primary text-white font-bold h-[52px] col-span-6 grid grid-cols-5 place-items-center pr-2">
      <h6>{HEADINGS.Logo}</h6>
      <h6>{HEADINGS.Nombre}</h6>
      <h6>{HEADINGS.Descripción}</h6>
      <h6>{HEADINGS["Fecha de Registro"]}</h6>
      <h6>{HEADINGS["Fecha de Reestructuración"]}</h6>
    </div>
  );
};
const ProductListDesktop = () => {
    const { state } = useGlobalContext();

  if (state.length === 0) {
    return <>Loading ...</>;
  }
  return (
    <>
      <div
        id="container"
        className="p-6 bg-white rounded-[26px] w-fit h-[850px] col-span-5"
      >
        <ListBar />
        <Header />
        <div
          id="grid"
          className="grid gap-y-2 grid-cols-6 grid-rows-12"
        >
          {state[0].map((product: IProduct) => (
            <>
              <ProductDesktop fields={product} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListDesktop;
