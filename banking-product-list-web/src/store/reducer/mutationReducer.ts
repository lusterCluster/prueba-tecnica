import { ACTIONS, IAction, IMutation, StateType } from "./interfaces";

export const stateMutation: IMutation<any> = {
  stateReducer: (state: StateType<any>, action: IAction): StateType<any> => {
    switch (action.type) {
      case ACTIONS.ADDED:
        return [...state, action.payload];
      case ACTIONS.CHANGED:
        return state.map(item => item.id === action.payload.id ? action.payload : item);
      case ACTIONS.DELETED:
        return state.filter(item => item.id !== action.payload.id);
      default:
        return state;
    }
  }
};


