import React, { FC } from "react";
import { IProduct } from "../rest/productListService";
import { HeadingTypes } from "./desktop/ProductListDesktop";
import { convertToISOFormat, formatDate, toDate } from "../util/date/dateParser";
export type FormTypes = "add"|"edit" | undefined
type Props = {
  type: React.HTMLInputTypeAttribute;
  name: keyof IProduct;
  value: string;
  isValid: boolean;
  form: FormTypes
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TextField: FC<Props> = ({ type, name, handleChange, value, isValid, form }) => {
  
  return (
    <span className="flex-col">
      {isValid ? (
        <>
          <p className={` text-secondaryOnSurface text-sm`}>{name}</p>
          <input
            className={` border-onSurface bg-background focus:outline-secondaryOnSurface border-[0.5px] border-solid rounded-[5px] h-[40px] w-[320px] px-[9px]`}
            type={type}
            name={name}
            value={form === "add" ? undefined : value}
            onChange={handleChange}
          />          
        </>
      ) : (
        <>
            <p className={` text-onError text-sm`}>{name}</p>
          <input
            className={` border-onError  bg-background focus:outline-secondaryOnSurface border-[0.5px] border-solid rounded-[5px] h-[40px] w-[320px] px-[9px]`}
            type={type}
            name={name}
            value={form === "add" ? undefined : name === "date_release" ? toDate(value) : value}
            onChange={handleChange}
          />
          <p className={` text-onError `}>{"Este campo es requerido"}</p>
        </>
      )}
    </span>
  );
};

export default TextField;
