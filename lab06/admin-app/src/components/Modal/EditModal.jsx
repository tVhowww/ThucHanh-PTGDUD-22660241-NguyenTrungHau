import React, { useState, useEffect } from "react";
import customerApi from "../../api/customerApi";

export default function EditModal({ customer, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    avatar: "",
    status: "",
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || "",
        company: customer.company || "",
        orderValue: customer.orderValue || "",
        orderDate: customer.orderDate || "",
        avatar: customer.avatar || "",
        status: customer.status || "",
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "orderDate") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        orderDateDisplay: convertToDisplayDateFormat(value),
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // chuyển từ yyyy-MM-dd -> dd/MM/yyyy
  const convertToDisplayDateFormat = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.split("/").length > 1) return dateStr;
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSave = async () => {
    try {
      const updatedCustomer = await customerApi.update(customer.id, {
        ...formData,
        orderDate: convertToDisplayDateFormat(formData.orderDate),
      });

      onSave(updatedCustomer);
      onClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      alert("Đã xảy ra lỗi khi cập nhật khách hàng!");
    }
  };

  if (!customer) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
          <img src={formData.avatar} alt="avt" width={"50px"} />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Company:
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </div>

        {/* Order Value */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Order Value:
          </label>
          <input
            type="text"
            name="orderValue"
            value={formData.orderValue}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </div>

        {/* Order Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Order Date:
          </label>
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Status:
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          >
            {/* <option value="">-- Select Status --</option> */}
            <option value="new">New</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="!cursor-pointer !px-4 !py-2 !bg-gray-300 !rounded !hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="!cursor-pointer !px-4 !py-2 !bg-blue-500 !text-white rounded !hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
