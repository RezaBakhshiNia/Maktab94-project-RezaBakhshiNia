import axios from "axios";

const publicApiServices = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your backend URL
  // Other Axios configurations if needed
});

export default publicApiServices;