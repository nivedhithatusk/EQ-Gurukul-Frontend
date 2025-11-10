import axios from "axios";

export const FormsDataApi = async ({ formsdata }) => {
  const response = await axios.post("/api/admin/fetchdata", { formsdata });
  return response;
};
