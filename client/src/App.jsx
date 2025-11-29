import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas Públicas
import LandingPage from './pages/LandingPage';
import CareerDetails from './pages/CareerDetails'; // IMPORTAR PÁGINA DE DETALLE
import Login from './pages/Login';
import Register from './pages/Register';
import Unauthorized from './pages/Unauthorized';

// Páginas Admin
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCourses from './pages/admin/ManageCourses';
import ManageStudents from './pages/admin/ManageStudents';

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
          {/* Ruta Raíz: Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Ruta Dinámica para Detalle de Carreras */}
          {/* :id captura 'software', 'rrhh', etc. */}
          <Route path="/career/:id" element={<CareerDetails />} />

          {/* Rutas Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Rutas Protegidas - ADMIN */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/courses" element={<ManageCourses />} />
            <Route path="/admin/students" element={<ManageStudents />} />
          </Route>

          {/* Rutas Protegidas - STUDENT */}
          <Route element={<ProtectedRoute allowedRoles={['STUDENT']} />}>
            <Route path="/student" element={<StudentHome />} />
            <Route path="/student/enroll" element={<Enrollments />} />
          </Route>

          {/* Fallback para rutas no existentes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;