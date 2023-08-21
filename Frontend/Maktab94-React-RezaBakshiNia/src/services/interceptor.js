import axios from "axios";
import Cookies from 'js-cookie';

const adminApiServices = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your backend URL
  // Other Axios configurations if needed
});

// Function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
  try {
    const response = await adminApiServices.post("/api/auth/token", {
      refresh_token: Cookies.get('refreshToken'),
    });
    const { access_token } = response.data;
    // Update the access token in your Axios instance
    adminApiServices.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${access_token}`;
    return access_token;
  } catch (error) {
    // Handle error while refreshing access token
    throw new Error("Failed to refresh access token");
  }
};

// Axios interceptor to automatically refresh the access token when it expires
adminApiServices.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 && // Unauthorized error
      !originalRequest._retry // Ensure refresh token request doesn't cause an endless loop
    ) {
      originalRequest._retry = true; // Mark the request as retried
      try {
        const access_token = await refreshAccessToken();
        // Retry the original request with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
        return adminApiServices(originalRequest);
      } catch (error) /* eslint-disable-line no-unused-vars */ {
        // Ignored for ESLint
      }
    }
    return Promise.reject(error);
  }
);

export default adminApiServices;
