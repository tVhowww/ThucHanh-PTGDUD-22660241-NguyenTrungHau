import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cong, tru } from "../../redux-toolkit/counterSlice";

function CongTruReduxToolkit() {
  const result = useSelector((state) => state.counter.result);
  const dispatch = useDispatch();

  const handleCong = () => {
    dispatch(cong());
  };

  const handleTru = () => {
    dispatch(tru());
  };

  return (
    <div>
      <h1>Cộng trừ redux toolkit</h1>
      <button onClick={handleCong}>Tăng</button>
      <button onClick={handleTru}>Giảm</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default CongTruReduxToolkit;
