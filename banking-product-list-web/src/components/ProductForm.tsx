import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { IProduct, requestPOST_PUTService } from "../rest/productListService";
import { PATHS } from "../routes/main";
import TextField, { FormTypes } from "./TextField";
import Button from "./buttons/Button";
import { isDateGreaterOrEqual, isOneYearLater } from "../util/date/dateValidator";

type Props = {};
type IValidInputs = {
  id: boolean;
  name: boolean;
  description: boolean;
  logo: boolean;
  date_realese: boolean;
  date_revision: boolean;
};
const validInputs: IValidInputs = {
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

const ProductForm = (props: Props) => {
  const location = useLocation();

  const [formData, setFormData] = useState<IProduct>(
    location.pathname === PATHS["/add-product"]
      ? initialState
      : location.pathname === PATHS["/edit-product"]
      ? location.state
      : undefined
  );
  const [isValid, setIsValid] = useState(validInputs);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleReset = () => setIsValid(validInputs)
  const validateValues = (inputValues: IProduct): IValidInputs => {
    return {
      id: Boolean(inputValues.id),
      name: Boolean(inputValues.name),
      description: Boolean(inputValues.description),
      logo: Boolean(inputValues.logo),
      date_realese: Boolean(inputValues.date_release),
      date_revision: Boolean(inputValues.date_revision),
    };
  };
  function validateStringLength(str: string, minLength: number, maxLength: number): boolean {
    const length = str.length;
    return length > minLength && length < maxLength;
  }
  const getFormType = ():FormTypes =>
    location.pathname === PATHS["/add-product"]
      ? "add"
      : location.pathname === PATHS["/edit-product"]
      ? "edit"
      : undefined;
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
    const validation = validateValues(formData);    
    setIsValid(validation);
    let send = false;
    Object.values(validation).forEach((value, i) => {
      if (value === true) {
        send = true;
      }      
    });
    send = validateStringLength(formData.id, 3, 10) ? true:false
    if (!send) {
        setIsValid(prev=> ({...prev, id:false}))
    }
    send = validateStringLength(formData.name, 5, 100) ? true:false
    if (!send) {
        setIsValid(prev=> ({...prev, name:false}))
    }
    send = validateStringLength(formData.description, 10, 200) ? true:false
    if (!send) {
        setIsValid(prev=> ({...prev, description:false}))
    }
    send = isDateGreaterOrEqual(formData.date_release)
    if (!send) {
        setIsValid(prev=> ({...prev, date_realese:false}))
    }
    send = isOneYearLater(formData.date_release, formData.date_revision)
    if (!send) {
        setIsValid(prev=> ({...prev, date_revision:false}))
    }

    if (send) {
      try {        
        const result = await requestPOST_PUTService(
          formData,
          location.pathname === PATHS["/add-product"]
            ? "POST"
            : location.pathname === PATHS["/edit-product"]
            ? "PUT"
            : undefined
        );
        console.log("Producto añadido con éxito:", result);
      } catch (error) {
        console.error("Error al añadir el producto:", error);
        setErrorMessage("Ocurrió un error al añadir el producto.");
      }
    } else {
      console.log("invalid inputs");
    }
  };

  return (
    <>
      <div className="bg-primary text-white grid text-[32px]">
        <p className="text-center">Formulario de Registro</p>
      </div>
      <div className="p-[9px] grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-[32px] mt-[21px] p-[9px] md:grid-cols-2 lg:grid-cols-2 grid-rows-6 place-items-center md:w-[910px] lg:w-[910px]"
        >
          <TextField
            form={getFormType()}
            isValid={isValid["id"]}
            type="text"
            name="id"
            value={formData.id}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            isValid={isValid["name"]}
            type="text"
            name="name"
            value={formData.name}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            isValid={isValid["description"]}
            type="text"
            name="description"
            value={formData.description}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            isValid={isValid["logo"]}
            type="text"
            name="logo"
            value={formData.logo}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            isValid={isValid["date_realese"]}
            type="date"
            name="date_release"
            value={formData.date_release}
            handleChange={handleChange}
          />
          <TextField
            form={getFormType()}
            isValid={isValid["date_revision"]}
            type="date"
            name="date_revision"
            value={formData.date_revision}
            handleChange={handleChange}
          />
          <Button onClick={handleReset} type="reset" text="Reiniciar" color="primary" />
          <Button type="submit" text="Enviar" color="secondary" />
        </form>
      </div>
    </>
  );
};

export default ProductForm;
