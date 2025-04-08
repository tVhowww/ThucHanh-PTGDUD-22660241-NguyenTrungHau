import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DetailedReport.css";
import EditModal from "../Modal/EditModal";

export default function DetailedReport() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleSaveCustomer = (updatedCustomer) => {
    const updatedList = customers.map((c) =>
      c.id === updatedCustomer.id ? updatedCustomer : c
    );
    setCustomers(updatedList);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await import("../../data/data.json");
        setCustomers(res.default.customers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const statusBodyTemplate = (rowData) => {
    const statusClass = {
      in_progress: "!bg-yellow-100 !text-yellow-800",
      new: "!bg-blue-100 !text-blue-800",
      completed: "!bg-green-100 !text-green-800",
    };

    return (
      <span
        className={`!px-3 !py-1 !rounded-full !text-sm !font-semibold ${
          statusClass[rowData.status.toLowerCase()] ||
          "!bg-gray-200 !text-gray-700"
        }`}
      >
        {rowData.status === "in_progress"
          ? "In-progress"
          : rowData.status === "new"
          ? "New"
          : rowData.status === "completed"
          ? "Completed"
          : ""}
      </span>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center justify-start gap-2">
        <img
          src={rowData.avatar}
          alt={rowData.name}
          className=" rounded-full object-cover"
        />
        <span>{rowData.name}</span>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <button
        onClick={() => setEditingCustomer(rowData)}
        className="cursor-pointer hover:bg-amber-50 px-4 py-2 rounded-sm duration-200"
      >
        <img src="../src/assets/imgs/create.png" alt="edit" />
      </button>
    );
  };

  return (
    <div className="my-[1rem]">
      <DataTable
        value={customers}
        size="small"
        paginator
        paginatorLeft={
          <span className="text-sm text-[#333] ml-2">
            {customers.length} results
          </span>
        }
        rows={6}
        selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedCustomers(e.value)}
        dataKey="id"
        // rowsPerPageOptions={[6, 10, 25, 50]}
        tableStyle={{
          minWidth: "50rem",
          border: "1px solid #eee",
        }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
          exportable={false}
          style={{ textAlign: "center", paddingInline: "30px" }}
        ></Column>
        <Column
          field="name"
          header="CUSTOMER NAME"
          body={nameBodyTemplate}
          style={{
            width: "25%",
            fontWeight: "bold",
          }}
          headerClassName=" header-custom "
        ></Column>

        <Column
          field="company"
          header="COMPANY"
          style={{ width: "25%", textAlign: "left" }}
          headerClassName=" header-custom"
        ></Column>

        <Column
          field="orderValue"
          header="ORDER VALUE"
          style={{ width: "20%", textAlign: "left" }}
          headerClassName=" header-custom"
        ></Column>

        <Column
          field="orderDate"
          header="ORDER DATE"
          style={{ width: "15%", textAlign: "left" }}
          headerClassName=" header-custom"
        ></Column>

        <Column
          field="status"
          header="STATUS"
          body={statusBodyTemplate}
          style={{
            width: "25%",
          }}
          headerClassName="center-header header-custom"
        ></Column>

        <Column
          header="ACTIONS"
          body={actionBodyTemplate}
          style={{ width: "10%", textAlign: "center" }}
          headerClassName="header-custom"
          headerStyle={{ color: "transparent" }}
        />
      </DataTable>
      {editingCustomer && (
        <EditModal
          customer={editingCustomer}
          onClose={() => setEditingCustomer(null)}
          onSave={handleSaveCustomer}
        />
      )}
    </div>
  );
}
