import { useState } from "react";
import "./Calculator.css";
export default function BaiTap1() {
  var [a, setA] = useState(0);
  var [b, setB] = useState(0);
  var [operator, setOperator] = useState("");
  var [result, setResult] = useState(0);

  function handleChangeA(e) {
    setA(e.target.value);
  }
  function handleChangeB(e) {
    setB(e.target.value);
  }

  function handleClick() {
    if (operator == "+") {
      setResult(parseInt(a) + parseInt(b));
    } else if (operator == "-") {
      setResult(parseInt(a) - parseInt(b));
    } else if (operator == "*") {
      setResult(parseInt(a) * parseInt(b));
    } else if (operator == "/") {
      setResult(parseInt(a) / parseInt(b));
    }
  }

  function handleRadioChange(e) {
    setOperator(e.target.value);
  }

  return (
    <div className="wrapper">
      <h1 id="heading">Calculator</h1>
      <input
        className="input"
        onChange={handleChangeA}
        placeholder="input a"
        type="text"
      />
      <br />
      <input
        className="input"
        onChange={handleChangeB}
        placeholder="input b"
        type="text"
      />
      <br />
      <label className="radioWrapper">
        <input
          className="radioButton"
          value="+"
          onChange={handleRadioChange}
          type="radio"
          name="group"
          selected
        />{" "}
        <span>Cộng (+)</span>
      </label>
      <label className="radioWrapper">
        <input
          className="radioButton"
          value="-"
          onChange={handleRadioChange}
          type="radio"
          name="group"
        />{" "}
        <span>Trừ (-)</span>
      </label>
      <label className="radioWrapper">
        <input
          className="radioButton"
          value="*"
          onChange={handleRadioChange}
          type="radio"
          name="group"
        />{" "}
        <span>Nhân (*)</span>
      </label>
      <label className="radioWrapper">
        <input
          className="radioButton"
          value="/"
          onChange={handleRadioChange}
          type="radio"
          name="group"
        />{" "}
        <span>Chia (/)</span>
      </label>
      <br />
      <button className="calcBtn" onClick={handleClick}>
        Calculate
      </button>
      <br />
      <span className="result">Result is: {result}</span>
    </div>
  );
}
