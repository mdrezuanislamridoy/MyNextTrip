import axios from "axios";

const backendURL = "https://my-next-trip-eight.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
