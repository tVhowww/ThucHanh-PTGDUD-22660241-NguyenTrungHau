import { useState, useEffect } from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[200px] h-[310px] bg-[#fff] font-semibold cursor-pointer">
        <img
          className="rounded-[5px]"
          height="200px"
          width="200px"
          src={props.image}
          alt={props.name}
        />
        <br />
        <div className="flex items-center justify-center w-[100%] py-0 px-5">
          <span className="text-[20px] text-[#000] text-left">
            {props.name}
          </span>
          <button className="item-save-btn">Save</button>
        </div>
        <span className="item-time">{props.time} minutes</span>
      </div>
    </>
  );
}
