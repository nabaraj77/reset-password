import axios from "axios";

export const axiosData = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "text/plain",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
