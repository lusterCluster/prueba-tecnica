import { IProduct, ProductType } from "../../rest/productListService";
import { ACTIONS, IAction, IMutation, StateType } from "./interfaces";

export const productMutation: IMutation<IProduct> = {
  stateReducer: (
    state: StateType<IProduct>,
    action: IAction
  ): StateType<IProduct> => {
    switch (action.type) {
      case ACTIONS.FETCH:
        return action.payload;
      case ACTIONS.ADDED:
        return [...state, action.payload];
      case ACTIONS.CHANGED:
        return state.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      case ACTIONS.DELETED:
        return state.filter((product) => product.id !== action.payload.id);
      case ACTIONS.FILTER:
        const filteredState = state.filter((product) => {
          const isMatch = () =>
            product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            product.date_release
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            product.date_revision
              .toLowerCase()
              .includes(action.payload.toLowerCase());

          return isMatch();
        });

        // Si no hay coincidencias, devolver todo el estado sin filtrar
        return filteredState.length > 0 ? filteredState : state;
      case ACTIONS.PAGINATE:
        if (action.payload > state.length) {
          return state;
        }
        return state.slice(0, action.payload);
      default:
        return state;
    }
  },
};
