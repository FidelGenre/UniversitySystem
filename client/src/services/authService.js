import api from "./api";

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("username", credentials.username);
  }
  return response.data;
};

export const register = (userData) => api.post("/auth/register", userData);
export const logout = () => localStorage.clear();
