import React from "react";

export default function HelloUser() {
  return (
    <div>
      <h1>Lab 01</h1>
      <input id="input" type="text" />
      <br />
      <button
        onClick={() => {
          document.getElementById("name").innerText =
            "Hello " + document.getElementById("input").value;
        }}
      >
        Click
      </button>
      <br />
      <span id="name"></span>
    </div>
  );
}
