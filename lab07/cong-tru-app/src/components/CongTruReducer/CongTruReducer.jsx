import React, { useReducer } from "react";

function CongTruReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CONG":
        return { ...state, result: state.result + action.payload };
      case "TRU":
        return { ...state, result: state.result - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { result: 0 });
  const { result } = state;

  return (
    <div>
      <h1>Cong Tru Reducer</h1>
      <p>Result: {result}</p>
      <button onClick={() => dispatch({ type: "CONG", payload: 1 })}>
        Cong
      </button>
      <button onClick={() => dispatch({ type: "TRU", payload: 1 })}>Tru</button>
    </div>
  );
}

export default CongTruReducer;
