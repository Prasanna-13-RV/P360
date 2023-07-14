import axios from "axios";

export const getStudentsCompetitive = async () => {
  return await axios.get("http://localhost:8080/api/studentscompetitive");
};

export const getStudents = async () => {
  return await axios.get("http://localhost:8080/api/students");
};

// export const postEvent = async (title, start_time, end_time) => {
//   return await axios.post("http://localhost:8080/api/events", {
//     title,
//     start_time,
//     end_time,
//   });
// };
