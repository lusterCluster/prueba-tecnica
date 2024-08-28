import React, { useState } from "react";
import { IProduct } from "../../rest/productListService";
import { useGlobalContext } from "../../store/context/Global";
import { convertToISOFormat } from "../../util/date/dateParser";
import TextField from "../../components/TextField";
import useMutation from "../../store/reducer/useMutation";
import { ACTIONS } from "../../store/reducer/interfaces";
import Button from "../../components/buttons/Button";

type Props = {};
const validInputs = {
  id: true,
  name: true,
  description: true,
  logo:true,
  dateRealese: true,
  deateRenew: true
}
const AddProduct = (props: Props) => {  
  const [formData, setFormData] = useState<IProduct>({} as IProduct);  
  const [isValid, setIsValid] = useState(validInputs)
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if(value === undefined || value ==="") {
      setIsValid(prev => ({...prev, [name]: false}))
      return 
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
        
  };

  return (
    <>
          <div className="bg-primary text-white grid text-[32px]" >

          <p className="text-center" >Formulario de Registro</p>
          </div>
        <div className="p-[9px] grid place-items-center">
      <form onSubmit={handleSubmit} className="grid gap-[32px] mt-[21px] p-[9px] md:grid-cols-2 lg:grid-cols-2 grid-rows-6 place-items-center md:w-[910px] lg:w-[910px]">
        <TextField
          isValid={isValid["id"]}
          type="text"
          _name="ID"
          value={formData.id}
          handleChange={handleChange}
        />
        <TextField
          isValid={isValid["name"]}
          type="text"
          _name="Nombre"
          value={formData.name}
          handleChange={handleChange}
        />
        <TextField
          isValid={isValid["description"]}
          type="text"
          _name="Descripción"
          value={formData.description}
          handleChange={handleChange}
        />
        <TextField
          isValid={isValid["logo"]}
          type="text"
          _name="Logo"
          value={formData.logo}
          handleChange={handleChange}
        />
        <TextField
          isValid={isValid["dateRealese"]}
          type="date"
          _name="Fecha de Registro"
          value={formData.date_release}
          handleChange={handleChange}
        />
        <TextField
          isValid={isValid["deateRenew"]}
          type="date"
          _name="Fecha de Reestructuración"
          value={formData.date_revision}
          handleChange={handleChange}
        />
      <Button type="reset" text="Reiniciar" color="primary" />
      <Button type="submit" text="Enviar" color="secondary" />
      </form>
        </div>
    </>
      
  );
};

export default AddProduct;
