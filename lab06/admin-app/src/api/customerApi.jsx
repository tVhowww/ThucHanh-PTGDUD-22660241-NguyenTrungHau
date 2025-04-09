import api from "./axiosConfig";

const customerApi = {
  getAll: () => api.get("/customers").then((res) => res.data),

  getById: (id) => api.get(`/customers/${id}`).then((res) => res.data),

  update: (id, data) =>
    api.put(`/customers/${id}`, data).then((res) => res.data),

  create: (data) => api.post("/customers", data).then((res) => res.data),

  delete: (id) => api.delete(`/customers/${id}`).then((res) => res.data),
};

export default customerApi;
