import { createStore } from "redux";

const initialState = { result: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "CONG":
      return { ...state, result: state.result + 1 };
    case "TRU":
      return { ...state, result: state.result - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
