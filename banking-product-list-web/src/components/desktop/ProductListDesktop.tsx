import { IProduct, ProductType } from "../../rest/productListService";
import { PATHS } from "../../routes/main";
import ProductDesktop from "./ProductDesktop";
import { FC } from "react";
import { Link } from "react-router-dom";

const ListBar = () => {
  return (
    <>
      <div className="col-span-6 w-full flex justify-between">
        <span className="flex gap-[13px]">
            <div id="searchbar-portal"></div>
          <Link to={PATHS["/home"]}>
          <span className="material-symbols-sharp text-primary text-[34px] ">
            home
          </span>
          </Link>
        </span>
        <Link to={"/add-product"}>
          <p className="material-symbols-sharp  text-primary text-4xl">
            add_circle
          </p>
        </Link>
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
type Props = {
  productList: ProductType;
};
const ProductListDesktop: FC<Props> = ({ productList }) => {
  return (
    <>
      <ListBar />
      <Header />
      <div id="grid" className="grid gap-y-2 grid-cols-6 ">
        {productList.map((product: IProduct) => (
          <div
            key={product.id}
            className="grid grid-cols-12 col-span-6 place-items-center border-[0.5px] border-solid border-onSurface"
          >
            <ProductDesktop product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListDesktop;
