import React from "react";

export default function Button({ children, ...attributes }) {
  if (attributes.primary) {
    attributes.style = { backgroundColor: "blue" };
  }
  if (attributes.secondary) {
    attributes.style = { backgroundColor: "gray" };
  }
  if (attributes.success) {
    attributes.style = { backgroundColor: "green" };
  }
  if (attributes.danger) {
    attributes.style = { backgroundColor: "red" };
  }
  if (attributes.warning) {
    attributes.style = { backgroundColor: "yellow", color: "black" };
  }
  if (attributes.info) {
    attributes.style = { backgroundColor: "lightblue", color: "black" };
  }
  if (attributes.light) {
    attributes.style = { backgroundColor: "white", color: "black" };
  }

  return (
    <div>
      <button {...attributes}>{children}</button>
    </div>
  );
}
