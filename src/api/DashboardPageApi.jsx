import axios from "axios";

export const DashboardPageApi = async () => {
  const response = await axios.get("/api/admin/fetchinsights");
  return response;
};
