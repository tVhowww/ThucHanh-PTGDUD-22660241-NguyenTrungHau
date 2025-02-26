import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [results, setResults] = useState([]);

  function handleClick() {
    setShowTable(true);

    let currentValue = parseFloat(input);
    let rateValue = parseFloat(rate) / 100;
    let goalValue = parseFloat(goal);

    if (isNaN(currentValue) || isNaN(rateValue) || isNaN(goalValue)) {
      alert("Vui lòng nhập số hợp lệ!");
      setInput("");
      setRate("");
      setGoal("");
      return;
    }

    let tempResults = [];
    let year = new Date().getFullYear();

    while (currentValue < goalValue) {
      tempResults.push({
        year: year,
        value: parseFloat(input).toFixed(2),
        rate: (rateValue * 100).toFixed(2) + "%",
        amount: currentValue.toFixed(2),
      });
      year++;
      currentValue += currentValue * rateValue;
    }

    setResults(tempResults);
  }

  return (
    <div className="investment-calculator">
      <h1 className="title">Investment Calculator</h1>
      <div className="input-group">
        <label className="input-label">Input your invest money:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Input rate:</label>
        <input
          type="text"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Input your goal:</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={handleClick} className="calculate-button">
        Calculate
      </button>

      {showTable && (
        <div className="results-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Money</th>
                <th>Rate</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{result.year}</td>
                  <td>{result.input}</td>
                  <td>{result.rate}</td>
                  <td>{result.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
