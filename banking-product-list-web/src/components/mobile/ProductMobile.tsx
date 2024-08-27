import React from "react";
import { IProduct } from "../../rest/productListService";
import { formatDate } from "../../util/date/dateParser";

type Props = {
  fields: IProduct;
};

const ProductMobile: React.FC<Props> = ({ fields }) => {
  return (
    <div className="visible sm:invisible mb-2 bg-white px-4 grid gap-6 grid-cols-6 h-[100px] w-full place-items-center">
      <img
        className="bg-background w-24 h-24 rounded-full object-cover"
        src={fields.logo}
        alt="logo"
      />
      <section className="flex-col gap-3 col-span-2">
        <p className="font-bold">{fields.name}</p>
        <p>{fields.description}</p>
      </section>
      <section className="flex-col col-span-2">
        <span className="flex-col" >
          <p className="font-bold">Registrado</p>
          <p>{formatDate(fields.date_release)}</p>
        </span>
      <span className="flex-col gap-3">
        <p className="font-bold">Reestructurado</p>
        <p>{formatDate(fields.date_revision)}</p>
      </span>
      </section>
      <span className="material-symbols-sharp text-4xl">more_vert</span>
    </div>
  );
};

export default ProductMobile;
