import { IProduct } from "../../../rest/productListService";
import { PATHS } from "../../../routes/main";
import { toDate } from "../../../util/date/dateParser";
import { isDateGreaterOrEqual } from "../../../util/date/dateValidator";
import { FormTypes } from "../../TextField";
import { ValidInputTypes } from "./interfaces";

export const validateValues = (inputValues: IProduct): ValidInputTypes => {
    return {
      id: Boolean(inputValues.id),
      name: Boolean(inputValues.name),
      description: Boolean(inputValues.description),
      logo: Boolean(inputValues.logo),
      date_realese: Boolean(inputValues.date_release),
      date_revision: Boolean(inputValues.date_revision),
    };
  };
 export function validateStringLength(
    str: string,
    minLength: number,
    maxLength: number
  ): boolean {    
    return str.length > minLength && str.length < maxLength;
  }
  export const validateDateRealeseBasedOnPath = (formData:IProduct) =>
    location.pathname === PATHS["/add-product"]
      ? isDateGreaterOrEqual(toDate(formData.date_release))
      : location.pathname === PATHS["/edit-product"]
      ? true
      : true;
  export const getHttpMethod = () =>
    location.pathname === PATHS["/add-product"]
      ? "POST"
      : location.pathname === PATHS["/edit-product"]
      ? "PUT"
      : "POST";
  export const getFormType = (): FormTypes =>
    location.pathname === PATHS["/add-product"]
      ? "add"
      : location.pathname === PATHS["/edit-product"]
      ? "edit"
      : undefined;
