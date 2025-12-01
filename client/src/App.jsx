import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas Públicas
import LandingPage from './pages/LandingPage';
import CareerDetails from './pages/CareerDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Unauthorized from './pages/Unauthorized';

// Páginas Admin
import AdminDashboard from './pages/admin/AdminDashboard';
// NOTA: Ya no necesitamos importar ManageCourses/ManageStudents aquí 
// porque los maneja AdminDashboard internamente.

// Páginas Student
import StudentHome from './pages/student/StudentHome';
import Enrollments from './pages/student/Enrollments';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrap">
        <Routes>
          {/* Ruta Raíz */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/career/:id" element={<CareerDetails />} />

          {/* Rutas Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Rutas Protegidas - ADMIN */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            {/* CAMBIO CLAVE: Usamos '/*' para que AdminDashboard maneje sub-rutas */}
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Route>

          {/* Rutas Protegidas - STUDENT */}
          <Route element={<ProtectedRoute allowedRoles={['STUDENT']} />}>
            <Route path="/student" element={<StudentHome />} />
            <Route path="/student/enroll" element={<Enrollments />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;