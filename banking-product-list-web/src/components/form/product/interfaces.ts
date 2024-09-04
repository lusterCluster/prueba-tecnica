export type ValidInputTypes = {
    id: boolean;
    name: boolean;
    description: boolean;
    logo: boolean;
    date_realese: boolean;
    date_revision: boolean;
  };
 export const ERROR_MESSAGES = {
    "ID repetido": "ID repetido",
    "ID es requerido": "ID es requerido",
    "ID no puede ser menor a 3 caracteres":
      "ID no puede ser menor a 3 caracteres",
    "ID no puede ser mayor a 10 caracteres":
      "ID no puede ser mayor a 10 caracteres",
    "Nombre es requerido": "Nombre es requerido",
    "Nombre no puede ser menor a 5 caracteres":
      "Nombre no puede ser menor a 5 caracteres",
    "Nombre no puede ser mayor a 100 caracteres":
      "Nombre no puede ser mayor a 100 caracteres",
    "Descripción es requerida": "Descripción es requerido",
    "Descripción no puede ser menor a 10 caracteres":
      "Descripción no puede ser menor a 10 caracteres",
    "Descripción no puede ser mayor a 200 caracteres":
      "Descripción no puede ser mayor a 200 caracteres",
    "Logo es requerido": "Logo es requerido",
    "Fecha es requerida": "Fecha es requerido",
    "La Fecha debe ser igual o mayor a la fecha actual":
      "La Fecha debe ser igual o mayor a la fecha actual",
    "La Fecha debe ser exactamente un año posterior a la fecha de liberación":
      "La Fecha debe ser exactamente un año posterior a la fecha de liberación",
    " ": " ",
  } as const;
  export type ErrorMessageTypes = keyof typeof ERROR_MESSAGES;
  export type FormErrorMessageTypes = {
    id: ErrorMessageTypes;
    name: ErrorMessageTypes;
    description: ErrorMessageTypes;
    logo: ErrorMessageTypes;
    date_realese: ErrorMessageTypes;
    date_revision: ErrorMessageTypes;
  };