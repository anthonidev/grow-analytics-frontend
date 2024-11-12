import axios from "axios";

export default axios.create({
  baseURL: process.env.AUTH_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
