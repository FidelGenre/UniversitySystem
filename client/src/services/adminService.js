import api from "./api";

export const getAllCourses = () => api.get("/admin/courses");
export const createCourse = (course) => api.post("/admin/courses", course);
export const getAllStudents = () => api.get("/admin/students"); // Necesitas crear este endpoint en Backend
export const updateGrade = (enrollmentId, grade) =>
  api.put(`/admin/grades/${enrollmentId}`, { grade });
