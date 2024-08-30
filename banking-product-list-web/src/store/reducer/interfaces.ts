// Define the set of valid action types for mutations
export const ACTIONS = {
  ADDED: 'ADDED',
  CHANGED: 'CHANGED',
  DELETED: 'DELETED',
  FETCH: 'FETCH',
  FILTER: 'FILTER',
  PAGINATE: 'PAGINATE'
} as const;

// Type alias for action types, derived from the ACTIONS object
export type ActionTypes = keyof typeof ACTIONS;

/**
* Represents a mutation action.
* 
* @template P - The type of the payload associated with the action.
* @property type - The type of action being performed (one of the defined action types).
* @property payload - Metadata or data associated with the mutation.
*/
export interface IAction<P = any> {
  type: ActionTypes;
  payload: P;
}

/**
* Interface for a reducer function that processes state mutations.
* 
* @template T - The type of the state that is being mutated.
* @param state - The current state that will be modified.
* @param action - An action describing what mutation is to be applied.
* @returns The new state after applying the mutation.
*/
export interface IMutation<T> {
  stateReducer: (state: StateType<T>, action: IAction) => StateType<T>;
}

/**
* Represents the state structure with keys and values where the keys are of type S.
* 
* @template S - The type of keys in the state.
* @property [key in S] - Each key in the state is of type S[keyof S], ensuring the state adheres to the defined structure.
*/
export type IState<S> = {
  [Property in keyof S]: S[keyof S];
}

/**
* Represents an array of state objects, where each state object conforms to IState<S>.
* 
* @template T - The type of keys in the state.
* @type StateType - An array of state objects, where each state object is defined by IState<T>.
* 
* Note: A type is a set of valid inputs. StateType<T> ensures that the state conforms to the defined structure.
*/
export type StateType<T> = IState<T>[];