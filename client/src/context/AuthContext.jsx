import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Restaurar sesión al recargar página
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');
    if (token) setUser({ username, role });
  }, []);

  const loginUser = (userData) => {
    setUser({ username: userData.username, role: userData.role });
    if (userData.role === 'ADMIN') navigate('/admin');
    else navigate('/student');
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
