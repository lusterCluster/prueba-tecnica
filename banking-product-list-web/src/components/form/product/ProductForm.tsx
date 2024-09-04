import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IProduct } from "../../../rest/productListService";
import { PATHS } from "../../../routes/main";
import TextField from "../../TextField";
import Button from "../../buttons/Button";
import { isOneYearLater } from "../../../util/date/dateValidator";
import { toDate } from "../../../util/date/dateParser";
import Snackbar from "../../Snackbar";
import useSnackbar from "../../../hooks/snackbar/useSnackbar";
import {
  ERROR_MESSAGES,
  FormErrorMessageTypes,
  ValidInputTypes,
} from "./interfaces";
import {
  getFormType,
  getHttpMethod,
  validateDateRealeseBasedOnPath,
  validateStringLength,
  validateValues,
} from "./productValidation";
import useProductService from "../../../hooks/service/useProductService";

const validInputs: ValidInputTypes = {
  id: true,
  name: true,
  description: true,
  logo: true,
  date_realese: true,
  date_revision: true,
};
const initialState: IProduct = {
  id: "",
  name: "",
  description: "",
  logo: "",
  date_release: "",
  date_revision: "",
};
const errorMessagesInitial: FormErrorMessageTypes = {
  id: " ",
  name: " ",
  description: " ",
  logo: " ",
  date_realese: " ",
  date_revision: " ",
};
const ProductForm = () => {
  const location = useLocation();
  const { requestPOST_PUTService } = useProductService();
  const { handldeCloseSnackBar, productRequestMessage, handleSnackbar } =
    useSnackbar();
  const [formData, setFormData] = useState<IProduct>(
    location.pathname === PATHS["/add-product"]
      ? initialState
      : location.pathname === PATHS["/edit-product"]
      ? location.state
      : undefined
  );
  const [isValid, setIsValid] = useState(validInputs);
  const [errorMessage, setErrorMessage] =
    useState<FormErrorMessageTypes>(errorMessagesInitial);
  const handleReset = () => {
    if (getFormType() === "edit") {
      setFormData(location.state);
    }
    setIsValid(validInputs);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsValid(validateValues(formData));
    let send = true;
    Object.values(validateValues(formData)).forEach((value, i) => {
      if (value === false) {
        switch (i) {
          case 0:
            setErrorMessage((prev) => ({ ...prev, id: "ID es requerido" }));
            break;
          case 1:
            setErrorMessage((prev) => ({
              ...prev,
              name: "Nombre es requerido",
            }));
            break;
          case 2:
            setErrorMessage((prev) => ({
              ...prev,
              description: "Descripción es requerida",
            }));
            break;
          case 3:
            setErrorMessage((prev) => ({ ...prev, logo: "Logo es requerido" }));
            break;
          case 4:
            setErrorMessage((prev) => ({
              ...prev,
              date_realese: "Fecha es requerida",
            }));
            break;
          case 5:
            setErrorMessage((prev) => ({
              ...prev,
              date_revision: "Fecha es requerida",
            }));
            break;
          default:
            break;
        }
        send = false;
      }
    });
    send = validateStringLength(formData.id, 3, 10) ? true : false;
    if (!send && getHttpMethod() === "POST" ) {
      setIsValid((prev) => ({ ...prev, id: false }));
      setErrorMessage((prev) => ({
        ...prev,
        id:
          formData.id.length < 3
            ? ERROR_MESSAGES["ID no puede ser menor a 3 caracteres"]
            : formData.id.length > 10
            ? ERROR_MESSAGES["ID no puede ser mayor a 10 caracteres"]
            : " ",
      }));
    }
    send = validateStringLength(formData.name, 5, 100) ? true : false;
    if (!send) {
      setIsValid((prev) => ({ ...prev, name: false }));
      setErrorMessage((prev) => ({
        ...prev,
        name:
          formData.name.length < 5
            ? ERROR_MESSAGES["Nombre no puede ser menor a 5 caracteres"]
            : formData.name.length > 100
            ? ERROR_MESSAGES["Nombre no puede ser mayor a 100 caracteres"]
            : " ",
      }));
    }
    send = validateStringLength(formData.description, 10, 200) ? true : false;
    if (!send) {
      setIsValid((prev) => ({ ...prev, description: false }));
      setErrorMessage((prev) => ({
        ...prev,
        description:
          formData.description.length < 10
            ? ERROR_MESSAGES["Descripción no puede ser menor a 10 caracteres"]
            : formData.description.length > 200
            ? ERROR_MESSAGES["Descripción no puede ser mayor a 200 caracteres"]
            : " ",
      }));
    }
    send = validateDateRealeseBasedOnPath(formData);

    if (!send) {
      setIsValid((prev) => ({ ...prev, date_realese: false }));
      setErrorMessage((prev) => ({
        ...prev,
        date_realese: "La Fecha debe ser igual o mayor a la fecha actual",
      }));
    }
    send = isOneYearLater(
      toDate(formData.date_release),
      toDate(formData.date_revision)
    );
    if (!send) {
      setIsValid((prev) => ({ ...prev, date_revision: false }));
      setErrorMessage((prev) => ({
        ...prev,
        date_revision:
          "La Fecha debe ser exactamente un año posterior a la fecha de liberación",
      }));
    }

    if (send) {
      try {
        const result = await requestPOST_PUTService(
          formData,
          getHttpMethod()
        ).then(() => handleSnackbar(getHttpMethod(), false));
        console.log("Producto añadido con éxito:", result);
      } catch (error) {
        handleSnackbar(getHttpMethod(), true);
      }
    } else {
      console.log("invalid inputs");
    }
  };

  return (
    <>
      <Snackbar
        onClose={handldeCloseSnackBar}
        productRequestMessage={productRequestMessage}
      />
      <div className="bg-primary text-white grid   text-[32px]">
        <div className="grid grid-cols-12 place-items-center ">
          <Link to={PATHS["/products"]}>
            <span className="material-symbols-outlined text-white">
              arrow_back
            </span>
          </Link>
          <p className="text-center col-start-5 col-span-4">
            Formulario de Registro
          </p>
        </div>
      </div>
      <div className="p-[9px] grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-[32px] md:bg-white lg:bg-white rounded-[13px] pt-10 mt-[21px] p-[9px] md:grid-cols-2 lg:grid-cols-2 grid-rows-5 place-items-center md:w-[910px] lg:w-[910px]"
        >
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.id}
            disabled={getHttpMethod() === "POST" ? false : true}
            isValid={isValid["id"]}
            type="text"
            name="id"
            value={formData.id}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.name}            
            isValid={isValid["name"]}
            type="text"
            name="name"
            value={formData.name}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.description}            
            isValid={isValid["description"]}
            type="text"
            name="description"
            value={formData.description}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.logo}            
            isValid={isValid["logo"]}
            type="text"
            name="logo"
            value={formData.logo}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.date_realese}            
            isValid={isValid["date_realese"]}
            type="date"
            name="date_release"
            value={formData.date_release}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            errorMessage={errorMessage.date_revision}            
            isValid={isValid["date_revision"]}
            type="date"
            name="date_revision"
            value={formData.date_revision}
            handleChange={handleChange}
          />
          <Button
            onClick={handleReset}
            type="reset"
            text="Reiniciar"
            color="primary"
          />
          <Button type="submit" text="Enviar" color="secondary" />
        </form>
      </div>
    </>
  );
};

export default ProductForm;
