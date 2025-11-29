import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Tu URL de Spring Boot
});

// Interceptor: Agrega el Token a cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
