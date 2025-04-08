import React from "react";
import Overview from "../../components/Overview/Overview";
import DetailedReport from "../../components/DetailedReport/DetailedReport";

function DashBoard() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <img
            src="../src/assets/imgs/menu-dashboard.png"
            alt="dashboard-img"
          />
          <span className="text-xl font-bold">Overview</span>
        </div>
        <div className="">
          <Overview />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <img src="../src/assets/imgs/menu-file.png" alt="file-img" />
          <span className="text-xl font-bold">Detailed report</span>
        </div>
        <div className="">
          <DetailedReport />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
