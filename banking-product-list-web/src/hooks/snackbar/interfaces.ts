export const REQUEST_ACTIONS = {
    agregar: "agregar",
    obtener: "obtener",
    editar: "editar",
    eliminar: "eliminar",
    agregado: "agregado",  
    editado: "editado",
    eliminado: "eliminado",
  } as const;
  export type RequestActionTypes = keyof typeof REQUEST_ACTIONS;

  export type ProductRequestMessageType = {
    error: boolean;
    isOpen: boolean
    requestMessage: string;
  };