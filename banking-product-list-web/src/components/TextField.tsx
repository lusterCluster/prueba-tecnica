import React, { FC } from "react";
import { IProduct } from "../rest/productListService";
import { HEADINGS, HeadingTypes } from "./desktop/ProductListDesktop";
import { toDate } from "../util/date/dateParser";
import { ErrorMessageTypes } from "./ProductForm";
export type FormTypes = "add" | "edit" | undefined;
type Props = {
  type: React.HTMLInputTypeAttribute;
  errorMessage: ErrorMessageTypes
  name: keyof IProduct;
  value: string;
  isValid: boolean;
  form: FormTypes;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TextField: FC<Props> = ({
  type,
  errorMessage,
  name,
  handleChange,
  value,
  isValid,
  form,
}) => {
  const translateFormNames = (): HeadingTypes | undefined => {
    switch (name) {
      case "id":
        return HEADINGS.ID;
      case "name":
        return HEADINGS.Nombre;
      case "description":
        return HEADINGS.Descripción;
      case "logo":
        return HEADINGS.Logo;
      case "date_release":
        console.log(toDate(value))
        return HEADINGS["Fecha de Registro"];
      case "date_revision":
        return HEADINGS["Fecha de Reestructuración"];
      default:
        HEADINGS.ID;
    }
  };
  return (
    <span className="flex-col">
      {isValid ? (
        <>
          <p className={` text-secondaryOnSurface text-sm`}>
            {translateFormNames()}
          </p>
          <input
            className={` border-onSurface bg-background focus:outline-secondaryOnSurface border-[0.5px] border-solid rounded-[5px] h-[40px] w-[320px] px-[9px]`}
            type={type}
            name={name}
            value={form === "add"
              ? undefined
              : name === "date_release"
              ? toDate(value)
              : name === "date_revision" ? toDate(value) : value}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p className={` text-onError text-sm`}>{translateFormNames()}</p>
          <input
            className={` border-onError  bg-background focus:outline-secondaryOnSurface border-[0.5px] border-solid rounded-[5px] h-[40px] w-[320px] px-[9px]`}
            type={type}
            name={name}
            value={
              form === "add"
              ? undefined
              : name === "date_release"
              ? toDate(value)
              : name === "date_revision" ? toDate(value) : value
            }
            onChange={handleChange}
          />
          <p className={` text-onError text-[12px] max-w-64`}>{errorMessage}</p>
        </>
      )}
    </span>
  );
};

export default TextField;
