import { useState, useEffect } from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <>
      <div className="item">
        <img
          className="item-img"
          height="200px"
          width="200px"
          src={props.image}
          alt={props.name}
        />
        <br />
        <div className="item-content">
          <span className="item-text">{props.name}</span>
          <button className="item-save-btn">Save</button>
        </div>
        <span className="item-time">{props.time} minutes</span>
      </div>
    </>
  );
}
