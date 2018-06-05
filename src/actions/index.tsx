import * as constants from "../constants";

// Two types that describe what increment actions and decrement actions should look like
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

// Type (EnthusiasmAction) to describe cases where an action could be an increment or a decrement
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// These two functions actually manufacture the actions we use instead of writing out
// bulky object literals
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}
