import React, { useState } from "react";
import customerApi from "../../api/customerApi";

function AddModal({ toggle }) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "new",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setAvatarUrl("../src/assets/imgs/" + file.name);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // chuyển từ yyyy-MM-dd -> dd/MM/yyyy
  const convertToDisplayDateFormat = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.split("/").length > 1) return dateStr;
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, company, orderValue, orderDate } = formData;

    if (!name || !company || !orderValue || !orderDate || !avatarUrl) {
      alert("Vui lòng điền đầy đủ các trường và chọn ảnh đại diện!");
      return;
    }

    try {
      const customers = await customerApi.getAll();
      const maxId = customers.reduce((max, item) => Math.max(max, item.id), 0);

      const newCustomer = {
        id: String(maxId + 1),
        ...formData,
        avatar: avatarUrl,
        orderDate: convertToDisplayDateFormat(formData.orderDate),
      };

      await customerApi.create(newCustomer);
      alert("Thêm khách hàng thành công!");
      toggle();
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Lỗi khi thêm khách hàng!");
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={toggle}
      >
        <div
          className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-6">Add Customer</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Avatar Upload + Preview */}
            <div className="md:col-span-2 flex items-center gap-6">
              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-20 h-20 object-cover rounded-full border"
                />
              )}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Avatar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#f44b87] file:text-white
                    hover:file:bg-[#e63972]"
                />
              </div>
            </div>

            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="orderValue"
                className="block text-sm font-medium text-gray-700"
              >
                Order Value
              </label>
              <input
                type="text"
                id="orderValue"
                value={formData.orderValue}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="orderDate"
                className="block text-sm font-medium text-gray-700"
              >
                Order Date
              </label>
              <input
                type="date"
                id="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="new">New</option>
                <option value="in_progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="md:col-span-2 w-full">
              <button
                type="submit"
                className="!w-full bg-[#f44b87] text-white py-2 rounded-md hover:bg-[#e63972]"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
