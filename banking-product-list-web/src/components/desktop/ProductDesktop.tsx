import React from "react";
import { IProduct } from "../../rest/productListService";
import { formatDate } from "../../util/date/dateParser";

type Props = {
  fields: IProduct;
};

const ProductDesktop: React.FC<Props> = ({ fields }) => {
  return (
    <div className="grid grid-cols-12 col-span-6 place-items-center border-2 border-solid border-onSurface">
      <img
        className="bg-background col-span-3 w-24 h-24 rounded-full object-cover col-start-1"
        src={fields.logo}
        alt="logo"
      />
      <div>{fields.name}</div>
      <div className="col-start-6 col-span-2">{fields.description}</div>
      <p className="col-start-9 ">{formatDate(fields.date_release)}</p>
      <p className="col-start-11">{formatDate(fields.date_revision)}</p>
      <span className="material-symbols-outlined text-onSurface text-4xl">more_vert</span>
    </div>
  );
};

export default ProductDesktop;
