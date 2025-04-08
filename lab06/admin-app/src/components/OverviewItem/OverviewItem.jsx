import React from "react";

function OverviewItem(overviewItem) {
  return (
    <div>
      <div
        className={`flex flex-col items-start gap-2 p-4 w-[300px] rounded-sm relative `}
        style={{ backgroundColor: overviewItem.bgColor }}
      >
        <div className="text-sm font-bold">{overviewItem.title}</div>
        <div className="text-2xl font-extrabold">{overviewItem.value}</div>
        <div className="flex gap-1">
          <div
            className="flex items-center"
            style={{
              color: overviewItem.color === "success" ? "green" : "red",
            }}
          >
            <span className="text-[8px] mr-[2px]">▲</span>
            <span>{overviewItem.percentage}</span>
          </div>
          <span className="text-gray-600">period of change</span>
        </div>
        <img
          src={overviewItem.icon}
          alt={overviewItem.icon}
          className="absolute right-2 top-2 w-[40px]"
        />
      </div>
    </div>
  );
}

export default OverviewItem;
