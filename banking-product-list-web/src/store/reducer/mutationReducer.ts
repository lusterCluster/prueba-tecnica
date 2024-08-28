import { ACTIONS, IAction, IMutation, StateType } from "./interfaces";

export const stateMutation: IMutation<any> = {
  stateReducer: (state: StateType<any>, action: IAction): StateType<any> => {
    switch (action.type) {
      case ACTIONS.SEARCH: {        
        const minLength = 5;
        return state.filter(item => {
          const isMatch = (field: string) => {
            for (let i = 0; i <= field.length - minLength; i++) {
              const substring = field.slice(i, i + minLength);
              if (action.payload.searchString.includes(substring)) {
                return true;
              }
            }
            return false;
          };

          return isMatch(item.name) || isMatch(item.description);
        });
      }
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


