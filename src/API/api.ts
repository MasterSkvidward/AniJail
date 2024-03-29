import axios from "axios";
import { API_ENDPOINTS } from "./api-endpoints";

export const PUBLIC_URL = process.env.PUBLIC_URL + "/server";
export const API_URL = "https://api.jikan.moe/v4";

const $api = axios.create({
   //   withCredentials: true,
   baseURL: API_URL,
});

export const $public_server = axios.create({
   //   withCredentials: true,
   baseURL: PUBLIC_URL,
});

// $api.interceptors.response.use((config) => {
// //   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
// config.headers["X-Frame-options"] = "Sameorigin";
// //   config.headers["ngrok-skip-browser-warning"] = true;
//   return config;
// });

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response?.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(
//           `${API_URL}/${API_ENDPOINTS.REFRESH_TOKEN}`,
//           { withCredentials: true }
//         );
//         localStorage.setItem("token", response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log(e);
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export default $api;
