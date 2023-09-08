import axios from "axios";
import Cookies from "js-cookie";

const publicApiServices = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your backend URL
  // Other Axios configurations if needed
});

const refreshAccessToken = async () => {
  try {
    console.log(Cookies.get("refreshToken"));
    const response = await publicApiServices.post("/api/auth/token", {
      refresh_token: Cookies.get("refreshToken"),
    });
    const { access_token } = response.data;
    // Update the access token in your Axios instance
    publicApiServices.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${access_token}`;
    return access_token;
  } catch (error) {
    // Handle error while refreshing access token
    throw new Error("Failed to refresh access token");
  }
};

publicApiServices.interceptors.response.use(
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
        return publicApiServices(originalRequest);
      } catch (error) /* eslint-disable-line no-unused-vars */ {
        // Ignored for ESLint
      }
    }
    return Promise.reject(error);
  }
);

publicApiServices.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default publicApiServices;
