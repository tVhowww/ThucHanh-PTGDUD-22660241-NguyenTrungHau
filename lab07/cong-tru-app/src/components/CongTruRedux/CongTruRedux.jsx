import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CongTruRedux() {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const handleCong = () => {
    dispatch({ type: "CONG" });
  };

  const handleTru = () => {
    dispatch({ type: "TRU" });
  };

  return (
    <div>
      <h1>Cong tru Redux</h1>
      <button onClick={handleCong}>Tăng</button>
      <button onClick={handleTru}>Giảm</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default CongTruRedux;
