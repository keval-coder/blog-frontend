import axios from "axios";

export const AxiosRequest = axios.create({
  baseURL: "https://blog-backend-blond-six.vercel.app/api/",
  withCredentials: true,
});
