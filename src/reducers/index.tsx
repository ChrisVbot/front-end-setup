import { EnthusiasmAction } from "../actions";
import { StoreState } from "../index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      // we're using the object spread (...) which allows us to create a shallow copy of the state,
      // while replacing the enthusiasmLevel
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
}
