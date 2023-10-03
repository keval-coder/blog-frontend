import axios from "axios";

export const AxiosRequest = axios.create({
  baseURL: "https://blog-backend-orcin.vercel.app/api/",
});
