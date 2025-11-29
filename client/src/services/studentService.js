import api from "./api";

export const getMyGrades = () => api.get("/student/my-grades");
export const getAvailableCourses = () => api.get("/student/available-courses");
export const enrollCourse = (courseId) =>
  api.post(`/student/enroll/${courseId}`);
