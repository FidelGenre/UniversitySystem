import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth(); // Usamos el contexto en lugar de localStorage directo

  // Ojo: Si el contexto aún carga (refresh), podrías mostrar un Loading...
  const token = localStorage.getItem('token'); 

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Verifica roles (asegúrate que 'user' esté poblado en el Context)
  if (user && allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
