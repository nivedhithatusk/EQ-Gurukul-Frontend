import axios from "axios";

export const AdminLoginApi = async ({ username, password }) => {
  const response = await axios.post("/api/admin/auth/login", { username, password });
  return response;
};
