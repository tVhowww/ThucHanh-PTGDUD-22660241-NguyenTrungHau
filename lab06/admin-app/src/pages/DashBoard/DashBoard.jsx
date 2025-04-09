import React, { useState } from "react";
import Overview from "../../components/Overview/Overview";
import DetailedReport from "../../components/DetailedReport/DetailedReport";
import AddModal from "../../components/Modal/AddModal";

function DashBoard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

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
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="../src/assets/imgs/menu-file.png" alt="file-img" />
            <span className="text-xl font-bold">Detailed report</span>
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="rounded-md border-1 px-4 py-2 !border-[#f44b87] !text-[#f44b87] !bg-white
            hover:!bg-[#f44b87] hover:!text-white duration-200 cursor-pointer !shadow-sm"
              onClick={toggleAddModal}
            >
              + Add Customer
            </button>
          </div>
        </div>
        <div className="">
          <DetailedReport />
        </div>
      </div>

      {isAddModalOpen && <AddModal toggle={toggleAddModal} />}
    </div>
  );
}

export default DashBoard;
